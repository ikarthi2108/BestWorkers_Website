import { useEffect, useState } from "react";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">BW</span>
            </div>
            <span className="text-xl font-bold text-blue-600">BestWorkers</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#download" className="text-gray-700 hover:text-blue-600 transition-colors">Download</a>
          </div>
          <a 
            href="https://play.google.com/store/apps/details?id=com.bestworkers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Get the App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Find the Best <span className="text-blue-600">Workers</span> in TamilNadu Region
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with skilled local professionals in Erode, Coimbatore, Tirupur and nearby areas. Fast, reliable, and quality service guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-lg flex items-center justify-center hover:shadow-xl">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  <path d="M11 6a1 1 0 10-2 0v4a1 1 0 002 0V6z" />
                  <path d="M14 10a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
                </svg>
                Watch Demo
              </button>
              <a 
                href="https://play.google.com/store/apps/details?id=com.bestworkers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all shadow-md flex items-center justify-center hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
                Download Now
              </a>
            </div>
            <div className="mt-8 flex items-center">
             
              <div className="ml-4">
                <p className="text-sm text-gray-600">Trusted by <span className="font-bold">5,000+</span> users in South region</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-600 ml-1">(1,287 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <img 
              src="https://thumbs.dreamstime.com/b/farmer-planting-fields-lady-field-tamilnadu-india-56358228.jpg" 
              alt="BestWorkers App" 
              className="w-full max-w-md mx-auto rounded-lg shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose <span className="text-blue-600">BestWorkers</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The best platform to connect with skilled workers in TamilNadu region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Verified Local Workers",
                description: "All workers are from Kongu region with verified backgrounds and skills for your safety."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Quick Response",
                description: "Get connected with available workers in your area within 30 minutes."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Fair Pricing",
                description: "Local competitive rates with no hidden fees. See costs before booking."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fadeInUp hover:border-blue-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Serving <span className="text-blue-600">Regions</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We connect you with the best workers in these areas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Erode', 'Coimbatore', 'Tirupur', 'Salem', 'Karur', 'Namakkal', 'Dindigul', 'Nilgiris'].map((city, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How <span className="text-blue-600">BestWorkers</span> Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your job done in just a few simple steps.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Post Your Job",
                  description: "Describe the work you need done in Tamil or English and set your budget.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  step: "2",
                  title: "Receive Bids",
                  description: "Get competitive offers from qualified local workers in minutes.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  step: "3",
                  title: "Choose the Best",
                  description: "Compare profiles, reviews in Tamil, and prices to select the perfect worker.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center animate-fadeInUp hover:shadow-xl hover:border-blue-100 transition-all`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-6 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our <span className="text-blue-600">Users Say</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our Tamil users have to say.
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative h-64">
            {[
              {
                quote: "BestWorkers saved me when my plumbing burst. Found a local plumber from Erode who fixed everything quickly at a good price. Very happy with the service!",
                name: "சரண்யா",
                role: "Homeowner, Erode",
                avatar: "https://thumbs.dreamstime.com/b/portrait-tamil-tea-worker-9920880.jpg"
              },
              {
                quote: "As a carpenter in Coimbatore, BestWorkers has helped me find consistent work. The app is easy to use in Tamil and I get paid quickly. மிகவும் நன்றி!",
                name: "முருகன்",
                role: "Carpenter, Coimbatore",
                avatar: "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg"
              },
              {
                quote: "I've used several apps, but BestWorkers stands out for local Kongu region workers. The Tamil reviews helped me choose the right electrician for my shop.",
                name: "ராஜேஷ்",
                role: "Shop Owner, Tirupur",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZWDuK1to9LAGL12wQ9k4FHyKcv6A1qqF4w&s"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md ${activeTestimonial === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                </div>
                <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {[0, 1, 2].map((i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === i ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Download <span className="text-blue-200">BestWorkers</span> App Now
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Available on Android. Coming soon to iOS. Get started today!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.bestworkers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg transition-all shadow-lg flex items-center justify-center hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                  Google Play
                </a>
                <button className="bg-gray-100 hover:bg-gray-200 text-blue-600 px-6 py-3 rounded-lg transition-all shadow-lg flex items-center justify-center hover:shadow-xl cursor-not-allowed">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Coming Soon (iOS)
                </button>
              </div>
            </div>
            <div className="md:w-1/2 animate-bounce-slow">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKk5Vy60SSJmV2i2fIGIxvi7dk0WtaKHMdw&s" 
                alt="BestWorkers App Screens" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">BW</span>
                </div>
                <span className="text-xl font-bold">BestWorkers</span>
              </div>
              <p className="text-gray-400">
                Connecting you with the best professionals for any job, anytime, anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2023 BestWorkers. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;