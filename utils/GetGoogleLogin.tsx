"use client";
import React from "react";

export default function GoogleLogin() {
    const handleLogin = () => {
        window.location.href = process.env.CLIENT_CONSENT as string;
    };

    return (
        <button
            onClick={handleLogin}
            className="flex justify-center w-full bg-blue-600 hover:bg-blue-500 px-5 p-2 rounded-4xl">
            Sign in with Google
        </button>
    );
}