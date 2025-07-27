import { CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Iron Sheets",
      description: "High-quality galvanized and mild steel sheets in various thicknesses",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkOlPKObW2FRIMM7oiNK7dKrcO0Be46KjMA&s",
      features: ["Corrosion resistant", "Multiple sizes", "Competitive pricing"]
    },
    {
      name: "Square Tubes",
      description: "Precision-made square tubes for construction and fabrication",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSW5w9Z8CZG6XaXDsXOCNOwEKHNXWFx0cPhA&s",
      features: ["Various dimensions", "High strength", "Custom lengths"]
    },
    {
      name: "Round Pipes",
      description: "Seamless and welded round pipes for plumbing and structural use",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYW53h6JLnACGS9vYyGBc0xHD5cSnW0jZ7A&s",
      features: ["IS standard", "Leak-proof", "Long-lasting"]
    },
    {
      name: "Angles & Flats",
      description: "L-angles and flat bars for structural and decorative applications",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMMH33EJi6Ym60ZpLc5lA2kWZmyOVvetl2w&s",
      features: ["Precise dimensions", "Smooth finish", "Easy to work with"]
    },
    {
      name: "Steel Rods (TMT)",
      description: "High-grade TMT bars for reinforced concrete construction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4dJ4TOWW3D5cmqJg243MDowtrNTMcKDBlg&s",
      features: ["Superior strength", "Earthquake resistant", "Corrosion proof"]
    },
    {
      name: "Gates & Grills",
      description: "Custom-designed gates and security grills for homes and offices",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPS0ebAcYxjNcvbgDEcXt-V44geXrKVdaABg&s",
      features: ["Custom designs", "Powder coated", "Security focused"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in re-sales of iron and steel products including angle pipes, channels, sheets, 
            and deal in all types of iron scrap at the most competitive prices in the market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Get Price Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-orange-100 border border-orange-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-800 mb-2">Special Bulk Discounts Available!</h3>
            <p className="text-orange-700">
              Contact us for wholesale pricing and special rates on bulk orders. 
              We guarantee the best prices in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;