import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from "lucide-react";
 function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to begin your recovery journey? Contact us to schedule your initial consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Visit Our Clinic</h3>
              </div>
              <p className="text-gray-600 mb-4">
                26 Ground Floor Afzal Appartment<br />
                Lane NO-1, Jhori Farm<br />
                Jamia Nagar, New Delhi 110025
              </p>
              <button className="w-full px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
                Get Directions
              </button>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Main: 📞(9818)-407-348</p>
              <p className="text-gray-600 mb-4">Emergency: 📞(9818)-407-348</p>
              <button className="w-full px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
                Call Now
              </button>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>Morning : 7:00 AM - 9:00 AM</span>
                </div>
                 <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>Evening : 5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Schedule Your Appointment</h3>
              </div>

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="font-medium">First Name</label>
                  <input
                    id="firstName"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="font-medium">Last Name</label>
                  <input
                    id="lastName"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Service + Date */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="service" className="font-medium">Service Needed</label>
                  <select id="service" className="w-full border rounded-lg px-3 py-2">
                    <option>Select a service</option>
                    <option value="assessment">Chiropractic Therapy</option>
                    <option value="sports">Sports Injury Rehab</option>
                    <option value="chronic">Hijma Therapy</option>
                    <option value="prevention">Manual Therapy</option>
                    <option value="other">Kinisio Taping</option>
                    <option value="other">Sports MFR</option>
                    <option value="other">Acupuncture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferred" className="font-medium">Preferred Date</label>
                  <input id="preferred" type="date" className="w-full border rounded-lg px-3 py-2" />
                </div>
              </div>

              {/* Insurance */}
              <div className="space-y-2">
                <label htmlFor="insurance" className="font-medium">Insurance Provider (Optional)</label>
                <input id="insurance" className="w-full border rounded-lg px-3 py-2" placeholder="Enter your insurance provider" />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">Tell us about your condition</label>
                <textarea
                  id="message"
                  className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
                  placeholder="Please describe your symptoms, injury, or condition. Include any relevant medical history."
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book Appointment
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Send Message
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact
