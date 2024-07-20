import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div
      id="teamSection"
      className="  tw-bg-[#456DA7]"
    >
      <div className="container tw-py-16 tw-text-center">
       
        <h1 className="tw-text-white tw-pt-4 tw-font-semibold md:tw-text-[45px] tw-text-[35px]">
        The Board Of Advisors
        </h1>
        <div className="row  tw-pt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 ">
              <div className=" tw-text-center tw-rounded-lg">
                <div className="">
                  
                  <div className="">
                    <img
                      src={member.image}
                      className=" tw-mx-auto"
                      alt={member.name}
                    />
                  </div>
                </div>
                <div className="tw-pb-8 ">
                  <h3 className=" tw-text-white tw-text-xl tw-font-poppins tw-font-bold tw-uppercase">
                    {member.name}
                  </h3>
                  <p className="tw-text-[#A4B4C3] m-0">{member.role}</p>
                  {/* {member.links && (
                    <ul className="tw-flex tw-gap-3 tw-pt-2 tw-justify-center tw-items-center">
                      {member.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link.url}>
                            <img
                              src={require(`../../assets/images/${link.icon}`)}
                              alt={link.alt}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Rayman, C., M.Sc",
    role: "Founder & CO",
    image: require("../../assets/images/user.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Aaron, H.",
    role: "Head of Technology",
    image: require("../../assets/images/user.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Blade, A., Ph.D.",
    role: "Legal Affairs",
    image: require("../../assets/images/user.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Buzz Master",
    role: "Marketing",
    image: require("../../assets/images/user.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Buzz Master",
    role: "Marketing",
    image: require("../../assets/images/user.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Buzz Master",
    role: "Marketing",
    image: require("../../assets/images/user.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
];

export default Team;
