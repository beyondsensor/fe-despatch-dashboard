import { cn } from "@/lib/utils"

export function Heading1 ( { children } : { children : React.ReactNode } ) { 
    return ( 
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            { children }
        </h1>
    )
}

export function Heading2 ( { children } : { children : React.ReactNode } ) { 
    return ( 
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            { children }
        </h2>
    )
}

export function Heading3 ( { children, className } : { children : React.ReactNode, className? : string  } ) { 
    return ( 
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} >
            { children }
        </h3>
    )
}


export function Heading4 ( { children } : { children : React.ReactNode } ) { 
    return ( 
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            { children }
        </h3>
    )
}


export function TypographyP ( { children } : { children : React.ReactNode } ) { 
    return ( 
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            { children }
        </p>
    )
}

export function TypographyBlockquote() {
    return (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>
    )
  }

