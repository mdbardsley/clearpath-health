import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Share2, Download, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useThemeClasses } from "@/hooks/use-theme-classes";

// Custom Gauge Component
const MetricGauge = ({ value, label, status, unit }: { value: number, label: string, status: 'normal' | 'warning' | 'critical', unit: string }) => {
  const colors = {
    normal: "text-emerald-600 bg-emerald-100 border-emerald-200",
    warning: "text-amber-600 bg-amber-100 border-amber-200",
    critical: "text-rose-600 bg-rose-100 border-rose-200",
  };
  
  const statusColors = colors[status];

  const themeClasses = useThemeClasses();
  
  return (
    <div className={`flex flex-col items-center p-4 border bg-card transition-shadow hover:shadow-md ${
      themeClasses.combine("shadow-sm", "organic-container organic-shadow", "rounded-xl")
    }`}>
      <span className="text-sm font-medium text-muted-foreground mb-2">{label}</span>
      <div className={`h-16 w-16 flex items-center justify-center border-4 text-lg font-bold ${statusColors} ${
        themeClasses.combine("", "organic-shape", "rounded-full")
      }`}>
        {value}
      </div>
      <span className="text-xs text-muted-foreground mt-1">{unit}</span>
      <span className={`text-xs font-semibold px-2 py-0.5 mt-2 ${
        status === 'normal' ? 'bg-emerald-100 text-emerald-700' : status === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
      } ${themeClasses.combine("", "pebble-button", "rounded-full")}`}>
        {status === 'normal' ? 'In Range' : 'Attention'}
      </span>
    </div>
  );
};

export default function Dashboard() {
  const themeClasses = useThemeClasses();
  
  return (
    <Layout>
      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Here is your summary, Sarah.</h1>
            <p className="text-muted-foreground">Based on your upload from Feb 24, 2026</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className={themeClasses.combine("", "pebble-button", "rounded-full")}>
              <Share2 className="mr-2 h-4 w-4" /> Share with Dr.
            </Button>
            <Button variant="outline" size="sm" className={themeClasses.combine("", "pebble-button", "rounded-full")}>
              <Download className="mr-2 h-4 w-4" /> PDF
            </Button>
          </div>
        </div>

        {/* The "Plain English" Card */}
        <Card className={`border-none bg-gradient-to-br from-primary/5 to-secondary/20 overflow-hidden ${
          themeClasses.combine("shadow-lg", "organic-card organic-shadow-lg", "")
        }`}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-xs">
              <Info className="h-4 w-4" />
              Plain English Summary
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-serif font-medium text-foreground leading-snug">
              Your blood work shows your cholesterol is slightly high, but your kidney and liver functions are perfectly normal.
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p>1. Your Vitamin D levels have improved significantly since your last visit.</p>
              <p>2. The "elevated LDL" means you should monitor your saturated fat intake, but it's not at a critical level yet.</p>
              <p>3. No immediate medication changes are recommended, just lifestyle adjustments.</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key Metrics */}
          <Card className={`col-span-1 md:col-span-2 border-none ${
            themeClasses.combine("shadow-md", "organic-card organic-shadow", "")
          }`}>
            <CardHeader>
              <CardTitle className="text-lg">Key Lab Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <MetricGauge value={145} label="LDL Cholesterol" status="warning" unit="mg/dL" />
                <MetricGauge value={98} label="Glucose" status="normal" unit="mg/dL" />
                <MetricGauge value={42} label="Vitamin D" status="normal" unit="ng/mL" />
                <MetricGauge value={120} label="Iron" status="normal" unit="mcg/dL" />
                <MetricGauge value={1.1} label="Creatinine" status="normal" unit="mg/dL" />
                <MetricGauge value={14} label="Hemoglobin" status="normal" unit="g/dL" />
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className={`col-span-1 border-none bg-white ${
            themeClasses.combine("shadow-md", "organic-card organic-shadow", "")
          }`}>
            <CardHeader className="bg-secondary/30 pb-4 organic-container">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                What do I do now?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className={`h-6 w-6 border-2 border-primary/30 text-primary/70 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    themeClasses.combine("", "organic-shape", "rounded-full")
                  }`}>1</div>
                  <span className="text-sm">Schedule a follow-up with Dr. Smith in 6 months.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className={`h-6 w-6 border-2 border-primary/30 text-primary/70 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    themeClasses.combine("", "organic-shape-alt", "rounded-full")
                  }`}>2</div>
                  <span className="text-sm">Increase daily water intake to 2.5 liters.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className={`h-6 w-6 border-2 border-primary/30 text-primary/70 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    themeClasses.combine("", "organic-shape", "rounded-full")
                  }`}>3</div>
                  <span className="text-sm">Continue taking Vitamin D supplements as prescribed.</span>
                </li>
              </ul>
              <Button className={`w-full mt-8 shadow-lg shadow-primary/10 size-lg ${
                themeClasses.combine("", "pebble-button", "rounded-xl")
              }`} size="lg">
                Add to Calendar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
