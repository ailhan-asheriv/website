import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "../../../lib/routing";

const content = {
  en: {
    title: "Terms of Use",
    lastUpdated: "Last updated: June 2026",
    backLabel: "Back to Home",
    sections: [
      {
        heading: "1. Scope",
        body: "These Terms of Use govern your access to and use of the asheriv.com website operated by A'SHERIV Intelligent Marine Technologies Ltd. They do not govern use of ASHFI, ASHMOP, SIM, or other Asheriv products, which are subject to separate product terms.",
      },
      {
        heading: "2. Acceptable use",
        body: "You may use this website for lawful purposes only. You must not attempt to gain unauthorised access to our systems, interfere with the website's operation, scrape content at scale without permission, or use the site in any way that could harm Asheriv, its users, or third parties.",
      },
      {
        heading: "3. Intellectual property",
        body: "All content on this website, including text, graphics, logos, and design, is owned by or licensed to A'SHERIV unless otherwise stated. You may not copy, reproduce, or redistribute website content for commercial purposes without our prior written consent.",
      },
      {
        heading: "4. Disclaimer of warranties",
        body: "Website content is provided for general information only. We make no warranties, express or implied, about the accuracy, completeness, or suitability of website content for any particular purpose. Product capabilities described on this site are subject to change.",
      },
      {
        heading: "5. Limitation of liability",
        body: "To the fullest extent permitted by law, A'SHERIV shall not be liable for any indirect, incidental, or consequential losses arising from your use of this website. Nothing in these terms excludes liability that cannot be excluded under applicable law.",
      },
      {
        heading: "6. Governing law",
        body: "These Terms of Use are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      },
      {
        heading: "7. Product terms",
        body: "Users of ASHFI and other Asheriv products are subject to separate product Terms of Service and Privacy Policy provided at registration or upon request. For ASHFI, see the product page or contact info@asheriv.com.",
        linkHref: "/ashfi",
        linkLabel: "ASHFI product page",
      },
      {
        heading: "8. Contact",
        body: "Questions about these Terms of Use may be sent to info@asheriv.com.",
      },
    ],
  },
  tr: {
    title: "Kullanim Sartlari",
    lastUpdated: "Son guncelleme: Haziran 2026",
    backLabel: "Ana Sayfaya Don",
    sections: [
      {
        heading: "1. Kapsam",
        body: "Bu Kullanim Sartlari, A'SHERIV Intelligent Marine Technologies Ltd. tarafindan isletilen asheriv.com web sitesine erisiminizi ve kullaniminizi duzenler. ASHFI, ASHMOP, SIM veya diger Asheriv urunlerinin kullanimi ayri urun kosullarina tabidir.",
      },
      {
        heading: "2. Kabul edilebilir kullanim",
        body: "Bu web sitesini yalnizca yasal amaclarla kullanabilirsiniz. Sistemlerimize yetkisiz erisim denememeli, web sitesinin calismasini engellememeli, izinsiz olarak icerigi toplu sekilde cekmemeli veya siteyi Asheriv'e, kullanicilarina veya ucuncu taraflara zarar verecek sekilde kullanmamalisiniz.",
      },
      {
        heading: "3. Fikri mulkiyet",
        body: "Aksi belirtilmedikce, bu web sitesindeki tum icerik, metin, grafikler, logolar ve tasarim dahil olmak uzere A'SHERIV'e aittir veya lisanslidir. Onceden yazili iznimiz olmadan web sitesi icerigini ticari amaclarla kopyalayamaz, cogaltamaz veya dagitamazsiniz.",
      },
      {
        heading: "4. Garanti reddi",
        body: "Web sitesi icerigi yalnizca genel bilgi amaciyla sunulmaktadir. Web sitesi iceriginin dogrulugu, butunlugu veya belirli bir amaca uygunlugu hakkinda acik veya zimni hicbir garanti vermiyoruz. Bu sitede aciklanan urun yetenekleri degisiklige tabidir.",
      },
      {
        heading: "5. Sorumluluk sinirlamasi",
        body: "Yasalarin izin verdigi olcude, A'SHERIV bu web sitesini kullaniminizdan kaynaklanan dolayli, arızi veya sonuc olarak ortaya cikan kayiplardan sorumlu olmayacaktir. Bu kosullar, uygulanabilir hukuk kapsaminda dislanamayacak sorumlulugu dislamaz.",
      },
      {
        heading: "6. Uygulanacak hukuk",
        body: "Bu Kullanim Sartlari Ingiltere ve Galler hukukuna tabidir. Her turlu uyusmazlik, Ingiltere ve Galler mahkemelerinin münhasir yargisina tabidir.",
      },
      {
        heading: "7. Urun kosullari",
        body: "ASHFI ve diger Asheriv urunlerinin kullanicilari, kayit sirasinda veya talep uzerine saglanan ayri urun Hizmet Sartlari ve Gizlilik Politikasina tabidir. ASHFI icin urun sayfasina bakin veya info@asheriv.com adresine yazin.",
        linkHref: "/ashfi",
        linkLabel: "ASHFI urun sayfasi",
      },
      {
        heading: "8. Iletisim",
        body: "Bu Kullanim Sartlari hakkindaki sorular info@asheriv.com adresine gonderilebilir.",
      },
    ],
  },
} as const;

export default async function TermsPage({
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
            <Link
              href="/"
              locale={locale}
              className="inline-flex items-center text-[#00D4FF]/70 hover:text-[#00D4FF] mb-8 transition-colors text-sm gap-1"
            >
              ← {c.backLabel}
            </Link>
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
