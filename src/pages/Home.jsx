import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/physiotherapy-2.jpg";
import card1 from "../assets/img1.jpg";
import card2 from "../assets/img2.jpg";
import card3 from "../assets/img3.jpg";
import card4 from "../assets/img4.jpg";
import card5 from "../assets/img5.jpg";
import card6 from "../assets/img6.jpg";

const cards = [
  { image: card1, title: "Physio Therapy", desc: "Recovery programs for injuries." },
  { image: card2, title: "Massage Therapy", desc: "Relax and relieve tension." },
  { image: card3, title: "Posture Correction", desc: "Improve your posture." },
  { image: card4, title: "Sports Rehab", desc: "Get back in the game quickly." },
  { image: card5, title: "Pain Management", desc: "Reduce chronic pain effectively." },
  { image: card6, title: "Wellness Programs", desc: "Maintain health and mobility." },
];


const Home = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen  flex items-center justify-center bg-cover bg-top pt-20 overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Revitalize Your Body with{" "}
            <span className="text-teal-400">Expert Physio Therapy</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Personalized physiotherapy sessions designed to help you recover faster
            and move better.
          </motion.p>

          <motion.button
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </section>

      {/* CARD CAROUSEL SECTION */}
      <section className="relative bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
            The Physic Fitness Services
          </h2>
          <p className="text-center text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mt-4 mb-10">The Physic Fitness offers expert physiotherapy treatments across multiple specialties and locations. Contact us to check the availability of physiotherapists near you.</p>

          <div className="relative flex overflow-hidden">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="flex gap-6 transition-transform duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === currentCard ? 1 : 0.5,
                  y: index === currentCard ? 0 : 20,
                  scale: index === currentCard ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCard ? "bg-teal-600 w-6" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
