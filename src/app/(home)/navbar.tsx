"use client"

import { Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MenuIcon } from "lucide-react"
import { MobileNav } from "./mobile-nav"

interface NavbarItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
})

const navItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
]

export const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn(poppins.className, "text-4xl font-bold")}>
          funroad
        </span>
      </Link>
      <MobileNav items={navItems} open={open} onOpenChange={setOpen} />
      <div className="items-center gap-4 hidden lg:flex">
        {navItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={item.href === pathname}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
      <div className="lg:hidden flex items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
