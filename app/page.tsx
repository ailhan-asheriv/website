import Image from "next/image";
import Navigation from "./components/Navigation";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-cream">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <Image
                src="/logo.png"
                alt="A'SHERIV"
                width={300}
                height={100}
                className="mx-auto"
                priority
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-maritime mb-8 leading-tight">
                Maritime Operations Platform
              </h1>
              <p className="text-xl sm:text-2xl text-maritime/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                Digital twin systems and predictive intelligence for asset integrity and operational visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#platform"
                  className="inline-block px-8 py-3 bg-maritime text-cream font-medium hover:bg-maritime/90 transition-colors duration-150"
                >
                  Platform Overview
                </a>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 border border-steel/40 text-maritime font-medium hover:border-steel transition-colors duration-150"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What A'SHERIV Delivers Section */}
      <section id="delivers" className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            What A&apos;SHERIV Delivers
          </h2>
          <p className="text-lg text-maritime/80 mb-6 max-w-3xl leading-relaxed">
            Maritime operations platforms that unify vessel data, telemetry, and decisions into structured digital twin systems with AI-driven risk and degradation analysis.
          </p>
          <ul className="space-y-3 max-w-3xl">
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Operational visibility across voyage phases and maintenance cycles
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Predictive maintenance signals from telemetry and structured logs
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Evidence packages for insurance, class readiness, and audit trails
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Modular deployment: integrate by system and stakeholder requirement
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="section-padding bg-cream-light">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            Maritime Operations Platform
          </h2>
          <p className="text-lg text-maritime/80 mb-10 max-w-3xl leading-relaxed">
            EshMOP connects vessel assets, events, telemetry, and decisions into a consistent digital twin model with role-based access for shipyards, operators, engineers, and regulatory parties.
          </p>

          <h3 className="text-2xl font-serif font-semibold text-maritime mb-8">Core System Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                1) Digital Twin Workspace
              </h4>
              <p className="text-maritime/80 leading-relaxed">
                3D asset navigation, system drill-down, risk overlays, and lifecycle context.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                2) Telemetry & Health Monitoring
              </h4>
              <p className="text-maritime/80 leading-relaxed">
                Health scoring from component → system → vessel with trend and anomaly signals.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                3) Operational Logs to Structured Data
              </h4>
              <p className="text-maritime/80 leading-relaxed">
                Convert operational notes into measurable events, decisions, and evidence.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                4) Evidence Pack Builder
              </h4>
              <p className="text-maritime/80 leading-relaxed">
                Time-window evidence exports for insurance, class, charterers, and audit.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                5) Shipyard Configuration System
              </h4>
              <p className="text-maritime/80 leading-relaxed">
                Build specifications, BOM, QC checklists, and operational feedback loops.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                6) Scenario Playback & Validation
              </h4>
              <p className="text-maritime/80 leading-relaxed">
                Synthetic scenarios to validate workflows before live integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipyard & Operational Integration Section */}
      <section id="integration" className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            Shipyard & Operational Integration
          </h2>
          <p className="text-lg text-maritime/80 mb-6 max-w-3xl leading-relaxed">
            A&apos;SHERIV works with shipyards and operational partners to deploy digital twin systems integrated with production, maintenance, and inspection workflows.
          </p>
          <ul className="space-y-3 max-w-3xl mb-10">
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Shipyard build configuration and QC traceability from production through delivery
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Operational data feedback into design and build specifications
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Integration with existing industrial systems and maintenance workflows
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Asset integrity monitoring and predictive maintenance planning
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-steel mr-4 mt-1 text-xl">•</span>
              <span className="text-maritime/80 leading-relaxed">
                Compliance documentation and evidence packages for regulatory requirements
              </span>
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-3">Production & Build</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Build specifications, BOM management, QC checklists, and delivery documentation.
              </p>
            </div>
            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-3">Operations & Maintenance</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Telemetry monitoring, maintenance planning, log traceability, and decision support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="section-padding bg-cream-light">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            Stakeholders We Serve
          </h2>
          <p className="text-lg text-maritime/80 mb-10 max-w-3xl leading-relaxed">
            A&apos;SHERIV platforms support shipyards, operators, owners, engineers, insurers, class societies, and OEMs with role-based access to operational data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Shipyards</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Build configuration, QC traceability, delivery documentation, and operational feedback.
              </p>
            </div>

            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Ship Owners & Managers</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Lifecycle visibility, cost and risk management, asset value protection.
              </p>
            </div>

            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Operators & Technical Teams</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Operational health monitoring, maintenance planning, log traceability.
              </p>
            </div>

            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Chief Engineers & Crew</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Structured workflows, reduced manual overhead, operational decision support.
              </p>
            </div>

            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Insurers</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Evidence-based risk assessment, claims support, exposure reduction.
              </p>
            </div>

            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Class & Flag</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Audit-ready evidence packages, survey readiness indicators.
              </p>
            </div>

            <div className="bg-cream p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">OEMs & Service Providers</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Performance insights, warranty context, targeted interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            Geographic Operating Footprint
          </h2>
          <p className="text-lg text-maritime/80 mb-10 max-w-3xl leading-relaxed">
            A&apos;SHERIV operates across Türkiye, the United Kingdom, and the United Arab Emirates, enabling cross-border delivery and regional compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-light p-8 border border-steel/20">
              <h3 className="text-xl font-serif font-semibold text-maritime mb-4">Türkiye</h3>
              <p className="text-maritime/80 leading-relaxed">
                Field partnerships and production ecosystem alignment. Shipyard and operational implementations.
              </p>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h3 className="text-xl font-serif font-semibold text-maritime mb-4">United Kingdom</h3>
              <p className="text-maritime/80 leading-relaxed">
                Platform development, productisation, and partner-led delivery.
              </p>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h3 className="text-xl font-serif font-semibold text-maritime mb-4">United Arab Emirates</h3>
              <p className="text-maritime/80 leading-relaxed">
                Regional operations, commercial partnerships, and international delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-cream-light">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            Contact
          </h2>
          <p className="text-lg text-maritime/80 mb-12 max-w-3xl leading-relaxed">
            For shipyards, operators, owners, insurers, class organisations, or OEMs exploring digital twin systems, contact A&apos;SHERIV to discuss integration and deployment requirements.
          </p>
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
