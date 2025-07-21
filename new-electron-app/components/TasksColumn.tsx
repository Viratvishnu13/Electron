import { 
  ChevronRight, 
  Package, 
  Edit3, 
  TestTube, 
  Upload, 
  FileText 
} from "lucide-react";

interface TasksColumnProps {
  currentView: string;
  selectedTask: string | null;
  setSelectedTask: (task: string | null) => void;
  setSelectedOption: (option: string | null) => void;
}

export function TasksColumn({ 
  currentView, 
  selectedTask, 
  setSelectedTask, 
  setSelectedOption 
}: TasksColumnProps) {
  const packagerTasks = [
    { 
      id: "create-package", 
      name: "Create Package", 
      icon: Package
    },
    { 
      id: "edit-package", 
      name: "Edit Package", 
      icon: Edit3
    },
    { 
      id: "test-package", 
      name: "Test Package", 
      icon: TestTube
    },
    { 
      id: "prepare-deployment", 
      name: "Prepare for Deployment", 
      icon: Upload
    },
    { 
      id: "document-package", 
      name: "Document Package", 
      icon: FileText
    },
  ];

  const handleTaskClick = (taskId: string) => {
    setSelectedTask(taskId);
    setSelectedOption(null);
  };

  const renderPackagerTasks = () => (
    <div className="p-4 space-y-2 h-full overflow-auto">
      {packagerTasks.map((task) => {
        const IconComponent = task.icon;
        return (
          <div
            key={task.id}
            className={`flex items-center justify-between px-4 py-3 rounded border cursor-pointer transition-colors ${
              selectedTask === task.id
                ? "bg-primary text-primary-foreground border-primary"
                : "hover:bg-accent border-border bg-card"
            }`}
            onClick={() => handleTaskClick(task.id)}
          >
            <div className="flex items-center gap-3">
              <IconComponent className={`w-5 h-5 ${
                selectedTask === task.id ? 'text-primary-foreground' : 'text-foreground'
              }`} />
              <span className="text-sm">{task.name}</span>
            </div>
            <ChevronRight className={`w-4 h-4 ${
              selectedTask === task.id ? 'text-primary-foreground' : 'text-muted-foreground'
            }`} />
          </div>
        );
      })}
    </div>
  );

  const renderDefaultView = () => (
    <div className="flex items-center justify-center h-full">
      <span className="text-sm text-muted-foreground capitalize">
        {currentView.replace('-', ' ')} coming soon...
      </span>
    </div>
  );

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col">
      {currentView === "packager-tasks" && renderPackagerTasks()}
      {currentView !== "packager-tasks" && renderDefaultView()}
    </div>
  );
}