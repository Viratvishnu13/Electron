import { Menu, Home, ChevronRight, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

interface ResponsiveHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentView: string;
  selectedTask: string | null;
  selectedOption: string | null;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function ResponsiveHeader({ 
  sidebarOpen, 
  setSidebarOpen, 
  currentView, 
  selectedTask, 
  selectedOption,
  isDarkMode,
  toggleTheme
}: ResponsiveHeaderProps) {
  const getViewDisplayName = (view: string) => {
    return view.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getTaskDisplayName = (task: string | null) => {
    if (!task) return null;
    return task.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const getOptionDisplayName = (option: string | null) => {
    if (!option) return null;
    const optionNames: { [key: string]: string } = {
      'ps1': 'PS1',
      'intunewin': 'IntuneWin',
      'psadt': 'PSAppDeployToolkit'
    };
    return optionNames[option] || option;
  };

  return (
    <header className="flex-shrink-0 bg-card border-b border-border">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-accent"
          >
            <Menu className="w-4 h-4" />
          </Button>
          <h1 className="text-sm font-medium text-foreground">PACE Suite</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hover:bg-accent"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </Button>
          
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="flex items-center px-4 py-1 text-sm border-b border-border bg-muted/50">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">File</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Edit</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">View</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Tools</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Help</span>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center px-4 py-2 text-sm bg-card">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Home className="w-4 h-4" />
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{getViewDisplayName(currentView)}</span>
          
          {selectedTask && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">{getTaskDisplayName(selectedTask)}</span>
            </>
          )}
          
          {selectedOption && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">{getOptionDisplayName(selectedOption)}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}