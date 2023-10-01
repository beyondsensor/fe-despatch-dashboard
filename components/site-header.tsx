"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { User, UserX } from "lucide-react"

export function SiteHeader() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex px-3 h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav onClick={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} onClick={toggleSidebar} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <Authentication />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}


function Authentication () { 
  return ( 
    <>
      <User class="bg-primary text-primary-foreground rounded-full h-7 w-7"/>
      <a href="/" className="text-sm"> Sign In </a>
    </>
  )
}

function MainNav(props: { onClick: () => void }) {
  const { onClick } = props
  return (
    <div className="flex gap-6 md:gap-10 p-3">
      <Link href="/" className="flex items-center space-x-2">
        <Button variant={"link"} onClick={() => onClick()}>
          <Icons.logo className="h-6 w-6" />
        </Button>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  )
}

function Sidebar(props: { isSidebarOpen: boolean; onClick: () => void }) {

  const { isSidebarOpen, onClick } = props

  return (
    <div
      className={`${
        isSidebarOpen ? "w-[340px]" : "w-0"
      }  bg-secondary border-primary shadow-sm h-full fixed top-0 left-0 transition-all duration-200 ease-in-out overflow-x-hidden`}
    >
      {/* Sidebar content goes here */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 md:gap-1 bg-primary text-primary-foreground p-3 items-center">
            <Button variant={"link"} onClick={() => onClick()} className="text-primary-foreground text-lg tracking-tighter gap-1">
              <Icons.logo />
            </Button>
        </div>
        <div className=" text-lg tracking-tight flex flex-col gap-6 px-3 w-auto bg-white">
            { 
              //TODO : Create a Side Menu to Manage the Logos 
            }
        </div>
        <div className="tracking-tight font-semibold flex flex-col gap-6 px-5 py-4 w-auto bg-white">
        </div>
      </div>
    </div>
  )
}


