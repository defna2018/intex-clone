import { useState } from 'react';

function ProjectsTable() {
  const [activeCategory, setActiveCategory] = useState('Roads & Highways');

  const categories = [
    'Roads & Highways',
    'Buildings & Real Estate', 
    'Water Waste & Sewerages',
    'Airports',
    'Bridges'
  ];

  const projectsData = {
    'Roads & Highways': [
      { year: 1972, name: 'Construction Of Diani Beach Tourist Road (Coast Province), Kenya.', type: 'Construction', length: '' },
      { year: 1974, name: 'Construction Of Waa - Msambweni Road (Mombasa - Tanga Road), Kenya.', type: 'Construction', length: '' },
      { year: 1974, name: 'Overlay And Rehabilitation Of Msambweni - Lunga Lunga Road, Kenya', type: 'Rehabilitation', length: '' },
      { year: 1976, name: 'Construction Of Nairobi Airport - Athi River Road Kenya', type: 'Construction', length: '' },
      { year: 1978, name: 'Construction Of Konza - Sultan Hamud Road (Nairobi - Mombasa Road), Kenya.', type: 'Construction', length: '' },
      { year: 1982, name: 'Construction Of Northern Circuit Tourist Roads, Phase Iv In The Rift Valley Province Kenya', type: 'Construction', length: '210 kms' },
      { year: 1983, name: 'Construction Of Access Road To Kiambero Hydroelectric Scheme Kenya', type: 'Construction', length: '' },
      { year: 1985, name: 'Reconstruction Of Burnt Forest - Eldoret Road Kenya', type: 'Reconstruction', length: '' },
      { year: 1985, name: 'Resealing Of Sikendu - Kapenguria Road Rift Valley Province Kenya', type: 'Rehabilitation', length: '' },
      { year: 1985, name: 'Construction Of Container Terminal And Stacking Areas And Concrete Runways Mombasa Port, Kenya', type: 'Construction', length: '' },
      { year: 1987, name: 'Olkaria Geothermal Access Road Project, Kenya', type: 'Construction', length: '' },
      { year: 1987, name: 'Repair & Resurfacing Of Mombasa Roads, Phase I Mombasa, Kenya', type: 'Repair', length: '' },
      { year: 1988, name: 'Repair & Resurfacing Of Mombasa Roads, Phase II Mombasa, Kenya', type: 'Repair', length: '' },
      { year: 1989, name: 'Repair And Recarpeting Of 160 Kms Of Major Road Between Gilgil And Nyeri Kenya', type: 'Repair', length: '160 kms' },
      { year: 1990, name: 'Reconstruction Of Kiganjo - Nanyuki Road', type: 'Reconstruction', length: '48 kms' },
      { year: 1992, name: 'Malindi-Lamu Road Rehabilitation And Gravelling Including Construction Of 4 Box Culverts', type: 'Rehabilitation', length: '90 kms' },
      { year: 1993, name: 'D.A. - 3.2km Rcc Box Culvert 16.28m Earthworks 300,000m3, Gravel Access Road', type: 'Construction', length: '20 kms' },
      { year: 1994, name: 'Rehabilitation of Kericho - Sotik Road, Kenya Road', type: 'Rehabilitation', length: '47 kms' },
      { year: 1994, name: 'Marigat-Kabarnet Road Reinstatement Of Guardrails', type: 'Repair', length: '' },
      { year: 1996, name: 'Kiminini-Kapenguria & Kakuma- Lokichokio Road Repair And Reseal 38 Kms Overlay With Asphalt Concrete 23 Kms', type: 'Repair', length: '61 kms' },
      { year: 1997, name: 'Kabartonjo-Kipsaraman Road New Road Construction of 19 Km Including One Bridge And 4 Box Culverts', type: 'Construction', length: '19 kms' },
      { year: 2000, name: 'Improvement And Gravelling Of Roads Kaptama - Chesamisi - Kamakoiwa Road D285 Mount Elgon District Western Province Kenya Gravel Roads', type: 'Reconstruction', length: '' },
      { year: 2000, name: 'Ahero-Kisii Road Major Repairs, Earthwork Widening, Drainage Improvement And Carriageway Overlay', type: 'Reconstruction', length: '80 kms' },
      { year: 2000, name: 'Kericho/Kapsabet Town Roads Construction And Rehabilitation Of Roads - In Kericho And Kapsabet Towns', type: 'Construction', length: '10 kms' },
      { year: 2001, name: 'Improvement And Gravelling Of Roads In Trans Nzoia District Rift Valley Province Kenya Babaton - Endebess Road C44 Kiminini - Brigadier Road E 284 Kitale - Kinyoru Road D 286 Kiminini - Matunda Road E 319', type: 'Reconstruction', length: '80 kms' },
      { year: 2001, name: 'Improvement And Gravelling Of Roads In Trans Nzoia District Rift Valley Province Kenya Maili Tatu - Ndalu Road E278 Kitale Air Strip - Kaptama Road D285 Koikoi Junction - Gituamba Road E320 Endebes - Suam Road C45 Gravel Roads', type: 'Reconstruction', length: '104 kms' },
      { year: 2002, name: 'Improvement And Gravelling Of Sururu - Likia - Pombo ( Olenguruone ) Road Nakuru District Kenya Gravel Roads', type: 'Reconstruction', length: '68 kms' },
      { year: 2002, name: 'Sondu-Sosiot-Kapsot Road Repair, Reconstruction And Resealing', type: 'Repair', length: '36 kms' },
      { year: 2002, name: 'Timboroa-Miteitei-Songhor-Awasi Road Rehabilitation Of 78 Kms Of Road', type: 'Rehabilitation', length: '78 kms' },
      { year: 2003, name: 'Improvement And Gravelling Of Roads Tiwani - West Pokot D 341 Knight Corner - Chepchoina D 343 Seed Driers To Kapkoi E 337 In West Pokot District Gravel Roads 89 Kms', type: 'Reconstruction', length: '89 kms' },
      { year: 2003, name: 'Emergency Repairs On The Chepsir To Molo South Road (D315) In Nakuru- District Ene / Urrb / Pr 50', type: 'Repair', length: '' },
      { year: 2005, name: 'Improvement And Gravelling Of Sururu - Likia - Pombo ( Olenguruone) Roads Nakuru / Narok / Bomet Districts Rift Valley Province Kenya Beeston - Nessuit Road E263 10kms Metkei - Ololongo Rd. E263 / D319 Olenguruone - Kapcheluget - Mulot Road Silbwet - Tegat - Kapcheluget Rd. 47kms Kapcheluget - Melelo - Ololongo Road Gravel Road', type: 'Reconstruction', length: '194 kms' },
      { year: 2005, name: 'Nabkoi-Kapsabet Road Repair, Reconstruction And Resealing', type: 'Reconstruction', length: '70 kms' },
      { year: 2006, name: 'Improvement And Construction To Bitumen Standard Of Olenguruone- Kiptangich Road (D319) 36 Kms Road - Chesoi Kapsowar Road', type: 'Reconstruction', length: '36 kms' },
      { year: 2007, name: 'Repairs And Rehabilitation Of Nkubu - Meru - Lewa Road ( B 6) Contract No. Rd 0436 40km Road', type: 'Repair', length: '40 kms' },
      { year: 2008, name: 'Construction For Improvement And Gravelling Of Iten Kapsowar Embubuti River - Chesegon Road ( E352) To Gravel - Standard Contract No. Rg 870 - 04 91km Road', type: 'Reconstruction', length: '91 kms' },
      { year: 2008, name: 'Repair And Rehabilitation Of Makutano-Embu (B6) Road (46 Kms)', type: 'Repair', length: '46 kms' },
      { year: 2008, name: 'Repair And Rehabilitation Of Embu-Thuchi Road (36 Kms)', type: 'Repair', length: '36 kms' },
      { year: 2009, name: 'Construction Of Farm-Kawiru-Mutuati- Kachulu (E817,E831,D486) Road In Meru', type: 'Construction', length: '35 kms' },
      { year: 2009, name: 'Repair And Rehabilitation Of Rukenya-Kimunye Road', type: 'Repair', length: '18 kms' },
      { year: 2010, name: 'Construction Of Kagio-Baricho-Kerugoya & (D455) And Baricho-Kibirigwi (D454) Roads', type: 'Construction', length: '25 Kms' },
      { year: 2010, name: 'Rehabilitation Of The Lewa-Isiolo Road', type: 'Repair', length: '' },
      { year: 2010, name: 'Repair & Resealing Of Thika-Ngoliba-Turn Off To Kitui Road', type: 'Repair', length: '84 kms' },
      { year: 2011, name: 'Construction Of Ena-Ishiara-Chiakariga Road Project', type: 'Construction', length: '60 Kms' },
      { year: 2012, name: 'Emergency Maintenance Of Nanyuki-Lewa (A2) Road', type: 'Construction', length: '50 Kms' },
      { year: 2013, name: 'Rehabilitation And Repair Of Mukuyu Githambo Kiuri(D440) 50km', type: 'Construction and Rehabilitation', length: '36 Kms' },
      { year: 2014, name: 'Construction Of Ruir - Isiolo (D490) Amos Loop Roads & Isiolo - Muriti Road', type: 'Construction', length: '75 Kms' },
      { year: 2014, name: 'Rehabilitation of Maili Tatu-Laare-Mutuate (D486 & 817) & KK-Njoune Link Roads Road', type: 'Construction and Rehabilitation', length: '23 Kms' },
      { year: 2016, name: 'Periodic Maintenance of Kabarnet-Marigat (C51) Road', type: 'Construction', length: '25 Kms' },
      { year: 2016, name: 'Performance Based Maintenance Contract for the Nairobi-Thika (A2) Highway', type: 'Routine Maintenance', length: '49.8Kms' },
      { year: 2017, name: "Spot Improvement of Kenol Murang'a C71 Road/KeNHA/RD/M/1379/2014 for A2 Makutano - C72 Muranga (C71)", type: 'Construction and Rehabilitation', length: '30 Kms' },
      { year: 2018, name: 'Upgrading to Bitumen Standard of Tirap-Embobut Bridge JN B4 Chesegon(E3522)Road', type: 'Construction', length: '33 Kms' },
      { year: 2019, name: 'Construction Of Loruk Barpelo Road section', type: 'Construction', length: '30 Kms' },
      { year: 2019, name: "Upgrading To Bitumen Standards of Taita Girl's - Mutaragon & Fortenan Roads", type: 'Construction and Rehabilitation', length: '36 Kms' },
      { year: 2019, name: 'Construction of Chiakariga-Mitunguu - Meru Road Project', type: 'Construction', length: '55.54 Kms' },
      { year: 2020, name: 'Improvement to Bitumen Standards of: 1. Kericho-Ainamoi-Kapsot & Ainamoi-Thessalia Mission Roads 2. Premier-Kabianga-Taplotin Road 3. Chebonge-Kibugat & Cheplanket-Kapkate Loop Road 3. Chebonge-Kibugat & Cheplanket-Kapkate Loop Road through contracting facilitated financing mechanism Lot 33: Ngong - Kiserian and Kajiado - Imaroro Roads', type: 'Construction', length: '106 Kms' },
      { year: 2020, name: 'First Annuity PPP Road Project: Road 10,000 programme: Development of 10,000 Km of Roads supporting Sectors primary growth sectors through contracting facilitated financing mechanism Lot 33: Ngong - Kiserian and Kajiado - Imaroro Roads', type: 'Construction', length: '91 Kms' },
    ],
    'Buildings & Real Estate': [
      { year: 2015, name: 'Kibera High Rise Flats Phase 1 - Nairobi', type: 'Construction', length: '3.7M sqft' },
      { year: 2017, name: 'Kibera High Rise Flats Phase 2 - Nairobi', type: 'Construction', length: '2.1M sqft' },
      { year: 2019, name: 'National Housing Corporation Affordable Housing - Multiple Locations', type: 'Construction', length: '1.5M sqft' },
    ],
    'Water Waste & Sewerages': [
      { year: 2010, name: 'Nairobi Water Distribution Network Expansion', type: 'Construction', length: '120 km' },
      { year: 2014, name: 'Mombasa Sewerage System Upgrade', type: 'Rehabilitation', length: '85 km' },
      { year: 2018, name: 'Kisumu Water Treatment Plant', type: 'Construction', length: '45 km' },
    ],
    'Airports': [
      { year: 1976, name: 'Nairobi Airport - Athi River Access Road', type: 'Construction', length: '12 km' },
      { year: 2015, name: 'Moi International Airport Mombasa - Perimeter Road', type: 'Construction', length: '8 km' },
    ],
    'Bridges': [
      { year: 1997, name: 'Kabartonjo-Kipsaraman Road Bridge', type: 'Construction', length: '1 bridge' },
      { year: 2018, name: 'Tirap-Embobut Bridge JN B4 Chesegon', type: 'Construction', length: '1 bridge' },
    ],
  };

  const currentProjects = projectsData[activeCategory] || [];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-10 sm:w-12 bg-red-500" />
            <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">
              Complete Portfolio
            </span>
            <div className="h-1 w-10 sm:w-12 bg-red-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            Project History
          </h2>
        </div>

        {/* Category Tabs - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-2 sm:gap-3 mb-8 sm:mb-10 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="hidden sm:grid sm:grid-cols-12 bg-blue-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <div className="col-span-1 px-4 py-3 sm:py-4">Year</div>
            <div className="col-span-6 px-4 py-3 sm:py-4">Name & Location Of The Project</div>
            <div className="col-span-3 px-4 py-3 sm:py-4">Project Type</div>
            <div className="col-span-2 px-4 py-3 sm:py-4">Road Length</div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden bg-blue-900 text-white text-xs font-semibold uppercase tracking-wider px-4 py-3 flex justify-between">
            <span>Projects</span>
            <span>{activeCategory}</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
            {currentProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 sm:grid-cols-12 px-4 py-4 sm:py-5 hover:bg-gray-50 transition-colors"
              >
                {/* Year - Mobile: inline, Desktop: column */}
                <div className="sm:col-span-1 mb-1 sm:mb-0">
                  <span className="sm:hidden text-xs font-semibold text-gray-500 uppercase">Year: </span>
                  <span className="text-sm sm:text-base font-semibold text-blue-900">{project.year}</span>
                </div>

                {/* Project Name */}
                <div className="sm:col-span-6 mb-2 sm:mb-0 sm:pr-4">
                  <span className="sm:hidden text-xs font-semibold text-gray-500 uppercase block mb-1">Project: </span>
                  <span className="text-sm sm:text-base text-gray-800 leading-relaxed">{project.name}</span>
                </div>

                {/* Project Type */}
                <div className="sm:col-span-3 mb-1 sm:mb-0">
                  <span className="sm:hidden text-xs font-semibold text-gray-500 uppercase">Type: </span>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded">
                    {project.type}
                  </span>
                </div>

                {/* Road Length */}
                <div className="sm:col-span-2">
                  <span className="sm:hidden text-xs font-semibold text-gray-500 uppercase">Length: </span>
                  <span className="text-sm sm:text-base font-medium text-red-500">
                    {project.length || '-'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="bg-gray-50 px-4 py-3 text-xs sm:text-sm text-gray-500 text-center">
            Showing {currentProjects.length} projects in {activeCategory}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTable;