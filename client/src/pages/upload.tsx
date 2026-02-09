import { useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, Camera, Link as LinkIcon, Lock, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function UploadHub() {
  const [location, setLocation] = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  
  // Parse query param for tab
  const params = new URLSearchParams(window.location.search);
  const defaultTab = params.get("tab") === "connect" ? "connect" : "upload";

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate upload
    setLocation("/processing");
  };

  return (
    <Layout>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">Secure Connection Hub</h1>
          <p className="text-muted-foreground">
            Add your medical documents or connect directly to your provider.
          </p>
        </div>

        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
          <CardHeader className="bg-primary/5 border-b border-primary/10 pb-6">
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium">
              <Lock className="h-4 w-4" />
              <span>End-to-end Encrypted & HIPAA Secure</span>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 h-auto bg-muted/50 rounded-xl">
                <TabsTrigger value="upload" className="rounded-lg py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Upload Files
                </TabsTrigger>
                <TabsTrigger value="connect" className="rounded-lg py-3 text-base data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Connect Provider
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div 
                  className={`
                    border-3 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer
                    flex flex-col items-center justify-center gap-4 bg-background
                    ${isDragging ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/30'}
                  `}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => setLocation("/processing")}
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <UploadCloud className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Drag & Drop your files here</h3>
                    <p className="text-sm text-muted-foreground mt-1">PDF, JPG, or PNG files supported</p>
                  </div>
                  <div className="flex items-center gap-2 w-full max-w-xs my-2">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground uppercase">Or</span>
                    <Separator className="flex-1" />
                  </div>
                  <Button size="lg" className="w-full max-w-xs rounded-xl h-12">
                    Browse Files
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 rounded-xl border-2 hover:border-primary/50 hover:bg-primary/5 flex flex-col items-center justify-center gap-2" onClick={() => setLocation("/processing")}>
                    <Camera className="h-6 w-6 text-primary" />
                    <span className="font-medium">Take a Photo</span>
                  </Button>
                  <div className="h-20 rounded-xl border-2 border-transparent bg-muted/30 flex items-center justify-center px-4 text-sm text-muted-foreground text-center">
                    Files are automatically deleted after processing for your privacy.
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="connect" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {['MyChart', 'Kaiser Permanente', 'Epic Systems', 'Cerner Health'].map((provider) => (
                     <button 
                       key={provider}
                       onClick={() => setLocation("/processing")}
                       className="group flex items-center p-4 rounded-xl border-2 border-muted hover:border-primary hover:bg-primary/5 transition-all text-left bg-background"
                     >
                       <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground group-hover:bg-white group-hover:text-primary transition-colors">
                         {provider.charAt(0)}
                       </div>
                       <div className="ml-4">
                         <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{provider}</div>
                         <div className="text-xs text-muted-foreground">Secure Connection</div>
                       </div>
                       <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                         <LinkIcon className="h-4 w-4" />
                       </div>
                     </button>
                   ))}
                 </div>
                 <p className="text-center text-sm text-muted-foreground pt-4">
                   We adhere to FHIR standards for secure medical record exchange.
                 </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
