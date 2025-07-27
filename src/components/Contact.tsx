import { Phone, Mail, MapPin, Clock, MessageCircle, Truck } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for competitive quotes, 
            expert advice, and reliable service you can trust.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-10 text-orange-400 text-center">Contact Information</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Card */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-orange-400/40 transition duration-300">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone Numbers</h4>
                  <p className="text-gray-300">+91 9941169939</p>
                  <p className="text-gray-300">+91 8190004666</p>
                  <p className="text-sm text-orange-400 mt-2">Call for instant quotes</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-orange-400/40 transition duration-300">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">chitratraders@gmail.com</p>
                  <p className="text-gray-300">Contact via phone for quick response</p>
                  <p className="text-sm text-orange-400 mt-2">24-hour response guaranteed</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-orange-400/40 transition duration-300">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">
                    103, GST Road,<br />
                    Kattankolathur - 603 203<br />
                    Tamil Nadu, India
                  </p>
                  <p className="text-sm text-orange-400 mt-2">Easy parking available</p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-orange-400/40 transition duration-300">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-300">Mon–Sat: 8:00 AM – 7:00 PM</p>
                  <p className="text-gray-300">Sunday: Flexible Hours</p>
                  <p className="text-sm text-orange-400 mt-2">Emergency orders accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-orange-400/40 transition duration-300">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Delivery</h3>
            <p className="text-gray-300">Delivery within 25km radius for orders above ₹10,000</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-orange-400/40 transition duration-300">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-300">Round-the-clock customer support for urgent requirements</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-orange-400/40 transition duration-300">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
            <p className="text-gray-300">Free technical consultation and project planning assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
