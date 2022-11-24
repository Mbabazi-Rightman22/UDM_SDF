import Dashboard from "../pages/dashboard/Dashboard";
import Interactive from "../pages/dashboard/Interactive";


const sidebarItems = [
  
  {
    id: "dashboard",
      link: "/dashboard",
      name: "Dashboard",
      component: <Dashboard />,
    },
  {
	id: "interactive",
    link: "/interactive",
    name: "Interactive Web",
    component: <Interactive />,
  },
 
];

export default sidebarItems;
