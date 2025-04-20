"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { supabase } from "@/services/supabaseClient";
import React, { useState, useEffect, useContext } from "react";

function Provider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        CreateNewUser();
    }, []);

    const CreateNewUser = async () => {
        const { data: userData, error: userError } = await supabase.auth.getUser();
        const user = userData?.user;

        if (userError || !user) {
            console.error("Error fetching user:", userError);
            setUser(null);
            return;
        }

        const { data: Users, error: fetchErr } = await supabase
            .from("Users")
            .select("*")
            .eq("email", user.email);

        if (fetchErr) {
            console.error("Error fetching users:", fetchErr);
            setUser(null);
            return;
        }

        if (Users?.length === 0) {
            const { data: insertData, error: insertErr } = await supabase
                .from("Users")
                .insert([
                    {
                        name: user.user_metadata?.name,
                        email: user.email,
                        picture: user.user_metadata?.picture,
                    }
                   

                ])
                .select(); // Return the inserted row

            if (insertErr) {
                console.error("Error inserting user:", insertErr);
                setUser(null);
                return;
            }

            setUser(insertData[0]); // Set new user data
        } else {
            setUser(Users[0]); // Use existing user
        }
    };

    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            {children}
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
