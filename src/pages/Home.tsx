import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Leaf, Flame, BookOpen, Target, Award, ArrowRight } from "lucide-react";
import { WindTidalWaveDiagram, BiomassDiagram, OTECDiagram } from "@/components/ActivityDiagrams";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-renewable-energy.jpg";

const Home = () => {
  const activities = [
    {
      title: "Activity 1",
      subtitle: "Tidal/Wave/Wind Energy",
      description: "Exploring renewable energy from ocean tides, waves, and wind power systems.",
      icon: Wind,
      gradient: "from-blue-500 to-cyan-500",
      path: "/activity-1",
    },
    {
      title: "Activity 2",
      subtitle: "Biomass Energy",
      description: "Investigating biogas generation and biomass conversion technologies.",
      icon: Leaf,
      gradient: "from-green-500 to-emerald-500",
      path: "/activity-2",
    },
    {
      title: "Activity 3",
      subtitle: "Geothermal/OTEC",
      description: "Studying geothermal power and Ocean Thermal Energy Conversion systems.",
      icon: Flame,
      gradient: "from-orange-500 to-red-500",
      path: "/activity-3",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 animated-bg opacity-90" />
        </div>
        <div className="relative px-8 py-20 lg:py-32 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 float bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x">
            Renewable Energy Portfolio
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 transform transition-all duration-500 hover:scale-105 font-semibold">
            Exploring Sustainable Solutions for Tomorrow's Energy Needs
          </p>
        </div>
        {/* Diagrams strip: clickable previews for each activity */}
        <div className="relative px-6 pb-8 lg:pb-12 flex justify-center gap-6">
          <a href="/activity-1" className="w-1/4 max-w-xs">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl p-2 hover:scale-105 transition-transform">
              <WindTidalWaveDiagram />
              <p className="text-sm text-center text-emerald-200 mt-2">Activity 1 — Tidal/Wave/Wind</p>
            </div>
          </a>
          <a href="/activity-2" className="w-1/4 max-w-xs">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl p-2 hover:scale-105 transition-transform">
              <BiomassDiagram />
              <p className="text-sm text-center text-emerald-200 mt-2">Activity 2 — Biomass</p>
            </div>
          </a>
          <a href="/activity-3" className="w-1/4 max-w-xs">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl p-2 hover:scale-105 transition-transform">
              <OTECDiagram />
              <p className="text-sm text-center text-emerald-200 mt-2">Activity 3 — Geothermal/OTEC</p>
            </div>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/70 border-slate-700/20 hover:shadow-[0_0_30px_rgba(2,6,23,0.6)] transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-6 w-6 text-green-400 animate-pulse" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                About This Portfolio
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-200/90 leading-relaxed hover:text-slate-50 transition-colors duration-300">
              Welcome to my renewable energy portfolio for the FT-IV academic project. This website showcases 
              three comprehensive activities exploring different renewable energy technologies and their practical 
              applications in real-world scenarios.
            </p>
            <p className="text-slate-200/90 leading-relaxed hover:text-slate-50 transition-colors duration-300">
              Each activity includes detailed block diagrams, system architectures, and thorough explanations 
              covering energy sources, conversion processes, output utilization, and real-world relevance. 
              Navigate through the sidebar to explore each activity in detail.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Activities Overview */}
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-8 w-8 text-green-400 animate-spin-slow" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x">
            Project Activities
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Link key={index} to={activity.path} className="group">
                <Card className="hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 hover:scale-105 cursor-pointer h-full hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 relative overflow-hidden pulse">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 float`}>
                      <Icon className="h-6 w-6 text-white transform transition-transform duration-500 group-hover:rotate-180" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-105 transition-transform">
                        {activity.title}
                      </span>
                      <ArrowRight className="h-5 w-5 text-purple-400 transform transition-transform group-hover:translate-x-1" />
                    </CardTitle>
                    <CardDescription className="font-semibold text-gray-300">
                      {activity.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Project Objectives */}
      <section>
        <Card className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 border-purple-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl group">
              <Award className="h-6 w-6 text-purple-400 transform transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Project Objectives
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 relative">
              <li className="flex items-start gap-3 group hover:translate-x-2 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                  Design and analyze renewable energy systems for practical applications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Understand energy conversion processes and system architectures
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Evaluate real-world applications and sustainability impacts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Develop technical documentation and system diagrams
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Student Information */}
      <section className="mt-8 text-center p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/20">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Student Information
          </h2>
          <div className="text-lg text-gray-300 space-y-1">
            <p><span className="text-purple-400">Name:</span> PARNEET KAUR</p>
            <p><span className="text-purple-400">Registration No:</span> RA2311056010122</p>
            <p><span className="text-purple-400">Section:</span> AM1</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
