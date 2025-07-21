import { 
  Package, 
  GitBranch, 
  Wrench, 
  Clock, 
  Star, 
  Settings, 
  HelpCircle, 
  LogOut
} from "lucide-react";

interface NavigationSidebarProps {
  isOpen: boolean;
  currentView: string;
  setCurrentView: (view: string) => void;
  setSelectedTask: (task: string | null) => void;
  setSelectedOption: (option: string | null) => void;
}

export function NavigationSidebar({ 
  isOpen, 
  currentView, 
  setCurrentView, 
  setSelectedTask, 
  setSelectedOption 
}: NavigationSidebarProps) {
  const navigationItems = [
    { icon: Package, label: "Packager Tasks", active: currentView === "packager-tasks", id: "packager-tasks" },
    { icon: GitBranch, label: "DevOps Tasks", active: currentView === "devops-tasks", id: "devops-tasks" },
    { icon: Wrench, label: "Tools", active: currentView === "tools", id: "tools" },
    { icon: Clock, label: "Recent", active: currentView === "recent", id: "recent" },
    { icon: Star, label: "Favourites", active: currentView === "favourites", id: "favourites" },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings", shortcut: null },
    { icon: HelpCircle, label: "Help", shortcut: null },
    { icon: LogOut, label: "Quit", shortcut: "Alt+A" },
  ];

  const handleNavItemClick = (itemId: string) => {
    setCurrentView(itemId);
    setSelectedTask(null);
    setSelectedOption(null);
  };

  if (!isOpen) return null;

  return (
    <div className="w-48 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Navigation Items */}
      <div className="flex-1 py-4">
        <div className="px-3 space-y-1">
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded cursor-pointer transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              onClick={() => handleNavItemClick(item.id)}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Settings, Help, Quit */}
      <div className="border-t border-sidebar-border py-4">
        <div className="px-3 space-y-1">
          {bottomItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </div>
              {item.shortcut && (
                <span className="text-xs text-muted-foreground">{item.shortcut}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}