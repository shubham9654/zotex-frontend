import { svgAssets } from "../assets/image";

export const sidebarData = [
  {
    name: "Dashboard",
    route: "/",
    icon: svgAssets.sidebar.dashboard,
    selectedIcon: svgAssets.sidebar.dashboardSelected,
  },
  {
    name: "Start",
    route: "/kyc",
    icon: svgAssets.sidebar.startKyc,
    selectedIcon: svgAssets.sidebar.startKycSelected,
  },
  {
    name: "Applications",
    route: "/application",
    icon: svgAssets.sidebar.application,
    selectedIcon: svgAssets.sidebar.applicationSelected,
    nestedRoutes: [
      {
        name: "All Applications",
        route: "/all",
      },
      {
        name: "Verified Applications",
        route: "/verified",
      },
      {
        name: "Rejected Applications",
        route: "/rejected",
      },
      {
        name: "Pending Applications",
        route: "/pending",
      },
      {
        name: "Resubmitted",
        route: "/resubmitted",
      },
    ],
  },
  {
    name: "Account List",
    route: "/account-list",
    icon: svgAssets.sidebar.accountList,
    selectedIcon: svgAssets.sidebar.accountListSelected,
  },
  {
    name: "User List",
    route: "/user-list",
    icon: svgAssets.sidebar.userList,
    selectedIcon: svgAssets.sidebar.userListSelected,
  },
  {
    name: "Settings",
    route: "/settings",
    icon: svgAssets.sidebar.setting,
    selectedIcon: svgAssets.sidebar.settingSelected,
  },
  {
    name: "Logout",
    route: "/logout",
    icon: svgAssets.sidebar.logout,
    selectedIcon: svgAssets.sidebar.logoutSelected,
  },
];
