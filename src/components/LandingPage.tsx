import React, { useState, useEffect } from 'react';
import { ArrowRight, Coffee, Book, MapPin, Clock, DollarSign, Shield, User, Star, MessageSquare, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import LearnMoreModal from './LearnMoreModal';
import { StarBorder } from './ui/star-border';

const LandingPage: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSignIn = () => {
    setAuthMode('signin');
    setShowAuthModal(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const testimonials = [
    {
      quote: "Hustl has been a game-changer for me. I can easily find help with tasks between classes and make some extra money when I have free time.",
      author: "Sarah M.",
      role: "Junior, Business Administration"
    },
    {
      quote: "As a busy engineering student, I don't always have time to grab coffee or print assignments. Hustl connects me with other students who can help.",
      author: "Michael T.",
      role: "Senior, Computer Science"
    },
    {
      quote: "I've made great connections and earned enough to cover my textbooks this semester just by helping other students with quick tasks.",
      author: "Jessica L.",
      role: "Sophomore, Psychology"
    }
  ];

  const features = [
    {
      icon: <Coffee className="w-6 h-6 text-[#FF5A1F]" />,
      title: "Coffee Runs",
      description: "Get coffee delivered from campus locations"
    },
    {
      icon: <Book className="w-6 h-6 text-[#FF5A1F]" />,
      title: "Study Materials",
      description: "Get notes, printouts, or textbooks delivered"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#FF5A1F]" />,
      title: "Campus Deliveries",
      description: "Food, packages, and more delivered to you"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#002B7F] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-[#FF5A1F] mr-2" />
            <span className="text-2xl font-bold">Hustl</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSignIn}
              className="text-white hover:text-gray-200 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="bg-[#FF5A1F] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#E63A0B] transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#002B7F] to-[#0038FF] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                UF's Campus Task Platform
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                Connect with fellow Gators to get help with quick tasks or earn money helping others
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <StarBorder color="#FF5A1F">
                  <button
                    onClick={handleSignUp}
                    className="bg-gradient-to-r from-[#FF5A1F] to-[#E63A0B] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </StarBorder>
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="bg-white text-[#0038FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students collaborating on campus"
                className="rounded-lg shadow-2xl max-w-full h-auto"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Hustl Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-[#0038FF]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Post Your Task</h3>
              <p className="text-gray-600">
                Describe what you need help with, set your budget, and choose a location on campus
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#0038FF]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect with Helpers</h3>
              <p className="text-gray-600">
                Chat with available students and choose someone to help with your task
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#0038FF]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Complete & Rate</h3>
              <p className="text-gray-600">
                Once your task is done, rate your helper and pay securely through our platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tasks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Tasks</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From coffee runs to printing assignments, Hustl connects you with fellow students who can help
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={handleSignUp}
              className="bg-[#0038FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0021A5] transition-colors inline-flex items-center"
            >
              Explore All Tasks
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-[#002B7F] to-[#0038FF] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <p className="text-xl italic mb-6">"{testimonials[currentTestimonialIndex].quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold">{testimonials[currentTestimonialIndex].author}</p>
                  <p className="text-blue-200">{testimonials[currentTestimonialIndex].role}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentTestimonialIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Safety First</h2>
              <p className="text-gray-600 mb-6">
                Hustl is built with your safety in mind. We verify all users, provide secure payments, and offer real-time tracking.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-[#0038FF] mr-2 mt-1" />
                  <div>
                    <h3 className="font-bold">Verified Users</h3>
                    <p className="text-gray-600">All users are verified UF students</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-6 h-6 text-[#0038FF] mr-2 mt-1" />
                  <div>
                    <h3 className="font-bold">Secure Payments</h3>
                    <p className="text-gray-600">All transactions are protected and secure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#0038FF] mr-2 mt-1" />
                  <div>
                    <h3 className="font-bold">Real-time Tracking</h3>
                    <p className="text-gray-600">Know exactly where your helper is in real-time</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students on campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002B7F] to-[#0038FF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of UF students already using Hustl to connect, help each other, and build a stronger campus community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <StarBorder color="#FF5A1F">
              <button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-[#FF5A1F] to-[#E63A0B] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
              >
                Sign Up Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </StarBorder>
            <button
              onClick={handleSignIn}
              className="bg-white text-[#0038FF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-[#FF5A1F] mr-2" />
                <span className="text-xl font-bold">Hustl</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Connecting UF students for quick tasks, errands, and campus help.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setShowLearnMore(true)} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                  <li><button onClick={handleSignUp} className="text-gray-400 hover:text-white transition-colors">Sign Up</button></li>
                  <li><button onClick={handleSignIn} className="text-gray-400 hover:text-white transition-colors">Sign In</button></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Hustl. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Auth 
            initialMode={authMode} 
            onClose={() => setShowAuthModal(false)} 
          />
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMore && (
        <LearnMoreModal onClose={() => setShowLearnMore(false)} />
      )}
    </div>
  );
};

export default LandingPage;