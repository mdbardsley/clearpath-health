import { useLocation } from "wouter";
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Calendar, FileText, ChevronRight, Share2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useThemeClasses } from "@/hooks/use-theme-classes";
import { vaultDocuments } from "@/data/vaultDocuments";

export default function Vault() {
  const themeClasses = useThemeClasses();
  const [, setLocation] = useLocation();
  const documents = vaultDocuments;

  const openDocument = (e: React.MouseEvent, docId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setLocation(`/vault/${docId}`);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Document History</h1>
            <p className="text-muted-foreground">Your history of translated medical documents.</p>
          </div>
          <Button className={themeClasses.combine("", "pebble-button", "")}>Upload New</Button>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents, providers, or conditions..." className={`pl-10 bg-white border-muted shadow-sm ${
              themeClasses.combine("", "organic-container", "rounded-xl")
            }`} />
          </div>
          <Button variant="outline" size="icon" className={themeClasses.combine("", "pebble-button", "rounded-xl")}>
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-muted-foreground ml-1">Recent Documents</div>
          
          {documents.map((doc) => (
            <Card
              key={doc.id}
              className={`group border-none shadow-sm hover:shadow-md transition-all overflow-hidden ${
                themeClasses.combine("", "organic-card", "")
              }`}
            >
              <CardContent className="p-0">
                <div
                  className="flex items-center p-4 sm:p-6 gap-4 cursor-pointer"
                  onClick={(e) => openDocument(e, doc.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLocation(`/vault/${doc.id}`);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${doc.title}`}
                >
                  <div className={`h-12 w-12 bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors ${
                    themeClasses.combine("", "organic-shape", "rounded-xl")
                  }`}>
                    <FileText className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground truncate">{doc.title}</h3>
                      <Badge variant="secondary" className="hidden sm:inline-flex text-xs font-normal bg-secondary/50 text-secondary-foreground">{doc.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {doc.date}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="truncate">{doc.provider}</span>
                    </div>
                  </div>

                  <a
                    href={`/vault/${doc.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1 -m-1 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View document
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <ChevronRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
