
const Gallery = () => {
  const galleryImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYQlmKe1ri5sZdlCepTM1spTlmqoOeMznpA&s",
      alt: "Square Tubes",
      title: "Square Tubes"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ6J3JCwjtJGe0akjKImeeRI62UIExKPySw&s",
      alt: "Angles and Channels",
      title: "Angles and Channels"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIazBvZr2EOYKTK3HJ6FEsFTBevPV4PBeWNA&s",
      alt: "TMT Rebars",
      title: "TMT Rebars"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVu7EOSks7UW8-pFgwnx0B8dfUr530P4YjQA&s",
      alt: "Cutting and Fabrication",
      title: "Cutting and Fabrication"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0Ayr2Xo6tMQxPcr_R2vnOf8UhhfBhXZlJQ&s",
      alt: "Metal sheets and plates",
      title: "Metal sheets and plates"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcDc9Hph2bq-s2U2F19q-cBIh6G9MMJdVAA&s",
      alt: "Gates and Grills",
      title: "Gates and Grills"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our steel inventory, robust infrastructure, and on-site fabrication services. 
            We take pride in supplying reliable materials that power construction and engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Visit Our Showroom</h3>
            <p className="text-gray-600 mb-6">
              Walk into our facility to witness high-grade steel materials, from structural steel 
              to custom profiles. Let our team guide your sourcing and specification needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-orange-100 px-4 py-2 rounded-lg">
                <span className="text-orange-800 font-semibold">Mon–Sat: 8:00 AM – 7:00 PM</span>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-lg">
                <span className="text-orange-800 font-semibold">Sunday: 9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
