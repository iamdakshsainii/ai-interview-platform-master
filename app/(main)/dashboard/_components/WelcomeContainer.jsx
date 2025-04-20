"use client"
import React from 'react'
import { useUser } from '@/app/provider'

function WelcomeContainer() {
    const { user } = useUser();

    if (!user) return <p>Loading user...</p>; // <- Optional loading UI

    return (
        <div>
            <h2>Welcome back, {user.name}</h2>
        </div>
    )
}

export default WelcomeContainer
