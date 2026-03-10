import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white/10 p-1">
                            <Image
                                src="/images/logo.png"
                                alt="Vidyadeep Logo"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                        <span className="font-outfit font-bold text-xl text-white group-hover:text-primary transition-colors">
                            Vidyadeep College
                        </span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Vidyadeep Paramedical College is dedicated to shaping the future of healthcare professionals with world-class education and practical training.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/vidyadeepparamedicalinstitute/" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://youtube.com/@vidyadeepparamedicalcollege" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                            <Youtube className="h-5 w-5" />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-outfit font-bold text-lg mb-6 border-l-4 border-primary pl-3">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About College</Link></li>
                        <li><Link href="/courses" className="hover:text-primary transition-colors">Our Courses</Link></li>
                        <li><Link href="/faculty" className="hover:text-primary transition-colors">Faculty Profiles</Link></li>
                        <li><Link href="/gallery" className="hover:text-primary transition-colors">Campus Gallery</Link></li>
                        <li><Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-outfit font-bold text-lg mb-6 border-l-4 border-primary pl-3">Contact Us</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-primary shrink-0" />
                            <span>Near Civil Hospital, Opp Nayara Petrol Pump, Haily Mandi Road, Farrukhnagar, Gurugram, Haryana India</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-primary shrink-0" />
                            <span>+91 9992101666, 7988348872</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-primary shrink-0" />
                            <span>info@vidyadeepcollege.com</span>
                        </li>
                    </ul>
                </div>

                {/* Location Map Placeholder */}
                <div>
                    <h4 className="font-outfit font-bold text-lg mb-6 border-l-4 border-primary pl-3">Our Location</h4>
                    <div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.2343248881335!2d76.814234!3d28.445353999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI2JzQzLjMiTiA3Niw0OCc1MS4yIkU!5e0!3m2!1sen!2sin!4v1715424853245!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Vidyadeep Paramedical College. All Rights Reserved. Affiliated to Asian International University (UGC Approved).</p>
            </div>
        </footer>
    );
}
