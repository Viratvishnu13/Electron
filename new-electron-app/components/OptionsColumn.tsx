import { 
  ChevronRight, 
  Terminal, 
  Smartphone, 
  Wrench 
} from "lucide-react";

interface OptionsColumnProps {
  currentView: string;
  selectedTask: string | null;
  selectedOption: string | null;
  setSelectedOption: (option: string | null) => void;
}

export function OptionsColumn({ 
  currentView, 
  selectedTask, 
  selectedOption, 
  setSelectedOption 
}: OptionsColumnProps) {
  const packageFormats = [
    { 
      id: "ps1", 
      name: "PS1", 
      disabled: false,
      icon: Terminal
    },
    { 
      id: "intunewin", 
      name: "IntuneWin", 
      disabled: false,
      icon: Smartphone
    },
    { 
      id: "psadt", 
      name: "PSAppDeployToolkit", 
      disabled: false,
      icon: Wrench
    },
  ];

  const handleOptionClick = (optionId: string, disabled: boolean) => {
    if (!disabled) {
      setSelectedOption(optionId);
    }
  };

  const renderPackageFormats = () => (
    <div className="p-4">
      <div className="space-y-2">
        {packageFormats.map((format) => {
          const IconComponent = format.icon;
          return (
            <div
              key={format.id}
              className={`flex items-center justify-between px-4 py-3 rounded border cursor-pointer transition-colors ${
                format.disabled
                  ? "bg-muted text-muted-foreground cursor-not-allowed border-border opacity-50"
                  : selectedOption === format.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-accent border-border bg-card"
              }`}
              onClick={() => handleOptionClick(format.id, format.disabled)}
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <IconComponent className={`w-4 h-4 ${
                    format.disabled 
                      ? 'text-muted-foreground' 
                      : selectedOption === format.id
                      ? 'text-primary-foreground'
                      : 'text-foreground'
                  }`} />
                </div>
                <span className="text-sm">{format.name}</span>
              </div>
              <ChevronRight className={`w-4 h-4 ${
                format.disabled 
                  ? 'text-muted-foreground' 
                  : selectedOption === format.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground'
              }`} />
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderEmptyState = () => (
    <div className="flex items-center justify-center h-full">
      <span className="text-sm text-muted-foreground">
        {selectedTask ? "Select an option" : "Select a task"}
      </span>
    </div>
  );

  const shouldShowOptions = currentView === "packager-tasks" && selectedTask === "create-package";

  return (
    <div className="flex-1 bg-card border-r border-border">
      {shouldShowOptions ? renderPackageFormats() : renderEmptyState()}
    </div>
  );
}