

function AuthenticationForm () { 
    return ( <div className="max-w-[400px] flex flex-col bg-primary-foreground w-[400px] h-[400px]"> 
        <p> User Name / Password </p>
        <p> Email</p>
    </div>)
}

export default function Page () { 
    return ( 
        <div className="h-screen bg-primary flex justify-center align-middle border shadow-xl"> 
            <AuthenticationForm /> 
        </div>
    )
}