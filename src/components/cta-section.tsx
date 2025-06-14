"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section
      id="become-tutor"
      className="py-16 bg-gradient-to-r from-primary via-primary-light to-primary text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Learning Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're looking to learn something new or share your expertise with others, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0 rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100 shadow-lg font-semibold">
                  Find a Tutor
                </Button>
              </motion.div>
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
              >
                Become a Tutor
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}