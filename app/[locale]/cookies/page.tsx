import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        heading: "1. What are cookies",
        body: "Cookies are small text files stored on your device when you visit a website. They help the site remember basic preferences and understand how pages are used.",
      },
      {
        heading: "2. Cookies we use",
        body: "The asheriv.com website currently uses only essential cookies required for basic site operation, such as locale or session preferences where applicable. We do not currently deploy third-party advertising cookies on this website.",
      },
      {
        heading: "3. Analytics",
        body: "We may introduce privacy-conscious analytics in the future to understand aggregate site usage. If we do, this policy will be updated and any non-essential analytics cookies will be described here before use.",
      },
      {
        heading: "4. Third-party services",
        body: "Our website is hosted on standard cloud infrastructure. Hosting providers may process technical logs that are not marketing cookies but are necessary to deliver the site securely. We do not currently use third-party analytics platforms such as Google Analytics on asheriv.com.",
      },
      {
        heading: "5. Controlling cookies",
        body: "You can control or delete cookies through your browser settings. Blocking all cookies may affect basic site functionality, such as locale preference.",
      },
      {
        heading: "6. Related policies",
        body: "For how we handle personal data collected through this website, see our Privacy Policy.",
        linkHref: "/privacy",
        linkLabel: "Privacy Policy",
      },
      {
        heading: "7. Contact",
        body: "Questions about cookies may be sent to info@asheriv.com.",
      },
    ],
  },
  tr: {
    title: "Cerez Politikasi",
    lastUpdated: "Son guncelleme: Haziran 2026",
    sections: [
      {
        heading: "1. Cerezler nedir",
        body: "Cerezler, bir web sitesini ziyaret ettiginizde cihazinizda saklanan kucuk metin dosyalaridir. Siteye temel tercihleri hatirlamasina ve sayfalarin nasil kullanildigini anlamasina yardimci olurlar.",
      },
      {
        heading: "2. Kullandigimiz cerezler",
        body: "asheriv.com web sitesi su anda yalnizca temel site islevi icin gerekli cerezleri, uygun oldugunda yerel ayar veya oturum tercihleri gibi, kullanmaktadir. Bu web sitesinde su anda ucuncu taraf reklam cerezleri kullanmiyoruz.",
      },
      {
        heading: "3. Analitik",
        body: "Gelecekte toplu site kullanimini anlamak icin gizlilik odakli analitik araclari devreye alabiliriz. Bunu yaparsak bu politika guncellenecek ve gerekli olmayan analitik cerezler kullanilmadan once burada aciklanacaktir.",
      },
      {
        heading: "4. Ucuncu taraf hizmetler",
        body: "Web sitemiz standart bulut altyapisinda barindirilmaktadir. Barindirma saglayicilari, siteyi guvenli sekilde sunmak icin gerekli olan teknik gunlukleri isleyebilir. asheriv.com uzerinde su anda Google Analytics gibi ucuncu taraf analitik platformlari kullanmiyoruz.",
      },
      {
        heading: "5. Cerezleri kontrol etme",
        body: "Tarayici ayarlariniz uzerinden cerezleri kontrol edebilir veya silebilirsiniz. Tum cerezleri engellemek, yerel ayar tercihi gibi temel site islevlerini etkileyebilir.",
      },
      {
        heading: "6. Ilgili politikal",
        body: "Bu web sitesi uzerinden toplanan kisisel verilerin nasil islendigi icin Gizlilik Politikamiza bakin.",
        linkHref: "/privacy",
        linkLabel: "Gizlilik Politikasi",
      },
      {
        heading: "7. Iletisim",
        body: "Cerezler hakkindaki sorular info@asheriv.com adresine gonderilebilir.",
      },
    ],
  },
} as const;

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-12 min-h-screen bg-[#0A0F1E]">
        <div className="container-width section-padding">
          <div className="max-w-4xl">
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {c.title}
            </h1>
            <p className="text-sm text-[#CBD5E1] mb-8">{c.lastUpdated}</p>
            <div className="space-y-8">
              {c.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h2 className="text-xl font-bold text-white">{section.heading}</h2>
                  <p className="text-[#CBD5E1] leading-relaxed">{section.body}</p>
                  {"linkHref" in section && section.linkHref && (
                    <p>
                      <Link
                        href={section.linkHref}
                        locale={locale}
                        className="text-[#00D4FF] hover:underline"
                      >
                        {section.linkLabel}
                      </Link>
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
