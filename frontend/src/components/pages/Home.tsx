import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// import { ServiceCard } from "../ServiceCard";
import { AnimatedWords } from "../AnimatedWords";
// import { LogoMarquee } from "../LogosMarquee";
import { Stats } from "../Stats";
// import { TestimonialCarousel } from "../TestimonialsCarousel";
import { Accordion } from "../Accordion";
// import { HeroSection } from "../HeroSection";
// import { ResultsSection } from "../ResultsSection";
import { OfferingSection } from "../OfferingSection";
// import { PackagesSection } from "../PackagesSection";
import { CTASection } from "../CTASection";
import { ServicesSection } from "../ServicesSection";
import { useNavigate } from "react-router-dom";
// import Home2 from "./Home2";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url(/glitch-bg.png)] bg-no-repeat bg-cover opacity-50 mix-blend-overlay" /> */}
        
        <div className="absolute inset-0 bg-black bg-no-repeat bg-cover opacity-100 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <Stats />
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="grid gap-3 text-2xl mb-4 text-white">
                <span>Guiding Wallets</span>
                <span>Guarding Dreams</span>
              </h1>
              <div className="flex flex-col space-y-0 mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-transparent leading-tight mb-4 mix-blend-difference" style={{
                WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
              }}>
                  AIM TO PROVIDE
                </h2>
                <AnimatedWords />
                <h2 className="text-4xl md:text-6xl font-bold text-transparent leading-tight mb-4 mix-blend-difference" style={{
                WebkitTextStroke: "1px rgb(156 163 175)", // tailwind gray-400
              }}>
                  FINANCIAL SOLUTIONS
                </h2>
              </div>
             
              <button className="bg-purple-700 px-4 py-2 rounded-lg group flex items-center space-x-2 text-white mix-blend-difference font-semibold">
                <span>REACH OUT</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <Home2/> */}

      {/* <div className="min-h-screen bg-white">
        <HeroSection />
      </div> */}

      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            We are behind some of the most fast-growing products.
          </h2>
          <LogoMarquee />
        </div>
      </section> */}

      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "300", label: "SUCCESS PROJECT" },
              { number: "200", label: "PRODUCT LAUNCHES" },
              { number: "100", label: "STARTUP RAISED" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <span className="text-5xl font-bold">+{stat.number}</span>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight font-poppins">
                How We Help Brands Shine with
                <br />
                Influencer Marketing
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-lg font-dmSans">
                We team up with top-notch influencers and content creators to
                craft standout campaigns that get people talking. From
                eye-catching content to strategies that boost engagement, we
                make sure your brand gets the attention it deserves. Ready to
                elevate your game? Let’s make it happen!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
                onClick={()=> navigate("/about")}
              >
                <span>Why Choose Us?</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l to-purple-100 from-transparent" />
      </section>

      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-7">WHAT WE ARE OFFERING</h2>
          <p className="text-black mb-8 max-w-6xl font-medium text-lg">At GrowthMatrix, we understand how challenging it can be to manage marketing campaigns while growing your brand. That’s why we offer stress-free solutions with tailored influencer marketing strategies. Let us take your brand to new heights while you focus on what matters most!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="YouTube Influencer Campaigns"
              description="Engage your audience with high-quality YouTube content. From integrated brand mentions to dedicated videos and YouTube Shorts, we connect you with top-tier creators who bring your brand to life."
              className="bg-gray-100"
              
            />
            <ServiceCard
              title="LinkedIn Influencer Partnerships"
              description="Expand your professional reach with LinkedIn influencers. Our experts collaborate with nano, micro, and mega influencers across industries to drive engagement and establish your brand’s credibility."
              className="bg-purple-300 text-black"
              
            />
            <ServiceCard
              title="X Influencer Promotions"
              description="Make your brand trend on Twitter with powerful influencer collaborations. From AI and Tech to lifestyle niches, we craft campaigns that resonate with the right audience."
              className="bg-slate-900 text-purple-700"
              
            />
          
             <ServiceCard
              title=" Instagram Influencer Engagements"
              description="Create stunning campaigns that captivate your audience on Instagram. From product launches to lifestyle promotions, we help you reach millions with authentic influencer partnerships."
              className="bg-gray-100 text-black"
             
            />
             <ServiceCard
              title="Newsletter Marketing with Influencers"
              description="Get your brand directly into inboxes with influencer-driven email campaigns. Drive traffic to your website, build trust, and deliver value through engaging newsletters."
              className="bg-black text-white"
              
            />
          </div>
        </div>
      </section> */}

      <OfferingSection />

      <ServicesSection />

      {/* <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4  ">
          <h2 className="text-4xl font-bold mb-16 inset-0 bg-[url(/glitch-bg.png)] bg-no-repeat text-transparent bg-clip-text">
            WHAT MATTERS THE MOST
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Audience",
                description:
                  "What audience are we targeting? How do we find and attract those target customers accurately, efficiently, and cost-effectively?",
                icon: "🔍",
              },
              {
                title: "Message",
                description:
                  "What messages are we sharing? Does this align with your brand and can effectively capture audiences attention & gain trust?",
                icon: "💡",
              },
              {
                title: "Trust",
                description:
                  "What channels do we utilize and how can we borrow trust from the right influencers? How do we choose a right mix of influencers?",
                icon: "✨",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-6">{approach.icon}</div>
                <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
                <p className="text-gray-400">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <PackagesSection /> */}

      {/* <ResultsSection /> */}

      <section className="py-5">
        <div className="container mx-auto ">
          <Accordion />
        </div>
      </section>

      {/* <section className="py-5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-5 text-center font-poppins">Testimonials</h2>
          <TestimonialCarousel />
        </div>
      </section> */}

      {/* <section className="py-20 bg-[url(/blade-1-opacity85.png)] bg-bottom">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              REACH OUT NOW
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-bold text-xl bg-black shadow-md p-3 rounded-md">
              LET'S COLLABORATE AND CREATE SOMETHING EXTRAORDINARY. CONTACT US
              TODAY TO DISCUSS YOUR VISION AND DISCOVER SOLUTIONS TAILORED TO
              YOUR NEEDS.
            </p>
            <button className="group inline-flex items-center space-x-2 text-white font-semibold bg-black p-2 rounded-lg">
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section> */}

      <CTASection />
    </>
  );
}
