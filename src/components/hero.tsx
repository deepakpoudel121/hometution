"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Find the Perfect Tutor — <span className="text-primary">Online or In-Person</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Qualified tutors in every subject, ready to teach on your schedule. Join thousands of students achieving
              their academic goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-lg">
                Browse Tutors
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Start Teaching
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 mt-8 md:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Online and in-person learning illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
