import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Zap } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BiomassBlockDiagram } from "@/components/BlockDiagrams";

const Activity2 = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold mb-2 flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 via-green-500 to-teal-400 shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-emerald-500/25">
            <Leaf className="h-6 w-6 text-emerald-50" />
          </div>
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300 bg-clip-text text-transparent animate-pulse-slow">Activity 2: Biomass Energy</span>
        </h1>
        <p className="text-lg text-slate-200/90">
          Converting organic waste into sustainable energy
        </p>
      </div>

      {/* Topic Selection Alert */}
      <Alert className="bg-gradient-to-r from-emerald-900/60 via-green-900/50 to-teal-900/60 border border-emerald-500/30 text-slate-100 shadow-xl backdrop-blur-sm">
        <AlertDescription>
          <strong className="text-teal-200">Selected Topic:</strong> <span className="text-emerald-100">Design a biomass-based biogas generation system for a dairy farm handling 100 cattle with integrated power generation and organic fertilizer production.</span>
        </AlertDescription>
      </Alert>

      {/* Block Diagram Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">System Architecture & Block Diagram</CardTitle>
          <CardDescription>
            Detailed biogas generation and utilization system design
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/60 rounded-lg p-6 border border-slate-700/30 shadow-inner">
            <div className="space-y-6">
              {/* Block Diagram */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/70 rounded-lg p-6 border-2 border-emerald-900/20 shadow-md hover:scale-[1.01] transition-transform duration-200">
                <BiomassBlockDiagram />
                <div className="grid grid-cols-1 gap-4 text-center">
                  {/* Feedstock Collection */}
                  <div className="bg-brown-100 dark:bg-brown-900/50 p-4 rounded-lg border-2 border-amber-600">
                    <Leaf className="h-8 w-8 mx-auto mb-2 text-amber-700" />
                    <p className="font-bold">Feedstock Collection</p>
                    <p className="text-xs text-muted-foreground mt-1">Cattle Manure: 1500 kg/day + Crop Residue: 200 kg/day</p>
                  </div>

                  <div className="text-4xl text-green-500">↓</div>

                  {/* Mixing & Pre-treatment */}
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg border-2 border-blue-400">
                    <Recycle className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-bold">Mixing & Pre-treatment Tank</p>
                    <p className="text-xs text-muted-foreground mt-1">Grinding, Mixing with Water (1:1 ratio), pH Adjustment to 6.5-7.5</p>
                  </div>

                  <div className="text-4xl text-green-500">↓</div>

                  {/* Anaerobic Digester */}
                  <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg border-2 border-green-500">
                    <p className="font-bold">Anaerobic Digester (Fixed Dome Type)</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Volume: 50 m³ | Temperature: 35-37°C (Mesophilic) | Retention Time: 25-30 days
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Microbial Breakdown: Hydrolysis → Acidogenesis → Acetogenesis → Methanogenesis
                    </p>
                  </div>

                  <div className="text-4xl text-green-500">↓</div>

                  {/* Dual Output Path */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Biogas Path */}
                    <div className="space-y-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg border-2 border-yellow-500">
                        <p className="font-bold">Biogas Output</p>
                        <p className="text-xs text-muted-foreground mt-1">60-70% CH₄, 30-40% CO₂, Trace H₂S</p>
                        <p className="text-xs text-muted-foreground">Production: 40-50 m³/day</p>
                      </div>

                      <div className="text-4xl text-green-500">↓</div>

                      <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-lg border-2 border-purple-400">
                        <p className="font-bold">Gas Purification Unit</p>
                        <p className="text-xs text-muted-foreground mt-1">H₂S Removal (Iron oxide filter), Water Removal (Silica gel), CO₂ Scrubbing</p>
                      </div>

                      <div className="text-4xl text-green-500">↓</div>

                      <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-lg border-2 border-orange-500">
                        <Zap className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                        <p className="font-bold">Gas Engine Generator</p>
                        <p className="text-xs text-muted-foreground mt-1">Capacity: 25 kW | Efficiency: 30-35%</p>
                      </div>

                      <div className="text-4xl text-green-500">↓</div>

                      <div className="bg-red-100 dark:bg-red-900/50 p-4 rounded-lg border-2 border-red-400">
                        <p className="font-bold">Electrical Output</p>
                        <p className="text-xs text-muted-foreground mt-1">18-20 kW Continuous Power + Waste Heat Recovery</p>
                      </div>
                    </div>

                    {/* Digestate Path */}
                    <div className="space-y-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 p-4 rounded-lg border-2 border-emerald-500">
                        <p className="font-bold">Digestate Output</p>
                        <p className="text-xs text-muted-foreground mt-1">1400 kg/day Nutrient-rich Slurry</p>
                      </div>

                      <div className="text-4xl text-green-500">↓</div>

                      <div className="bg-teal-100 dark:bg-teal-900/50 p-4 rounded-lg border-2 border-teal-400">
                        <p className="font-bold">Solid-Liquid Separator</p>
                        <p className="text-xs text-muted-foreground mt-1">Screw Press / Centrifuge Separation</p>
                      </div>

                      <div className="text-4xl text-green-500">↓</div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-lime-100 dark:bg-lime-900/50 p-3 rounded-lg border-2 border-lime-500">
                          <p className="font-bold text-sm">Solid Fraction</p>
                          <p className="text-xs text-muted-foreground mt-1">Composting for Soil Amendment</p>
                        </div>
                        <div className="bg-cyan-100 dark:bg-cyan-900/50 p-3 rounded-lg border-2 border-cyan-500">
                          <p className="font-bold text-sm">Liquid Fraction</p>
                          <p className="text-xs text-muted-foreground mt-1">Liquid Fertilizer (NPK rich)</p>
                        </div>
                      </div>

                      <div className="text-4xl text-green-500">↓</div>

                      <div className="bg-green-200 dark:bg-green-800/50 p-4 rounded-lg border-2 border-green-600">
                        <p className="font-bold">Organic Fertilizer Products</p>
                        <p className="text-xs text-muted-foreground mt-1">For Farm Use & Commercial Sale</p>
                      </div>
                    </div>
                  </div>

                  {/* End Uses */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 p-4 rounded-lg border-2 border-green-400 mt-4">
                    <p className="font-bold text-lg">Integrated Farm Benefits</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Electricity: Dairy equipment, lighting, cooling | Heat: Water heating, space heating | Fertilizer: Crop cultivation, soil enrichment
                    </p>
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
            Detailed description of biomass conversion and energy production
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Source of Energy */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Source of Energy</h3>
            <details className="bg-gradient-to-br from-slate-900/90 to-emerald-900/40 p-4 rounded-lg border border-emerald-500/20 transition-all duration-300 hover:scale-[1.01] backdrop-blur-sm">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-emerald-100 font-medium">Feedstock overview — expand</span>
                <span className="text-teal-300 text-sm hover:text-teal-200">Show</span>
              </summary>
              <div className="mt-3 text-emerald-100 leading-relaxed space-y-3 animate-fade-in">
                The primary energy source is cattle manure (dung) from 100 dairy cattle, generating approximately 1,500 kg per day at an average of 15 kg per animal daily. This organic waste contains abundant carbohydrates, proteins, and lipids suitable for microbial decomposition, with total solid content of 16-18% and volatile solids comprising 80-85% of total solids. The chemical energy embedded in these organic compounds represents approximately 0.38-0.45 m³ of biogas potential per kg of volatile solids. Supplementary feedstock includes agricultural crop residues (200 kg/day) such as corn stalks, wheat straw, and vegetable waste from the farm, enhancing the carbon-to-nitrogen (C:N) ratio optimization to ideal range of 25:1 to 30:1, improving digestion efficiency. Fresh manure is collected twice daily during milking operations using automated scraping systems or manual collection from barns and holding areas. The consistent, year-round availability of cattle waste ensures reliable feedstock supply, unlike seasonal agricultural residues. This integrated approach converts problematic farm waste, which would otherwise cause environmental pollution and greenhouse gas emissions, into valuable energy resource while maintaining farm cleanliness and biosecurity standards essential for dairy operations.
              </div>
            </details>
          </div>

          {/* Conversion Process */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Conversion Process</h3>
            <details className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/20 transition-all duration-300 hover:scale-[1.01]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-slate-100 font-medium">Digestion & conversion — expand</span>
                <span className="text-amber-200 text-sm">Open</span>
              </summary>
              <div className="mt-3 text-slate-200 leading-relaxed space-y-3 animate-fade-in">
                The conversion occurs through anaerobic digestion within a fixed-dome digester (50 m³ capacity), where collected manure is mixed with equal parts water and ground crop residue, creating a homogeneous slurry with 8-10% total solids content optimal for mesophilic digestion. The slurry enters the sealed, oxygen-free digester maintained at 35-37°C using waste heat from the generator and passive solar heating during daytime. The biochemical conversion proceeds through four sequential stages: hydrolysis breaks down complex polymers into simple sugars and amino acids; acidogenesis converts these into volatile fatty acids and alcohols; acetogenesis produces acetate, hydrogen, and carbon dioxide; finally, methanogenesis by methanogenic archaea produces methane (CH₄) and CO₂. The hydraulic retention time of 25-30 days ensures complete digestion. Produced biogas (60-70% methane, 30-40% CO₂, trace H₂S) exits the digester at 40-50 m³/day production rate. Purification removes corrosive hydrogen sulfide using iron oxide filters, moisture via silica gel dryers, and optionally scrubs CO₂ to enhance methane concentration to 85-95%. The cleaned biogas fuels a 25 kW spark-ignition gas engine coupled to a three-phase alternator, generating 18-20 kW electrical power at 30-35% conversion efficiency. Exhaust heat recovery (35-40% of input energy) provides hot water for farm processes, achieving overall system efficiency of 65-75%.
              </div>
            </details>
          </div>

          {/* Output/Utilization */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Output & Utilization</h3>
            <details className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/20 transition-all duration-300 hover:scale-[1.01]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-slate-100 font-medium">Products & benefits — expand</span>
                <span className="text-amber-200 text-sm">Details</span>
              </summary>
              <div className="mt-3 text-slate-200 leading-relaxed space-y-3 animate-fade-in">
                The system produces dual valuable outputs: energy and organic fertilizer. Electrical output of 18-20 kW operates continuously, generating approximately 450 kWh daily, sufficient to power the dairy farm's milking machines (8 kW), milk cooling/refrigeration systems (6 kW), lighting for barns and premises (3 kW), and water pumps (2 kW), with surplus electricity offsetting grid consumption or feeding back via net-metering arrangements. Thermal energy recovery captures 30-35 kW of heat from engine exhaust and cooling systems, used for heating water to 60-70°C for cleaning milking equipment, sanitizing facilities, and providing space heating during cold seasons, reducing propane/diesel heating costs by 70-80%. The digestate byproduct (1,400 kg/day) emerges as nutrient-rich organic fertilizer containing elevated nitrogen (N: 2-3%), phosphorus (P: 1-2%), and potassium (K: 1-2%) compared to raw manure, plus beneficial microorganisms and humus. After solid-liquid separation, the solid fraction undergoes composting for direct soil application, improving soil structure, water retention, and microbial activity. The liquid fraction serves as liquid fertilizer for irrigation fertig ation systems. Applied to the farm's 20-hectare fodder crop cultivation, the digestate reduces chemical fertilizer purchases by $8,000-10,000 annually while improving crop yields by 15-20% and enhancing soil health sustainably.
              </div>
            </details>
          </div>

          {/* Real-World Application */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Real-World Application Relevance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dairy farm biogas systems address multiple sustainability challenges simultaneously, making them increasingly popular worldwide, with over 500,000 installations in India, 10,000 in Germany, and growing adoption in USA, Brazil, and New Zealand. The system solves critical waste management problems; untreated cattle manure produces potent methane emissions (25x more harmful than CO₂ as greenhouse gas) and pollutes groundwater through nutrient leaching. Biogas capture prevents approximately 180 tons of CO₂-equivalent emissions annually per 100-cow farm while eliminating odor nuisances affecting nearby communities. Economic benefits are substantial: the system saves $15,000-20,000 annually in energy costs (electricity and heating fuel), reduces fertilizer expenses by $8,000-10,000, and potentially generates additional income through carbon credit sales ($2,000-3,000/year) and surplus electricity feed-in tariffs. Initial investment ($80,000-120,000) achieves payback within 5-7 years with government subsidies available in many countries covering 30-50% of costs. The system enhances farm energy security, particularly valuable for remote rural operations, while improving biosecurity by pathogen reduction during digestion process (killing 99% of pathogens at thermophilic temperatures). Successfully implemented models exist globally, demonstrating reliable 20-year operational lifespans with minimal maintenance, supporting sustainable intensification of dairy farming essential for feeding growing populations while meeting climate commitments.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
  <Card className="bg-gradient-to-br from-emerald-900/10 to-green-900/8 border-emerald-700/20 shadow-lg">
        <CardHeader>
          <CardTitle>Key Features & Advantages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <span className="text-muted-foreground">Converts waste into valuable energy resource</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <span className="text-muted-foreground">Produces high-quality organic fertilizer as byproduct</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <span className="text-muted-foreground">Reduces methane emissions from decomposing waste</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
              <span className="text-muted-foreground">Provides decentralized energy for rural areas</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity2;
