import {
    LayoutDashboard,
    CalendarDays,
    Users,
    CreditCard,
    SlidersHorizontal,
  } from "lucide-react";

  export const SidebarOptions = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Scheduled Interviews",
      icon: CalendarDays,
      path: "/scheduled-interview",
    },
    {
      name: "All Interviews",
      icon: Users,
      path: "/all-interview",
    },
    {
      name: "Billing",
      icon: CreditCard,
      path: "/billing",
    },
    {
      name: "Settings",
      icon: SlidersHorizontal,
      path: "/settings",
    },
  ];
