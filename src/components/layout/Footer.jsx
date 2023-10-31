import React from "react";
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';

const socials = [
  { name: "Facebook", Icon: BsFacebook, url: "https://facebook.com" },
  { name: "Instagram", Icon: BsInstagram, url: "https://instagram.com" },
  { name: "BsTwitter", Icon: BsTwitter, url: "https://twitter.com" },
  { name: "BsYoutube", Icon: BsYoutube, url: "https://youtube.com" },
];

const footermanu = [
  { name: "Join Our Community", to: "/" },
  { name: "About us", to: "/"},
  { name: "Privacy policy",to: "/" },
];


const Footer = () => {
  return (
   <footer className="bg-orange px-8">
     <div className="w-full px-4 flex items-start gap-4 flex-col md:items-center md:flex-row  justify-between py-6">
      <div className="flex items-center">
        <h1 className="text-dark-grey text-md font-bold underline underline-offset-8 ">
          <a href="/">CoffeeLab</a>
        </h1>
      </div>
      <ul className="flex items-center gap-4">
        {!!footermanu?.length &&
          footermanu.map(({ name, to }, index) => (
            <li key={index + name}>
              <a href={to} target="_blank" className="text-white hover:text-opacity-80">
            {name}
              </a>
            </li>
          ))}
      </ul>

      <ul className="flex items-center gap-4 ">
        {!!socials?.length &&
          socials.map(({ name, Icon, url }, index) => (
            <li key={index + name}>
              <a href={url} target="_blank" className="text-grey">
                <Icon />
              </a>
            </li>
          ))}
      </ul>
    </div>
    <Link to="header" className="hover:cursor-pointer" smooth={true} duration={500}>
      <button className="fixed bottom-20 right-4 bg-orange rounded-full p-3">
        <FaArrowUp className="text-white text-3xl" />
      </button>
    </Link>
   </footer>
  );
};

export default Footer;
