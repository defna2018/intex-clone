import { Link } from 'react-router-dom';
import OurClients from './OurClients.jsx';
function Home() {
  const stats = [
    { number: '100+', label: 'Years Experience' },
    { number: '3,500', label: 'Km Roads Built' },
    { number: '3.7M', label: 'Sq Ft Real Estate' },
    { number: '1,000+', label: 'Km Completed Roads' },
  ];

  const services = [
    { title: 'Road Construction', desc: 'New roads, upgrades to bitumen standard, and asphalt rehabilitation.' },
    { title: 'Water & Sewerage', desc: 'Designing and delivering complete water and sewerage systems.' },
    { title: 'Bridge Engineering', desc: 'Designing and constructing bridges for all terrains.' },
    { title: 'Real Estate', desc: 'Large-scale developments including Kibera High Rise Flats.' },
  ];

  const projects = [
    { title: 'Kibera High Rise Flats', category: 'Real Estate', phase: 'Phase 1 & 2' },
    { title: 'National Road Network', category: 'Roads', phase: '3,500+ km' },
    { title: 'Water Infrastructure', category: 'Water', phase: 'Multiple Systems' },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[500px] sm:h-[600px] bg-blue-900 flex items-center">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-blue-700" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-red-500" />
              <span className="text-red-400 uppercase tracking-widest text-xs sm:text-sm font-medium">
                East Africa&apos;s Leading Contractor
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Building East Africa&apos;s
              <span className="text-red-400"> Infrastructure</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
              With 100 years of civil engineering experience, Intex Construction 
              has built more roads in Kenya than any other company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-medium transition-colors text-center"
              >
                Explore Projects
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded font-medium transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-red-500" />
                <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">About Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                A Century of Excellence in Civil Engineering
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Intex Construction has established itself as the leader in the industry, 
                having handed over many iconic projects across East Africa. We have built 
                our reputation as a company that puts people first.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">100+</div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">3,500</div>
                  <div className="text-gray-500 text-sm">Km of Roads</div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-red-500 font-medium hover:text-red-600 text-sm sm:text-base"
              >
                Read Our Story
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 sm:h-80 flex items-center justify-center">
              <span className="text-gray-400 text-sm">[About Image Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / INFRASTRUCTURE */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">What We Do</span>
              <div className="h-1 w-12 bg-red-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Infrastructure in Focus
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-red-500 rounded" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="py-16 sm:py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-300 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS SECTION */}
      <OurClients />

      {/* PROJECTS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-red-500" />
                <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">Projects in Focus</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center text-red-500 font-medium hover:text-red-600 text-sm sm:text-base"
            >
              View All Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-gray-200 rounded-lg h-56 sm:h-64 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-gray-500 text-sm">[Project Image]</span>
                  </div>
                </div>
                <div className="text-red-500 text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{project.phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;