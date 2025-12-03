"use client";
import React from "react";

export default function GoogleLogin() {
    const handleLogin = () => {
        window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?" +
            "scope=https%3A//www.googleapis.com/auth/userinfo.profile&" +
            "response_type=token&" +
            `redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}` + "&" +
            `client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`
    }
    return (
        <button
            onClick={handleLogin}
            className="flex justify-center w-full bg-blue-600 hover:bg-blue-500 px-5 p-2 rounded-4xl">
            Sign in with Google
        </button>
    );
}