"use client"

import { motion } from "framer-motion"
import { Search, Calendar, Laptop } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Find Your Tutor",
    description: "Filter by subject, location, and teaching mode to find the perfect match for your learning needs.",
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Book a Session",
    description: "Choose a convenient time and select between online or in-person classes based on your preference.",
  },
  {
    icon: <Laptop className="h-12 w-12 text-primary" />,
    title: "Start Learning",
    description: "Join your class online through our platform or meet in person at your agreed location.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Getting started is easy with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/10 rounded-full blur-sm"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-full p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                  {step.icon}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-sm">{step.description}</p>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
