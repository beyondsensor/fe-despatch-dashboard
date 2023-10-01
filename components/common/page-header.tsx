import { Home } from "lucide-react"

export function PageHeader({ title, description }: { title: string, description : string  }) {
  return (
    <div className="flex max-w-[1080px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl flex items-center gap-3">
        <span> <Home className="h-8 w-8 text-primary"/> </span> {title}
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        { description}
      </p>
    </div>
  )
}
