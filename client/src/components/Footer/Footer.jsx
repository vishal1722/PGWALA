import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">PG Finder</h3>
          <p className="mt-4 text-sm leading-relaxed">
            Find verified PGs, hostels, and shared rooms near your college or
            workplace. Built for students and owners.
          </p>

          <div className="flex gap-4 mt-6">
            <a className="hover:text-white transition" href="#">
              <Facebook size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Instagram size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Twitter size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">For Students</a></li>
            <li><a href="#" className="hover:text-white">For Owners</a></li>
            <li><a href="#" className="hover:text-white">PG Listings</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} PG Finder. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with ❤️ for students & owners
          </p>
        </div>
      </div>
    </footer>
  );
}
