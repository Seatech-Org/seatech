import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Seatech</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              India's trusted partner for government e-marketplace solutions. ISO 9001:2015 Certified.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Browse Catalogue</Link></li>
              <li><Link to="/dealer-application" className="hover:text-blue-400 transition-colors">Dealer Registration</Link></li>
              <li><Link to="/auth" className="hover:text-blue-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6">Top Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Office Furniture</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Steel Cabinets</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Classroom Sets</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Auditorium Seating</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>support@seatech.gov.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>+91 11-2345-6789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>Plot No. 45, Industrial Area,<br/>Phase 2, New Delhi - 110020</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Seatech Government Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;