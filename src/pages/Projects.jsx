import { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Roads', 'Real Estate', 'Water', 'Bridges'];

  const projects = [
    { title: 'Kibera High Rise Flats Phase 1', category: 'Real Estate', location: 'Nairobi', status: 'Completed' },
    { title: 'Kibera High Rise Flats Phase 2', category: 'Real Estate', location: 'Nairobi', status: 'Completed' },
    { title: 'National Highway Upgrade', category: 'Roads', location: 'Kenya', status: '3,500+ km' },
    { title: 'Urban Water Distribution', category: 'Water', location: 'Multiple Counties', status: 'Active' },
    { title: 'Rural Road Rehabilitation', category: 'Roads', location: 'Eastern Kenya', status: 'Completed' },
    { title: 'Bridge Construction Project', category: 'Bridges', location: 'Various', status: 'Completed' },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <main>
      {/* Page Header */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-red-500" />
            <span className="text-red-400 uppercase tracking-widest text-sm font-medium">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Projects</h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors ${
                  filter === cat
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-56 flex items-center justify-center">
                  <span className="text-gray-400">[Project Image]</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-red-500 text-xs font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-xs">{project.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;