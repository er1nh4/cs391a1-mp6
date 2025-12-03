"use client";
import GetGoogleLogin from "@/utils/GetGoogleLogin";

export default function Login() {
    return (
        <div className="flex flex-col items-center w-full h-screen">
            <main className="flex flex-col items-center justify-center pt-20 p-3">
                <div className="bg-blue-100 w-full rounded-xl p-5 max-w-screen shadow-lg shadow-blue-800">
                    <div className="text-center space-y-2 flex flex-col items-center">
                        <h1 className="text-stone-600 text-3xl font-bold tracking-tight">OAuth Demo</h1>
                        <p className="text-stone-500 w-96 text-center">Sign into Google Below!</p>
                        <GetGoogleLogin/>
                    </div>
                </div>
            </main>
        </div>
    )
}