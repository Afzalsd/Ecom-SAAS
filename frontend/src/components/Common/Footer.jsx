import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
import { TbBrandMeta } from "react-icons/tb"
import { Link } from "react-router-dom"
import { FiPhoneCall } from "react-icons/fi"

{/* <footer className="border-t border-gray-200 py-12 mt-12"> */}
const Footer = () => {
  return (
    
    <footer className="border border-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-7">
            <div className="">
                <h3 className="text-xl text-gray-800 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                    Be the first to know about new products, exclusive events and special offers.
                </p>
                <p className="font-medium text-sm text-gray-800 mb-6">
                    sign up and get 10% off your first purchase
                </p>
                {/* Newsletter Form */}
                <form className="flex">
                    <input type="email" placeholder="Enter your email" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 runded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />
                    <button type="submit" className="bg-black text-white py-3 px-6 rounded-r-md  text-sm hover:bg-gray-800 transition-all">Subscribe</button>
                </form>
            </div>
            {/* shop Links */}
            <div>
                <h3 className="text-xl text-gray-800 mb-4">Shop</h3>
                <ul className="text-gray-600 space-y-2">
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Mens Top Wear{/* Add ' if you want */}
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Womens Top Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Mens Bottom Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Womens Bottom Wear
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Support Links */}
            <div>
                <h3 className="text-xl text-gray-800 mb-4">Support</h3>
                <ul className="text-gray-600 space-y-2">
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">
                            Features
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Follow Us */}
            <div>
                <h3 className="text-xl text-gray-800 mb-4">Follow Us</h3>

                <div className="flex space-x-4 mb-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className=" hover:text-gray-500">
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className=" hover:text-gray-500">
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className=" hover:text-gray-500">
                        <RiTwitterXLine className="h-4 w-4" />
                    </a>
                </div>
                <p className="text-gray-500">
                    Call Us
                </p>
                <p>
                    <FiPhoneCall className="inline-block mr-2"/>
                    0123-456-789
                </p>
            </div>

        </div>
        {/* Copyright */}
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className="text-center text-sm tracking-tight text-gray-500">
                &copy; 2025, CompileTab. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer