import { useState } from "react";
import { ResponsiveHeader } from "./components/ResponsiveHeader";
import { ResponsiveSidebar } from "./components/ResponsiveSidebar";
import { ResponsiveMainContent } from "./components/ResponsiveMainContent";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      {/* Responsive Header */}
      <ResponsiveHeader 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Responsive Sidebar - Only shown on desktop */}
        <ResponsiveSidebar 
          isOpen={sidebarOpen} 
          collapsed={sidebarCollapsed}
        />

        {/* Main Content Area */}
        <ResponsiveMainContent />
      </div>
    </div>
  );
}