import React from 'react'
import { PhoneCall, MessageCircleMore, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Topbar = () => {
  return (
    <div className="bg-teal-800  text-white text-sm py-2 px-6 top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side: Call */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
          <PhoneCall size={16} />
          <span>Call</span>
        </div>

        {/* Center: WhatsApp */}
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
          <MessageCircleMore size={16} />
          <span>WhatsApp</span>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex items-center space-x-3">
          <Facebook size={16} className="cursor-pointer hover:text-gray-300" />
          <Instagram size={16} className="cursor-pointer hover:text-gray-300" />
          <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
          <Linkedin size={16} className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
