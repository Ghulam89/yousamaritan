import React from "react";
import Button from "../Button";

const RoadMap = () => {
  return (
    <div id="roadSection" className="      tw-overflow-x-hidden  tw-py-12">
      <div className="container sm:tw-py-16 sm:tw-pb-0 tw-pb-72">
        <div className=" tw-text-center">
          <h1 className=" tw-text-[#456DA7] tw-text-3xl  tw-font-zen-dots"> Road Map</h1>
          <p className="tw-text-white tw-leading-8">
            Our roadmap reflects our commitment to boost blockchains, innovation, DeFi growth, and sustainability, guiding us towards our vision of becoming a leader in the crypto mining industry and beyond.
          </p>
        </div>
        <div className="tw-relative ">
          <img
            src={require("../../assets/images/card_bg_t.png")}
            className="tw-mx-auto"
          />
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-0 tw-left-[48%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/circle.png")} alt="Left Arrow" />
          </div>
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-0 tw-left-[52%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/left_line.png")} alt="Left Arrow" />
          </div>
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-44 tw-right-[48%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/circle.png")} alt="Right Arrow" />
          </div>
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-[35%] tw-right-[48%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/circle.png")} alt="Right Arrow" />
          </div>
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-[50%] tw-left-[48%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/circle.png")} alt="Left Arrow" />
          </div>
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-[65%] tw-right-[48%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/circle.png")} alt="Right Arrow" />
          </div>
          <div className="tw-hidden sm:tw-block tw-absolute tw-top-[80%] tw-left-[48%] tw-transform tw--translate-y-1/2">
            <img src={require("../../assets/images/circle.png")} alt="Left Arrow" />
          </div>
          <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-overflow-x-hidden">
            <div className="g-5 row tw-items-center">
            <RoadMapPhase
                phase="Phase 1"
                title="Foundation (2024 Q1 – Q3)"
                items={[
                  "Establishing the core team and advisory board.",
                  "Conducting market research and feasibility studies.",
                  "Community benefiting business model and tokenomics.",
                  "Launching the presale phase to secure early investments and community support and participation.",
                ]}
              />
              <RoadMapPhase
                phase="2009 - 2023"
                title="Research l Validation"
                items={[
                  "Establishing the core team and advisory board.",
                  "Conducting market research and feasibility studies.",
                  "Community benefiting business model and tokenomics.",
                  "Launching the presale phase to secure early investments and community support and participation.",
                ]}
              />
              <RoadMapPhase
                phase="Phase 2"
                title="Infrastructure Development (2024 Q3 - Q4)"
                items={[
                  "Marketing, DEX listings.",
                  "Building first state-of-the-art mining facility.",
                  "Start Mining Operations.",
                  "Buy4Less - Swap at discounted rates (Users can buy coins we mine)",
                  "Stake4PIE - For passive income stream rewards (USDT/USDC)",
                ]}
              />
              <div className="col-md-6 sm:tw-block tw-hidden"></div>
              <div className="col-md-6 sm:tw-block tw-hidden"></div>
              <RoadMapPhase
                phase="Phase 3"
                title="Decentralized Exchange (DEX) Launch (2025 Q1 – Q2)"
                items={[
                  "Developing and launching our own DEX platform for decentralized trading.",
                  "Offering discounted value swaps for our token holders on the DEX.",
                  "Partnering with other DEX platforms to provide discounted transaction fees for our community.",
                ]}
              />
              <RoadMapPhase
                phase="Phase 4"
                title="BlockDAG Integration (2025 Q1 - Q2)"
                items={[
                  "Mining BlockDAG coins and leveraging its innovative technology.",
                  "Expanding mining operations to include a diverse range of cryptocurrencies.",
                  "Partnering with BlockDAG and other key players in the crypto industry.",
                ]}
              />
              <div className="col-md-6 sm:tw-block tw-hidden"></div>
              <div className="col-md-6 sm:tw-block tw-hidden"></div>
              <RoadMapPhase
                phase="Phase 5"
                title="Expansion and Growth (Q2 – Q3)"
                items={[
                  "Scaling up mining operations in multiple countries and regions.",
                  "Enhancing ecosystem development through strategic partnerships and collaborations.",
                  "Implementing community-driven initiatives and governance structures for token holders.",
                ]}
              />
              <RoadMapPhase
                phase="Phase 6"
                title="Sustainability and Innovation (Ongoing)"
                items={[
                  "Continuously optimizing mining operations for efficiency and profitability.",
                  "Exploring new technologies, trends, and opportunities in the crypto space.",
                  "Engaging with the community, investors, and stakeholders to drive long-term value creation and sustainability.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadMapPhase = ({ phase, title, items }) => (
  <div className="col-lg-6 col-md-12">
    <div className="row">
      <div className="col-md-11 tw-mx-auto">
        <div className=" tw-p-7 tw-pt-0 tw-rounded-md">
          <Button label={phase} className="tw-py-1 tw-font-poppins tw-rounded-full" />
          <h1 className="tw-text-black tw-font-semibold tw-text-[28px] tw-font-poppins tw-pt-4">{title}</h1>
          <p className=" tw-text-black tw-text-[20px]">Conducted tons of questionnaires and surveys from troubled individuals. Research with hundreds of medical practitioners.</p>
        </div>
      </div>
    </div>
  </div>
);

export default RoadMap;
