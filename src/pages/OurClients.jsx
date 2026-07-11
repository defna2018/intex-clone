import { useState } from 'react';

function OurClients() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'International', 'Government', 'Local'];

  const clients = [
    { name: 'The World Bank', category: 'International', logo: '/images/clients/world-bank.png' },
    { name: 'Kenya Roads Board', category: 'Government', logo: '/images/clients/krb.png' },
    { name: 'African Development Bank', category: 'International', logo: '/images/clients/afdb.png' },
    { name: 'AFD', category: 'International', logo: '/images/clients/afd.png' },
    { name: 'International Cricket Council', category: 'International', logo: '/images/clients/icc.png' },
    { name: 'KeNHA', category: 'Government', logo: '/images/clients/kenha.png' },
    { name: 'KeRRA', category: 'Government', logo: '/images/clients/kerra.png' },
    { name: 'Kenya Wildlife Service', category: 'Government', logo: '/images/clients/kws.png' },
    { name: 'KURA', category: 'Government', logo: '/images/clients/kura.png' },
    { name: 'Nairobi County', category: 'Local', logo: '/images/clients/nairobi-county.png' },
    { name: 'Kenyan Ministry', category: 'Government', logo: '/images/clients/kenyan-ministry.png' },
    { name: 'Ministry of Finance', category: 'Government', logo: '/images/clients/ministry-finance.png' },
    { name: 'Office of the President', category: 'Government', logo: '/images/clients/office-president.png' },
    { name: 'National Housing Corporation', category: 'Local', logo: '/images/clients/nhc.png' },
    { name: 'National Housing', category: 'Local', logo: '/images/clients/national-housing.png' },
    { name: 'Agence Française de Développement', category: 'International', logo: '/images/clients/afd-full.png' },
    { name: 'European Union', category: 'International', logo: '/images/clients/eu.png' },
    { name: 'Nzoia Authority', category: 'Local', logo: '/images/clients/nzoia.png' },
    { name: 'State House Uganda', category: 'Government', logo: '/images/clients/state-house-uganda.png' },
  ];

  const filtered = filter === 'All' 
    ? clients 
    : clients.filter(c => c.category === filter);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-10 sm:w-12 bg-red-500" />
            <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">
              Trusted Partners
            </span>
            <div className="h-1 w-10 sm:w-12 bg-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We are proud to work with leading organizations across East Africa and beyond, 
            delivering infrastructure that transforms communities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors ${
                filter === cat
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clients Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {filtered.map((client, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center"
            >
              {/* Logo Container */}
              <div className="w-full aspect-square max-w-[160px] sm:max-w-[180px] bg-gray-50 rounded-lg p-4 sm:p-6 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-100 transition-colors">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                  <span className="text-center px-2">{client.name}</span>
                </div>
                {/* 
                  When you have real images, replace the div above with:
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                */}
              </div>
              {/* Client Name */}
              <h3 className="text-xs sm:text-sm font-semibold text-blue-900 leading-tight">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClients;