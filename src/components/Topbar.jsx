import React from 'react'
import { PhoneCall, MessageCircleMore, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Topbar = () => {
  return (
    <div className="bg-teal-800  text-white text-sm py-2 px-6 top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side: Call */}
        <a href="tel:+919818407348">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
          <PhoneCall size={16} />
          <span>Call</span>
        </div>
        </a>

        {/* Center: WhatsApp */}
        <a href="https://wa.me/919818407348"
        target='_blank'
        rel='noopener norefferer'>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
          <MessageCircleMore size={16} />
          <span>WhatsApp</span>
        </div>
        </a>
        {/* Right side: Social Icons */}
        <div className="flex items-center space-x-3">
          <Facebook size={16} className="cursor-pointer hover:text-gray-300" />
          <a href="https://www.instagram.com/the_physio_fitness_/" target='_blank'>
          <Instagram size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
          <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
          <a href="https://www.linkedin.com/in/dr-mujeeb-urrehman-pt-71835691/" target='_blank'>
          <Linkedin size={16} className="cursor-pointer hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
