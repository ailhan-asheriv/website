import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "Privacy Policy",
    subtitle: "Website privacy policy",
    lastUpdated: "Last updated: June 2026",
    note:
      "This policy covers the asheriv.com marketing website, contact forms, and general site analytics. It does not cover personal data processed inside ASHFI, ASHMOP, or other Asheriv products, which are governed by separate product privacy terms provided to registered users.",
    sections: [
      {
        heading: "1. Who we are",
        body: "A'SHERIV Intelligent Marine Technologies Ltd. (\"A'SHERIV\", \"we\", \"us\") is the data controller for personal data collected through this website. Contact: info@asheriv.com.",
      },
      {
        heading: "2. What we collect on this website",
        body: "When you use our contact forms or request information, we may collect your name, email address, company name, job role, and message content. We also collect limited technical data such as IP address, browser type, and pages visited, primarily through server logs and essential cookies.",
      },
      {
        heading: "3. How we use website data",
        body: "We use this information to respond to inquiries, improve the website, and understand aggregate interest in our products. We do not sell personal data collected through this website.",
      },
      {
        heading: "4. Cookies and analytics",
        body: "This website uses essential cookies where needed for basic functionality. We do not currently run third-party advertising or analytics cookies on asheriv.com. See our Cookie Policy for details.",
        linkHref: "/cookies",
        linkLabel: "Cookie Policy",
      },
      {
        heading: "5. Legal basis",
        body: "We process contact form data based on legitimate interests in responding to business inquiries, and where applicable, steps taken at your request before entering a contract. Where consent is required, we will ask for it explicitly.",
      },
      {
        heading: "6. Retention",
        body: "Contact form submissions are typically retained for up to three years from last contact, or until you request deletion, unless a longer period is required by law.",
      },
      {
        heading: "7. Your rights",
        body: "Depending on applicable law, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object to certain processing. Contact info@asheriv.com to exercise these rights. UK residents may also complain to the ICO at ico.org.uk.",
      },
      {
        heading: "8. Product data",
        body: "If you are an ASHFI or ASHMOP user, product-specific privacy terms apply to vessel analysis data, account information, and fleet data processed inside those platforms. Contact info@asheriv.com or refer to your product agreement for details.",
        linkHref: "/ashfi",
        linkLabel: "ASHFI product page",
      },
      {
        heading: "9. Changes",
        body: "We may update this website Privacy Policy from time to time. Material changes will be posted on this page with an updated date.",
      },
    ],
  },
  tr: {
    title: "Gizlilik Politikasi",
    subtitle: "Web sitesi gizlilik politikasi",
    lastUpdated: "Son guncelleme: Haziran 2026",
    note:
      "Bu politika asheriv.com pazarlama web sitesini, iletisim formlarini ve genel site analitigini kapsar. ASHFI, ASHMOP veya diger Asheriv urunleri icinde islenen kisisel verileri kapsamaz; bunlar kayitli kullanicilara saglanan ayri urun gizlilik kosullarina tabidir.",
    sections: [
      {
        heading: "1. Biz kimiz",
        body: "A'SHERIV Intelligent Marine Technologies Ltd. (\"A'SHERIV\", \"biz\"), bu web sitesi uzerinden toplanan kisisel veriler icin veri sorumlusudur. Iletisim: info@asheriv.com.",
      },
      {
        heading: "2. Bu web sitesinde ne topluyoruz",
        body: "Iletisim formlarimizi kullandiginizda veya bilgi talep ettiginizde adiniz, e-posta adresiniz, sirket adiniz, unvaniniz ve mesaj iceriginiz toplanabilir. Ayrica IP adresi, tarayici turu ve ziyaret edilen sayfalar gibi sinirli teknik veriler, agirlikli olarak sunucu gunlukleri ve gerekli cerezler araciligiyla toplanir.",
      },
      {
        heading: "3. Web sitesi verilerini nasil kullaniyoruz",
        body: "Bu bilgileri sorulara yanit vermek, web sitesini iyilestirmek ve urunlerimize yonelik toplu ilgiyi anlamak icin kullaniriz. Bu web sitesi uzerinden toplanan kisisel verileri satmiyoruz.",
      },
      {
        heading: "4. Cerezler ve analitik",
        body: "Bu web sitesi temel islevsellik icin gerekli cerezleri kullanir. asheriv.com uzerinde su anda ucuncu taraf reklam veya analitik cerezleri calistirmiyoruz. Ayrintilar icin Cerez Politikamiza bakin.",
        linkHref: "/cookies",
        linkLabel: "Cerez Politikasi",
      },
      {
        heading: "5. Hukuki dayanak",
        body: "Iletisim formu verilerini, is sorularina yanit verme konusundaki meşru menfaatlerimize dayanarak ve uygun oldugunda, sozlesme oncesinde talebiniz uzerine atilan adimlara dayanarak isleriz. Onay gerektiginde bunu acikca isteriz.",
      },
      {
        heading: "6. Saklama",
        body: "Iletisim formu gonderimleri, yasalar daha uzun bir sure gerektirmedikce, son iletisimden itibaren tipik olarak uc yila kadar veya silme talebinde bulunana kadar saklanir.",
      },
      {
        heading: "7. Haklariniz",
        body: "Uygulanabilir hukuka bagli olarak kisisel verilerinize erisme, duzeltme, silme veya islemeyi kisitlama ve belirli islemlere itiraz etme haklariniz olabilir. Bu haklari kullanmak icin info@asheriv.com adresine yazin. Birlesik Krallik sakinleri ayrica ico.org.uk uzerinden ICO'ya sikayette bulunabilir.",
      },
      {
        heading: "8. Urun verileri",
        body: "ASHFI veya ASHMOP kullanicisiysaniz, gemi analiz verileri, hesap bilgileri ve bu platformlar icinde islenen filo verileri icin urune ozel gizlilik kosullari gecerlidir. Ayrintilar icin info@asheriv.com adresine yazin veya urun sozlesmenize bakin.",
        linkHref: "/ashfi",
        linkLabel: "ASHFI urun sayfasi",
      },
      {
        heading: "9. Degisiklikler",
        body: "Bu web sitesi Gizlilik Politikasini zaman zaman guncelleyebiliriz. Onemli degisiklikler guncellenmis tarihle bu sayfada yayinlanacaktir.",
      },
    ],
  },
} as const;

export default async function PrivacyPage({
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
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              {c.title}
            </h1>
            <p className="text-sm text-[#00D4FF] mb-2">{c.subtitle}</p>
            <p className="text-sm text-[#CBD5E1] mb-6">{c.lastUpdated}</p>
            <p className="text-[#CBD5E1] leading-relaxed mb-8 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              {c.note}
            </p>
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
