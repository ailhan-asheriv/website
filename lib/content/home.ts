/**
 * Homepage content — centralized, typed, section-based.
 * Edit copy here; page and section components consume via getHomeContent(locale).
 */

export type HomeLocale = "en" | "tr";

export interface HomeMeta {
  title: string;
  description: string;
}

export interface HomeHero {
  logoImage: string;
  logoAlt: string;
  /** Short eyebrow/tagline (optional, one line) */
  eyebrow?: string;
  headline: string;
  /** One or two sentences on the hero only */
  tagline: string;
  /** Longer copy: shown below hero when user scrolls (problem intro) */
  subheadline: string;
  supporting: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
}

export interface HomeProblem {
  headline: string;
  paragraphs: string[];
  labels: string[];
}

export interface HomeLifecycle {
  headline: string;
  intro: string;
  stages: string[];
  supporting: string;
}

export interface HomeSolutionCard {
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
}

export interface HomeSolutions {
  headline: string;
  intro: string;
  cards: HomeSolutionCard[];
}

export interface HomePlatform {
  headline: string;
  paragraphs: string[];
  items: string[];
  calloutTitle: string;
  calloutText: string;
}

export interface HomeSensors {
  headline: string;
  paragraphs: string[];
  signals: string[];
}

export interface HomeStakeholderCard {
  title: string;
  description: string;
}

export interface HomeStakeholders {
  headline: string;
  intro: string;
  cards: HomeStakeholderCard[];
}

export interface HomeRegion {
  name: string;
  description: string;
}

export interface HomeGlobal {
  headline: string;
  intro: string;
  regions: HomeRegion[];
}

export interface HomePilot {
  headline: string;
  paragraph: string;
  steps: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
}

export interface HomeContent {
  meta: HomeMeta;
  hero: HomeHero;
  problem: HomeProblem;
  lifecycle: HomeLifecycle;
  solutions: HomeSolutions;
  platform: HomePlatform;
  sensors: HomeSensors;
  stakeholders: HomeStakeholders;
  global: HomeGlobal;
  pilot: HomePilot;
}

