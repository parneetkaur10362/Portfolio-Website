import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Droplets, ThermometerSun, Download } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { OTECBlockDiagram } from "@/components/BlockDiagrams";

const Activity3: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 flex items-center gap-3 text-slate-50">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 shadow-md flex items-center justify-center">
              <Flame className="h-6 w-6 text-white/95" />
            </div>
            <span>Activity 3 — OTEC & Geothermal</span>
          </h1>
          <p className="text-sm md:text-lg text-amber-200">Design, block diagram and system explanation for OTEC-based power + freshwater production.</p>
        </div>

        <div className="flex gap-3 items-center">
          <button
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md shadow"
            title="Download diagram SVG"
            onClick={() => {
              // placeholder: real download logic can be implemented in React with refs
              alert("Download SVG - implement export logic if needed");
            }}
          >
            <Download className="h-4 w-4" /> Export Diagram
          </button>
        </div>
      </header>

      <Alert className="bg-gradient-to-r from-amber-950/40 to-orange-950/30 border border-amber-800/20 text-amber-200 shadow-sm">
        <AlertDescription>
          <strong className="text-orange-300">Selected Topic:</strong>{' '}
          <span className="text-amber-200">OTEC block diagram for combined electricity & freshwater production</span>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">System Architecture</CardTitle>
          <CardDescription>Interactive block diagram and step-by-step explanation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-lg p-6 border border-slate-700/30 shadow-inner">
                  <OTECBlockDiagram />
                  {/* Flow-style large tiles (vertical) matching the requested visual style */}
                  <div className="mt-6">
                    <div className="space-y-6">
                      {/* Warm Surface Water (full-width tile) */}
                      <div className="rounded-xl p-8 bg-slate-700/60 border-2 border-amber-400/20 shadow-lg">
                        <div className="max-w-4xl mx-auto text-center">
                          <ThermometerSun className="h-8 w-8 mx-auto mb-2 text-amber-300" />
                          <h4 className="text-lg font-semibold text-slate-50">Warm Surface Water Intake</h4>
                          <p className="text-sm text-slate-300 mt-2">Depth: 20–30m · Temp: 26–28°C · Flow: ~2000 m³/hr</p>
                        </div>
                      </div>

                      <div className="flex justify-center text-3xl text-emerald-400">↓</div>

                      {/* Evaporator / Heat Exchanger */}
                      <div className="rounded-xl p-8 bg-slate-700/60 border-2 border-slate-600/30 shadow-lg">
                        <div className="max-w-4xl mx-auto text-center">
                          <div className="mb-2 text-amber-200">⚙️</div>
                          <h4 className="text-lg font-semibold text-slate-50">Evaporator (Heat Exchanger)</h4>
                          <p className="text-sm text-slate-300 mt-2">Warm seawater transfers heat to ammonia (NH₃), producing vapor that drives the turbine.</p>
                        </div>
                      </div>

                      <div className="flex justify-center text-3xl text-emerald-400">↓</div>

                      {/* Turbine & Generator (full width) */}
                      <div className="rounded-xl p-8 bg-slate-700/60 border-2 border-red-500/20 shadow-lg">
                        <div className="max-w-4xl mx-auto text-center">
                          <div className="mb-2 text-red-300">🔴</div>
                          <h4 className="text-lg font-semibold text-slate-50">Turbine & Generator</h4>
                          <p className="text-sm text-slate-300 mt-2">Ammonia vapor expands in the turbine, producing mechanical power that a generator converts to electricity (Gross ≈10 MW).</p>
                        </div>
                      </div>

                      <div className="flex justify-center text-3xl text-emerald-400">↓</div>

                      {/* Split: Electricity + Freshwater */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 bg-slate-700/60 border-2 border-blue-400/20 shadow-md">
                          <div className="text-center">
                            <div className="mb-2 text-blue-300">⚡</div>
                            <h5 className="font-semibold text-slate-50">Electricity</h5>
                            <p className="text-sm text-slate-300 mt-1">Net exportable power: 6–7 MW (after parasitic loads)</p>
                          </div>
                        </div>

                        <div className="rounded-xl p-6 bg-slate-700/60 border-2 border-cyan-400/20 shadow-md">
                          <div className="text-center">
                            <Droplets className="h-8 w-8 mx-auto mb-2 text-cyan-300" />
                            <h5 className="font-semibold text-slate-50">Freshwater (Desalination)</h5>
                            <p className="text-sm text-slate-300 mt-1">Flash evaporation or other desalination: ≈10,000–15,000 L/day</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center text-3xl text-emerald-400">↓</div>

                      {/* Transformer / Grid */}
                      <div className="rounded-xl p-6 bg-slate-700/60 border-2 border-indigo-500/20 shadow-lg">
                        <div className="max-w-4xl mx-auto text-center">
                          <div className="mb-2 text-indigo-300">🔌</div>
                          <h5 className="font-semibold text-slate-50">Power Transformer & Grid</h5>
                          <p className="text-sm text-slate-300 mt-1">Step-up/step-down for local grid integration and distribution</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="p-4 rounded-lg bg-amber-100/10 border border-amber-600/10">
                <h4 className="font-semibold text-amber-200">Quick facts</h4>
                <ul className="text-sm text-slate-300 mt-2 space-y-1">
                  <li>• Working fluid: Ammonia (NH₃)</li>
                  <li>• Gross capacity: ~10 MW</li>
                  <li>• Net output: 6–7 MW (after pumps)</li>
                  <li>• Freshwater: 10k–15k L/day</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/30">
                <h4 className="font-semibold text-amber-200">Intakes</h4>
                <p className="text-sm text-slate-300 mt-2">Warm surface intake (20–30m) and cold deep intake (800–1000m) supply heat exchangers. Proper intake design reduces biofouling and intake losses.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/30">
                <h4 className="font-semibold text-amber-200">Operation</h4>
                <p className="text-sm text-slate-300 mt-2">Warm seawater vaporizes ammonia in the evaporator → turbine turns generator → condenser uses cold deep seawater → working fluid pump closes loop.</p>
              </div>
            </aside>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">System Explanation</CardTitle>
          <CardDescription>Detailed description of energy source, conversion, and application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Source of Energy */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-emerald-500">Source of Energy</h3>
            <details className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/30">
              <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 rounded-md bg-slate-700/60">
                <span className="text-slate-100">Overview — click to expand</span>
                <span className="text-emerald-300 text-sm">Show more</span>
              </summary>
              <div className="mt-3 text-slate-200 text-sm leading-relaxed">
                Ocean Thermal Energy Conversion (OTEC) exploits the temperature difference between warm surface seawater (≈26–28°C) and cold deep seawater (≈4–6°C). Tropical and subtropical regions with sufficient delta-T (&gt;20°C) and accessible deep water are best suited. The ocean acts as a vast, solar-heated thermal reservoir providing continuous baseload energy.
              </div>
            </details>
          </div>

          {/* Conversion Process */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-emerald-500">Conversion Process</h3>
            <details className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/30">
              <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 rounded-md bg-slate-700/60">
                <span className="text-slate-100">How energy is converted — expand for details</span>
                <span className="text-emerald-300 text-sm">Expand</span>
              </summary>
              <div className="mt-3 text-slate-200 text-sm leading-relaxed">
                The system uses a closed Rankine cycle with ammonia as the working fluid. Warm water evaporates the working fluid in a heat exchanger; vapor drives an axial turbine coupled to a generator; cold deep water condenses the vapor; a pump returns liquid to the evaporator. Key mechanical components include intake pumps, titanium heat exchangers, turbines and condensers.
              </div>
            </details>
          </div>

          {/* Output & Utilization */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-emerald-500">Output & Utilization</h3>
            <details className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/30">
              <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 rounded-md bg-slate-700/60">
                <span className="text-slate-100">Performance & loads — expand</span>
                <span className="text-emerald-300 text-sm">Open</span>
              </summary>
              <div className="mt-3 text-slate-200 text-sm leading-relaxed">
                Typical gross output for mid-size OTEC units is ≈10 MW with parasitic loads (pumps) consuming 30–40%. Net exportable power is 6–7 MW. Co-products include freshwater via flash desalination (≈10k–15k L/day), cold seawater for district cooling, and aquaculture support using nutrient-rich deep water.
              </div>
            </details>
          </div>

          {/* Real-World Application Relevance */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-emerald-500">Real-World Application Relevance</h3>
            <details className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/30">
              <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 rounded-md bg-slate-700/60">
                <span className="text-slate-100">Why this matters — expand for context</span>
                <span className="text-emerald-300 text-sm">Details</span>
              </summary>
              <div className="mt-3 text-slate-200 text-sm leading-relaxed">
                OTEC provides continuous baseload power suitable for island grids, reduces reliance on diesel, and supplies freshwater — improving resilience and lowering long-term energy and water costs. Considerations include environmental impact of intakes/discharges, capital costs, and maintenance access.
              </div>
            </details>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity3;
