import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
        
        {/* Logo & Info */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <img src="/public/205.png" alt="Nest Logo" className="" />
           
          </div>
          <p className="text-sm mb-3">Awesome grocery store website template</p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-green-600"></i>
              Address: 5171 W Campbell Ave, Kent, Utah 53127 United States
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-green-600"></i>
              Call Us:{" "}
              <a
                href="tel:+91-540-025-124553"
                className="text-green-600 hover:underline"
              >
                (+91)-540-025-124553
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-green-600"></i>
              Email:{" "}
              <a
                href="mailto:sale@Nest.com"
                className="text-green-600 hover:underline"
              >
                sale@Nest.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-regular fa-clock text-green-600"></i>
              Hours: 10:00 - 18:00, Mon - Sat
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">About Us</a></li>
            <li><a href="#" className="hover:text-green-600">Delivery Information</a></li>
            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600">Support Center</a></li>
            <li><a href="#" className="hover:text-green-600">Careers</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Sign In</a></li>
            <li><a href="#" className="hover:text-green-600">View Cart</a></li>
            <li><a href="#" className="hover:text-green-600">My Wishlist</a></li>
            <li><a href="#" className="hover:text-green-600">Track My Order</a></li>
            <li><a href="#" className="hover:text-green-600">Help Ticket</a></li>
            <li><a href="#" className="hover:text-green-600">Shipping Details</a></li>
            <li><a href="#" className="hover:text-green-600">Compare Products</a></li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Corporate</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Become a Vendor</a></li>
            <li><a href="#" className="hover:text-green-600">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-green-600">Farm Business</a></li>
            <li><a href="#" className="hover:text-green-600">Farm Careers</a></li>
            <li><a href="#" className="hover:text-green-600">Our Suppliers</a></li>
            <li><a href="#" className="hover:text-green-600">Accessibility</a></li>
            <li><a href="#" className="hover:text-green-600">Promotions</a></li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Popular</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Milk & Flavoured Milk</a></li>
            <li><a href="#" className="hover:text-green-600">Butter and Margarine</a></li>
            <li><a href="#" className="hover:text-green-600">Eggs Substitutes</a></li>
            <li><a href="#" className="hover:text-green-600">Marmalades</a></li>
            <li><a href="#" className="hover:text-green-600">Sour Cream and Dips</a></li>
            <li><a href="#" className="hover:text-green-600">Tea & Kombucha</a></li>
            <li><a href="#" className="hover:text-green-600">Cheese</a></li>
          </ul>
        </div>

        
       
      </div>
    </footer>
  );
}
