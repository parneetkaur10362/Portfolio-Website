import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Waves, Fan } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WindTidalWaveBlockDiagram } from "@/components/BlockDiagrams";

const Activity1 = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold mb-2 flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 via-indigo-500 to-blue-500 shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-indigo-500/25">
            <Wind className="h-6 w-6 text-white/95" />
          </div>
          <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-violet-300 bg-clip-text text-transparent animate-pulse-slow">Activity 1: Tidal/Wave/Wind Energy</span>
        </h1>
        <p className="text-lg text-slate-200/90">
          Renewable energy systems harnessing natural forces
        </p>
      </div>

      {/* Topic Selection Alert */}
      <Alert className="bg-gradient-to-r from-violet-900/60 via-indigo-900/50 to-blue-900/60 border border-violet-500/30 text-slate-100 shadow-xl backdrop-blur-sm">
        <AlertDescription>
          <strong className="text-blue-200">Selected Topic:</strong> <span className="text-indigo-100">Design a hybrid renewable energy system combining wind energy to power a rural health clinic with tidal/wave energy backup.</span>
        </AlertDescription>
      </Alert>

      {/* Block Diagram Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">System Architecture & Block Diagram</CardTitle>
          <CardDescription>
            Detailed system design and component layout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/60 rounded-lg p-6 border border-slate-700/30 shadow-inner">
            <div className="space-y-6">
              {/* Block Diagram */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/70 rounded-lg p-6 border-2 border-indigo-900/20 shadow-md hover:scale-[1.01] transition-transform duration-200">
                <WindTidalWaveBlockDiagram />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                  {/* Energy Sources */}
                  <div className="md:col-span-5 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg border-2 border-blue-400">
                        <Wind className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <p className="font-bold text-sm">Wind Turbines</p>
                        <p className="text-xs text-muted-foreground">Primary Source</p>
                      </div>
                      <div className="bg-cyan-100 dark:bg-cyan-900/50 p-4 rounded-lg border-2 border-cyan-400">
                        <Waves className="h-8 w-8 mx-auto mb-2 text-cyan-600" />
                        <p className="font-bold text-sm">Tidal Energy</p>
                        <p className="text-xs text-muted-foreground">Backup Source</p>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg border-2 border-blue-400">
                        <Fan className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <p className="font-bold text-sm">Wave Converter</p>
                        <p className="text-xs text-muted-foreground">Supplementary</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="text-4xl text-blue-500">↓</div>
                  </div>

                  {/* Power Conditioning */}
                  <div className="md:col-span-5">
                    <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg border-2 border-green-400">
                      <p className="font-bold">AC/DC Converters & Power Conditioning Unit</p>
                      <p className="text-xs text-muted-foreground mt-1">Rectifiers, Inverters, MPPT Controllers</p>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="text-4xl text-blue-500">↓</div>
                  </div>

                  {/* Energy Storage */}
                  <div className="md:col-span-5">
                    <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg border-2 border-yellow-400">
                      <p className="font-bold">Battery Energy Storage System (BESS)</p>
                      <p className="text-xs text-muted-foreground mt-1">Li-ion Batteries with BMS - 100 kWh Capacity</p>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="text-4xl text-blue-500">↓</div>
                  </div>

                  {/* Control & Distribution */}
                  <div className="md:col-span-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-lg border-2 border-purple-400">
                        <p className="font-bold">Smart Controller & EMS</p>
                        <p className="text-xs text-muted-foreground mt-1">Load Management, Source Selection</p>
                      </div>
                      <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-lg border-2 border-orange-400">
                        <p className="font-bold">Distribution Panel</p>
                        <p className="text-xs text-muted-foreground mt-1">230V AC, 50Hz Supply</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="text-4xl text-blue-500">↓</div>
                  </div>

                  {/* Load */}
                  <div className="md:col-span-5">
                    <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-lg border-2 border-red-400">
                      <p className="font-bold">Rural Health Clinic Load</p>
                      <p className="text-xs text-muted-foreground mt-1">Lighting, Medical Equipment, HVAC, Refrigeration - 50 kW Peak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Explanation Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">System Explanation</CardTitle>
          <CardDescription>
            Detailed description of energy source, conversion, and application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Source of Energy */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Source of Energy</h3>
            <details className="bg-gradient-to-br from-slate-900/90 to-indigo-900/40 p-4 rounded-lg border border-indigo-500/20 transition-all duration-300 hover:scale-[1.01] backdrop-blur-sm">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-indigo-100 font-medium">Overview — click to expand</span>
                <span className="text-blue-300 text-sm hover:text-blue-200">Show more</span>
              </summary>
              <div className="mt-3 text-indigo-100 leading-relaxed space-y-3 animate-fade-in">
                The hybrid system utilizes three renewable energy sources. Wind energy serves as the primary source, harnessing kinetic energy from atmospheric air movements through horizontal-axis wind turbines installed at optimal heights (30-50m). The coastal location provides consistent wind speeds averaging 6-8 m/s, particularly during afternoon and evening hours. Tidal energy acts as a predictable backup source, exploiting the twice-daily ocean tide cycles caused by gravitational forces of the moon and sun. Tidal turbines capture the kinetic energy of moving water during flood and ebb tides, providing reliable generation during specific time windows. Wave energy supplements the system using oscillating water column (OWC) converters that harness the vertical motion of ocean surface waves. This complementary combination ensures continuous power availability, as wind patterns, tidal cycles, and wave activities occur at different times, providing excellent temporal diversity. The coastal geography makes this multi-source approach particularly viable, with average annual capacity factors of 35% for wind, 25% for tidal, and 20% for wave energy.
              </div>
            </details>
          </div>

          {/* Conversion Process */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Conversion Process</h3>
            <details className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/20 transition-all duration-300 hover:scale-[1.01]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-slate-100 font-medium">How energy is converted — expand for details</span>
                <span className="text-cyan-300 text-sm">Expand</span>
              </summary>
              <div className="mt-3 text-slate-200 leading-relaxed space-y-3 animate-fade-in">
                The conversion process begins with mechanical energy capture. Wind turbines convert wind's kinetic energy into rotational mechanical energy through aerodynamic blades, typically achieving 35-45% efficiency. Tidal turbines operate similarly underwater, with bi-directional blades accommodating flood and ebb flows. Wave energy converters use the OWC principle where rising waves compress air in a chamber, driving an air turbine. All three sources connect to permanent magnet synchronous generators (PMSG) producing variable-frequency AC power (20-60 Hz). This variable output passes through AC-DC rectifiers, converting it to DC power. Maximum Power Point Tracking (MPPT) controllers optimize energy extraction from each source under varying conditions. The combined DC power charges the 100 kWh lithium-ion battery bank (400V DC) managed by a Battery Management System (BMS) ensuring safe operation and longevity. A bidirectional inverter (50 kW capacity, 96% efficiency) converts stored DC to stable 230V AC at 50Hz. The Energy Management System (EMS) intelligently coordinates power flow, prioritizing wind energy, supplementing with tidal/wave sources, and drawing from batteries during deficits, maintaining continuous 50 kW supply to the clinic.
              </div>
            </details>
          </div>

          {/* Output/Utilization */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Output & Utilization</h3>
            <details className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/20 transition-all duration-300 hover:scale-[1.01]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-slate-100 font-medium">Performance & loads — expand</span>
                <span className="text-cyan-300 text-sm">Open</span>
              </summary>
              <div className="mt-3 text-slate-200 leading-relaxed space-y-3 animate-fade-in">
                The system delivers stable 230V AC power at 50Hz frequency with total harmonic distortion below 3%, meeting medical-grade power quality standards. Peak output capacity reaches 70 kW from combined sources, with 50 kW allocated to clinic loads and 20 kW for battery charging during high-generation periods. The health clinic's electrical loads include critical medical equipment (X-ray, ultrasound, laboratory instruments) drawing 15 kW, HVAC systems consuming 12 kW for maintaining sterile environments and vaccine storage, LED lighting requiring 5 kW, vaccine refrigeration units (8 kW), and computers/communication systems (10 kW). The 100 kWh battery provides 8-10 hours of backup autonomy during low-generation periods. Smart load management ensures priority power allocation: critical medical equipment receives uninterruptible power, while non-essential loads like HVAC can be temporarily curtailed during severe energy deficits. The system maintains 99.5% uptime annually, with automatic islanding capability during maintenance. Real-time monitoring displays generation from each source, battery state-of-charge, and load consumption, enabling proactive energy management and early fault detection for optimal clinic operations.
              </div>
            </details>
          </div>

          {/* Real-World Application */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Real-World Application Relevance</h3>
            <details className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/20 transition-all duration-300 hover:scale-[1.01]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-slate-100 font-medium">Why this matters — expand for context</span>
                <span className="text-cyan-300 text-sm">Details</span>
              </summary>
              <div className="mt-3 text-slate-200 leading-relaxed space-y-3 animate-fade-in">
                This hybrid system addresses critical energy access challenges in remote coastal communities where grid extension is economically unviable (costing $15,000-30,000 per km). Rural health clinics in such locations often rely on diesel generators, which are expensive (fuel costs $1.2-1.5 per liter), unreliable due to supply chain disruptions, and environmentally harmful (emitting 2.68 kg CO₂ per liter burned). This renewable system eliminates approximately 45,000 liters of annual diesel consumption, preventing 120 tons of CO₂ emissions yearly while providing cleaner, quieter operation essential for medical facilities. Initial capital costs ($250,000-300,000) are offset by zero fuel expenses and minimal maintenance requirements, achieving payback within 8-10 years versus diesel systems. The system's reliability is crucial for vaccine cold-chain maintenance, emergency surgeries, and maternal healthcare requiring uninterrupted power. Successfully demonstrated in coastal regions of Scotland, Philippines, and India, such hybrid systems improve healthcare delivery, reduce infant mortality by ensuring consistent vaccine storage, and support economic development by enabling 24/7 clinic operations, telecommunication services, and potential community load expansion.
              </div>
            </details>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
    <Card className="bg-gradient-to-br from-indigo-900/10 to-cyan-900/8 border-indigo-700/20 shadow-lg">
        <CardHeader>
          <CardTitle>Key Features & Advantages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <span className="text-muted-foreground">Clean, renewable energy with zero emissions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <span className="text-muted-foreground">Predictable energy generation (especially tidal)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <span className="text-muted-foreground">Suitable for coastal and offshore locations</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <span className="text-muted-foreground">Can be integrated with other renewable sources</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity1;
