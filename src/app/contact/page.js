"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full text-white bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* ---------------- Hero Section ---------------- */}
      <div
        className="relative w-full h-[70vh] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('/assets/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-6xl font-extrabold z-10"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative max-w-2xl text-lg leading-7 mt-6 z-10"
        >
          We’re an online-first company. Let’s connect digitally and bring your
          ideas to life with creativity and innovation.
        </motion.p>
      </div>

      {/* ---------------- Contact Form with Info ---------------- */}
      <div className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Have a project in mind? Need more details? Fill out the form and
            we’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>📧 Email: support@crestor.com</li>
            <li>📞 Phone: +92 300 1234567</li>
            <li>🌍 Available: Online Worldwide</li>
          </ul>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Your Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-pink-600 rounded-lg font-semibold hover:bg-pink-700 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* ---------------- Why Contact Us ---------------- */}
      <div className="bg-gray-950 py-20 px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Contact Us?
        </motion.h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Guidance",
              desc: "Our team is always ready to help you with creative solutions.",
            },
            {
              title: "Quick Response",
              desc: "We ensure fast replies to all your queries and messages.",
            },
            {
              title: "Online Availability",
              desc: "Reach us anytime, anywhere — we’re just a click away.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-900 p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Testimonials ---------------- */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ayesha Khan",
              feedback:
                "Crestor helped me design my dream project. Amazing creativity!",
            },
            {
              name: "Ali Raza",
              feedback:
                "Quick responses and professional work. Highly recommended!",
            },
            {
              name: "Sara Ahmed",
              feedback:
                "I love working with their team, always on time and innovative.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg text-center"
            >
              <p className="text-gray-300 italic mb-4">“{item.feedback}”</p>
              <h3 className="font-semibold">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- FAQ Section ---------------- */}
      <div className="py-20 px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              q: "Do you only work online?",
              a: "Yes! We are a fully online company, so you can collaborate with us from anywhere.",
            },
            {
              q: "How quickly do you respond?",
              a: "We usually reply within 24 hours of receiving your message.",
            },
            {
              q: "Can I request a custom project?",
              a: "Absolutely! Share your idea and we’ll work with you to make it a reality.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
              <p className="text-gray-400">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Stay Connected ---------------- */}
      <div className="bg-pink-600 py-16 text-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Stay Connected With Us
        </motion.h2>
        <p className="mb-6">
          Follow us on social media for updates and news.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-black transition">
            🌐 Facebook
          </a>
          <a href="#" className="text-white hover:text-black transition">
            📸 Instagram
          </a>
          <a href="#" className="text-white hover:text-black transition">
            🐦 Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
