import { CheckCircle, Award, Clock, MapPin, Stethoscope } from "lucide-react";

const features = [
  "State-of-the-art equipment and facilities",
  "Personalized treatment plans for each patient",
  "Evidence-based treatment approaches",
  "Convenient appointment scheduling",
  "Insurance acceptance and billing support",
  "Continued education and follow-up care",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Clinic Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2MDExNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern medical clinic interior"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Certified Excellence</div>
                  <div className="text-sm text-gray-600">Licensed & Accredited</div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinic About */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About The Physiq Fitness Center
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 3 years, Physiq Fitness has been dedicated to helping patients recover, 
                rebuild, and return to their active lifestyles. Our team of licensed physiotherapists 
                combines clinical expertise with compassionate care to deliver exceptional results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in treating the whole person, not just the injury. Our holistic approach 
                focuses on addressing the root cause of your condition while providing you with the 
                tools and knowledge to prevent future injuries.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Timing + Location */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Timing</div>
                  <div className="text-sm text-gray-600">Morning : 07:00 - 09:00 AM</div>
                  <div className="text-sm text-gray-600">Evening : 05:30 - 11:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div>26 Ground Floor, Afzal Appartment</div>
                  <div>Jamia-Nagar, Okhla New Delhi-110025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg" // replace with real photo
            alt="Doctor"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Dr. Mujeeb-Ur-Rehman</h3>
            <p className="text-lg text-gray-600">BPT, MPT (Orthopedics & Sports Rehabilitation)</p>
            <p className="text-gray-600 leading-relaxed">
             Dr. Mujeeb Urrehman (PT) is a highly qualified and dedicated physiotherapist with a strong background in physiotherapy and rehabilitation. He completed his Bachelor of Physiotherapy (BPT) from Jamia Millia Islamia and earned his Master’s in Physiotherapy (MPTS) from Punjab. In addition, he holds specialized certifications including CCH and ADCT, which enhance his expertise in advanced therapeutic techniques.

With years of experience in treating a wide range of musculoskeletal, sports, and neurological conditions, Dr. Mujeeb is committed to helping patients restore mobility, relieve pain, and regain strength. His approach combines evidence-based physiotherapy practices with personalized care, ensuring that every treatment plan is tailored to the unique needs and goals of each patient.

As the founder of The Physio Fitness in Jamia Nagar, New Delhi, Dr. Mujeeb offers a holistic environment where patients can restore, revive, and run towards better health. He specializes in sports injury rehabilitation, manual therapy, chiropractic techniques, and advanced therapeutic methods to promote recovery and overall well-being.
            </p>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <Stethoscope className="w-5 h-5" />
              <span>Physiotherapy & Sports Medicine Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
