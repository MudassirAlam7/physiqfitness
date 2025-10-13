import React from "react";
import { motion } from "framer-motion";
import chiroImage from "../assets/img1.jpg";

const Chiropractic = () => {
    return (
        <section className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center">
                <img
                    src={chiroImage}
                    alt="Chiropractic Therapy"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <motion.div
                    className="relative text-center text-white px-6 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Chiropractic Care
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed drop-shadow">
                        At <span className="font-semibold text-teal-300">The Physic Fitness</span>,
                        our chiropractic treatments focus on healing naturally by aligning your spine,
                        reducing pain, and improving body function.
                    </p>
                    <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                        Book a Session
                    </button>
                </motion.div>
            </div>

            {/* What is Chiropractic Therapy */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900">What is Chiropractic Therapy?</h2>
                <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
                    Chiropractic Therapy is a hands-on technique that focuses on the diagnosis and treatment of Neuromuscular disorders through manual adjustment and manipulation of the spine. This therapy focuses on the structures of the body, especially the spine. Chiropractors usually manipulate the body's alignment to relieve pain, improve function and help the body heal itself.

                    The main focus of chiropractic therapy is spinal manipulation, it also includes other treatments like manipulative therapies, postural exercises, ergonomic training, and patient education. Chiropractors can treat pain anywhere in the body such as the head and jaws, shoulders, elbows and wrists, hips, pelvis, knees, and ankles.

                    This method is primarily used as a pain relief alternative for muscles, cartilages, ligaments, tendons, joints, and bones. Chiropractic therapy is also sometimes used in conjunction with conventional medical treatment.
                </p>
            </div>

            {/* Techniques Used */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-gray-100 rounded-xl">
                <h2 className="text-3xl font-bold text-teal-900">Techniques Used</h2>
                <p className="text-gray-500 leading-relaxed p-6 bg-white rounded-xl shadow-md">
                    <strong>Spinal Manipulation: </strong> This type of technique involves high velocity, short lever arm thrust that is applied to the abnormal parts of the body to improve functionality, reduce nerve irritability, and restore range of motion. Chiropractic therapy is also commonly known as Chiropractic Adjustment.
                    <br /><br />
                    <strong>Mobilization:</strong> Low-velocity manipulation and stretching of joints and muscles to enhance motion.
                </p>
            </div>

            {/* Application */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900">Application of Chiropractic Therapy</h2>
                <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
                    The chiropractor goes through the medical history and examines the individual physically. He might also ask a few questions and might go through other lab tests such as X-rays and more. After all the investigations the chiropractor determines if an individual should undergo chiropractic therapy.

                    During the treatment session, one or more adjustments might be done. Adjustments are also called manipulations. The therapy is done manually, i.e. by hand. The adjustments are done to increase the range of motion and to improve the quality of the area being treated.

                    Apart from manipulation, chiropractors may use other treatments such as mobilization, massage, modalities like ice therapy, heat therapy, and electric stimulation.
                </p>
            </div>

            {/* Benefits */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">Benefits of Chiropractic Care</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Reduces back and neck pain",
                        "Improves posture and flexibility",
                        "Enhances joint mobility",
                        "Boosts nervous system function",
                        "Aids in injury recovery",
                        "Promotes overall well-being",
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

            {/* Conditions Treated */}
            <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-100 rounded-xl">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
                    Conditions Treated
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Back sprains and strains",
                        "Cervicogenic headaches",
                        "Sciatica",
                        "Herniated Disk",
                        "Degenerative disc",
                        "Spondylosis",
                        "Myofascial pain",
                        "Coccydynia",
                        "Spinal osteoarthritis",
                        "Sports Injuries",
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

            {/* Side Effects */}
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
                    Side Effects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Temporary discomfort",
                        "Fatigue",
                        "Dizziness",
                        "Headache",
                        "These side effects usually resolve in 1-2 days",
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

            {/* Call To Action */}
            <div className="text-center py-20">
                <button className="bg-teal-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
                    Book Your Appointment Now
                </button>
            </div>
        </section>
    );
};

export default Chiropractic;
