import { Shield, Award, Truck } from 'lucide-react';
import hero from '/Blue Modern Business Card.jpeg';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Trusted Partner in 
              <span className="text-orange-400"> Iron & Steel</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              For over 50+ years, Chitra Traders has been providing high-quality iron and steel products 
              at budget-friendly prices. From construction materials to custom fabrication, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 mr-2 text-orange-400" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 mr-2 text-orange-400" />
                <span>50+ Years of Service</span>
              </div>
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-lg">
                <Truck className="w-5 h-5 mr-2 text-orange-400" />
                <span>Fast Delivery</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote Now
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Products
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-700 rounded-2xl p-8 shadow-2xl">
              <img 
                src={hero}
                alt="Steel construction materials"
                className="w-full h-44 lg:h-80 lg:object-cover object-fit rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">S. Chitra Saravanan DME</h3>
                <p className="text-gray-300">Managing Director of Chitra Traders | S/O Chitra Suyambulingam </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;