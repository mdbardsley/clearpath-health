import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileText, Link as LinkIcon, ArrowRight } from "lucide-react";
import onboardingHero from "@/assets/images/onboarding-hero.png";
import Layout from "@/components/layout";
import { useThemeClasses } from "@/hooks/use-theme-classes";

export default function Onboarding() {
  const themeClasses = useThemeClasses();
  
  return (
    <Layout>
      <div className="flex min-h-[80vh] flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
        <div className="flex max-w-xl flex-col gap-6 text-center md:text-left">
          <div className={`mx-auto flex w-fit items-center gap-2 border bg-background px-4 py-1.5 md:mx-0 ${
            themeClasses.combine("", "organic-container organic-shadow", "rounded-full shadow-sm")
          }`}>
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              HIPAA Compliant & Secure
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your Health, <br className="hidden md:block" />
            <span className="text-primary">Simplified.</span>
          </h1>
          
          <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl leading-relaxed">
            We translate complex lab results, discharge papers, and medical records into 
            clear, human language you can actually understand.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start pt-4">
            <Link href="/upload">
              <Button size="lg" className={`h-14 gap-2 px-8 text-base transition-all hover:scale-105 ${
                themeClasses.combine(
                  "shadow-lg shadow-primary/20 hover:shadow-xl",
                  "pebble-button organic-shadow-lg",
                  "rounded-2xl"
                )
              }`}>
                <FileText className="h-5 w-5" />
                Upload Paperwork
              </Button>
            </Link>
            <Link href="/upload?tab=connect">
              <Button size="lg" variant="outline" className={`h-14 gap-2 px-8 text-base border-2 hover:bg-secondary/50 transition-all hover:scale-105 ${
                themeClasses.combine("", "pebble-button", "rounded-2xl")
              }`}>
                <LinkIcon className="h-5 w-5" />
                Connect Records
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 md:justify-start grayscale opacity-60">
             {/* Mock trust logos */}
             <div className="font-bold text-lg text-muted-foreground">EPIC MyChart</div>
             <div className="font-bold text-lg text-muted-foreground">Cerner</div>
             <div className="font-bold text-lg text-muted-foreground">Mayo Clinic</div>
          </div>
        </div>

        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
          <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl filter organic-shape" />
          <img
            src={onboardingHero}
            alt="Person understanding medical records"
            className="w-full h-auto organic-card organic-shadow-lg drop-shadow-2xl animate-in fade-in slide-in-from-right-10 duration-1000"
          />
        </div>
      </div>
    </Layout>
  );
}
