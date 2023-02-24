'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import React from 'react'

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <Image 
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="chatgptlogo"
        />
        <button onClick={() => signIn('google')} className="text-white font-semibold italic text-3xl animate-pulse">
            Sign in to use Chat GPT
        </button>
    </div>
  )
}

export default Login