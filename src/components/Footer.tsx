import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tighter">Seatech</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering government and corporate infrastructure with premium furniture solutions. ISO 9001:2015 Certified OEM.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 hover:text-white transition-all duration-300"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-500 hover:text-white transition-all duration-300"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-700 hover:border-blue-600 hover:text-white transition-all duration-300"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Product Category</Link></li>
              <li><Link to="/government-procurement" className="hover:text-blue-400 transition-colors">Government Procurement</Link></li>
              <li><Link to="/dealer-application" className="hover:text-blue-400 transition-colors">Become a Partner</Link></li>
              <li><Link to="/request-oem" className="hover:text-blue-400 transition-colors">OEM Authorization</Link></li>
              <li>
                <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  GeM Portal <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Seatech</Link></li>
              <li><Link to="/clients" className="hover:text-blue-400 transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/location" className="hover:text-blue-400 transition-colors">Find Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Headquarters</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-slate-300">support@seatech.gov.in</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-slate-300">+91 11-2345-6789</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-slate-300 leading-relaxed">Plot No. 45, Industrial Area,<br/>Phase 2, New Delhi - 110020</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Seatech Government Solutions. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;