import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WorldMap from "../components/WorldMap";

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container-width section-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center">
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
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Digital</span> {t("hero.title").replace("Digital ", "")}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-light mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-semibold hover:from-primary-dark hover:to-accent-dark transition-all duration-300 rounded-lg shadow-lg shadow-primary/20"
              >
                {t("hero.contact")}
              </a>
              <a
                href="#platform"
                className="inline-block px-8 py-4 border-2 border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 rounded-lg"
              >
                {t("hero.explore")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-dark-light">
        <div className="container-width">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center">
            <span className="gradient-text">{t("about.title")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">{t("about.mission")}</h3>
              <p className="text-gray-light leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>
            <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">{t("about.vision")}</h3>
              <p className="text-gray-light leading-relaxed">
                {t("about.visionText")}
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-light leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* AshMOP Platform Section */}
      <section id="platform" className="section-padding bg-dark">
        <div className="container-width">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            <span className="gradient-text">{t("platform.title")}</span>
          </h2>
          <p className="text-lg text-gray-light mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            {t("platform.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-dark">{num}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {t(`platform.modules.${num}.title`)}
                </h4>
                <p className="text-gray-light leading-relaxed mb-4">
                  {t(`platform.modules.${num}.description`)}
                </p>
                <a href="#contact" className="text-primary hover:text-primary-light text-sm font-medium inline-flex items-center">
                  {t("platform.learnMore")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipyard Integration Section */}
      <section id="integration" className="section-padding bg-dark-light">
        <div className="container-width">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            <span className="gradient-text">{t("integration.title")}</span>
          </h2>
          <p className="text-lg text-gray-light mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            {t("integration.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
              <h4 className="text-xl font-bold text-white mb-4">{t("integration.production.title")}</h4>
              <p className="text-gray-light leading-relaxed mb-4">
                {t("integration.production.description")}
              </p>
              <a href="#contact" className="text-primary hover:text-primary-light text-sm font-medium inline-flex items-center">
                {t("platform.learnMore")}
              </a>
            </div>
            <div className="bg-dark-lighter p-8 rounded-xl border border-dark-lighter card-hover">
              <h4 className="text-xl font-bold text-white mb-4">{t("integration.operations.title")}</h4>
              <p className="text-gray-light leading-relaxed mb-4">
                {t("integration.operations.description")}
              </p>
              <a href="#contact" className="text-primary hover:text-primary-light text-sm font-medium inline-flex items-center">
                {t("platform.learnMore")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="section-padding bg-dark">
        <div className="container-width">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            <span className="gradient-text">{t("stakeholders.title")}</span>
          </h2>
          <p className="text-lg text-gray-light mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            {t("stakeholders.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.shipyards")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.shipyardsDesc")}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.owners")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.ownersDesc")}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.operators")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.operatorsDesc")}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.engineers")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.engineersDesc")}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.insurers")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.insurersDesc")}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.class")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.classDesc")}
              </p>
            </div>

            <div className="bg-dark-lighter p-6 rounded-xl border border-dark-lighter card-hover">
              <h4 className="font-bold text-white mb-2">{t("stakeholders.oems")}</h4>
              <p className="text-sm text-gray-light leading-relaxed">
                {t("stakeholders.oemsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Footprint Section */}
      <section id="regions" className="section-padding bg-dark-light">
        <div className="container-width">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            <span className="gradient-text">{t("regions.title")}</span>
          </h2>
          <p className="text-lg text-gray-light mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            {t("regions.description")}
          </p>

          {/* Interactive World Map */}
          <div className="bg-dark-lighter rounded-xl p-6 border border-dark-lighter">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-dark">
        <div className="container-width">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
            <span className="gradient-text">{t("contact.title")}</span>
          </h2>
          <p className="text-lg text-gray-light mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            {t("contact.description")}
          </p>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

