import { motion } from "framer-motion";
import { Link } from "wouter";
import portImg1 from "@/assets/images/portfolio-1.png";
import portImg2 from "@/assets/images/portfolio-2.png";
import portImg3 from "@/assets/images/portfolio-3.png";
import portImg4 from "@/assets/images/portfolio-4.png";
import portImg5 from "@/assets/images/portfolio-5.png";
import heroImg2 from "@/assets/images/hero-2.png"; // Reusing as 6th portfolio item

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function OurWorks() {
  const images = [
    { src: portImg1, title: "Automotive Elegance", category: "Commercial" },
    { src: portImg2, title: "Behind The Scenes", category: "Production" },
    { src: portImg3, title: "Fluid Dynamics", category: "Motion Graphics" },
    { src: portImg4, title: "Neon Nights", category: "Editorial" },
    { src: portImg5, title: "Cyber City", category: "VFX" },
    { src: heroImg2, title: "Abstract Core", category: "3D Rendering" },
  ];

  const videos = [
    { id: "dQw4w9WgXcQ", title: "Brand Anthem 2024" },
    { id: "jNQXAC9IVRw", title: "Me at the zoo - Remastered" },
    { id: "M7lc1UVf-VE", title: "YouTube Creators Showcase" }
  ];

  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 relative border-b border-white/5">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Selected <span className="text-primary text-glow">Works</span>
            </h1>
            <p className="text-xl text-gray-400 font-light">
              A showcase of our finest visual storytelling work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Reel Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 flex items-center justify-between"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Films</h2>
            <div className="h-[1px] flex-1 bg-white/10 mx-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videos.map((vid, i) => (
              <motion.div 
                key={vid.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,255,136,0.15)] border border-primary/20 hover:border-primary/60 transition-colors duration-500 bg-black/50">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${vid.id}?rel=0&modestbranding=1`}
                    title={vid.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-white font-semibold mt-4">{vid.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 relative bg-zinc-950">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 flex items-center justify-between"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Still Frames</h2>
            <div className="h-[1px] flex-1 bg-white/10 mx-6"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((img, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-mono uppercase tracking-widest mb-2">{img.category}</span>
                  <h3 className="text-white text-xl font-bold">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ending Statement */}
      <section className="py-40 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-primary/10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Where Vision Meets <span className="text-primary text-glow">Execution</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
              We bring your brand story to life through the lens of artistry and precision. Every frame tells a story.
            </p>
            <Link href="/contact">
              <span className="inline-block px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-primary transition-colors cursor-pointer text-lg">
                Let's Tell Yours
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
