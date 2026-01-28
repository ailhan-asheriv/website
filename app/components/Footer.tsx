import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-steel/20">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-serif font-bold text-maritime mb-4">A&apos;SHERIV</h3>
            <p className="text-sm text-maritime/70 leading-relaxed">
              AI-driven maritime operations platform for digital twins and predictive intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-maritime mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-maritime/70 hover:text-maritime hover:underline transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-maritime mb-4">Contact</h4>
            <a
              href="mailto:info@asheriv.com"
              className="text-sm text-maritime/70 hover:text-maritime hover:underline transition-colors"
            >
              info@asheriv.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

