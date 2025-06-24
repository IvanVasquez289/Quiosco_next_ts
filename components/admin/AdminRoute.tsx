"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type AdminRouteProps = {
    link: {
        url: string,
        text: string,
        blank: boolean
    }
}
const AdminRoute = ({link}: AdminRouteProps) => {
  const path = usePathname()
  const isActive = path.startsWith(link.url)
  return (
    <Link 
        href={link.url}
        className={`font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b hover:bg-amber-500 transition-colors ${isActive && "bg-amber-500"}`}
        target={link.blank ? "_blank" : ""}
    >
        {link.text}
    </Link>
  )
}

export default AdminRoute