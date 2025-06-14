import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="support" className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TutorMatch</h3>
            <p className="mb-4 text-slate-400">
              Connecting students with qualified tutors for personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Subjects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Become a Tutor
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Language</h3>
            <select className="bg-slate-800 text-white rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary border border-slate-700">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="hi">हिन्दी</option>
              <option value="ne">नेपाली</option>
            </select>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} TutorMatch. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors text-slate-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
