"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { supabase } from "@/services/supabaseClient";
import React, { useState, useEffect, useContext } from "react";

function Provider({ children }) {
    const [user, setUser] = useState(null); // Correctly use useState here
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {
        const CreateNewUser = async () => {
            try {
                // Fetch user from Supabase
                const { data: { user }, error: userErr } = await supabase.auth.getUser();
                if (userErr) throw new Error(userErr.message); // Handle error if any

                console.log("User from Supabase:", user);

                if (!user) {
                    console.log("❌ No user signed in");
                    setLoading(false);
                    return;
                }

                // Check if user exists in the database
                const { data: Users, error: fetchErr } = await supabase
                    .from("Users")
                    .select("*")
                    .eq("email", user.email);

                if (fetchErr) throw new Error(fetchErr.message); // Handle error if any
                console.log("Users in DB:", Users);

                if (Users?.length === 0) {
                    // Insert new user if not found
                    const { data: insertData, error: insertErr } = await supabase
                        .from("Users")
                        .insert([
                            {
                                name: user?.user_metadata.name,
                                email: user?.email,
                                picture: user?.user_metadata.picture,
                            },
                        ]);

                    if (insertErr) throw new Error(insertErr.message); // Handle error if any
                    console.log(insertData);
                    setUser(insertData[0]); // Set the user state
                } else {
                    // User found, set user data
                    setUser(Users[0]);
                }
            } catch (error) {
                console.error("Error:", error);
                setUser(null); // Reset user in case of error
            } finally {
                setLoading(false); // Loading done
            }
        };

        CreateNewUser();
    }, []); // Empty dependency array to run once on component mount

    if (loading) {
        return <div>Loading...</div>; // Show loading state if still fetching
    }

    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    );
}

export default Provider;

export const useUser = () => {
    const context = useContext(UserDetailContext);
    if (!context) {
        throw new Error("useUser must be used within a UserDetailContext.Provider");
    }
    return context;
};
