import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, SendHorizonal } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-[1170px] mx-auto px-4  lg:px-0">
                <div className="container py-10 not-even:mx-auto px-6 flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 justify-between">
                    {/* Subscribe Section */}
                    <div className="md:max-w-[160px] lg:max-w-full">
                        <h3 className="text-2xl font-bold">Exclusive</h3>
                        <p className="mt-4 text-xl font-semibold">Subscribe</p>
                        <p className="text-gray-400 my-4">Get 10% off your first order</p>
                        <div className="relative flex items-center border border-gray-500 rounded px-2 py-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent outline-none flex-1 px-2 py-1 text-sm"
                            />
                            <SendHorizonal size={18} className="text-gray-400 absolute top-2 right-4" />
                        </div>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-xl font-semibold">Support</h3>
                        <p className="text-gray-400 mt-4 max-w-[150px]">111 Bijoy Sarani, Dhaka, Bangladesh.</p>
                        <p className="text-gray-400 mt-2">exclusive@gmail.com</p>
                        <p className="text-gray-400 mt-2">+88015-88888-9999</p>
                    </div>

                    {/* Account Section */}
                    <div>
                        <h3 className="text-xl font-semibold">Account</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold">Quick Link</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Download App Section */}
                    <div>
                        <h3 className="text-xl font-semibold">Download App</h3>
                        <p className="text-gray-400 mt-4">Save $3 with App New User Only</p>
                        <div className="flex items-center gap-2 mt-2">
                            <Image src="/qr-code.png" alt="QR Code" width={80} height={80} priority/>
                            <div className="space-y-2">
                                <Image src="/google-play.png" alt="Google Play" width={110} height={40} priority/>
                                <Image src="/app-store.png" alt="App Store" width={110} height={40} priority/>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <Facebook className="text-gray-400 cursor-pointer" />
                            <Twitter className="text-gray-400 cursor-pointer" />
                            <Instagram className="text-gray-400 cursor-pointer" />
                            <Linkedin className="text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-gray-500 text-sm border-t border-gray-700 p-4">
                    &copy; Copyright Rimel 2022. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
