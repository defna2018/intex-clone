function About() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-red-500" />
            <span className="text-red-400 uppercase tracking-widest text-sm font-medium">Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Intex</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-10 rounded-lg">
              <div className="text-red-500 uppercase tracking-widest text-sm font-medium mb-4">Our Mission</div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Catalyst for Communities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be a catalyst for people and communities to realize their potential, 
                exercise their social responsibility and drive change in society.
              </p>
            </div>
            <div className="bg-blue-900 p-10 rounded-lg text-white">
              <div className="text-red-400 uppercase tracking-widest text-sm font-medium mb-4">Our Vision</div>
              <h2 className="text-2xl font-bold mb-4">
                Empowering Marginalized Communities
              </h2>
              <p className="text-blue-100 leading-relaxed">
                Empower marginalized and disadvantaged communities by creating innovative, 
                long-term sustainable solutions that improve their economic, environmental 
                and social situation, thereby transforming their quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-sm font-medium">Our Journey</span>
              <div className="h-1 w-12 bg-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">100 Years of Building</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              { year: '1920s', title: 'Foundation', desc: 'Intex Construction founded with a vision to build East Africa.' },
              { year: '1960s', title: 'Road Revolution', desc: 'Began large-scale road construction across Kenya.' },
              { year: '2000s', title: 'Infrastructure Leader', desc: 'Completed over 3,500 km of roads and expanded into water & real estate.' },
              { year: 'Today', title: 'Future Forward', desc: 'Continuing to transform communities through sustainable infrastructure.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full" />
                  {idx < 3 && <div className="w-0.5 h-full bg-gray-300 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="text-red-500 font-bold text-lg mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;