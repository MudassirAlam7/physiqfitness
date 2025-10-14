import React from "react";
import { motion } from "framer-motion";
import hijamaImg from "../assets/img5.jpg"; // replace with your hijama therapy image

const Hijama = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-teal-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hijama (Cupping) Therapy</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Experience the ancient art of healing through cupping therapy that enhances blood circulation, removes toxins, and rejuvenates your body.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={hijamaImg}
            alt="Hijama Therapy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-teal-900 mb-4">What is Hijama Therapy?</h2>
          <p className="text-gray-700 mb-6">
            Hijama, also known as cupping therapy, is an ancient healing technique that involves applying suction to the skin to stimulate blood flow, detoxify the body, and relieve pain. It is widely used for improving overall health and wellness.
          </p>

          <h3 className="text-xl font-semibold text-teal-800 mb-3">Benefits of Hijama Therapy</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Improves blood circulation</li>
            <li>Removes toxins and impurities</li>
            <li>Reduces pain and inflammation</li>
            <li>Enhances relaxation and mental well-being</li>
            <li>Boosts immune system</li>
          </ul>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-8">Why Choose Us for Hijama Therapy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Certified and Experienced Therapists",
              "Clean and Hygienic Environment",
              "Personalized Treatment Plans",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-teal-800 mb-2">{item}</h4>
                <p className="text-gray-600">
                  Our experts ensure a comfortable and effective therapy session tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hijama;
