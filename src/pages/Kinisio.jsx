import React from "react";
import { motion } from "framer-motion";
import kinesioImage from "../assets/kinesio.jpg"; // replace with your own Kinesio taping image

const KinesioTaping = () => {
    return (
        <section className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center">
                <img
                    src={kinesioImage}
                    alt="Kinesio Taping"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <motion.div
                    className="relative text-center text-white px-6 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Kinesio Taping
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed drop-shadow">
                        At <span className="font-semibold text-teal-300">The Physic Fitness</span>,
                        Kinesio taping supports muscles and joints, improves circulation, reduces pain,
                        and accelerates recovery with specially designed elastic tapes.
                    </p>
                    <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                        Book a Session
                    </button>
                </motion.div>
            </div>

            {/* What is Kinesio Taping */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900">What is Kinesio Taping?</h2>
                <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
                    Elastic Therapeutic Tape, also called Kinesiology Tape, Kinesio Tape, K-Tape is a rehabilitative method used to facilitate the body's natural healing process, while providing support and stability to muscles and joints without restricting the body's range of motion. Tapping is usually used by physiotherapists to change Muscle Tone, Move Lymphatic Fluids, Correct Movement Patterns, and Improve Posture.

                    Kinesiology tape is a therapeutic tape that is applied to the body to decrease pain, reduce swelling, and improve functionality. The process involves placing Strips of Kinesiology tape on the body in Specific directions for therapeutic purposes.
                </p>
            </div>

            {/* Techniques Used */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-gray-100 rounded-xl">
                <h2 className="text-3xl font-bold text-teal-900">Types of Kinesio Tapping Therapy</h2>
                <div className="text-gray-700 leading-relaxed p-8 bg-white rounded-2xl shadow-lg space-y-6">
                    <p className="text-lg">
                        K-Taping can be applied in the shape of a <span className="font-semibold">"Y"</span>, <span className="font-semibold">"I"</span>, <span className="font-semibold">"X"</span>, <span className="font-semibold">"Fan"</span>, <span className="font-semibold">"Web"</span> or <span className="font-semibold">"Donut"</span>. Depending upon the size of the affected muscle and the result to be achieved, the shape of taping is decided.
                    </p>

                    {/* Y Tape */}
                    <div className="space-y-2">
                        <h3 className="text-teal-700 text-xl font-semibold">"Y" Tape</h3>
                        <p className="text-gray-600">"Y" Tape application is generally used to:</p>
                        <ul className="list-decimal list-inside text-gray-600 space-y-1">
                            <li>Surround the target muscle</li>
                            <li>Inhibit or facilitate muscle stimuli</li>
                            <li>Should be 2 inches longer than the target muscle</li>
                        </ul>
                    </div>

                    {/* I Tape */}
                    <div className="space-y-2">
                        <h3 className="text-teal-700 text-xl font-semibold">"I" Tape</h3>
                        <p className="text-gray-600">"I" Tape application is generally used for:</p>
                        <ul className="list-decimal list-inside text-gray-600 space-y-1">
                            <li>Acute injuries in place of "Y" Tape</li>
                            <li>Edema and pain (primary purpose)</li>
                            <li>Alignment correction</li>
                        </ul>
                    </div>

                    {/* X Tape */}
                    <div className="space-y-2">
                        <h3 className="text-teal-700 text-xl font-semibold">"X" Tape</h3>
                        <p className="text-gray-600">"X" Tape application is generally used when:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>The origin and the intersection of the target muscle change depending on movement (e.g., Rhomboids)</li>
                        </ul>
                    </div>

                    {/* Fan / Web Tape */}
                    <div className="space-y-2">
                        <h3 className="text-teal-700 text-xl font-semibold">"Fan" / "Web" Tape</h3>
                        <p className="text-gray-600">Application is used for:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Edema (Web is different because the ends remain intact)</li>
                        </ul>
                    </div>

                    {/* Donut Tape */}
                    <div className="space-y-2">
                        <h3 className="text-teal-700 text-xl font-semibold">"Donut" Tape</h3>
                        <p className="text-gray-600">Application is used for:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Edema (use overlapping strips and cut out the center over the area of focus)</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Applications */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
                <h2 className="text-3xl font-bold text-teal-900 ">
                    Application of Kinesio Taping
                </h2>

                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                    <p className="text-gray-700 text-lg">
                        Follow these steps to properly apply Kinesio Tape:
                    </p>

                    <ol className="list-decimal list-inside text-gray-600 space-y-4 pl-4">
                        <li>
                            <span className="font-semibold">Clean and dry the area</span> where taping is to be done.
                        </li>
                        <li>
                            <span className="font-semibold">Trim excess hair</span>, as it can prevent the tape from gripping the skin.
                        </li>
                        <li>
                            <span className="font-semibold">Apply the first strip:</span> Remove the backing paper and let the ends recoil slightly. Avoid stretching the last two inches at either end, as the tabs hold the tape in place.
                        </li>
                        <li>
                            <span className="font-semibold">Hold the tape properly:</span> Keep your fingers on the backing paper to prevent it from sticking prematurely.
                        </li>
                        <li>
                            <span className="font-semibold">Stretch the tape:</span> Apply the tape to the treatment area, stretching it about 75% and extend as far as needed, then release it about a quarter of its length.
                        </li>
                        <li>
                            <span className="font-semibold">Even stretch:</span> Use the whole length of your thumb across the tape to ensure uniform tension.
                        </li>
                        <li>
                            <span className="font-semibold">Activate the adhesive:</span> Rub the tape vigorously for a few seconds. The heat created activates the glue, helping it stick to the skin.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
                <h2 className="text-3xl font-bold text-teal-900 text-center">
                    Removal of Kinesio Taping
                </h2>

                <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                    <p className="text-gray-700 text-lg">
                        Follow these steps to safely remove the tape from the body:
                    </p>

                    <ol className="list-decimal list-inside text-gray-600 space-y-4 pl-4">
                        <li>
                            <span className="font-semibold">Apply lotion or oil:</span> Gently rub over the tape to loosen it from the skin.
                        </li>
                        <li>
                            <span className="font-semibold">Remove slowly:</span> Start at one end of the tape and proceed gradually.
                        </li>
                        <li>
                            <span className="font-semibold">Press the skin down:</span> Pull up one end of the strip while pressing the skin to separate it safely.
                        </li>
                        <li>
                            <span className="font-semibold">Pull the tape back gently:</span> Continue until the tape is completely removed without discomfort.
                        </li>
                    </ol>
                </div>
            </div>


            {/* Benefits */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-teal-900 text-center  mb-10">
                    Benefits of Kinesio Taping
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Reduces pain and inflammation",
                        "Supports muscles and joints",
                        "Enhances circulation and lymph flow",
                        "Improves athletic performance",
                        "Prevents injuries",
                        "Aids faster recovery",
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

            {/* Possible Side Effects */}
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
                    Possible Side Effects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Mild skin irritation",
                        "Redness at tape site",
                        "Temporary discomfort",
                        "Rare allergic reactions",
                        "Usually resolves quickly",
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
                        Why Choose Our Kinesio Taping Services?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our certified therapists specialize in customized Kinesio Taping techniques to optimize recovery,
                        reduce pain, and support your body during movement. Experience personalized care and
                        scientifically-backed taping for faster healing and enhanced performance.
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

export default KinesioTaping;
