import { Users, MapPin, Clock, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Chitra Traders</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Led by S. Chitra Saravanan DME, Chitra Traders has been a cornerstone of the local construction 
              industry. What started as a small family business has grown into one of the most trusted names 
              in iron and steel supply, specializing in re-sales and dealing in all iron scrap.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, competitive pricing, and exceptional customer service has 
              earned us the trust of contractors, builders, and individual customers throughout Tamil Nadu.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Family Owned</h3>
                  <p className="text-gray-600 text-sm">Three generations of expertise and dedication</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Local Presence</h3>
                  <p className="text-gray-600 text-sm">Serving the community with pride</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">50+ Years</h3>
                  <p className="text-gray-600 text-sm">Of consistent quality and service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">5000+ Projects</h3>
                  <p className="text-gray-600 text-sm">Successfully completed with satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <img 
                src="/public/dacc5b42-62af-4c7c-8362-df82f45c7962.JPG" 
                alt="Our warehouse facility"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl text-center font-semibold text-slate-800 mb-2">Mr.Suyambulingam Nadar & Mrs.Chitra Suyambulingam</h3>
              <p className='text-center text-slate-800'>Founder & CEO of Chitra Traders</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Our Promise to You</h3>
              <ul className="space-y-2 text-orange-700">
                <li>✓ Guaranteed best prices in the market</li>
                <li>✓ Quality products from certified manufacturers</li>
                <li>✓ On-time delivery, every time</li>
                <li>✓ Expert advice and technical support</li>
                <li>✓ Flexible payment options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;