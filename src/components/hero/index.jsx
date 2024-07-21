import React, { useState } from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";
import Header from "../header";
import Counter from "../Counter";
import VideoPlayer from "../videoPlayer";
const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const getBorderColor = (currency) => {
    return selectedCurrency === currency
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-transparent";
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
    const pdfUrl = require("../../assets/images/EBM Whitepaper.pdf");
    window.open(pdfUrl, "_blank");
  };

  const [openVideo, setOpenVideo] = useState(false);
  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />
    

      <div className="container tw-relative tw-pt-6 tw-pb-28">
        <div className="row    g-5 tw-items-center">
          <div className="col-lg-6 col-md-12">
            <h1 className=" tw-text-[#456DA7]  tw-font-semibold md:tw-text-5xl tw-text-4xl">
            
              How YouSamaritan’s Time has Come.
             
            </h1>
            <p className=" tw-text-black sm:tw-text-start tw-text-center tw-font-poppins tw-font-normal tw-leading-7 tw-pt-4 tw-text-lg t">
            It's unlikely that anyone goes through life without facing any struggles, challenges or problems. Challenges are a natural part of the human experience, and they can vary widely in nature and intensity. People may encounter difficulties in their personal relationships, work, health, or other aspects of life.
            </p>
            <div className=" tw-flex tw-gap-7 sm:tw-justify-start tw-justify-center">
              <Button
                onClick={openPdfInNewTab}
                label={"White Paper"}
                className={"  tw-mt-7"}
                
              />

              <button
                onClick={() => setOpenVideo(true)}
                
                className={"  tw-bg-white tw-px-5  tw-gap-2 tw-rounded-md  tw-border-[#456DA7] tw-flex tw-items-center  tw-text-[#456DA7] tw-border tw-mt-7"}
                
              >
GET VIDEO <FaArrowRight color="#456DA7" />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {!openVideo === true ? (
              <div className="row tw-relative">
                <div className="col-md-10 tw-p-0 tw-mx-auto">
                  <div className="  tw-border-[#269FF0] tw-border-2 tw-rounded-2xl  p-4 tw-h-auto tw-bg-cover bg-hero-cut">
                    <h1 className=" tw-text-lg tw-pb-3 tw-text-[#456DA7]">NEXT PRICE INCREASE IN</h1>
                    <Counter />

                    <div className="  tw-text-center tw-py-4">
                      <p className="  tw-text-lg  tw-m-0 tw-text-black">
                        Total Raised: <sapn className=" tw-text-lg tw-font-semibold tw-text-[#456DA7]"> $93,307.73 </sapn>
                      </p>
                      <div className=" tw-flex tw-justify-between tw-items-center">
                        <p className=" tw-m-0 text-xl tw-font-poppins tw-text-[#456DA7]">
                          Stage
                        </p>
                        <p className=" tw-m-0 text-xl tw-font-poppins tw-text-[#456DA7]">
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
                        <p className=" tw-m-0   tw-font-poppins  tw-font-medium tw-text-black">
                          SMT = 0.0015
                        </p>
                        <p className=" tw-m-0 tw-font-poppins  tw-font-medium  tw-text-black">
                          Next = 0.0018
                        </p>
                      </div>
                    </div>

                    <div className="  tw-text-center tw-pb-4 tw-pt-0">
                      <p className=" tw-font-poppins tw-m-0 tw-text-black">
                        Your Purchased $EBM = 0
                      </p>
                     
                    </div>

                    <div className="tw-flex tw-w-full tw-gap-3 tw-justify-center">
                      <div
                        className={`tw-rounded-md  tw-border-[#456DA7] tw-border-2 tw-h-[48px] tw-w-full tw-justify-between tw-px-3 tw-flex tw-items-center tw-mt-2 tw-bg-gradient ${getBorderColor(
                          "MATIC"
                        )}`}
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
                        className={`tw-rounded-md tw-w-full tw-h-[48px] tw-border-[#456DA7] tw-justify-between tw-pr-5 tw-flex tw-items-center tw-mt-2  ${getBorderColor(
                          "USDT"
                        )}`}
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

                    <div className=" tw-flex tw-gap-3 tw-pt-5">
                      <div className=" tw-w-full">
                        <p className=" tw-m-0 tw-text-black tw-font-poppins sm:tw-text-base tw-text-sm">
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
                        <p className="  tw-font-poppins tw-m-0 tw-text-black sm:tw-text-base tw-text-sm">
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



                    <div className=" tw-pt-6 tw-flex tw-justify-center ">
                      <p className=" tw-text-sm  tw-font-poppins tw-font-semibold">REFERRAL DETAILS</p>
                    </div>




                  
                  </div>
                </div>
              </div>
            ) : (
              <VideoPlayer src={require("../../assets/images/ebm.mp4")} />
            )}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
