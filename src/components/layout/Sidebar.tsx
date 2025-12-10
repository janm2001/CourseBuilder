import { Home, LayoutDashboard } from "lucide-react";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  Sidebar as SidebarUi,
} from "../ui/sidebar";
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "New Course",
    url: "/course",
    icon: Home,
  },
];
const Sidebar = () => {
  return (
    <SidebarUi>
      <SidebarHeader>
        <h1 className="text-2xl font-bold">Course Builder</h1>
      </SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <SidebarMenu key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenu>
        ))}
      </SidebarContent>
    </SidebarUi>
  );
};

export default Sidebar;
