import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoSrc from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground border-t border-white/[0.08]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logoSrc} alt="Seatech" className="h-10 w-auto" />
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering government and corporate infrastructure with premium furniture solutions. ISO 9001:2015 Certified OEM.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-white/[0.08] flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-300"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-white/[0.08] flex items-center justify-center hover:bg-[#0EA5E9] hover:border-[#0EA5E9] hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(14,165,233,0.25)] transition-all duration-300"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-white/[0.08] flex items-center justify-center hover:bg-[#DB2777] hover:border-[#DB2777] hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(219,39,119,0.25)] transition-all duration-300"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-white/[0.08] flex items-center justify-center hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(29,78,216,0.25)] transition-all duration-300"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/products" className="hover:text-primary transition-colors">Product Category</Link></li>
              <li><Link to="/government-procurement" className="hover:text-primary transition-colors">Government Procurement</Link></li>
              <li><Link to="/dealer-application" className="hover:text-primary transition-colors">Become a Partner</Link></li>
              <li><Link to="/request-oem" className="hover:text-primary transition-colors">OEM Authorization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Seatech</Link></li>
              <li><Link to="/clients" className="hover:text-primary transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link to="/location" className="hover:text-primary transition-colors">Find Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-secondary/50 p-8 rounded-[10px] border border-white/[0.08] shadow-elevation">
            <h4 className="text-foreground font-bold mb-8 uppercase tracking-widest text-xs">Headquarters</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span>support@seatech.gov.in</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span>+91 11-2345-6789</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="leading-relaxed">Plot No. 45, Industrial Area,<br />Phase 2, New Delhi - 110020</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {new Date().getFullYear()} Seatech Government Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;