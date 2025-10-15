import React from "react";
import { motion } from "framer-motion";
import hijamaImage from "../assets/img5.jpg"; // replace with your hijama image

const Hijama = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center">
        <img
          src={hijamaImage}
          alt="Hijama Therapy"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <motion.div
          className="relative text-center text-white px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Hijama (Cupping Therapy)
          </h1>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow">
            Experience the healing power of <span className="font-semibold text-teal-300">Hijama Therapy</span> — a traditional, evidence-backed practice that detoxifies your body, enhances blood flow, and boosts overall well-being.
          </p>
          <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Book a Session
          </button>
        </motion.div>
      </div>

      {/* What is Hijama */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold text-teal-900">What is Hijama (Cupping Therapy)?</h2>
        <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
          Cupping Therapy is an ancient healing practice that has found a strong place in modern physiotherapy and sports recovery. It involves placing special cups on the skin to create suction, which helps increase blood circulation, release tight muscles, and promote faster healing.  Dry & Wet Cupping ( HIjama ) are most commonly used types of cupping.


          Today, physiotherapists use cupping as part of rehabilitation programs for chronic pain, orthopedic conditions, mobility improvement, and athletic recovery. Unlike traditional methods, cupping at CB Physiotherapy is applied in a controlled, safe, and evidence-based way.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-teal-900 text-left">
          Types of Cupping Therapy
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Cupping therapy comes in various forms, each designed to target specific therapeutic outcomes and
            healing responses.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">1. Dry Cupping</h3>
              <p>
                The most common form, where suction is applied without any incisions. It is widely used for
                <span className="font-medium"> pain relief, relaxation,</span> and to reduce
                <span className="font-medium"> muscle tightness.</span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">2. Wet Cupping (Hijama)</h3>
              <p>
                Involves controlled release after suction. Believed to assist in
                <span className="font-medium"> detoxification</span> and
                <span className="font-medium"> inflammation management.</span> While used sparingly in modern physiotherapy,
                it remains popular in traditional healing systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">3. Fire Cupping</h3>
              <p>
                Heated cups are placed on the skin to create deeper suction. This helps
                <span className="font-medium"> improve circulation, reduce muscle stiffness,</span>
                and promote deep relaxation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">4. Ice Cupping</h3>
              <p>
                Combines cold therapy with suction to effectively manage
                <span className="font-medium"> swelling, inflammation,</span> and
                <span className="font-medium"> post-injury pain,</span>
                especially in <span className="italic">acute sports injuries.</span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">5. Cupping Massage</h3>
              <p>
                Cups are moved across the skin with oils, combining suction with
                <span className="font-medium"> massage effects.</span>
                This technique enhances
                <span className="font-medium"> relaxation, lymphatic drainage,</span>
                and <span className="font-medium">deep tissue recovery.</span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">6. Dynamic / Functional Cupping</h3>
              <p>
                Cups are applied while the patient performs
                <span className="font-medium"> guided exercises or stretches.</span>
                Commonly used in sports physiotherapy to
                <span className="font-medium"> improve flexibility, break fascial adhesions,</span>
                and enhance overall
                <span className="font-medium"> functional performance.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-teal-900 mb-6 text-left">
          Is Cupping Therapy Safe? Any Side Effects
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yes. When performed by trained physiotherapists, cupping therapy is safe, hygienic, and effective. Side effects are minimal and temporary, such as mild bruising or redness.
        </p>

        <h3 className="text-xl font-semibold text-teal-800 mt-6 mb-3">
          Cupping is not recommended for:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Patients with bleeding disorders</li>
          <li>Severe skin conditions or infections like eczema and psoriasis</li>
          <li>Pregnant women (without medical clearance)</li>
        </ul>
      </div>


      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8 bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-teal-900 text-left">
          Cupping Combined With Physiotherapy Modalities
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Cupping alone is effective, but its results are amplified when integrated with other physiotherapy treatments:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <span className="font-semibold text-teal-800">Manual Therapy & Mobilizations</span> – restore normal joint mechanics
          </li>
          <li>
            <span className="font-semibold text-teal-800">Electrotherapy (TENS/IFT/Ultrasound)</span> – target pain and tissue healing
          </li>
          <li>
            <span className="font-semibold text-teal-800">Cryotherapy or Heat Therapy</span> – manage inflammation or stiffness
          </li>
          <li>
            <span className="font-semibold text-teal-800">Exercise Therapy</span> – build long-term strength, mobility, and recovery
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          This multi-modality approach ensures patients not only get immediate relief but also long-term benefits.
        </p>
      </div>


      {/* Techniques Used */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-teal-900">Techniques Used in Hijama</h2>
        <div className="text-gray-600 leading-relaxed p-6 bg-white rounded-xl shadow-md space-y-4">
          <p>
            Hijama therapy consists of different techniques, each serving a unique healing purpose.
            Here are the most common ones practiced by professionals:
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mt-6">1. Dry Cupping</h3>
          <p>
            Involves placing cups on the skin to create suction without any incisions.
            It enhances blood flow, relieves muscle tension, and improves lymphatic drainage.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mt-6">2. Wet Cupping (Hijama)</h3>
          <p>
            After a few minutes of suction, small superficial incisions are made,
            and a controlled amount of blood is drawn.
            This helps eliminate toxins and improve organ function.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mt-6">3. Moving Cupping</h3>
          <p>
            Cups are gently moved across oiled skin to combine suction with massage benefits.
            This technique helps relieve muscle stiffness and enhances flexibility.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mt-6">4. Fire Cupping</h3>
          <p>
            Involves briefly heating the air inside a glass cup before placing it on the skin.
            As the air cools, suction is created to stimulate deep tissue layers and improve circulation.
          </p>
        </div>
      </div>

      {/* Conditions Treated */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
          Conditions Treated with Hijama Therapy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Chronic fatigue and low energy",
            "Back and neck pain",
            "Joint stiffness and arthritis",
            "Migraine and headaches",
            "High blood pressure",
            "Digestive issues",
            "Stress and anxiety",
            "Menstrual cramps",
            "Detoxification and general wellness",
          ].map((condition, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-teal-600 font-semibold mb-2">{condition}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
          Benefits of Hijama Therapy
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Detoxifies the body naturally",
            "Boosts blood circulation",
            "Relieves pain and muscle tension",
            "Improves skin health and complexion",
            "Reduces inflammation and swelling",
            "Enhances immunity and energy levels",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-teal-600 font-semibold mb-2">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Effects */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
          Possible Side Effects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Mild redness or bruising at cupping sites",
            "Temporary soreness",
            "Mild fatigue after session",
            "Light dizziness (rare)",
            "Symptoms usually subside within 24–48 hours",
          ].map((effect, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-teal-600 font-semibold mb-2">{effect}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Section */}
      <div className="bg-teal-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">
            Why Choose Our Hijama Therapy?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-teal-700">The Physic Fitness</span>, our certified practitioners follow safe, hygienic,
            and professional Hijama techniques. Whether you're seeking pain relief, detoxification,
            or spiritual wellness, our sessions are designed to rejuvenate your mind and body
            using the ancient wisdom of cupping therapy.
          </p>
          <div className="text-center py-10">
            <button className="bg-teal-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Book Your Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hijama;
