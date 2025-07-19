import { useState } from "react";
import { Switch } from "./ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { 
  Minimize,
  Maximize,
  X,
  Menu,
  Package, 
  GitBranch, 
  Wrench, 
  Clock, 
  Star, 
  Settings, 
  HelpCircle, 
  LogOut
} from "lucide-react";

interface ResponsiveHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function ResponsiveHeader({ sidebarOpen, setSidebarOpen }: ResponsiveHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-sm text-gray-700">Launcher</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-6 bg-gray-200 hover:bg-gray-300 flex items-center justify-center rounded">
            <Minimize className="w-3 h-3" />
          </button>
          <button className="w-8 h-6 bg-gray-200 hover:bg-gray-300 flex items-center justify-center rounded">
            <Maximize className="w-3 h-3" />
          </button>
          <button className="w-8 h-6 bg-red-500 hover:bg-red-600 flex items-center justify-center rounded text-white">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center gap-6">
          {/* Mobile Menu Toggle */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="flex flex-col h-full bg-gray-50">
                {/* Navigation Items */}
                <div className="flex-1 py-4">
                  <div className="px-3 space-y-1">
                    {navigationItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 px-3 py-2 text-sm rounded cursor-pointer ${
                          item.active
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 py-4">
                  <div className="px-3 space-y-1">
                    {bottomItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.shortcut && (
                          <span className="text-xs text-gray-400">{item.shortcut}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm text-gray-700 hover:text-gray-900">Launcher</button>
            <button className="text-sm text-gray-700 hover:text-gray-900">Settings</button>
            <button className="text-sm text-gray-700 hover:text-gray-900">Help</button>
          </div>

          {/* Sidebar Toggle for Desktop */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden lg:flex"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700 hidden sm:inline">Dark theme</span>
          <Switch />
        </div>
      </div>
    </div>
  );
}