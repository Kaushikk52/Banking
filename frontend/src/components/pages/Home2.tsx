"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
// import Home from "./Home"

const Home2 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-['/Logo.jpeg'] rounded"
            />
            <img src="/Logo.jpeg" height={30} width={50}/>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold"
            >
              DigiFinance
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            {["Projects", "Products", "Community", "Company", "Contact"].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <button className="px-6 py-2 rounded-full border border-gray-600 hover:border-gray-400 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
              Sign up
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Digital banking made for digital works{" "}
              <motion.span
                animate={{ rotate: [0, -45] }}
                transition={{ duration: 0.5, delay: 1 }}
                className="inline-block text-[#4ade80]"
              >
                ↓
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg mb-8"
            >
              Since 2013, we've guided millions of global users on their digital assets journey
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>Try to Free</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex items-center space-x-4"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=48&width=48`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">10.2k+</div>
                <div className="text-sm text-gray-400">Active users around the world</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Credit Cards */}
          <div className="relative h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-0 top-0"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-[300px] h-[180px] rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-6 transform rotate-6 shadow-xl"
              >
                <div className="flex justify-between items-start">
                  <div className="text-sm">VISA</div>
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xl tracking-wider">1234 5678 9012 3456</div>
                  <div className="mt-4 text-sm">Zahra Mohemadi</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-10 top-20"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-[300px] h-[180px] rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 p-6 transform -rotate-3 shadow-xl"
              >
                <div className="flex justify-between items-start">
                  <div className="text-sm">VISA</div>
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xl tracking-wider">1234 5678 9012 3456</div>
                  <div className="mt-4 text-sm">Zahra Mohemadi</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "16y", label: "Experience" },
            { value: "250+", label: "Merchant Partner" },
            { value: "10.2k+", label: "Worldwide Clients" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home2

