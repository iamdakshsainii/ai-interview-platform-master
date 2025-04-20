"use client"
import React from 'react'
import DashboardProvider from './provider'
import Provider from './provider'

 const DashboardLayout = ({children}) => {
  return (
        <DashboardProvider>
            <div className='w-full'>
            {children}
            </div>
        </DashboardProvider>
  )
}
export default DashboardLayout
