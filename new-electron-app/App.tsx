import { useState, useEffect } from "react";
import { ResponsiveHeader } from "./components/ResponsiveHeader";
import { NavigationSidebar } from "./components/NavigationSidebar";
import { TasksColumn } from "./components/TasksColumn";
import { OptionsColumn } from "./components/OptionsColumn";
import { RecentFooter } from "./components/RecentFooter";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("packager-tasks");
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      {/* Responsive Header */}
      <ResponsiveHeader 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        currentView={currentView}
        selectedTask={selectedTask}
        selectedOption={selectedOption}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Column 1: Navigation Sidebar */}
        <NavigationSidebar 
          isOpen={sidebarOpen}
          currentView={currentView}
          setCurrentView={setCurrentView}
          setSelectedTask={setSelectedTask}
          setSelectedOption={setSelectedOption}
        />

        {/* Main Content Area with Tasks, Options, and Recent Footer */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex flex-1 overflow-hidden">
            {/* Column 2: Tasks/Content Column */}
            <TasksColumn
              currentView={currentView}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
              setSelectedOption={setSelectedOption}
            />

            {/* Column 3: Options Column */}
            <OptionsColumn
              currentView={currentView}
              selectedTask={selectedTask}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>

          {/* Recent Footer - Spans across Tasks and Options columns only */}
          <RecentFooter />
        </div>
      </div>
    </div>
  );
}