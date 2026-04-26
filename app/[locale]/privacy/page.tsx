import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "A'SHERIV Privacy Policy. How we collect, use, store, and protect your personal information in accordance with UK GDPR and the Data Protection Act 2018.",
  openGraph: {
    title: "Privacy Policy | A'SHERIV",
    description:
      "How A'SHERIV collects, uses, and protects your personal data under UK GDPR and applicable data protection laws.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-32 pb-12 min-h-screen bg-[#0A0F1E]">
        <div className="container-width section-padding">
          <div className="max-w-4xl">
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <div className="prose max-w-none space-y-6">
              <p className="text-sm text-[#CBD5E1] mb-8">
                Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  1. Introduction
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  A&apos;SHERIV (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your personal information in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and other applicable data protection laws.
                </p>
                <p className="text-[#CBD5E1] leading-relaxed">
                  By using our website or contacting us, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  2. Data Controller
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  A&apos;SHERIV is the data controller responsible for your personal data. For any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm my-4">
                  <p className="text-[#CBD5E1] leading-relaxed">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@asheriv.com"
                      className="text-white hover:text-[#00D4FF] hover:underline transition-colors"
                    >
                      info@asheriv.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  3. Information We Collect
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed mb-4">
                  We collect the following personal information when you contact us through our website:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#CBD5E1] leading-relaxed ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Job role or title</li>
                  <li>Message content</li>
                </ul>
                <p className="text-[#CBD5E1] leading-relaxed mt-4">
                  We also automatically collect certain technical information when you visit our website, including IP address, browser type, device information, and usage data through cookies and similar technologies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  Under UK GDPR, we process your personal data based on the following legal grounds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#CBD5E1] leading-relaxed ml-4 mt-4">
                  <li>
                    <strong>Legitimate interests:</strong> To respond to your inquiries and provide information about our services
                  </li>
                  <li>
                    <strong>Consent:</strong> Where you have provided explicit consent for specific processing activities
                  </li>
                  <li>
                    <strong>Contractual necessity:</strong> To take steps at your request prior to entering into a contract
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  5. How We Use Your Information
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed mb-4">
                  We use the personal information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#CBD5E1] leading-relaxed ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Communicate with you about our services and platform</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Protect our rights and prevent fraud or abuse</li>
                </ul>
                <p className="text-[#CBD5E1] leading-relaxed mt-4">
                  We do not sell, rent, or trade your personal data to third parties for marketing purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  6. Data Retention
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Contact form submissions are typically retained for up to three years from the date of last contact, or until you request deletion, whichever comes first.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  7. Your Rights Under UK GDPR
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#CBD5E1] leading-relaxed ml-4">
                  <li>
                    <strong>Right of access:</strong> Request a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances
                  </li>
                  <li>
                    <strong>Right to restrict processing:</strong> Request limitation of how we use your data
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> Request transfer of your data to another service provider
                  </li>
                  <li>
                    <strong>Right to object:</strong> Object to processing based on legitimate interests
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> Withdraw consent where processing is based on consent
                  </li>
                </ul>
                <p className="text-[#CBD5E1] leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:info@asheriv.com"
                    className="text-white hover:text-[#00D4FF] hover:underline transition-colors"
                  >
                    info@asheriv.com
                  </a>
                  . We will respond to your request within one month.
                </p>
                <p className="text-[#CBD5E1] leading-relaxed mt-4">
                  You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not handled your personal data in accordance with UK GDPR. You can contact the ICO at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00D4FF] hover:underline transition-colors"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  8. Data Security
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  9. International Data Transfers
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  A&apos;SHERIV operates across Türkiye, the United Kingdom, and the United Arab Emirates. Your personal data may be transferred to and processed in these countries. We ensure that appropriate safeguards are in place to protect your data in accordance with UK GDPR requirements, including standard contractual clauses where necessary.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  10. Third-Party Services
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  Our website may use third-party services for hosting, analytics, and functionality. These services may process your personal data in accordance with their own privacy policies. We use reputable service providers who are committed to data protection standards.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  11. Cookies
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  Our website may use cookies and similar technologies to enhance your browsing experience and collect usage data. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  13. Contact Us
                </h2>
                <p className="text-[#CBD5E1] leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm my-4">
                  <p className="text-[#CBD5E1] leading-relaxed">
                    <strong>A&apos;SHERIV</strong>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@asheriv.com"
                      className="text-white hover:text-[#00D4FF] hover:underline transition-colors"
                    >
                      info@asheriv.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
