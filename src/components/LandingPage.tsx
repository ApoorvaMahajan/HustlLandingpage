import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  ArrowRight, 
  Users, 
  Shield, 
  DollarSign, 
  Star, 
  MessageSquare, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink,
  Mail,
  Send
} from "lucide-react";
import { auth } from "../lib/firebase";
import LearnMoreModal from "./LearnMoreModal";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Animate in elements
    setIsVisible(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleGoToApp = () => {
    navigate("/app");
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hustlapp@outlook.com?subject=Business Inquiry&body=Hello Hustl team, I'm interested in learning more about partnering with you. My email is ${email}.`;
    setEmail("");
  };

  const testimonials = [
    {
      quote: "Hustl has completely changed how I manage my time on campus. I can focus on studying while getting help with small tasks.",
      name: "Sarah M.",
      role: "Biology Major",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I've been able to earn money between classes by helping other students. It's flexible and fits perfectly with my schedule.",
      name: "Michael T.",
      role: "Computer Science Major",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The coffee delivery feature saved me during finals week! I could stay focused in the library while someone brought me coffee.",
      name: "Jessica L.",
      role: "Psychology Major",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse"
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.1,
                  animationDuration: `${Math.random() * 8 + 4}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `scale(${Math.random() * 0.8 + 0.2})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/files_5770123-1751251303321-image.png" 
                alt="Hustl Logo" 
                className="h-10 w-auto mr-2" 
              />
              <span className="text-2xl font-bold text-[#0F2557]">Hustl</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowLearnMore(true)}
                className="text-[#0F2557] hover:text-[#0A1B3D] font-medium"
              >
                About Us
              </button>
              <button
                onClick={handleGoToApp}
                className="bg-gradient-to-r from-[#0F2557] to-[#0A1B3D] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-200 shadow-md flex items-center"
              >
                Go to App
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2557] leading-tight mb-6">
                  Campus Tasks,{" "}
                  <span className="text-[#FA4616]">Simplified</span>
                </h1>
                
                {/* Animated tagline */}
                <div className="relative h-12 mb-6 overflow-hidden">
                  <div className="absolute animate-pulse">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0F2557] to-[#FA4616] text-transparent bg-clip-text">
                      Connect. Help. Thrive on campus.
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">
                  The student-to-student marketplace for quick tasks and errands on campus. 
                  Get help with coffee runs, printing, food delivery, and more!
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handleGoToApp}
                    className="bg-gradient-to-r from-[#FA4616] to-[#E63A0B] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 shadow-lg flex items-center justify-center group"
                  >
                    <Zap className="mr-2 w-5 h-5" />
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setShowLearnMore(true)}
                    className="bg-white border-2 border-[#0F2557] text-[#0F2557] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FA4616] rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0F2557] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Students collaborating on campus"
                    className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold">Verified UF Students</p>
                      <p className="text-xs text-gray-500">Safe & Secure Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] mb-4">How Hustl Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform connects students who need help with those who can provide it, creating a vibrant campus community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-[#0F2557]" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Post Your Task</h3>
              <p className="text-gray-600 text-center">
                Describe what you need help with, set your budget, and choose a location on campus.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MessageSquare className="w-8 h-8 text-[#0F2557]" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Get Connected</h3>
              <p className="text-gray-600 text-center">
                A fellow student accepts your task and communicates with you through our secure chat.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-[#0F2557]" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Task Completed</h3>
              <p className="text-gray-600 text-center">
                Once your task is done, payment is processed securely, and you can leave a review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] mb-4">Why Choose Hustl</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by students, for students, with features designed specifically for campus life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <Shield className="w-10 h-10 text-[#0F2557] mb-4" />
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Verified student accounts, secure payments, and built-in safety features.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <DollarSign className="w-10 h-10 text-[#0F2557] mb-4" />
              <h3 className="text-xl font-bold mb-2">Earn Money</h3>
              <p className="text-gray-600">
                Make money between classes by helping fellow students with tasks.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <Zap className="w-10 h-10 text-[#0F2557] mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-gray-600">
                Intuitive interface makes it simple to post or find tasks in seconds.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <Users className="w-10 h-10 text-[#0F2557] mb-4" />
              <h3 className="text-xl font-bold mb-2">Campus Community</h3>
              <p className="text-gray-600">
                Connect with fellow students and build a stronger campus network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] mb-4">What Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who are already using Hustl on campus.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0F2557] to-[#0A1B3D] rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8 text-white">
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-[#FA4616] opacity-50" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-xl italic mb-6">{testimonials[currentTestimonial].quote}</p>
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-blue-200">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="mx-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? "bg-[#FA4616]" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="mx-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] mb-4">Our Tech Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies for a seamless experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* React */}
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" 
                alt="React" 
                className="h-16 object-contain mb-3" 
              />
              <p className="font-medium">React</p>
            </div>
            
            {/* Firebase */}
            <div className="flex flex-col items-center">
              <img 
                src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png" 
                alt="Firebase" 
                className="h-16 object-contain mb-3" 
              />
              <p className="font-medium">Firebase</p>
            </div>
            
            {/* TailwindCSS */}
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" 
                alt="TailwindCSS" 
                className="h-16 object-contain mb-3" 
              />
              <p className="font-medium">TailwindCSS</p>
            </div>
            
            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" 
                alt="TypeScript" 
                className="h-16 object-contain mb-3" 
              />
              <p className="font-medium">TypeScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners */}
      <section className="relative z-10 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] mb-4">University Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hustl is expanding to campuses across the country
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Florida_logo.svg/1280px-University_of_Florida_logo.svg.png" 
                alt="University of Florida" 
                className="h-16 object-contain mb-3" 
              />
              <p className="font-medium text-center">University of Florida</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-3">
                <p className="text-gray-400 font-medium">Coming Soon</p>
              </div>
              <p className="font-medium text-center">More Universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Inquiries Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2557] mb-4">Partner with Hustl</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bring Hustl to your university and transform campus life for your students
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0F2557] mb-6">Interested in bringing Hustl to your campus?</h3>
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0F2557] focus:border-[#0F2557]"
                  placeholder="your@email.edu"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0F2557] to-[#0A1B3D] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200 shadow-md flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Our Team
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-[#0F2557] to-[#0A1B3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Be part of the campus revolution that's connecting students and making campus life easier.
            </p>
            <button
              onClick={handleGoToApp}
              className="bg-gradient-to-r from-[#FA4616] to-[#E63A0B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200 shadow-lg flex items-center mx-auto group"
            >
              <Zap className="mr-2 w-6 h-6" />
              Get Started Now
              <ArrowRight className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src="/files_5770123-1751251303321-image.png" 
                alt="Hustl Logo" 
                className="h-10 w-auto mr-2" 
              />
              <span className="text-xl font-bold text-[#0F2557]">Hustl</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-[#0F2557]">About</a>
              <a href="#" className="text-gray-600 hover:text-[#0F2557]">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-[#0F2557]">Terms</a>
              <a href="mailto:hustlapp@outlook.com" className="text-gray-600 hover:text-[#0F2557]">Contact</a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hustl. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Learn More Modal */}
      {showLearnMore && <LearnMoreModal onClose={() => setShowLearnMore(false)} />}
    </div>
  );
};

export default LandingPage;