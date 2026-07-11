import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      detail: 'Nairobi, Kenya',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      detail: 'info@intexafrica.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      detail: '+254 20 000 0000',
    },
  ];

  const getButtonText = () => {
    switch (status) {
      case 'sending': return 'Sending...';
      case 'success': return 'Message Sent!';
      case 'error': return 'Failed. Try Again';
      default: return 'Send Message';
    }
  };

  const getButtonClass = () => {
    const base = 'w-full font-medium py-3 sm:py-3.5 rounded-lg transition-colors text-sm sm:text-base ';
    switch (status) {
      case 'success': return base + 'bg-green-500 hover:bg-green-600 text-white';
      case 'error': return base + 'bg-red-700 hover:bg-red-800 text-white';
      default: return base + 'bg-red-500 hover:bg-red-600 text-white';
    }
  };

  return (
    <main>
      {/* Page Header */}
      <section className="bg-blue-900 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-10 sm:w-12 bg-red-500" />
            <span className="text-red-400 uppercase tracking-widest text-xs sm:text-sm font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
                Let&apos;s Build Together
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                Whether you have a project in mind or just want to learn more about our work, 
                we&apos;d love to hear from you. Reach out and our team will get back to you promptly.
              </p>

              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-lg"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 text-red-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900 text-sm sm:text-base">
                        {item.title}
                      </div>
                      <div className="text-gray-600 text-sm mt-0.5">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-8 sm:mt-10">
                <div className="text-sm font-medium text-blue-900 mb-3">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 hover:bg-red-500 hover:text-white rounded-lg flex items-center justify-center text-gray-600 transition-colors text-xs font-medium"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
                  Send a Message
                </h3>

                <div className="mb-4 sm:mb-5">
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div className="mb-4 sm:mb-5">
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div className="mb-5 sm:mb-6">
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={getButtonClass()}
                >
                  {getButtonText()}
                </button>

                {status === 'success' && (
                  <p className="mt-4 text-center text-green-600 text-sm">
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                )}

                {status === 'error' && (
                  <p className="mt-4 text-center text-red-600 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-10 sm:w-12 bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">
                Find Us
              </span>
              <div className="h-1 w-10 sm:w-12 bg-red-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Our Location
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Visit our headquarters in Nairobi, Kenya
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891906878!2d36.68258744687499!3d-1.3028612987354398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1709900000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Intex Construction Location - Nairobi, Kenya"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Location Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-blue-900 mb-1">Head Office</h3>
              <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
              <p className="text-gray-500 text-xs mt-1">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-blue-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">+254 20 000 0000</p>
              <p className="text-gray-500 text-xs mt-1">Emergency: +254 722 000 000</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-blue-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">info@intexafrica.com</p>
              <p className="text-gray-500 text-xs mt-1">projects@intexafrica.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;