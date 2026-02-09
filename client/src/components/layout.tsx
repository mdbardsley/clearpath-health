import { Link, useLocation } from "wouter";
import { ShieldCheck, Menu, FileText, Activity, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/upload", label: "Upload & Connect", icon: FileText },
    { href: "/dashboard", label: "My Health", icon: Activity },
    { href: "/vault", label: "Secure Vault", icon: History },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/">
            <a className="flex items-center gap-2 group cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                ClearPath<span className="text-primary">Health</span>
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button size="sm" variant="outline" className="ml-4 rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary">
              Sign Out
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="-mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/">
                    <a className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                      <ShieldCheck className="h-6 w-6 text-primary" />
                      ClearPath Health
                    </a>
                  </Link>
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <a 
                          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                            location === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 sm:px-6 md:py-10 animate-in fade-in duration-500">
        {children}
      </main>
      <footer className="border-t bg-muted/30 py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-primary/80">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-medium">HIPAA Compliant & Secure</span>
          </div>
          <p>© 2026 ClearPath Health Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
