"use client"
import React from 'react'
import Image from 'next/image'
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SidebarOptions } from "@/services/Constants"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"


  export function AppSidebar() {

    const path=usePathname();


    return (
      <Sidebar>
       <SidebarHeader className="pl-2 mt-0 flex item-center justify-center">
    <Image
      src="/logo.png"
      alt="Logo"
      width={200}
      height={100}
      className="w-[130px] ml-14 mt-1 mb-0"
    />
   <Button className={'w-full mt-4'}><Plus/> Create new Interview</Button>
</SidebarHeader>


        <SidebarContent>
          <SidebarGroup>
             <SidebarContent>
                <SidebarMenu>
                    {SidebarOptions?.map((option,index) => (
                          <SidebarMenuItem key={index} className='p-1'>
                            <SidebarMenuButton asChild className={`p-5 ${path == option.path && 'bg-blue-50'}`}>
                                 <Link href={option.path} >
                                     <option.icon className={`${path == option.path && 'text-primary'}`}/>
                                     <span className={`text-[16px] font-medium ${path == option.path && 'text-primary'}`}>{option.name}</span>
                                 </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                    ))}
                </SidebarMenu>
             </SidebarContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
