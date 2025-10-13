import React from "react";
import { Activity, Heart, Zap, Shield, Users, Target, Crosshair, } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const icons = {
    activity: Activity,
    heart: Heart,
    zap: Zap,
    target: Target,
    shield: Shield,
    users: Users,
    crosshair: Crosshair,
  };

  const services = [
    {
      icon: "activity",
      title: "Chiropractic Therapy",
      description:
        "Hands-on spinal adjustments to improve alignment, relieve pain, and enhance mobility.",
      features: ["Spinal adjustments", "Pain relief", "Improved posture"],
      to : 'chiro'
    },
    {
      icon: "heart",
      title: "Sports Injury Rehab",
      description:
        "Rehabilitation programs tailored for athletes recovering from injuries.",
      features: [
        "Injury assessment",
        "Customized rehab",
        "Performance recovery",
      ],
    },
    {
      icon: "zap",
      title: "Hijama Therapy",
      description:
        "Traditional cupping therapy to improve circulation and detoxify the body.",
      features: ["Cupping therapy", "Detoxification", "Pain management"],
    },
    {
      icon: "target",
      title: "Manual Therapy",
      description:
        "Therapeutic hands-on techniques to restore movement and reduce pain.",
      features: [
        "Massage therapy",
        "Joint mobilization",
        "Soft tissue release",
      ],
    },
    {
      icon: "shield",
      title: "Kinisio Taping",
      description:
        "Application of kinesiology tape to support muscles and joints during healing.",
      features: ["Muscle support", "Injury recovery", "Improved mobility"],
    },
    {
      icon: "users",
      title: "Sports MFR",
      description:
        "Myofascial release therapy targeting tight tissues to enhance flexibility.",
      features: ["Fascial release", "Tissue flexibility", "Pain reduction"],
    },
    {
      icon: "crosshair",
      title: "Acupuncture (Dry Needling)",
      description:
        "Therapeutic needling technique to relieve pain and restore muscle function.",
      features: ["Pain relief", "Muscle relaxation", "Improved function"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-gray-500">
            We offer comprehensive physiotherapy services tailored to your
            specific needs and goals
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = icons[service.icon];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                  <IconComponent className="w-6 h-6 text-teal-700 " />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to = {service.to} variant="ghost" className="text-blue-700 hover:text-teal-700  p-0 ">Learn More</Link>
                <MoveRight className="w-4 h-4 inline-block text-blue-700 p-0 m-3" />
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-blue-800  m-5 hover:scale-105 transition pointer">Book your Appointment Now</button>
          <h4 className="text-gray-600">Contact us for more information</h4>
        </div>
      </div>
    </section>
  );
};

export default Services;
