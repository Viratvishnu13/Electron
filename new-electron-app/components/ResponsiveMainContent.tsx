import { ChevronRight, Package } from "lucide-react";
import { CreatePackageView } from "./CreatePackageView";

interface ResponsiveMainContentProps {
  currentView: string;
  selectedTask: string | null;
  setSelectedTask: (task: string | null) => void;
  setCurrentView: (view: string) => void;
}

export function ResponsiveMainContent({ 
  currentView, 
  selectedTask, 
  setSelectedTask, 
  setCurrentView 
}: ResponsiveMainContentProps) {
  const tasks = [
    { 
      id: 1, 
      name: "Create Package", 
      icon: <Package className="w-5 h-5 text-gray-600" />,
      taskId: "create-package"
    },
    { 
      id: 2, 
      name: "Edit Package", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-4 border border-gray-600 rounded-sm"></div></div>,
      taskId: "edit-package"
    },
    { 
      id: 3, 
      name: "Test Package", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-3 h-3 bg-gray-600 rounded-full"></div></div>,
      taskId: "test-package"
    },
    { 
      id: 4, 
      name: "Prepare for Deployment", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-4 h-3 border border-gray-600 rounded-sm flex items-center justify-center"><div className="w-2 h-1 bg-gray-600"></div></div></div>,
      taskId: "prepare-deployment"
    },
    { 
      id: 5, 
      name: "Document Package", 
      icon: <div className="w-5 h-5 flex items-center justify-center"><div className="w-3 h-4 border border-gray-600 rounded-sm flex flex-col"><div className="w-full h-0.5 bg-gray-600 mt-0.5"></div><div className="w-2 h-0.5 bg-gray-600 mt-0.5"></div></div></div>,
      taskId: "document-package"
    },
  ];

  const handleTaskClick = (taskId: string) => {
    setSelectedTask(taskId);
  };

  // Show Create Package view when selected
  if (selectedTask === "create-package") {
    return (
      <CreatePackageView 
        setCurrentView={setCurrentView}
        setSelectedTask={setSelectedTask}
      />
    );
  }

  // Default Packager Tasks view
  if (currentView === "packager-tasks") {
    return (
      <div className="flex-1 bg-white overflow-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="mb-4 md:mb-6">
            <h1 className="text-lg md:text-xl text-gray-800 mb-1">Packager Tasks</h1>
          </div>

          {/* Task Items */}
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between px-3 md:px-4 py-3 md:py-3 hover:bg-gray-50 rounded border border-gray-100 cursor-pointer transition-colors"
                onClick={() => handleTaskClick(task.taskId)}
              >
                <div className="flex items-center gap-3">
                  {task.icon}
                  <span className="text-sm text-gray-700">{task.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Recent Section */}
          <div className="mt-8 md:mt-12">
            <h2 className="text-sm md:text-base text-blue-600 mb-4">Recent</h2>
            <div className="h-24 md:h-32 bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-500">No recent items</span>
            </div>
          </div>

          {/* Mobile Bottom Spacing */}
          <div className="h-16 md:h-0"></div>
        </div>
      </div>
    );
  }

  // Placeholder for other views
  return (
    <div className="flex-1 bg-white overflow-auto">
      <div className="p-4 md:p-6">
        <div className="mb-4 md:mb-6">
          <h1 className="text-lg md:text-xl text-gray-800 mb-1 capitalize">{currentView.replace('-', ' ')}</h1>
        </div>
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded border border-gray-100">
          <span className="text-sm text-gray-500">Coming soon...</span>
        </div>
      </div>
    </div>
  );
}