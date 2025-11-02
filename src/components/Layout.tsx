import { Link, useLocation } from "react-router-dom";
import { Home, Wind, Leaf, Flame, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RenewableBackground from "./RenewableBackground";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/activity-1", label: "Activity 1: Tidal/Wave/Wind", icon: Wind },
    { path: "/activity-2", label: "Activity 2: Biomass", icon: Leaf },
    { path: "/activity-3", label: "Activity 3: Geothermal/OTEC", icon: Flame },
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1440] to-[#111827] text-white relative overflow-x-hidden">
      {/* Animated floating sparkles background */}
      <div className="fixed inset-0 z-0 pointer-events-none animate-float-slow">
        <RenewableBackground />
        <Sparkles className="absolute left-1/4 top-1/4 w-32 h-32 text-blue-400/30 animate-pulse-slow" />
        <Sparkles className="absolute right-1/4 bottom-1/4 w-24 h-24 text-purple-400/20 animate-pulse-slow" />
      </div>
      <div className="relative z-10">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-50 w-full border-b border-purple-400/30 bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-xl shadow-xl">
          <div className="container flex h-16 items-center justify-between">
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform drop-shadow-glow">
              Renewable Energy Portfolio
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 focus:ring-2 focus:ring-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden fixed inset-0 top-16 z-40 bg-gradient-to-br from-gray-900/95 to-blue-900/90 backdrop-blur-xl shadow-2xl animate-fade-in">
            <div className="container py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-lg font-semibold shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                        : "text-blue-200/80"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 z-50 border-r border-purple-400/30 bg-gradient-to-br from-gray-900/90 to-blue-900/80 backdrop-blur-xl shadow-2xl rounded-tr-3xl rounded-br-3xl animate-fade-in">
            <div className="p-6 border-b border-purple-400/30">
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform drop-shadow-glow">
                Renewable Energy
              </h1>
              <p className="text-sm text-blue-200/80 mt-1">Academic Portfolio</p>
            </div>
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium shadow-sm hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white ${
                        isActive(item.path)
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                          : "text-blue-200/80"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
            <div className="p-4 border-t border-purple-400/30 text-sm text-blue-200/60">
              <p>© 2025 Renewable Energy Project</p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-72">
            <div className="container py-8 lg:py-12">
              <div className="rounded-3xl bg-gradient-to-br from-white/5 to-blue-200/5 shadow-2xl border border-blue-400/10 p-6 lg:p-12 backdrop-blur-xl animate-fade-in">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>
  );
}

export default Layout;
