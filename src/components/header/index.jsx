import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [holdersDropdownOpen, setHoldersDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <nav className=" tw-top-0 tw-relative tw-z-20">
      <div className="tw-flex tw-items-center tw-font-medium tw-h-32 container tw-mx-auto tw-justify-between">
        <div className="">
          <img
            src={require("../../assets/images/logo.png")}
            className="tw-object-contain tw-w-[180px]"
            alt="Logo"
          />
        </div>

        <ul className="lg:tw-flex tw-hidden tw-items-center tw-gap-8 tw-font-[Poppins]">
          <li>
            <Link
              className={`${
                isActive("/") ? " tw-text-black" : "tw-text-black"
              }tw-text-white`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "aboutSection")}
              className="tw-text-black"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "tokenSection")}
              className="tw-text-black"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "roadSection")}
              className="tw-text-black"
            >
              Road Map
            </Link>
          </li>
          <li>
            <Link to={"/staking"} className="tw-text-black">
              Team
            </Link>
          </li>
          <li>
            <Link to={"/staking"} className="tw-text-black">
              Staking
            </Link>
          </li>
        
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "teamSection")}
              className="tw-text-white"
            >
              Team
            </Link>
          </li>
        </ul>

        <div className="md:tw-block tw-hidden">
          <Button
            Icons={<FaRegUser color="white" />}
            label={"Connect Wallet"}
          />
        </div>

        <div
          className="tw-text-3xl lg:tw-hidden tw-pt-2 tw-z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdOutlineClose color="white" /> : <MdMenu color="white" />}
        </div>

        {/* Mobile nav */}
        <div
          className={`
            lg:tw-hidden   tw-bg-black  tw-bg-cover  tw-bg-Hero tw-fixed tw-w-full tw-top-0 tw-overflow-y-auto tw-bottom-0 tw-leading-10 tw-py-10 
            tw-duration-500 ${open ? "tw-left-0" : "tw-left-[-100%]"}
          `}
        >
          <div className=" tw-absolute  tw-h-screen   tw-top-0 tw-right-0">
            <img
              src={require("../../assets/images/right_image.png")}
              className=" tw-w-full tw-h-full"
            />
          </div>
          <div className=" tw-absolute  tw-h-screen  tw-top-0 tw-left-0">
            <img
              src={require("../../assets/images/left_image.png")}
              className=" tw-w-full tw-h-full"
            />
          </div>

          <div className="tw-pb-5 tw-px-8">
            <img
              src={require("../../assets/images/logo.png")}
              className="tw-object-contain tw-w-[180px]"
              alt="Logo"
            />
          </div>

          <ul className="tw-p-0 tw-relative tw-px-9 tw-pt-3 tw-border-t">
          <li>
            <Link
              className={`${
                isActive("/") ? " tw-text-black" : "tw-text-black"
              }tw-text-white`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "aboutSection")}
              className="tw-text-black"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "tokenSection")}
              className="tw-text-black"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              onClick={() => handleNavigate("/", "roadSection")}
              className="tw-text-black"
            >
              Road Map
            </Link>
          </li>
          <li>
            <Link to={"#"} className="tw-text-black">
              Team
            </Link>
          </li>
          <li>
            <Link to={"/staking"} className="tw-text-black">
              Staking
            </Link>
          </li>
          
            <li>
              <Link
                to={"/"}
                onClick={() => {
                  handleNavigate("/", "teamSection");

                  setOpen(false);
                }}
                className="tw-text-white"
              >
                Team
              </Link>
            </li>

            <li className=" tw-pt-5">
            <Button  

            className={''}
            Icons={<FaRegUser color="white" />}
            label={"Connect Wallet"}
          />
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
