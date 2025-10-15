import React from "react";
import { motion } from "framer-motion";
import manualImage from "../assets/manual.jpg"; // replace with your own manual therapy image

const ManualTherapy = () => {
    return (
        <section className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center">
                <img
                    src={manualImage}
                    alt="Manual Therapy"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <motion.div
                    className="relative text-center text-white px-6 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Manual Therapy
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed drop-shadow">
                        At <span className="font-semibold text-teal-300">The Physic Fitness</span>,
                        our manual therapy sessions focus on improving mobility, reducing pain,
                        and enhancing muscle performance through expert hands-on techniques.
                    </p>
                    <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                        Book a Session
                    </button>
                </motion.div>
            </div>

            {/* What is Manual Therapy */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900">What is Manual Therapy?</h2>
                <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
                    Manual Therapy is a special form of physical therapy delivered with hands. It is a method by which physiotherapists can assess and treat their patients with skilled hand movements. The basic aim is to improve tissue extensibility, increase range of motion, induce relaxation, mobilize or manipulate soft tissue and joints, modulate pain, change muscle function, improve movement patterns, and reduce soft tissue swelling, inflammation, or restriction.
                </p>
            </div>

            {/* Techniques Used */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-gray-100 rounded-xl">
                <h2 className="text-3xl font-bold text-teal-900">Techniques Used</h2>
                <div className="text-gray-600 leading-relaxed p-6 bg-white rounded-xl shadow-md space-y-4">
                    <p>
                        Manual Therapy is actually a large umbrella under which many specific hands-on techniques reside.
                        Here are some of the most commonly used ones:
                    </p>

                    {/* Soft Tissue Techniques */}
                    <h3 className="text-2xl font-semibold text-teal-700 mt-6">Soft Tissue Techniques</h3>

                    <p>
                        <strong>1. Soft Tissue Mobilization:</strong> Works by mobilizing muscles and breaking up scar tissue.
                        This process also helps remove waste products from the damaged area, increasing healing speed.
                        It releases muscle tension, improving range of motion and flexibility.
                        <br />
                        <span className="italic">Techniques include:</span> sustained pressure, direct oscillations, perpendicular mobilization, and parallel mobilization.
                    </p>

                    <p>
                        <strong>2. Massage:</strong> Massage helps move fluid and, when applied gently to injured tissues,
                        assists in preventing adhesions. Tendinous lesions are treated transversely to the fibers to smooth rough surfaces
                        and maintain mobility within the tendon sheath.
                        <br />
                        <span className="italic">Tip:</span> The tendon is kept taut, while muscle lesions are treated in a shortened position to avoid separating healing tissues.
                    </p>

                    <p>
                        <strong>3. Scar Mobilization:</strong> Deep tissue massage that breaks adhesions and collagen fibers
                        limiting movement.
                        <br />
                        <span className="italic">Techniques used:</span> friction massage, acupressure, and trigger point therapy.
                    </p>

                    <p>
                        <strong>4. Myofascial Release (MRT):</strong> A gentle hands-on technique applying light, prolonged pressure
                        into the fascia system to restore mobility. It targets the fascia — a tough connective tissue made of elastic,
                        collagenous, and matrix components — which can become restricted due to injury or tension.
                    </p>

                    <p>
                        <strong>5. Strain Counterstrain (PRT):</strong> Also known as Positional Release Technique,
                        it’s a gentle method to relieve musculoskeletal pain and dysfunction by positioning the body
                        away from the painful direction to release the spasm and restore comfort.
                    </p>

                    <p>
                        <strong>6. Active Release Technique (ART):</strong> Focuses on correcting soft tissue restrictions
                        by breaking down scar tissue and adhesions. The patient actively moves the affected area
                        while the therapist maintains pressure — allowing the therapist to feel and treat tight structures dynamically.
                    </p>

                    <p>
                        <strong>7. Manual Lymph Drainage (MLD):</strong> A gentle, skin-stretching technique that promotes
                        lymphatic fluid movement, reducing swelling or edema.
                        <br />
                        <span className="italic">Common methods:</span> stationary circles, scoop technique, pump technique, and rotary technique.
                    </p>

                    {/* Joint Techniques */}
                    <h3 className="text-2xl font-semibold text-teal-700 mt-10">Joint Techniques</h3>

                    <p>
                        <strong>1. Joint Mobilization:</strong> Passive traction or gliding movements applied to joint surfaces
                        to maintain or restore normal motion (distraction, sliding, compression, rolling, and spinning)
                        and support smooth joint mechanics.
                    </p>

                    <p>
                        <strong>2. Joint Manipulation / Thrust Mobilization:</strong> Skilled, controlled manual techniques
                        applied at varying speeds and amplitudes to joints and soft tissues to relieve stiffness,
                        improve function, and reduce pain.
                    </p>

                    <p>
                        <strong>3. Muscle Energy Techniques (MET):</strong> Involves gentle isometric muscle contractions
                        to relax tight muscles or strengthen weak ones using neurological principles like autogenic and reciprocal inhibition.
                        <br />
                        <span className="italic">Types of contractions:</span>
                        Isometric (for tight muscles), isotonic (for weak muscles), concentric (mobilizes joints),
                        and eccentric (breaks fibrous restrictions).
                    </p>

                    <p>
                        <strong>4. Traction:</strong> A manual pulling technique designed to reduce pressure on the affected area
                        — providing relief from pain and improving spinal or joint alignment.
                    </p>
                </div>
            </div>

            {/* Applications */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl font-bold text-teal-900">
                    What Conditions Can Be Treated With Manual Therapy?
                </h2>
                <div className="text-gray-600 leading-relaxed p-6 bg-white rounded-xl shadow-md space-y-4">
                    <p>
                        Manual therapy can be effective for a wide range of musculoskeletal conditions, injuries, and chronic pains. Some of the key conditions include:
                    </p>

                    <p>
                        <strong>Neck Pain:</strong> Disc pathology, muscle spasm, post-surgical neck pain, rib hypomobility.
                    </p>

                    <p>
                        <strong>Lower Back Pain:</strong> Disc pathology, post-surgical back pain, spinal stenosis.
                    </p>

                    <p>
                        <strong>Thoracic / Mid-Back Pain:</strong> Muscular tension, joint stiffness, postural dysfunction.
                    </p>

                    <p>
                        <strong>Headaches / Migraines:</strong> Cervicogenic headaches, tension headaches.
                    </p>

                    <p>
                        <strong>Hip Pain:</strong> Hip impingement, myofascial hip pain, hip bursitis, post-surgical hip replacements.
                    </p>

                    <p>
                        <strong>Knee Pain:</strong> Total knee replacements, IT band tendonitis, patellar pain.
                    </p>

                    <p>
                        <strong>Ankle Pain:</strong> Ankle sprains, chronic ankle pain, ankle arthritis, post-surgical ankle pain, fused joints.
                    </p>

                    <p>
                        <strong>Shoulder Pain:</strong> Frozen shoulder, impingement syndrome, post-surgical shoulder issues, rotator cuff syndrome.
                    </p>

                    <p>
                        <strong>Trigger Points in Muscles:</strong> Localized muscle tightness and referred pain.
                    </p>

                    <p>
                        <strong>Wrist & Elbow Pain:</strong> Wrist pathologies, tennis elbow, golfer’s elbow.
                    </p>

                    <p>
                        <strong>Temporomandibular Joint (TMJ) Dysfunction:</strong> Jaw pain, restricted movement.
                    </p>

                    <p>
                        <strong>Fibromyalgia:</strong> Widespread musculoskeletal pain and tenderness.
                    </p>
                </div>
            </div>


            {/* Benefits */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">
                    Benefits of Manual Therapy
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Relieves muscle tension",
                        "Improves joint mobility",
                        "Reduces pain and stiffness",
                        "Enhances blood circulation",
                        "Promotes relaxation and recovery",
                        "Increases flexibility and strength",
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
                        "Back and neck pain",
                        "Frozen shoulder",
                        "Tennis elbow",
                        "Muscle strains",
                        "Joint stiffness",
                        "Postural imbalances",
                        "Sports injuries",
                        "Whiplash",
                        "Arthritis-related stiffness",
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
                    Possible Side Effects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "Mild soreness or stiffness",
                        "Temporary fatigue",
                        "Light bruising in treated areas",
                        "Slight dizziness (rare)",
                        "Usually subsides within 24-48 hours",
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
                        Why Choose Our Manual Therapy Services?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our certified therapists specialize in evidence-based manual therapy
                        techniques tailored to your needs. Whether you're recovering from an
                        injury or seeking pain relief, our personalized treatment plans focus
                        on restoring your body’s natural balance and promoting long-term health.
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

export default ManualTherapy;
