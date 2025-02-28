import React, { useState } from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-16 min-h-screen bg-[#1a0f00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-[#d4a574] mb-8">Contact Us</h1>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#2a1f10] p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-[#d4a574] font-semibold">Opening Hours</h3>
                  <p className="text-gray-400">Mon-Fri: 7am - 7pm</p>
                  <p className="text-gray-400">Sat-Sun: 8am - 8pm</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#2a1f10] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-[#d4a574] font-semibold">Location</h3>
                  <p className="text-gray-400">123 Coffee Street, Tanjore, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#2a1f10] p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-[#d4a574] font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 123-456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#2a1f10] p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-[#d4a574] font-semibold">Email</h3>
                  <p className="text-gray-400">info@tanjorecoffee.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2a1f10] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#d4a574] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#d4a574] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1a0f00] text-white border border-[#d4a574]/20 focus:outline-none focus:border-[#d4a574] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#d4a574] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1a0f00] text-white border border-[#d4a574]/20 focus:outline-none focus:border-[#d4a574] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#d4a574] mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1a0f00] text-white border border-[#d4a574]/20 focus:outline-none focus:border-[#d4a574] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#d4a574] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[# full px-4 py-2 rounded-lg bg-[#1a0f00] text-white border border-[#d4a574]/20 focus:outline-none focus:border-[#d4a574] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#d4a574] text-white rounded-lg hover:bg-[#e5b584] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;