import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Calendar, FileText, ChevronRight, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Vault() {
  const documents = [
    { id: 1, title: "Annual Physical Results", date: "Feb 24, 2026", provider: "Kaiser Permanente", type: "Lab Report" },
    { id: 2, title: "Cardiology Consultation", date: "Jan 10, 2026", provider: "Stanford Health", type: "Specialist Note" },
    { id: 3, title: "Urgent Care Discharge", date: "Nov 05, 2025", provider: "CityMD", type: "Discharge Summary" },
    { id: 4, title: "Vaccination Record", date: "Sep 15, 2025", provider: "CVS Health", type: "Immunization" },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Secure Vault</h1>
            <p className="text-muted-foreground">Your history of translated medical documents.</p>
          </div>
          <Button>Upload New</Button>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents, providers, or conditions..." className="pl-10 rounded-xl bg-white border-muted shadow-sm" />
          </div>
          <Button variant="outline" size="icon" className="rounded-xl">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium text-muted-foreground ml-1">Recent Documents</div>
          
          {documents.map((doc) => (
            <Card key={doc.id} className="group border-none shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center p-4 sm:p-6 gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
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

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
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
