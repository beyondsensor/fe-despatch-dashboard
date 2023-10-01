

export function PageContainer ( { children } : { children : React.ReactNode }) { 
    return ( 
        <section className="max-w-[900px] grid items-center gap-6 pb-8 pt-6 md:py-10 justify-center">
            { children }
        </section>
    )
}