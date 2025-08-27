import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png"


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img className="h-12 md:h-14 cursor-pointer" src={logo} alt="logo" />
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in recovery and rehabilitation. Expert care, personalized treatment, exceptional results.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Chiropractic Therapy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sports Injury Rehab</li>
              <li className="hover:text-white cursor-pointer transition-colors">Hijama Therapy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Manual Therapy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kinisio Taping</li>
              <li className="hover:text-white cursor-pointer transition-colors">Acupuncture (Dry-Needling)</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-white cursor-pointer transition-colors">Patient Resources</li>
              <li className="hover:text-white cursor-pointer transition-colors">Insurance Information</li>
              <li className="hover:text-white cursor-pointer transition-colors">New Patient Forms</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>26 Ground Floor, Afzal Appartment</div>
                  <div>Lane NO-1, Jhori Farm, near Shia-Masjid</div>
                  <div>Jamia-Nagar, Okhla New Delhi-110025</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div>📞(9818)-407-348</div>
                  <div className="text-sm">Emergency: 📞(9818)-407-348</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>health@thephysiofitness.in</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 PhysioCore Center. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}