const homeContentEn: HomeContent = {
  meta: {
    title: "A'SHERIV — Digital Twin Infrastructure for Shipbuilding, Vessel Operations, and Lifecycle Intelligence",
    description:
      "A'SHERIV builds digital twin infrastructure for shipbuilding, vessel operations, and lifecycle intelligence—connecting shipyard production data, vessel operational systems, maintenance records, and targeted sensing into a unified maritime intelligence platform.",
  },
  hero: {
    logoImage: "/logo.png",
    logoAlt: "A'SHERIV",
    eyebrow: "Digital Twin Infrastructure for Shipbuilding, Vessel Operations, and Lifecycle Intelligence",
    headline: "From Shipyard Data to Live Vessel Intelligence",
    tagline: "One platform connecting shipyard production, vessel operations, and lifecycle evidence.",
    subheadline:
      "A'SHERIV builds digital twin infrastructure for shipbuilding, vessel operations, and lifecycle intelligence—connecting shipyard production data, vessel operational systems, maintenance records, and targeted sensing into a unified maritime intelligence platform.",
    supporting:
      "Designed for shipyards, fleet operators, OEMs, insurers, and classification societies.",
    ctaPrimary: "Start a Pilot Discussion",
    ctaSecondary: "Platform Overview",
    ctaPrimaryHref: "/#pilot",
    ctaSecondaryHref: "/platform",
  },
  problem: {
    headline:
      "Maritime Data Exists Everywhere. Operational Intelligence Exists Nowhere.",
    paragraphs: [
      "Shipyards generate build documentation and production records. Operators collect telemetry from vessel systems. Maintenance teams log inspections and repairs. Classification societies require evidence and documentation.",
      "Yet these data streams rarely connect.",
      "A'SHERIV transforms scattered maritime data into a structured digital twin designed for operational clarity, predictive maintenance, and lifecycle accountability.",
      "A'SHERIV addresses this fragmentation through three intelligence layers: Build Intelligence, Operational Intelligence, and Lifecycle Intelligence.",
    ],
    labels: [
      "Shipyard Records",
      "Telemetry",
      "Maintenance Logs",
      "QA Documents",
      "Operational Reports",
    ],
  },
  lifecycle: {
    headline: "One Digital Twin Across the Vessel Lifecycle",
    intro:
      "A vessel's lifecycle spans multiple environments — design offices, shipyards, operational fleets, and maintenance yards. A'SHERIV connects these environments through a continuous intelligence layer.",
    stages: [
      "Design",
      "Shipyard Production",
      "Vessel Operations",
      "Maintenance & Repairs",
      "Feedback to Design",
    ],
    supporting:
      "By linking shipyard configuration data, operational telemetry, maintenance records, and contextual sensing, A'SHERIV creates a persistent digital twin that evolves alongside the vessel.",
  },
  solutions: {
    headline: "Four Layers of Maritime Intelligence",
    intro:
      "A'SHERIV combines shipyard data environments, live vessel-state awareness, maintenance intelligence, and compliance-ready evidence into one operational framework.",
    cards: [
      {
        title: "Shipyard Intelligence",
        description:
          "Structure production data, quality checkpoints, and configuration records into traceable operational asset models.",
        cta: "Explore Shipyard Intelligence",
        ctaHref: "/shipyard-intelligence",
      },
      {
        title: "Operational Digital Twin",
        description:
          "Transform vessel telemetry, alarms, and logs into a live operational intelligence layer.",
        cta: "Explore Operational Twin",
        ctaHref: "/operational-digital-twin",
      },
      {
        title: "Maintenance Intelligence",
        description:
          "Connect inspections, maintenance records, and risk signals to support evidence-based maintenance planning.",
        cta: "Explore Maintenance Intelligence",
        ctaHref: "/maintenance-intelligence",
      },
      {
        title: "Compliance & Evidence",
        description:
          "Generate structured evidence chains for review, claims, audits, and technical decision-making.",
        cta: "Explore Compliance & Evidence",
        ctaHref: "/compliance-evidence",
      },
    ],
  },
  platform: {
    headline: "Built to Integrate — Not Replace",
    paragraphs: [
      "A'SHERIV integrates with existing maritime systems using secure read-only connectors.",
      "Rather than replacing onboard systems or operational software, the platform aggregates and structures data across multiple sources.",
      "The platform architecture combines three layers: A'SHERIV Build for shipyard production intelligence, AshMOP for operational digital twin monitoring, and a Data & Sensor Layer that augments vessel visibility where existing systems provide limited insight.",
    ],
    items: [
      "Integrated Automation Systems (IAS) exports",
      "Maintenance management platforms",
      "Shipyard production records",
      "Operational logs and reports",
      "Selective sensing modules where visibility is limited",
    ],
    calloutTitle: "Read-Only Integration. No System Replacement.",
    calloutText:
      "A'SHERIV integrates using secure read-only connectors that extract operational and production data without modifying existing onboard or shipyard systems.",
  },
  sensors: {
    headline: "Selective Sensing Where Visibility Matters",
    paragraphs: [
      "In many vessels, critical operational insights remain hidden due to missing data points.",
      "A'SHERIV deploys targeted sensing modules designed to augment existing vessel data environments without invasive system integration.",
      "This sensing capability forms the A'SHERIV Data & Sensor Layer, designed to augment vessel visibility where operational signals are incomplete or unavailable.",
    ],
    signals: [
      "Bilge Contamination Monitoring",
      "Vibration & Structural Behavior",
      "Fastener Integrity Detection",
      "Environmental Contamination Alerts",
    ],
  },
  stakeholders: {
    headline: "Built for Shipyards, Operators, Class Societies, and Insurers",
    intro:
      "A'SHERIV creates one shared intelligence layer with role-specific relevance across shipyards, operators, OEMs, insurers, and classification societies.",
    cards: [
      {
        title: "Shipyards",
        description:
          "Improve production traceability, QA linkage, and handover readiness.",
      },
      {
        title: "Fleet Owners & Operators",
        description:
          "Gain continuous operational visibility and maintenance intelligence.",
      },
      {
        title: "OEMs",
        description:
          "Monitor performance patterns and strengthen design feedback loops.",
      },
      {
        title: "Insurers & Class",
        description:
          "Access structured evidence and operational context for review.",
      },
    ],
  },
  global: {
    headline: "Operating Across Turkey, the United Kingdom, and Dubai",
    intro:
      "A'SHERIV operates through a distributed structure designed to support maritime engineering, digital platform development, and international commercial growth.",
    regions: [
      {
        name: "Turkey",
        description:
          "Shipyard collaboration, production intelligence development, and hardware prototyping.",
      },
      {
        name: "United Kingdom",
        description:
          "Digital twin architecture, platform development, and AI-driven maritime analytics.",
      },
      {
        name: "Dubai",
        description:
          "Strategic partnerships, commercial expansion, and global market access.",
      },
    ],
  },
  pilot: {
    headline: "Deploy a Digital Twin Pilot",
    paragraph:
      "A'SHERIV offers pilot deployments designed to validate digital twin integration using existing vessel data environments. These pilots validate integration with existing vessel systems using read-only connectors without requiring system replacement.",
    steps: [
      "Data assessment of existing operational systems",
      "Mapping vessel systems into the digital twin model",
      "Integration of historical and live operational records",
      "Optional targeted sensing deployment",
      "Delivery of operational intelligence dashboards and evidence reports",
    ],
    ctaPrimary: "Start a Pilot Discussion",
    ctaSecondary: "Contact the A'SHERIV Team",
    ctaPrimaryHref: "/#contact",
    ctaSecondaryHref: "/#contact",
  },
};

const homeContentTr: HomeContent = {
  meta: {
    title: "A'SHERIV — Gemi İnşası, Gemi Operasyonları ve Yaşam Döngüsü İstihbaratı için Dijital İkiz Altyapısı",
    description:
      "A'SHERIV, gemi inşası, gemi operasyonları ve yaşam döngüsü istihbaratı için dijital ikiz altyapısı kurar—tersane üretim verilerini, gemi operasyon sistemlerini, bakım kayıtlarını ve hedefli sensörleri tek bir denizcilik istihbarat platformunda birleştirir.",
  },
  hero: {
    logoImage: "/logo.png",
    logoAlt: "A'SHERIV",
    eyebrow: "Gemi İnşası, Gemi Operasyonları ve Yaşam Döngüsü İstihbaratı için Dijital İkiz Altyapısı",
    headline: "Tersane Verisinden Canlı Gemi İstihbaratına",
    tagline: "Tersane üretimi, gemi operasyonları ve yaşam döngüsü kanıtını tek platformda birleştiriyoruz.",
    subheadline:
      "A'SHERIV, gemi inşası, gemi operasyonları ve yaşam döngüsü istihbaratı için dijital ikiz altyapısı kurar—tersane üretim verilerini, gemi operasyon sistemlerini, bakım kayıtlarını ve hedefli sensörleri tek bir denizcilik istihbarat platformunda birleştirir.",
    supporting:
      "Tersaneler, filo operatörleri, OEM'ler, sigortacılar ve sınıflandırma kuruluşları için tasarlandı.",
    ctaPrimary: "Pilot Görüşme Başlat",
    ctaSecondary: "Platform Özeti",
    ctaPrimaryHref: "/#pilot",
    ctaSecondaryHref: "/platform",
  },
  problem: {
    headline:
      "Denizcilik Verisi Her Yerde. Operasyonel İstihbarat Hiçbir Yerde.",
    paragraphs: [
      "Tersaneler yapı dokümantasyonu ve üretim kayıtları üretir. Operatörler gemi sistemlerinden telemetri toplar. Bakım ekipleri denetim ve onarımları kaydeder. Sınıflandırma kuruluşları kanıt ve dokümantasyon talep eder.",
      "Oysa bu veri akışları nadiren birbirine bağlanır.",
      "A'SHERIV, dağınık denizcilik verisini operasyonel netlik, tahmine dayalı bakım ve yaşam döngüsü hesap verebilirliği için tasarlanmış yapılandırılmış bir dijital ikize dönüştürür.",
      "A'SHERIV bu parçalanmayı üç istihbarat katmanıyla ele alır: İnşa İstihbaratı, Operasyonel İstihbarat ve Yaşam Döngüsü İstihbaratı.",
    ],
    labels: [
      "Tersane Kayıtları",
      "Telemetri",
      "Bakım Günlükleri",
      "KA Belgeleri",
      "Operasyonel Raporlar",
    ],
  },
  lifecycle: {
    headline: "Gemi Yaşam Döngüsü Boyunca Tek Dijital İkiz",
    intro:
      "Bir geminin yaşam döngüsü tasarım ofisleri, tersaneler, operasyonel filolar ve bakım tesisleri gibi birden fazla ortamı kapsar. A'SHERIV, bu ortamları sürekli bir istihbarat katmanıyla birbirine bağlar.",
    stages: [
      "Tasarım",
      "Tersane Üretimi",
      "Gemi Operasyonları",
      "Bakım ve Onarımlar",
      "Tasarıma Geri Bildirim",
    ],
    supporting:
      "Tersane yapılandırma verilerini, operasyonel telemetriyi, bakım kayıtlarını ve bağlamsal sensörleri birbirine bağlayarak A'SHERIV, geminin yanında evrilen kalıcı bir dijital ikiz oluşturur.",
  },
  solutions: {
    headline: "Dört Katman Denizcilik İstihbaratı",
    intro:
      "A'SHERIV, tersane veri ortamlarını, canlı gemi durumu farkındalığını, bakım istihbaratını ve uyumluluk hazır kanıtları tek bir operasyonel çerçevede birleştirir.",
    cards: [
      {
        title: "Tersane İstihbaratı",
        description:
          "Üretim verisini, kalite kontrol noktalarını ve yapılandırma kayıtlarını izlenebilir operasyonel varlık modellerine dönüştürün.",
        cta: "Tersane İstihbaratını Keşfet",
        ctaHref: "/shipyard-intelligence",
      },
      {
        title: "Operasyonel Dijital İkiz",
        description:
          "Gemi telemetrisini, alarmları ve günlükleri canlı bir operasyonel istihbarat katmanına dönüştürün.",
        cta: "Operasyonel İkizi Keşfet",
        ctaHref: "/operational-digital-twin",
      },
      {
        title: "Bakım İstihbaratı",
        description:
          "Kanıta dayalı bakım planlamasını desteklemek için denetimleri, bakım kayıtlarını ve risk sinyallerini bağlayın.",
        cta: "Bakım İstihbaratını Keşfet",
        ctaHref: "/maintenance-intelligence",
      },
      {
        title: "Uyumluluk ve Kanıt",
        description:
          "İnceleme, talepler, denetimler ve teknik karar alma için yapılandırılmış kanıt zincirleri oluşturun.",
        cta: "Uyumluluk ve Kanıtı Keşfet",
        ctaHref: "/compliance-evidence",
      },
    ],
  },
  platform: {
    headline: "Entegre Etmek İçin İnşa Edildi — Değiştirmek İçin Değil",
    paragraphs: [
      "A'SHERIV, güvenli salt-okunur bağlayıcılar kullanarak mevcut denizcilik sistemleriyle entegre olur.",
      "Gemi içi sistemlerin veya operasyonel yazılımın yerini almak yerine, platform birden fazla kaynaktan gelen veriyi toplar ve yapılandırır.",
      "Platform mimarisi üç katmanı birleştirir: tersane üretim istihbaratı için A'SHERIV Build, operasyonel dijital ikiz izleme için AshMOP ve mevcut sistemlerin sınırlı içgörü sağladığı yerlerde gemi görünürlüğünü artıran Veri ve Sensör Katmanı.",
    ],
    items: [
      "Entegre Otomasyon Sistemleri (IAS) dışa aktarmaları",
      "Bakım yönetim platformları",
      "Tersane üretim kayıtları",
      "Operasyonel günlükler ve raporlar",
      "Görünürlüğün sınırlı olduğu yerlerde seçici sensör modülleri",
    ],
    calloutTitle: "Salt-Okunur Entegrasyon. Sistem Değişikliği Yok.",
    calloutText:
      "A'SHERIV, mevcut gemi içi veya tersane sistemlerini değiştirmeden operasyonel ve üretim verilerini çıkaran güvenli salt-okunur bağlayıcılar kullanarak entegre olur.",
  },
  sensors: {
    headline: "Görünürlüğün Önemli Olduğu Yerde Seçici Sensörler",
    paragraphs: [
      "Birçok gemide, eksik veri noktaları nedeniyle kritik operasyonel içgörüler gizli kalır.",
      "A'SHERIV, istilacı sistem entegrasyonu olmadan mevcut gemi veri ortamlarını zenginleştirmek için tasarlanmış hedefli sensör modülleri konuşlandırır.",
      "Bu sensör yeteneği, operasyonel sinyallerin eksik veya mevcut olmadığı yerlerde gemi görünürlüğünü artırmak için tasarlanan A'SHERIV Veri ve Sensör Katmanını oluşturur.",
    ],
    signals: [
      "Sintine Kirliliği İzleme",
      "Titreşim ve Yapısal Davranış",
      "Bağlantı Elemanı Bütünlüğü Tespiti",
      "Çevresel Kirlilik Uyarıları",
    ],
  },
  stakeholders: {
    headline: "Tersaneler, Operatörler, Sınıf Kuruluşları ve Sigortacılar İçin İnşa Edildi",
    intro:
      "A'SHERIV, tersaneler, operatörler, OEM'ler, sigortacılar ve sınıflandırma kuruluşları genelinde role özel ilgisi olan tek bir paylaşılan istihbarat katmanı oluşturur.",
    cards: [
      {
        title: "Tersaneler",
        description:
          "Üretim izlenebilirliğini, KA bağlantısını ve devir hazırlığını iyileştirin.",
      },
      {
        title: "Filo Sahipleri ve Operatörler",
        description:
          "Sürekli operasyonel görünürlük ve bakım istihbaratı elde edin.",
      },
      {
        title: "OEM'ler",
        description:
          "Performans kalıplarını izleyin ve tasarım geri bildirim döngülerini güçlendirin.",
      },
      {
        title: "Sigortacılar ve Sınıf",
        description:
          "İnceleme için yapılandırılmış kanıt ve operasyonel bağlama erişin.",
      },
    ],
  },
  global: {
    headline: "Türkiye, Birleşik Krallık ve Dubai'de Faaliyet",
    intro:
      "A'SHERIV, denizcilik mühendisliği, dijital platform geliştirme ve uluslararası ticari büyümeyi desteklemek için tasarlanmış dağıtık bir yapı üzerinden faaliyet göstermektedir.",
    regions: [
      {
        name: "Türkiye",
        description:
          "Tersane işbirliği, üretim istihbaratı geliştirme ve donanım prototipleme.",
      },
      {
        name: "Birleşik Krallık",
        description:
          "Dijital ikiz mimarisi, platform geliştirme ve AI destekli denizcilik analitiği.",
      },
      {
        name: "Dubai",
        description:
          "Stratejik ortaklıklar, ticari genişleme ve küresel pazar erişimi.",
      },
    ],
  },
  pilot: {
    headline: "Dijital İkiz Pilotu Konuşlandırın",
    paragraph:
      "A'SHERIV, mevcut gemi veri ortamlarını kullanarak dijital ikiz entegrasyonunu doğrulamak için tasarlanmış pilot dağıtımlar sunar. Bu pilotlar, sistem değişikliği gerektirmeden salt-okunur bağlayıcılar kullanarak mevcut gemi sistemleriyle entegrasyonu doğrular.",
    steps: [
      "Mevcut operasyonel sistemlerin veri değerlendirmesi",
      "Gemi sistemlerinin dijital ikiz modeline eşlenmesi",
      "Geçmiş ve canlı operasyonel kayıtların entegrasyonu",
      "İsteğe bağlı hedefli sensör konuşlandırması",
      "Operasyonel istihbarat panoları ve kanıt raporlarının teslimi",
    ],
    ctaPrimary: "Pilot Görüşme Başlat",
    ctaSecondary: "A'SHERIV Ekibiyle İletişime Geçin",
    ctaPrimaryHref: "/#contact",
    ctaSecondaryHref: "/#contact",
  },
};

const contentByLocale: Record<HomeLocale, HomeContent> = {
  en: homeContentEn,
  tr: homeContentTr,
};

export function getHomeContent(locale: string): HomeContent {
  const key = locale === "tr" ? "tr" : "en";
  return contentByLocale[key];
}
