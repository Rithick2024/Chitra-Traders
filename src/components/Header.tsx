import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white shadow-lg">
{/* Top contact bar */}
<div className="bg-slate-900 py-2 overflow-hidden">
  <div className="hidden sm:flex container mx-auto px-4 justify-between items-center text-sm">
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <Phone className="w-4 h-4 mr-2" />
        <span>+91 9941169939</span>
      </div>
      <div className="flex items-center">
        <Mail className="w-4 h-4 mr-2" />
        <span>+91 8190004666</span>
      </div>
    </div>
    <div className="text-orange-400 font-medium">
      S. Chitra Saravanan DME | S/O Chitra Suyambulingam
    </div>
  </div>

  {/* Mobile Marquee */}
  <div className="sm:hidden text-sm text-white whitespace-nowrap animate-marquee">
    <div className="inline-block px-4">
      📞 +91 9941169939 | 📞 +91 8190004666 | 👨‍💼 S. Chitra Saravanan DME | S/O Chitra Suyambulingam
    </div>
  </div>
</div>


      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-lg mr-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-orange-500 font-bold text-lg">CT</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Chitra Traders</h1>
              <p className="text-orange-400 text-sm">Iron & Steel Specialists</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#products" className="hover:text-orange-400 transition-colors">Products</a>
            <a href="#gallery" className="hover:text-orange-400 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
              <a href="#products" className="hover:text-orange-400 transition-colors">Products</a>
              <a href="#gallery" className="hover:text-orange-400 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;