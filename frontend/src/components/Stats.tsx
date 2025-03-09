import { motion } from 'framer-motion'

// interface StatProps {
//   number: string
//   label: string
// }

export const Stats = () => {
  // const stats: StatProps[] = [
  //   { number: "300", label: "SUCCESS\nPROJECT" },
  //   { number: "200", label: "PRODUCT\nLAUNCHES" },
  //   { number: "100", label: "STARTUP\nRAISED" },
  // ]

  return (
    <div className="absolute top-2 right-2 md:right-8">
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
  )
}

