"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  // Tab 1: Students
  [
    {
      id: 1,
      name: "Arjun Tamang",
      role: "High School Student",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "My math grades improved from a C to an A- after just two months of tutoring. My tutor explains concepts in a way that finally makes sense to me!",
      rating: 5,
    },
    {
      id: 2,
      name: "Anisha Gurung",
      role: "College Student",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Finding a qualified physics tutor was a game-changer for my engineering degree. The flexible scheduling allowed me to fit sessions around my busy schedule.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bikash Magar",
      role: "University Student",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The computer science tutor helped me understand programming concepts that I was struggling with in my university classes. Now I'm one of the top students!",
      rating: 5,
    },
  ],
  // Tab 2: Parents
  [
    {
      id: 4,
      name: "Deepak Shrestha",
      role: "Parent",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "My daughter struggled with reading comprehension, but after working with her tutor, she's now reading above grade level. Worth every penny!",
      rating: 4,
    },
    {
      id: 5,
      name: "Ramesh Poudel",
      role: "Parent",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "We tried several tutoring services before finding TutorMatch. The difference is night and day. My son's confidence in mathematics has improved tremendously.",
      rating: 5,
    },
    {
      id: 6,
      name: "Nirmala Adhikari",
      role: "Parent",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "My twins were struggling with different subjects. TutorMatch helped us find specialized tutors for each of them, and now they're both thriving academically.",
      rating: 5,
    },
  ],
  // Tab 3: Professionals
  [
    {
      id: 7,
      name: "Sunita Rai",
      role: "Adult Learner",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I needed to learn English for work, and my tutor created a customized program that had me conversing confidently within months. Excellent experience!",
      rating: 5,
    },
    {
      id: 8,
      name: "Sarita Thapa",
      role: "Professional",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I needed to improve my Nepali writing skills for my job. My tutor was patient and knowledgeable, helping me become proficient in just a few months.",
      rating: 5,
    },
    {
      id: 9,
      name: "Binod KC",
      role: "Working Professional",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The evening classes fit perfectly with my work schedule. My tutor helped me prepare for an important certification that led to a promotion at work.",
      rating: 4,
    },
  ],
]

const tabTitles = ["Students", "Parents", "Professionals"]

export function Testimonials() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What Our Students Say</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Read testimonials from students who have achieved their learning goals
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg shadow-sm bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
            {tabTitles.map((title, index) => (
              <Button
                key={index}
                variant={activeTab === index ? "default" : "ghost"}
                className={`rounded-none first:rounded-l-lg last:rounded-r-lg ${
                  activeTab === index ? "bg-primary text-white shadow-md" : "text-slate-600 dark:text-slate-300"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(testimonials[activeTab] as typeof testimonials[0]).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg border border-slate-200 dark:border-slate-600 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-slate-200 dark:border-slate-600">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
