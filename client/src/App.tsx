import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Onboarding from "@/pages/onboarding";
import UploadHub from "@/pages/upload";
import Processing from "@/pages/processing";
import Dashboard from "@/pages/dashboard";
import Vault from "@/pages/vault";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Onboarding} />
      <Route path="/upload" component={UploadHub} />
      <Route path="/processing" component={Processing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/vault" component={Vault} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
