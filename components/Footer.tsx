"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

import {
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";

import { AiOutlineLink } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const SOCIALS = {
    instagram: "https://www.instagram.com/code_cubicle_3.0/?hl=en",
    twitter: "https://x.com/geek__room_",
    linkedin: "https://www.linkedin.com/company/geekroom-codecubicle/",
    mail: "codecubicle24@gmail.com",
    linktree: "https://linktr.ee/geekroom",
  };

  return (
    <footer className="mt-24 pt-5 lg:pt-8 pb-2 lg:pb-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col">
        <div className="lg:hidden flex justify-center mb-7 font-bold"/>
      
        <div className="flex justify-center text-sm lg:text-3xl space-x-4 mb-9">
          <a href="https://x.com/geek__room_">
            <span className="sr-only">Twitter</span>
            <FaXTwitter/>

          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.linkedin.com/company/geekroom-codecubicle/">
            <span className="sr-only ">LinkedIn</span>
            <FaLinkedinIn/>

          </a>
          <div className=" border-r-2 transform rotate-12" />

          <a href="https://www.instagram.com/code_cubicle_3.0/?hl=en">
            <span className="sr-only">Instagram</span>
            <FaInstagram/>
          </a>
          <div className=" border-r-2 transform rotate-12" />
          <a href="https://discord.com/invite/7TEVm4pmMv">
            <span className="sr-only">Discord</span>
            <FaDiscord/>
          </a>
          <div className=" border-r-2 transform rotate-12" />
          <a href="https://linktr.ee/geekroom">
            <span className="sr-only">Linktree</span>
            <AiOutlineLink/>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 xl:gap-x-36 items-center justify-around text-xs xl:text-sm">
            <div className="lg:grid grid-cols-3 text-center hidden">
            <a  href="mailto:codecubicle24@gmail.com">
                Contact Us
            </a>
            </div>
            <div className="mx-5 lg:mx-0 text-center">
              Copyrights © 2024. All rights reserved by Code Cubicle 3.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
