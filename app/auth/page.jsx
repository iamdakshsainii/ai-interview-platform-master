'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { supabase } from '../../services/supabaseClient';

export default function Login() {

//   for sign in with google
const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) console.error('Google Sign-In Error:', error.message);
    } catch (err) {
      console.error('OAuth Error:', err);
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center border rounded-2xl p-8 shadow-lg w-[430px] space-y-4">

        {/* Illustration */}
        <div className="w-full flex justify-center rounded-2xl">
          <Image
            src="/login.png"
            alt="login"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold">Welcome to SmartHire</h2>
          <p className="text-gray-500 text-sm">Sign In With Google Authentication</p>
        </div>

        {/* Button */}
        <Button className="w-full mt-7" onClick={signInWithGoogle}>
  Login with Google
</Button>

      </div>
    </div>
  );
}
