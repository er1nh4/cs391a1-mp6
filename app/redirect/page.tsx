"use client";
import { useEffect, useState } from "react";
import type {GoogleUser} from "@/googleUser";

export default function RedirectPage() {
    // const [user, setUser] = useState<GoogleUser | null>(null);
    //
    // useEffect(() => {
    //     const hash = window.location.hash.substring(1);
    //     const params = new URLSearchParams(hash);
    //     const token = params.get("access_token");
    //
    //     if (!token) return;
    //
    //     fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    //         headers: { Authorization: `Bearer ${token}` },
    //     })
    //         .then((res) => res.json())
    //         .then((data: GoogleUser) => setUser(data));
    // }, []);
    //
    // if (!user) return <p>Loading...</p>;
    //
    // return (
    //     <main className="flex flex-col items-center gap-4 p-8">
    //         <h1 className="text-2xl font-bold">Wassap, {user.name}</h1>
    //         <p>Email: {user.email}</p>
    //         <p>Locale: {user.locale}</p>
    //     </main>
    // );
    return (
        <div className="flex flex-col items-center justify-center">
            <p>TEST</p>
        </div>
    );
}