import React from "react";
import { motion } from "framer-motion";
import dryNeedlingImage from "../assets/dryneedling.jpg"; // replace with your dry needling image

const DryNeedling = () => {
    return (
        <section className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center">
                <img
                    src={dryNeedlingImage}
                    alt="Dry Needling"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <motion.div
                    className="relative text-center text-white px-6 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Dry Needling Therapy
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed drop-shadow">
                        At <span className="font-semibold text-teal-300">The Physic Fitness</span>,
                        we use advanced dry needling techniques to relieve pain,
                        release tight muscles, and restore functional movement patterns.
                    </p>
                    <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                        Book a Session
                    </button>
                </motion.div>
            </div>

            {/* What is Dry Needling */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900">What is Dry Needling?</h2>
                <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
                    Dry Needling Therapy is also known as Trigger Point Dry Needling or Myofascial Trigger Point Dry Needling. It is a process in which thin needles are inserted into the trigger points or tight muscles of the body. It is usually done to treat myofascial pain (Myo means Muscle and Fascia means Tissue that connects muscles). The main purpose is to improve Tissue Healing and Restore Muscle Function. Muscles in our Body sometimes develop knotted areas called Trigger points which are quite sensitive and can be painful when touched. A physiotherapist pushes thin solid needles through the skin into trigger points. These Needles are used to stimulate the tissue and not to inject the medication.

                    The patient may experience different sensations, muscle soreness, aching, a muscle twitch, etc. when being needled which is considered to be a good sign. The needles may be placed deeply or superficially, for shorter or longer periods depending upon the type of pain being treated.
                </p>
            </div>

            {/* How It Works */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-gray-100 rounded-xl">
                <h2 className="text-3xl font-bold text-teal-900">How Does Dry Needling Work?</h2>
                <div className="text-gray-600 leading-relaxed p-6 bg-white rounded-xl shadow-md space-y-4">
                    <p>
                        When the needle is inserted into a trigger point or tight muscle area,
                        it creates a small local twitch response. This response helps:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Release muscle tightness and deactivate trigger points.</li>
                        <li>Improve blood flow to the affected area.</li>
                        <li>Decrease chemical irritation and inflammation.</li>
                        <li>Restore normal muscle function and range of motion.</li>
                    </ul>
                    <p>
                        Most patients experience a quick reduction in pain and improved movement
                        within just a few sessions.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
                <h2 className="text-3xl font-bold text-teal-900 text-left">
                    Principles of Dry Needling (Acupuncture)
                </h2>

                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                        The principles of dry needling (DN) include <span className="font-semibold">patient education and consent</span>,
                        procedural understanding, and careful practical application such as <span className="font-semibold">proper positioning and palpation</span>.
                    </p>

                    {/* Procedural Education */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-teal-800 border-l-4 border-teal-500 pl-3">
                            Procedural Education
                        </h3>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>
                                The patient is encouraged to <span className="font-medium">communicate</span> with the clinician throughout the treatment.
                            </li>
                            <li>
                                The patient should <span className="font-medium">remain still</span> during the procedure.
                            </li>
                            <li>
                                For trigger point (TrPts) DN, patients should be informed about the <span className="font-medium">local twitch response (LTR)</span> — a brief sensation similar to an electric shock. This is a desired outcome of the treatment.
                            </li>
                        </ul>
                    </div>

                    {/* Positioning */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-teal-800 border-l-4 border-teal-500 pl-3">
                            Positioning
                        </h3>
                        <p>
                            Patients may be positioned in <span className="font-medium">supine, prone, side-lying,</span> or mixed positions.
                            Comfort and relaxation are essential, so <span className="font-medium">pillows or rolls</span> can be used to assist positioning.
                        </p>
                    </div>

                    {/* Palpation */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-teal-800 border-l-4 border-teal-500 pl-3">
                            Palpation
                        </h3>
                        <p>
                            Skilled palpation is the <span className="font-medium">key element</span> in identifying trigger points and ensuring safe DN application.
                            The therapist must possess strong knowledge of <span className="font-medium">muscle anatomy, attachments, landmarks, and fiber directions</span>.
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>
                                Avoid sensitive structures such as <span className="font-medium">nerves, blood vessels, lungs, and internal organs</span>.
                            </li>
                            <li>
                                The therapist should position the muscle to maintain <span className="font-medium">optimal tension</span> and ensure the patient is relaxed before beginning the procedure.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
                <h2 className="text-3xl font-bold text-teal-900 text-left">
                    Aftercare for Dry Needling
                </h2>

                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                        The following recommendations help promote recovery and comfort after a dry needling session:
                    </p>

                    <ul className="list-disc list-inside space-y-3 pl-4">
                        <li>
                            <span className="font-medium">Compression:</span> Apply gentle pressure to the treated area immediately after needle withdrawal
                            for up to 30 seconds (or until bleeding stops). A clean cotton swab may be used and should be properly discarded afterward.
                        </li>
                        <li>
                            <span className="font-medium">Patient Education:</span> Inform the patient about essential aftercare such as
                            <span className="italic"> limbering exercises, gentle stretching, use of hot or cold packs, activity modifications,</span>
                            and <span className="italic">motor retraining</span> as necessary.
                        </li>
                    </ul>
                </div>
            </div>


            {/* Conditions Treated */}
            <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-100 rounded-xl">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
                    Conditions That Can Be Treated With Dry Needling
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Chronic neck and back pain",
                        "Shoulder pain and frozen shoulder",
                        "Tennis or golfer’s elbow",
                        "Sciatica and nerve pain",
                        "Tension-type headaches and migraines",
                        "Hip and gluteal pain",
                        "Knee pain and IT band syndrome",
                        "Calf tightness and Achilles tendinopathy",
                        "Plantar fasciitis",
                        "Myofascial pain syndrome",
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
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
                    Benefits of Dry Needling
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Reduces chronic and acute muscle pain",
                        "Releases muscle tightness and trigger points",
                        "Enhances blood flow and tissue healing",
                        "Improves flexibility and range of motion",
                        "Decreases nerve irritation and inflammation",
                        "Accelerates recovery after injury",
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
                        "Mild muscle soreness for 24–48 hours",
                        "Slight bruising or redness at needle sites",
                        "Temporary fatigue or light-headedness",
                        "Very rare bleeding or irritation",
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
                        Why Choose Our Dry Needling Therapy?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our certified physiotherapists specialize in precision-based dry needling techniques
                        to target the root cause of your pain. We combine it with therapeutic exercises and
                        manual therapy for faster, long-lasting results. Experience safe, effective,
                        and evidence-based care to help you move freely again.
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

export default DryNeedling;
