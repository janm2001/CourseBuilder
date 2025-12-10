import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <main>
        {useIsMobile() && <SidebarTrigger />}
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
