import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 p-2 rounded-lg mr-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">CT</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Chitra Traders</h3>
                <p className="text-orange-400 text-sm">Iron & Steel Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for all iron and steel needs since 1995. We provide quality 
              products at competitive prices with exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-orange-400" />
                <span className="text-gray-300 text-sm">+91 9941169939</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-orange-400" />
                <span className="text-gray-300 text-sm">+91 8190004666</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-orange-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  103, GST Road,<br />
                  Kattankolathur - 603 203<br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Chitra Traders. All rights reserved. | S. Chitra Saravanan DME | Quality • Reliability • Value
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;