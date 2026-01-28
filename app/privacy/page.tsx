import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-12 min-h-screen bg-cream">
        <div className="container-width section-padding">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maritime mb-8">
              Privacy Policy
            </h1>
            <div className="prose max-w-none">
              <p className="text-lg text-maritime/80 leading-relaxed">
                We collect the information you submit through the contact form (name, email,
                company, role, message) solely to respond to your inquiry. We do not sell personal
                data. Messages are stored securely and retained only as long as necessary to handle
                the request. You may request deletion by emailing{" "}
                <a
                  href="mailto:info@asheriv.com"
                  className="text-maritime hover:text-steel hover:underline transition-colors"
                >
                  info@asheriv.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

