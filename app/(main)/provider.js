import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import WelcomeContainer from '@/app/(main)/dashboard/_components/WelcomeContainer'

// route ready for dashboard page
function DashboardProvider({children}) {
  return (
    <SidebarProvider>
        <AppSidebar/>
     <div className='w-full p-10'>
        {/* <SidebarTrigger/> */}
        <WelcomeContainer />
        {children}
    </div>
    </SidebarProvider>

  )
}

export default DashboardProvider
