import {
    LayoutDashboard,
    CalendarDays,
    Users,
    CreditCard,
    SlidersHorizontal,
    Code2Icon,
    User2Icon,
    BriefcaseBusinessIcon,
    Puzzle
  } from "lucide-react";

  // Sidebar options
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

  // Interview types (for Create Interview screen)
  export const InterviewType = [
    {
      title: "Technical",
      icon: Code2Icon,
    },
    {
      title: "Behavioral",
      icon: User2Icon,
    },
    {
      title: "Experience",
      icon: BriefcaseBusinessIcon,
    },
    {
      title: "Problem Solving",
      icon: Puzzle,
    },
  ];
