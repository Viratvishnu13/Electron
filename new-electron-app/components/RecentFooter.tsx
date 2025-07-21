import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "./ui/tabs";
import { 
  Package, 
  Edit3, 
  TestTube, 
  FileText,
  Folder
} from "lucide-react";

export function RecentFooter() {
  const recentTasks = [
    {
      name: "Create Package",
      tool: "PSAppDeployToolkit",
      path: "C:\\PKG\\PKG-20250710-174318",
      type: "PSADT",
      icon: Package
    },
    {
      name: "Create Package", 
      tool: "IntuneWin",
      path: "C:\\PKG\\VKG-20250710-165528",
      type: "PSADT",
      icon: Package
    },
    {
      name: "Edit Package",
      tool: "MSI",
      path: "C:\\PKG\\EDI-20250710-142211",
      type: "MSI",
      icon: Edit3
    },
    {
      name: "Test Package",
      tool: "PS1",
      path: "C:\\PKG\\TST-20250710-135445",
      type: "PS1",
      icon: TestTube
    }
  ];

  return (
    <div className="flex-shrink-0 border-t border-border h-48 bg-card">
      <div className="p-4 h-full flex flex-col">
        <h2 className="text-sm text-primary mb-4 flex-shrink-0">Recent</h2>
        
        <div className="flex-1 min-h-0">
          <Tabs defaultValue="tasks" className="w-full h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2 max-w-[200px] flex-shrink-0 bg-muted">
              <TabsTrigger value="tasks" className="data-[state=active]:bg-background data-[state=active]:text-foreground">Tasks</TabsTrigger>
              <TabsTrigger value="files" className="data-[state=active]:bg-background data-[state=active]:text-foreground">Files</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tasks" className="mt-4 flex-1 overflow-auto">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {recentTasks.map((task, index) => {
                  const IconComponent = task.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded text-xs border border-border cursor-pointer transition-colors bg-background">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-3 h-3 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-foreground truncate">{task.name}</div>
                        <div className="text-muted-foreground truncate">→ {task.tool}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="files" className="mt-4 flex-1 overflow-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {recentTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between px-3 py-2 hover:bg-accent rounded text-xs border border-border cursor-pointer transition-colors bg-background">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Folder className="w-3 h-3 text-foreground flex-shrink-0" />
                      <div className="text-foreground truncate">{task.path}</div>
                    </div>
                    <div className="text-muted-foreground bg-muted px-2 py-1 rounded flex-shrink-0 ml-2">
                      {task.type}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}