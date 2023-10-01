"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"


export function SignupForm() {
  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    displayName: z.string(),
    email: z.string(),
    password: z.string(),
    dateOfBirth: z.date()
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  function onSubmit ( values : z.infer<typeof formSchema>) { 
    console.log(values)
  }

  return ( 
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-3">
        <div className="space-y-3">
        
        
        
        </div>
        <Button type="submit" className="w-full mt-3">Sign Up</Button>
      </form>
    </Form>
  )

}

export function SignInForm() {

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
      message: "Password needs to be at least 8 characters"
    })
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-3">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address </FormLabel>
                <FormControl>
                  <Input placeholder="enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-3">Sign In</Button>
      </form>
    </Form>
  )
}