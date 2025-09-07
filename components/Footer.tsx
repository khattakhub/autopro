
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const socialIcons = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>, href: "#" },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.621 1.956 2.423 3.379 4.568 3.414-1.884 1.474-4.178 2.29-6.576 1.954 2.31 1.493 5.076 2.364 8.04 2.364 9.68 0 14.991-8.207 14.636-15.344.97-.69 1.815-1.557 2.485-2.54z" /></svg>, href: "#" },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z" /></svg>, href: "#" },
    ];
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-accent">AutoPro</h2>
            <p className="max-w-xs mt-4 text-sm text-gray-400">
              Your one-stop solution for automotive excellence. From maintenance to financing, we've got you covered.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-400">
             {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="hover:text-accent transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-4">
            <div>
              <p className="font-medium text-white">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link to="/services" className="hover:text-accent transition-colors duration-300">Maintenance</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors duration-300">Financing</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors duration-300">Insurance</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors duration-300">Valuation</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white">About</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors duration-300">Blog</Link></li>
                <li><Link to="/appointment" className="hover:text-accent transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link></li>
                <li><Link to="/tools" className="hover:text-accent transition-colors duration-300">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link to="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-accent transition-colors duration-300">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} AutoPro Connect. All rights reserved.</p>

                <div className="flex flex-col items-start mt-4 sm:mt-0">
                    <p className="text-sm font-medium text-white mb-2">Subscribe to our newsletter</p>
                    <form className="flex items-center w-full max-w-sm">
                        <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        <button type="submit" className="px-4 py-2 font-semibold text-secondary bg-accent rounded-r-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
