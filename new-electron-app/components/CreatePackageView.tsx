import { ChevronRight, Package, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface CreatePackageViewProps {
  setCurrentView: (view: string) => void;
  setSelectedTask: (task: string | null) => void;
}

export function CreatePackageView({ setCurrentView, setSelectedTask }: CreatePackageViewProps) {
  const tasks = [
    { 
      id: 1, 
      name: "Create Package", 
      icon: <Package className="w-5 h-5 text-white" />,
      active: true
    },
    { 
      id: 2, 
      name: "Edit Package", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-4 border border-gray-600 rounded-sm"></div></div>,
      active: false
    },
    { 
      id: 3, 
      name: "Test Package", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-3 h-3 bg-gray-600 rounded-full"></div></div>,
      active: false
    },
    { 
      id: 4, 
      name: "Prepare for Deployment", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-3 border border-gray-600 rounded-sm flex items-center justify-center"><div className="w-2 h-1 bg-gray-600"></div></div></div>,
      active: false
    },
    { 
      id: 5, 
      name: "Document Package", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-3 h-4 border border-gray-600 rounded-sm flex flex-col"><div className="w-full h-0.5 bg-gray-600 mt-0.5"></div><div className="w-2 h-0.5 bg-gray-600 mt-0.5"></div></div></div>,
      active: false
    },
  ];

  const packageFormats = [
    { name: "MSI", icon: "📦" },
    { name: "MST", icon: "🔧" },
    { name: "MSP", icon: "🔄", disabled: true },
    { name: "MSIX", icon: "📱" },
    { name: "App-V", icon: "📋" },
    { name: "ThinApp", icon: "💿" },
    { name: "IntuneWin", icon: "☁️", disabled: true },
    { name: "PSAppDeployToolkit", icon: "⚙️", disabled: true },
  ];

  const recentTasks = [
    {
      name: "Create Package",
      tool: "PSAppDeployToolkit",
      path: "C:\\PKG\\PKG-20250710-174318",
      type: "PSADT"
    },
    {
      name: "Create Package", 
      tool: "IntuneWin",
      path: "C:\\PKG\\VKG-20250710-165528",
      type: "PSADT"
    }
  ];

  const handleBackToPackagerTasks = () => {
    setCurrentView("packager-tasks");
    setSelectedTask(null);
  };

  return (
    <div className="flex-1 bg-white overflow-auto">
      <div className="p-4 md:p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <button 
            onClick={handleBackToPackagerTasks}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Packager Tasks
          </button>
          <span className="text-gray-400 text-sm">/</span>
          <span className="text-blue-600 text-sm">Create Package</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Tasks */}
          <div className="flex-1">
            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center justify-between px-4 py-3 rounded border cursor-pointer transition-colors ${
                    task.active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:bg-gray-50 border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {task.active ? (
                      <Package className="w-5 h-5 text-white" />
                    ) : (
                      task.icon
                    )}
                    <span className="text-sm">{task.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${task.active ? 'text-white' : 'text-gray-400'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Package Formats */}
          <div className="w-full lg:w-80">
            <div className="space-y-2">
              {packageFormats.map((format, index) => (
                <div
                  key={format.name}
                  className={`flex items-center justify-between px-4 py-3 rounded border cursor-pointer transition-colors ${
                    format.disabled
                      ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-100"
                      : "hover:bg-gray-50 border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center text-xs ${
                        format.disabled ? 'border-gray-300' : 'border-gray-600'
                      }`}>
                        {format.name === "MSI" && <div className="w-2 h-2 bg-gray-600 rounded-full"></div>}
                        {format.name === "MST" && <div className="w-3 h-1 bg-gray-600"></div>}
                        {format.name === "MSP" && <div className="w-2 h-2 bg-gray-300 rounded-full"></div>}
                        {format.name === "MSIX" && <div className="w-2 h-2 bg-gray-600 rounded-sm"></div>}
                        {format.name === "App-V" && <div className="w-3 h-2 border border-gray-600 rounded-sm"></div>}
                        {format.name === "ThinApp" && <div className="w-3 h-3 bg-gray-600 rounded-full"></div>}
                        {format.name === "IntuneWin" && <div className="w-2 h-2 bg-gray-300 rounded-full"></div>}
                        {format.name === "PSAppDeployToolkit" && <div className="w-2 h-2 bg-gray-300 rounded-sm"></div>}
                      </div>
                    </div>
                    <span className="text-sm">{format.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${format.disabled ? 'text-gray-300' : 'text-gray-400'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-sm md:text-base text-blue-600 mb-4">Recent</h2>
          
          <Tabs defaultValue="tasks" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-[200px]">
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tasks" className="mt-4">
              <div className="space-y-2">
                {recentTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded border border-gray-100">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-700">{task.name}</div>
                      <div className="text-xs text-gray-500">→ {task.tool}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="files" className="mt-4">
              <div className="space-y-2">
                {recentTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 rounded border border-gray-100">
                    <div className="flex-1">
                      <div className="text-sm text-gray-700">{task.path}</div>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {task.type}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Mobile Bottom Spacing */}
        <div className="h-16 md:h-0"></div>
      </div>
    </div>
  );
}