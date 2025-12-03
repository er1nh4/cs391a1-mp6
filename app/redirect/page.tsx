"use client";
import {useEffect, useState} from "react";
import {GoogleUser} from "@/googleUser";

export default function Redirect() {
    const [user, setUser] = useState<GoogleUser>();

    // Get access token from URL hash
    const getAccessTokenFromHash = () => {
        const hash = window.location.hash.substring(1); // remove #
        const params = new URLSearchParams(hash);
        return params.get("access_token");
    };

    const fetchUserInfo = async (token: string) => {
        try {
            const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok)
                throw new Error("Failed to fetch user info");

            const data = await res.json();

            //Set user fields
            setUser({
                name: data.name,
                age: data.age,
                picture: data.picture,
                email: data.email,
            });
        } catch (err) {
            console.log("Failed to fetch user info", err);
        }
    };

    useEffect(() => {
        const token = getAccessTokenFromHash();
        if (token) {
            fetchUserInfo(token);

        } else {
            console.log("Access token not found. Please login again.");
        }
    }, []);

    if (!user) return <p>Cannot load user info :(</p>;

    return (
        <div className="flex flex-col items-center bg-red-50 p-4 h-screen">
            <div className="flex flex-col items-center justify-center bg-blue-100 w-1/2 rounded-xl p-5 max-w-screen">
                <h1 className="font-bold text-stone-600">Hello, {user.name}</h1>
                <img src={user.picture} alt="Profile"/>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
}


    // return (
    //     <div className="flex flex-col items-center bg-red-50 p-4 h-screen">
    //         <div className="bg-blue-100 w-1/2 rounded-xl p-5 max-w-screen">
    //
    //         </div>
    //     </div>
    // )
//}