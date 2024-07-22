import React, { useState } from "react";
import Button from "../Button";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import Header from "../header";
import Counter from "../Counter";
import VideoPlayer from "../videoPlayer";
import { FaAngleUp } from "react-icons/fa";
import { PiCopyLight } from "react-icons/pi";
import VideoSlider from "../videoSlider";
const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("MATIC");

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
  };


  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getBorderColor = (currency) => {
    return selectedCurrency === currency
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-[#456DA7]";
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleBSelect = (button) => {
    setSelectedButton(button);
  };

  const getBBorderColor = (button) => {
    return selectedButton === button
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-white";
  };

  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/YouSamaritan White Paper v2.pdf");
    window.open(pdfUrl, "_blank");
  };

  const [openVideo, setOpenVideo] = useState(false);
  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />
    

      <div className="container tw-relative tw-pt-6 tw-pb-28">
        <div className="row    g-5 tw-items-center">
          <div className="col-lg-6 col-md-12">
            <h1 className=" tw-text-[#456DA7]  tw-font-zen-dots  md:tw-text-5xl tw-text-3xl">
            
              How YouSamaritan’s Time has Come.
             
            </h1>
            <p className=" tw-text-black sm:tw-text-start tw-text-center  tw-font-normal tw-leading-7 tw-pt-4 tw-text-lg t">
            It's unlikely that anyone goes through life without facing any struggles, challenges or problems. Challenges are a natural part of the human experience, and they can vary widely in nature and intensity. People may encounter difficulties in their personal relationships, work, health, or other aspects of life.
            </p>
            <div className=" tw-flex tw-gap-7 sm:tw-justify-start tw-justify-center">
              <Button
                onClick={openPdfInNewTab}
                label={"White Paper"}
                className={"  tw-mt-7"}
                
              />
              {!openVideo === true ?(
                 <button
                 onClick={() => setOpenVideo(true)}
                 
                 className={"  tw-bg-white tw-px-5  tw-gap-2 tw-rounded-md  tw-border-[#456DA7] tw-flex tw-items-center  tw-text-[#456DA7] tw-border tw-mt-7"}
                 
               >
 GET VIDEO <FaArrowRight color="#456DA7" />
               </button>
              ):(
                 <button
                onClick={() => setOpenVideo(false)}
                
                className={"  tw-bg-white tw-px-5  tw-gap-2 tw-rounded-md  tw-border-[#456DA7] tw-flex tw-items-center  tw-text-[#456DA7] tw-border tw-mt-7"}
                
              >
GET SAMARITAN <FaArrowRight color="#456DA7" />
              </button>
              )}
             
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {!openVideo === true ? (
              <div className="row tw-relative">
                <div className="col-md-10 tw-p-0 tw-mx-auto">
                  <div className="  tw-border-[#269FF0] tw-border-2 tw-rounded-2xl  sm:p-4  p-3 tw-h-auto tw-bg-cover bg-hero-cut">
                    <h1 className=" tw-text-lg tw-pb-3 tw-text-[#456DA7]">NEXT PRICE INCREASE IN</h1>
                    <Counter />

                    <div className="  tw-text-center tw-py-4">
                      <p className="  tw-text-lg  tw-m-0 tw-text-black">
                        Total Raised: <sapn className=" tw-text-lg tw-font-semibold tw-text-[#456DA7]"> $93,307.73 </sapn>
                      </p>
                      <div className=" tw-flex tw-justify-between tw-items-center">
                        <p className=" tw-m-0 sm:tw-text-base tw-text-[10px] tw-font-poppins tw-text-[#456DA7]">
                          Stage
                        </p>
                        <p className=" tw-m-0 sm:tw-text-base tw-text-[10px] tw-font-poppins tw-text-[#456DA7]">
                          Remaining
                        </p>
                      </div>

                      <div className=" tw-flex tw-justify-between tw-items-center">
                        <p className=" tw-m-0 text-xl  tw-font-poppins tw-text-black">
                          0
                        </p>
                        <p className=" tw-m-0 text-xl  tw-font-poppins tw-text-black">
                          4656666
                        </p>
                      </div>

                      <div className="  tw-bg-gradient tw-rounded-lg border tw-overflow-hidden tw-my-2">
                        <div className="  tw-rounded-md tw-w-[80%] tw-bg-button-gradient tw-p-2"></div>
                      </div>

                      <div className=" tw-flex tw-justify-between tw-items-center">
                        <p className=" tw-m-0  sm:tw-text-base tw-text-[10px]  tw-font-poppins  tw-font-medium tw-text-black">
                          SMT = 0.0015
                        </p>
                        <p className=" tw-m-0 sm:tw-text-base tw-text-[10px] tw-font-poppins  tw-font-medium  tw-text-black">
                          Next = 0.0018
                        </p>
                      </div>
                    </div>


                    <div className=" tw-border-2 tw-px-3 tw-py-1.5 tw-rounded-md tw-mb-2 tw-border-[#456DA7]">
                      <span className="tw-text-[#456DA7]  tw-flex tw-items-center tw-gap-2  m-0">REF LINK  <PiCopyLight  color="#456DA7" /> </span>
                        <p className=" m-0 tw-text-[#456DA7]">https://www.yousmaritan.com/?ref=0x93...a89</p>
                    </div>

                    <div className="  tw-text-center tw-pb-4 tw-pt-0">
                      <p className=" tw-font-poppins sm:tw-text-base tw-text-[10px] tw-m-0 tw-text-black">
                        Your Purchased $EBM = 0
                      </p>
                     
                    </div>

                    <div className="tw-flex tw-w-full tw-gap-3">
                      <div
                        className={`tw-rounded-md  tw-w-full tw-h-[48px]  tw-justify-between tw-pr-5 tw-flex tw-items-center tw-mt-2 ${selectedCurrency==="MATIC"?' tw-border-2 tw-border-[#456DA7]': 'tw-border-2 border'}`}
                        onClick={() => handleSelect("MATIC")}
                      >
                        <div>
                          <img
                            src={require("../../assets/images/c2.png")}
                            alt="MATIC"
                          />
                        </div>
                        <p className="tw-m-0 tw-text-black">MATIC</p>
                      </div>
                      <div
                        className={`tw-rounded-md  tw-w-full tw-h-[48px]  tw-justify-between tw-pr-5 tw-flex tw-items-center tw-mt-2 ${selectedCurrency==="USDT"?' tw-border-2 tw-border-[#456DA7]': 'tw-border-2 border'}`}
                        onClick={() => handleSelect("USDT")}
                      >
                        <div>
                          <img
                            src={require("../../assets/images/c1.png")}
                            alt="USDT"
                          />
                        </div>
                        <p className="tw-m-0 tw-text-black">USDT</p>
                      </div>
                    
                    </div>
                    <div className="  tw-gap-3 tw-justify-center  tw-flex tw-items-center tw-text-center tw-pt-4 tw-pb-2">
                      <p className=" tw-w-24 m-0  tw-bg-[#456DA7] tw-h-[2px] "></p>
                      <p className=" tw-uppercase tw-font-medium tw-font-poppins tw-m-0  sm:tw-text-lg tw-text-[10px] tw-text-black">
                      {selectedCurrency==="MATIC"?'Matic':'USDT'} Bailance = <span className=" tw-text-[#456DA7] tw-font-poppins">505</span>
                      </p>
                      <p className=" tw-w-24 m-0  tw-bg-[#456DA7] tw-h-[2px] "></p>

                    </div>
                    <div className=" tw-flex tw-gap-3 ">
                      <div className=" tw-w-full">
                        <p className=" tw-m-0 tw-text-black tw-font-poppins sm:tw-text-base tw-text-[10px]">
                          $ {selectedCurrency} Matic you pay
                        </p>

                        <div className=" tw-rounded-md tw-border-2 tw-relative tw-mt-2 tw-border-[#456DA7]  tw-bg-gradient">
                          <input
                            className=" tw-bg-transparent  tw-w-full tw-px-3 tw-py-2 tw-text-black tw-pl-12 tw-outline-none"
                            defaultValue={0}
                          />
                          <div className=" tw-absolute tw-left-1.5  tw-top-0">
                            {selectedCurrency === "USDT" ? (
                              <img
                                src={require("../../assets/images/c1.png")}
                                className=" tw-w-10 tw-h-10"
                              />
                            ) :(
                              <img
                                src={require("../../assets/images/c2.png")}
                                className=" tw-w-8 tw-h-8"
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className=" tw-w-full">
                        <p className="  tw-font-poppins tw-m-0 tw-text-black sm:tw-text-base tw-text-[10px]">
                        Samaritan Receive
                        </p>

                        <div className=" tw-rounded-md tw-border  tw-border-[#456DA7] tw-relative  tw-mt-2  tw-bg-gradient">
                          <input
                            className=" tw-bg-transparent  tw-pl-12 tw-w-full tw-px-3 tw-py-2 tw-text-black tw-outline-none"
                            defaultValue={0}
                          />
                          <div className=" tw-absolute tw-left-3  tw-top-2">
                            <img
                              src={require("../../assets/images/c5.png")}
                              className=" tw-w-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                   

                   
                    <div className=" tw-flex tw-border-b tw-border-[#456DA7] tw-gap-3 tw-py-4">
                      <Button
                        label={"Buy Now"}
                        className={"  tw-py-1 tw-w-full"}
                      />
                     
                    </div>



                    <div className="tw-pt-6 tw-flex tw-justify-center">
      <p
        className="tw-flex tw-gap-3 tw-items-center tw-text-md tw-font-poppins tw-font-semibold cursor-pointer"
        onClick={handleToggle}
      >
        REFERRAL DETAILS {isExpanded ? <FaAngleUp/> : <FaAngleDown />}
      </p>
      
    </div>


    {isExpanded && (
        <div className=" tw-overflow-x-auto">
          <table className="tw-min-w-full tw-mb-0">
          <thead className="tw-border-t tw-border-b tw-border-[#456DA7] tw-bg-primary">
            <tr className="tw-rounded-lg tw-whitespace-nowrap">
              <th
                scope="col"
                className="tw-text-sm tw-text-[#456DA7] tw-font-bold tw-px-6 tw-py-4"
              >
                LEVEL
              </th>
              <th
                scope="col"
                className="tw-text-sm tw-text-[#456DA7] tw-font-bold tw-px-6 tw-py-4"
              >
                PERCENTAGE
              </th>
              <th
                scope="col"
                className="tw-text-sm tw-text-[#456DA7] tw-font-bold tw-px-6 tw-py-4"
              >
                Team
              </th>
              <th
                scope="col"
                className="tw-text-sm tw-text-[#456DA7] tw-font-bold tw-px-6 tw-py-4"
              >
                EARNING
              </th>
            </tr>
          </thead>
          <tbody>
            <>
              <tr className="bg-white border-t rounded-md">
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    1
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    5%
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    0
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline tw-font-poppins bg-green-200 rounded-full">
                    0
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-t rounded-md">
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    2
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    3%
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    0
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline tw-font-poppins bg-green-200 rounded-full">
                    0
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-t rounded-md">
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    3
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    1%
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black tw-font-poppins py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-200 rounded-full">
                    0
                  </span>
                </td>
                <td className="align-middle text-sm font-normal px-6 py-2 whitespace-nowrap text-center">
                  <span className="text-base text-black py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline tw-font-poppins bg-green-200 rounded-full">
                    0
                  </span>
                </td>
              </tr>
            </>
          </tbody>
        </table>
        </div>
      )}

                  
                  </div>
                </div>
              </div>
            ) : (
              // <VideoPlayer src={require("../../assets/images/ebm.mp4")} />
              <VideoSlider/>
            )}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
