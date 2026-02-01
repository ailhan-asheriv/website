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
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <Image
                src="/logo.png"
                alt="A'SHERIV"
                width={300}
                height={100}
                className="mx-auto"
                priority
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-maritime mb-8 leading-tight">
              A&apos;SHERIV MARITIME
            </h1>
            <p className="text-xl sm:text-2xl text-maritime/80 mb-6 leading-relaxed max-w-3xl mx-auto">
              Welcome to A&apos;SHERIV, a maritime technology company delivering digital twin systems and predictive intelligence for asset integrity, maintenance planning, and operational visibility across vessel lifecycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-maritime text-cream font-medium hover:bg-maritime/90 transition-colors duration-150"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-cream-light">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            ABOUT US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-maritime mb-4">Mission</h3>
              <p className="text-maritime/80 leading-relaxed">
                A&apos;SHERIV produces maritime operations platforms and digital twin systems that unify vessel data, telemetry, and operational decisions into structured intelligence layers. We enable shipyards, operators, and stakeholders to make data-driven decisions that support safer operations, reduced unplanned failures, and clearer accountability across the vessel lifecycle.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-maritime mb-4">Vision</h3>
              <p className="text-maritime/80 leading-relaxed">
                To create a maritime analytics value chain through digital twin systems and AI-driven risk analysis, supporting the next generation needs of shipyards, operators, and the broader maritime industry. We aim to establish digital twin adoption as standard practice for high-value maritime assets.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-3xl">
            <p className="text-lg text-maritime/80 leading-relaxed">
              A&apos;SHERIV works with shipyards, operators, owners, engineers, insurers, class societies, and OEMs to deploy operational platforms that integrate with existing production, maintenance, and inspection workflows.
            </p>
          </div>
        </div>
      </section>

      {/* EshMOP Platform Section */}
      <section id="platform" className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            ESHMOP
          </h2>
          <p className="text-lg text-maritime/80 mb-10 max-w-3xl leading-relaxed">
            EshMOP is A&apos;SHERIV&apos;s maritime operations platform that connects vessel assets, events, telemetry, and decisions into a consistent digital twin model. The platform supports role-based access and stakeholder-specific views, enabling each party to act on the same underlying source of operational truth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream-light p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                Digital Twin Workspace
              </h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                3D asset navigation, system drill-down, risk overlays, and lifecycle context for comprehensive vessel understanding.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                Telemetry & Health Monitoring
              </h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Health scoring from component → system → vessel with trend and anomaly signals for predictive maintenance planning.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                Operational Logs to Structured Data
              </h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Convert operational notes into measurable events, decisions, and evidence for traceability and compliance.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                Evidence Pack Builder
              </h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Time-window evidence exports for insurance, class, charterers, and internal audit with structured documentation.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                Shipyard Configuration System
              </h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Build specifications, BOM, QC checklists, and operational feedback loops from operations to design.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>

            <div className="bg-cream-light p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-3">
                Scenario Playback & Validation
              </h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Synthetic scenarios to validate workflows before live integrations and system deployments.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shipyard Integration Section */}
      <section id="integration" className="section-padding bg-cream-light">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            SHIPYARD INTEGRATION
          </h2>
          <p className="text-lg text-maritime/80 mb-6 max-w-3xl leading-relaxed">
            A&apos;SHERIV works with shipyards to deploy digital twin systems integrated with production, maintenance, and inspection workflows. Our approach extends beyond traditional vessel management, delivering detailed assessments that support informed decision-making and risk mitigation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-4">Production & Build</h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Build configuration, QC traceability, and delivery documentation integrated with operational systems. Shipyard build specifications, BOM management, and QC checklists connected to vessel operations.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>
            <div className="bg-cream p-8 border border-steel/20">
              <h4 className="text-xl font-serif font-semibold text-maritime mb-4">Operations & Maintenance</h4>
              <p className="text-maritime/80 leading-relaxed mb-4">
                Operational data feedback into design and build specifications. Telemetry monitoring, maintenance planning, log traceability, and decision support for operational fleets.
              </p>
              <a href="#contact" className="text-steel hover:text-maritime hover:underline text-sm font-medium">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            STAKEHOLDERS WE SERVE
          </h2>
          <p className="text-lg text-maritime/80 mb-10 max-w-3xl leading-relaxed">
            A&apos;SHERIV platforms are deployed across maritime operations, supporting shipyards, operators, owners, engineers, insurers, class societies, and OEMs with role-based access to operational data and decision support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Shipyards</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Build configuration, QC traceability, delivery documentation, and operational feedback into design.
              </p>
            </div>

            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Ship Owners & Managers</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Lifecycle visibility, cost and risk management, asset value protection.
              </p>
            </div>

            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Operators & Technical Teams</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Operational health monitoring, maintenance planning, log traceability.
              </p>
            </div>

            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Chief Engineers & Crew</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Structured workflows, reduced manual overhead, operational decision support.
              </p>
            </div>

            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Insurers</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Evidence-based risk assessment, claims support, exposure reduction.
              </p>
            </div>

            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">Class & Flag</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Audit-ready evidence packages, survey readiness indicators.
              </p>
            </div>

            <div className="bg-cream-light p-6 border border-steel/20">
              <h4 className="font-serif font-semibold text-maritime mb-2">OEMs & Service Providers</h4>
              <p className="text-sm text-maritime/70 leading-relaxed">
                Performance insights, warranty context, targeted interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Footprint Section */}
      <section id="regions" className="section-padding bg-cream-light">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            GEOGRAPHIC OPERATING FOOTPRINT
          </h2>
          <p className="text-lg text-maritime/80 mb-10 max-w-3xl leading-relaxed">
            A&apos;SHERIV operates across Türkiye, the United Kingdom, and the United Arab Emirates, enabling cross-border delivery and compliance with regional maritime and industrial requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 border border-steel/20">
              <h3 className="text-xl font-serif font-semibold text-maritime mb-4">Türkiye</h3>
              <p className="text-maritime/80 leading-relaxed">
                Field partnerships and production ecosystem alignment. Shipyard and operational stakeholder implementations.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h3 className="text-xl font-serif font-semibold text-maritime mb-4">United Kingdom</h3>
              <p className="text-maritime/80 leading-relaxed">
                Platform development, productisation, and partner-led delivery.
              </p>
            </div>

            <div className="bg-cream p-8 border border-steel/20">
              <h3 className="text-xl font-serif font-semibold text-maritime mb-4">United Arab Emirates</h3>
              <p className="text-maritime/80 leading-relaxed">
                Regional operations, commercial partnerships, and international delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-cream">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
            CONTACT
          </h2>
          <p className="text-lg text-maritime/80 mb-12 max-w-3xl leading-relaxed">
            For shipyards, operators, owners, insurers, class organisations, or OEMs exploring digital twin systems and predictive maintenance platforms, contact A&apos;SHERIV to discuss integration and deployment requirements.
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
