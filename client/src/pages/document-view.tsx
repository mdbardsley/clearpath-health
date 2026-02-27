import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, FileText, Sparkles } from "lucide-react";
import { getVaultDocumentById } from "@/data/vaultDocuments";
import { useThemeClasses } from "@/hooks/use-theme-classes";

export default function DocumentView() {
  const [, params] = useRoute("/vault/:id");
  const id = params?.id ? parseInt(params.id, 10) : NaN;
  const doc = Number.isNaN(id) ? undefined : getVaultDocumentById(id);
  const themeClasses = useThemeClasses();

  if (!doc) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto text-center py-16 space-y-4">
          <p className="text-muted-foreground">Document not found.</p>
          <Link href="/vault">
            <Button variant="outline" className={themeClasses.combine("", "pebble-button", "rounded-full")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Vault
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-8rem)] max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between gap-4 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <Link href="/vault">
              <Button variant="ghost" size="sm" className="gap-2 -ml-2">
                <ArrowLeft className="h-4 w-4" /> Back to Vault
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="text-xl font-bold text-foreground">{doc.title}</h1>
              <p className="text-sm text-muted-foreground">
                {doc.provider} · {doc.date} · {doc.type}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 rounded-xl overflow-hidden border bg-card shadow-sm">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={50} minSize={30}>
              <Card className="h-full rounded-none border-0 border-r shadow-none organic-shadow">
                <CardHeader className="py-3 px-4 border-b bg-muted/40 shrink-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Original from provider
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    What you were discharged with from the doctor’s office or lab
                  </p>
                </CardHeader>
                <CardContent className="p-0 h-[calc(100%-5rem)]">
                  <ScrollArea className="h-full">
                    <pre className="p-4 text-sm font-sans whitespace-pre-wrap text-foreground/90 leading-relaxed">
                      {doc.originalContent}
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50} minSize={30}>
              <Card className="h-full rounded-none border-0 shadow-none bg-primary/5">
                <CardHeader className="py-3 px-4 border-b border-primary/10 bg-primary/5 shrink-0">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      ClearPath summary
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Plain English version so you can verify nothing was left out or misinterpreted
                  </p>
                </CardHeader>
                <CardContent className="p-0 h-[calc(100%-5rem)]">
                  <ScrollArea className="h-full">
                    <div className="p-4 text-sm text-foreground leading-relaxed space-y-3">
                      {doc.summaryContent.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </Layout>
  );
}
