import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Book, MapPin, Clock, DollarSign, Star, Shield, Users, Zap, MessageSquare, Award, ChevronRight, ChevronLeft } from "lucide-react";
import { StarBorder } from "./ui/star-border";
import LearnMoreModal from "./LearnMoreModal";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    hero: false,
    features: false,
    howItWorks: false,
    testimonials: false,
    mission: false,
  });

  const slides = [
    {
      title: "Connect with fellow students",
      description: "Get help with quick tasks or earn money helping others",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=format&fit=crop&w=1470&q=80",
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "Coffee runs made easy",
      description: "Need coffee during a study session? Get it delivered!",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=format&fit=crop&w=1470&q=80",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Study materials on demand",
      description: "Get notes, textbooks, or printing delivered to you",
      image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=format&fit=crop&w=1470&q=80",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      major: "Biology",
      quote: "Hustl saved me during finals week! I needed coffee but couldn't leave the library, and someone delivered it in 15 minutes.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "James K.",
      major: "Computer Science",
      quote: "I make around $100 a week just doing coffee runs and food deliveries between classes. Perfect for a busy student schedule!",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Aisha T.",
      major: "Psychology",
      quote: "The safety features make me feel comfortable using the app. I've met some great people while completing tasks!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Auto-advance slides
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Auto-advance testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    // Set up intersection observers for animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section id="hero" className={`relative min-h-screen flex items-center transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-60 z-20`}></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="/files_5770123-1751251303321-image.png" 
                alt="Hustl Logo" 
                className="h-24 sm:h-32 w-auto animate-fade-in-down"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <StarBorder color="#FFFFFF">
                <Link
                  to="/app"
                  className="bg-white text-[#0038FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition duration-300 flex items-center justify-center shadow-lg"
                >
                  Go to App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </StarBorder>
              
              <button
                onClick={() => setShowLearnMore(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white w-10"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 bg-white transition-all duration-1000 transform ${isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Campus Life, Simplified
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hustl connects students to help each other with everyday tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Coffee & Food Runs</h3>
              <p className="text-gray-600">
                Need coffee during a study session? Get it delivered right to your spot in the library.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Help</h3>
              <p className="text-gray-600">
                Get notes when you miss class, find study partners, or get textbooks delivered.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Earn Between Classes</h3>
              <p className="text-gray-600">
                Turn your free time into income by helping fellow students with quick tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howItWorks" className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 transform ${isVisible.howItWorks ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Hustl Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting help or earning money is simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[#0038FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0038FF] to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Post Your Task</h3>
              <p className="text-gray-600">
                Describe what you need, set your budget, and choose a location
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[#0038FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#0038FF] to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Matched</h3>
              <p className="text-gray-600">
                Connect with verified students nearby who can help
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[#0038FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Complete & Pay</h3>
              <p className="text-gray-600">
                Task completed, payment processed securely through the app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white transition-all duration-1000 transform ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Students Are Saying
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of students already using Hustl
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white"
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-blue-200">{testimonial.major}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-white w-10"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className={`py-20 bg-white transition-all duration-1000 transform ${isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building a stronger campus community through connection and collaboration
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  At Hustl, we believe in the power of community and the untapped potential of student collaboration. Our mission is to create a platform where students can help each other navigate the challenges of campus life while building meaningful connections.
                </p>
                
                <p className="mb-6">
                  Founded by a diverse team of students who experienced firsthand the everyday hurdles of university life, Hustl was born from a simple observation: students have complementary needs and abilities, but lack an efficient way to connect.
                </p>
                
                <p className="mb-6">
                  Whether it's getting coffee delivered during an intense study session, finding someone to pick up class materials when you're sick, or earning extra money between classes by helping fellow students, Hustl makes these connections possible.
                </p>
                
                <p className="mb-6">
                  We're more than just a task marketplace—we're building a collaborative ecosystem where students support each other through the unique challenges of university life. By connecting those who need help with those who can provide it, we're fostering a more connected, efficient, and supportive campus community.
                </p>
                
                <p>
                  Our team is committed to creating a platform that is safe, inclusive, and beneficial for all students. We prioritize user safety, fair compensation, and positive community interactions in everything we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of students already using Hustl to connect, help each other, and make campus life easier.
          </p>
          <StarBorder color="#FFFFFF">
            <Link
              to="/app"
              className="bg-white text-[#0038FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition duration-300 inline-flex items-center shadow-lg"
            >
              Go to App
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </StarBorder>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/files_5770123-1751251303321-image.png" 
                alt="Hustl Logo" 
                className="h-12 w-auto"
              />
              <p className="mt-2 text-gray-400">
                Campus tasks, simplified.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Task Marketplace</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Secure Payments</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Safety Features</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setShowLearnMore(true)} className="text-gray-400 hover:text-white transition">About Us</button></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Hustl. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Learn More Modal */}
      {showLearnMore && <LearnMoreModal onClose={() => setShowLearnMore(false)} />}

      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-3/4 left-2/3 w-96 h-96 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-1000"></div>
      </div>
    </div>
  );
};

export default LandingPage;