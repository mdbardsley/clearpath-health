import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/layout";
import { Progress } from "@/components/ui/progress";
import { BrainCircuit, Sparkles, FileSearch } from "lucide-react";
import calmBg from "@/assets/images/calm-bg.png";

export default function Processing() {
  const [location, setLocation] = useLocation();
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  const steps = [
    { text: "Securely uploading document...", icon: FileSearch },
    { text: "Decoding medical terminology...", icon: BrainCircuit },
    { text: "Summarizing your care plan...", icon: Sparkles },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLocation("/dashboard"), 800);
          return 100;
        }
        const diff = Math.random() * 10;
        const newProgress = Math.min(oldProgress + diff, 100);
        
        // Update steps based on progress
        if (newProgress > 30 && newProgress < 60) setStep(1);
        if (newProgress >= 60) setStep(2);
        
        return newProgress;
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [setLocation]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-2xl mx-auto text-center space-y-12 relative">
        {/* Background ambient blob */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <img src={calmBg} className="w-full h-full object-cover rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative">
          <div className="h-32 w-32 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10 animate-pulse">
             {(() => {
               const Icon = steps[step].icon;
               return <Icon className="h-12 w-12 text-primary animate-bounce duration-[3000ms]" />;
             })()}
          </div>
          {/* Ripple effect */}
          <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-primary/20 animate-ping duration-[3000ms]" />
          <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-secondary/30 animate-ping delay-700 duration-[3000ms]" />
        </div>

        <div className="space-y-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-foreground animate-in fade-in slide-in-from-bottom-2">
            {steps[step].text}
          </h2>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-3 w-full bg-secondary/50" indicatorClassName="bg-primary transition-all duration-500 ease-out" />
            <div className="flex justify-between text-xs text-muted-foreground font-medium">
              <span>Encryption Active</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-sm text-muted-foreground max-w-sm">
          "Medical jargon can be confusing. We're translating it into plain English for you right now."
        </div>
      </div>
    </Layout>
  );
}
