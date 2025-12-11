import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import Sidebar from "./Sidebar";
import { Toaster } from "sonner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full">
        {useIsMobile() && <SidebarTrigger />}
        {children}
        <Toaster />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
