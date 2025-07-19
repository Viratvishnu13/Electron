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

interface ResponsiveSidebarProps {
  isOpen: boolean;
  collapsed?: boolean;
}

export function ResponsiveSidebar({ isOpen, collapsed = false }: ResponsiveSidebarProps) {
  const navigationItems = [
    { icon: Package, label: "Packager Tasks", active: true },
    { icon: GitBranch, label: "DevOps Tasks", active: false },
    { icon: Wrench, label: "Tools", active: false },
    { icon: Clock, label: "Recent", active: false },
    { icon: Star, label: "Favourites", active: false },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings", shortcut: null },
    { icon: HelpCircle, label: "Help", shortcut: null },
    { icon: LogOut, label: "Quit", shortcut: "Alt+A" },
  ];

  if (!isOpen) return null;

  return (
    <div className={`${collapsed ? 'w-16' : 'w-48'} bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300 hidden lg:flex`}>
      {/* Navigation Items */}
      <div className="flex-1 py-4">
        <div className={`${collapsed ? 'px-1' : 'px-3'} space-y-1`}>
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 text-sm rounded cursor-pointer transition-colors ${
                item.active
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4">
        <div className={`${collapsed ? 'px-1' : 'px-3'} space-y-1`}>
          {bottomItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors ${
                collapsed ? 'justify-center' : ''
              }`}
              title={collapsed ? item.label : undefined}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </div>
              {!collapsed && item.shortcut && (
                <span className="text-xs text-gray-400">{item.shortcut}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}