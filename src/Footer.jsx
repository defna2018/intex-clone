import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-tight mb-4">
              <span>INTE</span>
              <span className="text-red-400">X</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              100 years of civil engineering experience in East Africa. 
              Building roads, communities, and futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>Nairobi, Kenya</li>
              <li>info@intexafrica.com</li>
              <li>+254 700 282 828</li>
              <li>+254 203 743 838</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} Intex Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;