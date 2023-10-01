import { Heading2, Heading3 } from "@/components/common/typography"
import { LoginForm } from "@/components/forms/auth-forms"
import Logo from "@/public/assets/main-logo.svg"
import Image from "next/image"

export default function Page () { 
    return ( 
        <div className="flex h-screen items-center justify-center"> 
            <div className="absolute w-[400px]
                            rounded-3xl border-2 shadow-lg"> 
                <div className="flex h-[150px] w-full items-center justify-center rounded-t-3xl bg-primary align-middle"> 
                    <Image src={Logo} alt="Logo" width={300} height={200}/> 
                </div>
                <Heading3 className="p-3"> Sign In to the Portal </Heading3>
                <LoginForm /> 
            </div>
        </div>
    )
}