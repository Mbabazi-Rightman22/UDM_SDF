import Dashboard from "../pages/dashboard/Dashboard";
import Interactive from "../pages/dashboard/Interactive";


const sidebarItems = [
  
  {
    id: "Dashboard",
      link: "/Dashboard",
      name: "Dashboard",
      component: <Dashboard />,
    },
  {
	id: "city",
    link: "/interactive",
    name: "interactive",
    component: <Interactive />,
  },
 
];

export default sidebarItems;
