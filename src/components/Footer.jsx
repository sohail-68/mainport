import React from "react";
import { Github, Linkedin, Twitter, Mail, Download, MapPin } from "lucide-react";

const Footer = () => {
  
  
  return (
    <footer className="bg-gray-50 dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#151515] dark:to-[#0f0f0f] text-gray-800 dark:text-gray-200 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand Section */}
        <div className="md:col-span-4">
          <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-md mr-2">👨‍💻</span>
            Sohail
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I'm a passionate <span className="font-semibold text-blue-500">Web Developer</span> 
            who loves building modern, responsive, and user-friendly applications. 
            Always learning, always growing 🚀.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://github.com/sohail-68"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-blue-500" />
            Contact
          </h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
              <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sohailkhanas23as23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400 transition-colors"
              >
                sohailkhanas23@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              Remote / Open to Work
            </p>
          </div>
        </div>

        {/* Quick Links */}
      <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <a 
                href="/contact" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/resume" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>


        {/* CTA Section */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Let's Work Together</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Interested in working together or have a project in mind?
          </p>
          <div className="flex flex-col space-y-3">
            <a
              href="/sohailresume.pdf"
              download
              className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-all duration-300 hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sohail. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with ❤️ using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;