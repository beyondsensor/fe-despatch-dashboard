"use client"
import { Heading2, Heading3 } from "@/components/common/typography"
import { LoginForm } from "@/components/forms/auth-forms"
import Logo from "@/public/assets/main-logo.svg"
import Image from "next/image"


export default function Page () { 
    return ( 
        <div className="flex items-center h-screen justify-center"> 
            <div className="absolute w-[400px]
                            border-2 rounded-3xl shadow-lg"> 
                <div className="w-full h-[200px] rounded-t-3xl bg-primary flex justify-center items-center align-middle"> 
                    <Image src={Logo} alt="Logo" width={300} height={200}/> 
                </div>
                <Heading3 className="p-3"> Sign In to the Portal </Heading3>
                <LoginForm /> 
            </div>
        </div>
    )
}