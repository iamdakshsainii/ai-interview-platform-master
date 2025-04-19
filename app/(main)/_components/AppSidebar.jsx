import React from 'react'
import Image from 'next/image'
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"

  export function AppSidebar() {
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
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
