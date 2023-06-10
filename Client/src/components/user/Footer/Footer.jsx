import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
            <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <FaFacebook className="h-4 w-4" />
                    </a>
                    <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <FaTwitter className="h-4 w-4" />
                    </a>
                    <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <FaInstagram className="h-5 w-5" />
                    </a>
                    <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <FaLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <FaGithub className="h-4 w-4" />
                    </a>
                    <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                        <IoLogoYoutube className="h-4 w-4" />
                    </a>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            <FaGithub className="mr-3 h-4 w-4" />
                            Tailwind ELEMENTS
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Angular</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">React</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Vue</a>
                        </p>
                        <p>
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Laravel</a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links

                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">About Us</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Contact Us</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Privacy Policy</a>
                        </p>
                        <p>
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">Terms of Service</a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                                <HiOutlineMail className="mr-2 h-4 w-4" />
                                info@example.com
                            </a>
                        </p>
                        <p>
                            <span className="text-neutral-600 dark:text-neutral-200">
                                123 Street, City, State, Country
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-200 dark:bg-neutral-700 py-4">
                <div className="text-center text-sm text-neutral-600 dark:text-neutral-200">
                    © 2023 Tailwind ELEMENTS. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
