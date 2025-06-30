import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, Shield, DollarSign, Users, Star, Clock, Mail, Award, Trophy, BookOpen, Briefcase, GraduationCap, Coffee, Package, ExternalLink } from 'lucide-react';
import Auth from './Auth';
import LearnMoreModal from './LearnMoreModal';

const LandingPage: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLElement> }>({
    features: React.createRef(),
    howItWorks: React.createRef(),
    testimonials: React.createRef(),
    techStack: React.createRef(),
    partners: React.createRef(),
    business: React.createRef(),
  });

  const heroSlides = [
    {
      title: "Need help with a quick task?",
      description: "Connect with fellow students to get things done on campus",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Want to earn between classes?",
      description: "Help other students and make money on your own schedule",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Campus life made easier",
      description: "From coffee runs to study help, we've got you covered",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  useEffect(() => {
    // Auto-rotate hero slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    // Set up intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section refs
    Object.entries(sectionRefs.current).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [heroSlides.length]);

  const testimonials = [
    {
      quote: "Hustl has been a game-changer for me. I've been able to earn money between classes by helping other students with quick tasks.",
      name: "Alex J.",
      role: "Computer Science Major",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "As a busy pre-med student, I don't always have time to grab coffee or print notes. Hustl connects me with people who can help!",
      name: "Sophia R.",
      role: "Biology Major",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote: "The platform is super intuitive and the safety features make me feel comfortable using it. Highly recommend!",
      name: "Marcus T.",
      role: "Business Administration",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const techStack = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
    { name: "Firebase", logo: "https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png" },
    { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
    { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
  ];

  const partners = [
    { name: "University of Florida", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Florida_logo.svg/1280px-University_of_Florida_logo.svg.png" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-10000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2557]/90 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 sm:px-12 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3">
                <img src="/files_5770123-1751251303321-image.png" alt="Hustl Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white text-2xl font-bold">Hustl</span>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setShowLearnMoreModal(true)}
                className="nav-link text-white hover:text-blue-200 transition-colors"
              >
                About Us
              </button>
              <a href="#features" className="nav-link text-white hover:text-blue-200 transition-colors">
                Features
              </a>
              <a href="#partners" className="nav-link text-white hover:text-blue-200 transition-colors">
                Partners
              </a>
              <a
                href="/app"
                className="bg-white text-[#0F2557] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Go to App
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-6 sm:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl sm:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
                  {heroSlides[currentSlide].description}
                </p>
                
                {/* Animated Tagline */}
                <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#0038FF]/30 to-[#0021A5]/30 backdrop-blur-sm p-4 border border-white/20 animate-fade-in-up animation-delay-300 transform transition-all duration-500 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0038FF] to-[#FF5A1F] opacity-30 blur-xl animate-gradient"></div>
                  <h2 className="relative text-2xl sm:text-3xl font-bold text-white">
                    Connect. Help. Thrive on campus.
                  </h2>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
                  <a
                    href="/app"
                    className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <button
                    onClick={() => setShowLearnMoreModal(true)}
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-2px]"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0038FF] to-[#FF5A1F] opacity-30 blur-xl rounded-full animate-pulse-custom"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center">
                          <Package className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-white font-bold">Coffee Delivery</h3>
                          <p className="text-blue-200 text-sm">Marston Library</p>
                        </div>
                      </div>
                      <span className="text-white font-bold">$8</span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#FF5A1F] to-[#E63A0B] rounded-full flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-white font-bold">Notes Pickup</h3>
                          <p className="text-blue-200 text-sm">Turlington Hall</p>
                        </div>
                      </div>
                      <span className="text-white font-bold">$5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center">
                          <Coffee className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-white font-bold">Starbucks Run</h3>
                          <p className="text-blue-200 text-sm">Reitz Union</p>
                        </div>
                      </div>
                      <span className="text-white font-bold">$7</span>
                    </div>
                    <button className="w-full mt-6 bg-white text-[#0F2557] py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Browse Tasks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="relative z-10 pb-8 flex justify-center">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" ref={sectionRefs.current.features} className="py-20 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">
              Why Students Love Hustl
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for campus life, making it easy to get help or earn money on your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible.features ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse-custom"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">Quick & Convenient</h3>
              <p className="text-gray-600">
                Post a task in seconds and get matched with helpers nearby. Perfect for busy student schedules.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible.features ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse-custom"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">Safe & Secure</h3>
              <p className="text-gray-600">
                Verified student accounts, secure payments, and built-in safety features give you peace of mind.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible.features ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse-custom"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">Earn On Your Terms</h3>
              <p className="text-gray-600">
                Make money between classes by helping fellow students with tasks that fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" ref={sectionRefs.current.howItWorks} className="py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting help on campus has never been easier. Our simple process connects students in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`relative ${isVisible.howItWorks ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl border border-blue-100/50 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse-custom"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">Post a Task</h3>
                <p className="text-gray-600">
                  Describe what you need help with, set your budget, and specify when and where on campus.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-[#0038FF]" />
              </div>
            </div>

            <div className={`relative ${isVisible.howItWorks ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl border border-blue-100/50 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse-custom"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">Get Matched</h3>
                <p className="text-gray-600">
                  Nearby students will see your task and offer to help. Choose the right person for the job.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-[#0038FF]" />
              </div>
            </div>

            <div className={`${isVisible.howItWorks ? 'animate-slide-in-right animation-delay-400' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl border border-blue-100/50 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse-custom"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">Complete & Pay</h3>
                <p className="text-gray-600">
                  Once your task is completed, pay securely through the app and leave a review for your helper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={sectionRefs.current.testimonials} className="py-20 px-6 sm:px-12 bg-gradient-to-r from-[#0F2557] to-[#0038FF] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Students Are Saying
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Join thousands of students already using Hustl to connect and help each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                  isVisible.testimonials 
                    ? `animate-fade-in-up animation-delay-${index * 200}` 
                    : 'opacity-0'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-blue-200">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" ref={sectionRefs.current.techStack} className="py-20 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">
              Our Tech Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies to provide a seamless and secure experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                  isVisible.techStack 
                    ? `animate-fade-in-up animation-delay-${index * 100}` 
                    : 'opacity-0'
                }`}
              >
                <img src={tech.logo} alt={tech.name} className="h-12 object-contain mb-4" />
                <p className="font-medium text-gray-800">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" ref={sectionRefs.current.partners} className="py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0038FF] to-[#0021A5]">
              University Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with leading universities to enhance campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible.partners ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                <img src={partner.logo} alt={partner.name} className="h-16 object-contain mb-4" />
                <p className="font-bold text-xl text-gray-800">{partner.name}</p>
              </div>
            ))}
            
            <div 
              className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-105 ${
                isVisible.partners ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <p className="font-bold text-xl text-gray-800 mb-2">Coming Soon</p>
              <p className="text-gray-600 text-center">More university partnerships in development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Inquiries Section */}
      <section id="business" ref={sectionRefs.current.business} className="py-20 px-6 sm:px-12 bg-gradient-to-r from-[#0F2557] to-[#0038FF] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={isVisible.business ? 'animate-slide-in-left' : 'opacity-0'}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Partner with Hustl
              </h2>
              <p className="text-xl text-blue-200 mb-6">
                Bring Hustl to your campus and transform student life with our peer-to-peer task platform.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-bold">Build Community</h4>
                    <p className="text-blue-200">Foster connections between students across different majors and years</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-3 mt-1">
                    <DollarSign className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-bold">Create Opportunities</h4>
                    <p className="text-blue-200">Provide flexible earning opportunities for students on campus</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-3 mt-1">
                    <Shield className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-bold">Enhance Safety</h4>
                    <p className="text-blue-200">Our platform includes built-in safety features for peace of mind</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 ${isVisible.business ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">University/Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="University of Florida"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="john.doe@university.edu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    rows={4}
                    placeholder="Tell us about your interest in partnering with Hustl..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-white text-[#0F2557] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0038FF] to-[#0021A5] rounded-2xl p-12 shadow-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/10 animate-float"
                  style={{
                    width: `${Math.random() * 20 + 10}px`,
                    height: `${Math.random() * 20 + 10}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 10 + 5}s`,
                  }}
                ></div>
              ))}
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Join the Movement
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Be part of the campus revolution that's making student life easier, more connected, and more rewarding.
              </p>
              <a
                href="/app"
                className="inline-block bg-white text-[#0F2557] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px] shadow-xl"
              >
                Join the Movement
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F2557] text-white py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <img src="/files_5770123-1751251303321-image.png" alt="Hustl Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-white text-xl font-bold">Hustl</span>
              </div>
              <p className="text-blue-200 mb-4">
                Connecting students for quick tasks and errands on campus.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-blue-200 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-blue-200 hover:text-white transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setShowLearnMoreModal(true)} className="text-blue-200 hover:text-white transition-colors">About Us</button>
                </li>
                <li>
                  <a href="#partners" className="text-blue-200 hover:text-white transition-colors">Partners</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-200" />
                  <a href="mailto:hustlapp@outlook.com" className="text-blue-200 hover:text-white transition-colors">hustlapp@outlook.com</a>
                </li>
                <li className="flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2 text-blue-200" />
                  <a href="/app" className="text-blue-200 hover:text-white transition-colors">Go to App</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Hustl. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <Auth onClose={() => setShowAuthModal(false)} />
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMoreModal && <LearnMoreModal onClose={() => setShowLearnMoreModal(false)} />}
    </div>
  );
};

export default LandingPage;