import React, { useState } from 'react'
import Accordion from '../Accordion/Accordion';

const FAQ = () => {
    const [accordions, setAccordion] = useState([
        {
          key: 1,
          title:
            "How many $EBM I need to be eligible in Buy4Less?",
          data: "Through Buy4Less, $EBM holders can purchase various cryptocurrencies at discounted rates ranging from 0.1% to 10% basing on monthly average $EBM holdings.",
          isOpen: false,
        },
        {
          key: 2,
          title:
            "What is Staking during Presale?",
            data: "This staking opportunity is exclusive to the presale buyers to grow their investment with native $EBM token rewards during the presale before listing $EBM for trade for limited period.",
            isOpen: false,
        },
        {
          key: 3,
          title:
            "What is Stake4PIE?",
            data: "By staking $EBM tokens, community members can earn passive income through daily automated distribution of 40-60% of the company's revenue, fostering community engagement and financial growth.",
            isOpen: false,
        },
        {
          key: 4,
          title: "4. How to participate in Stake4PIE?",
          data: "Upon starting of operations, the program start will be announced. Like staking in native token rewards but this staking will reward in USDT/USDC on daily basis.",
          isOpen: false,
        },
        {
          key: 5,
          title:
            "5. What are benefits of $EBM to the Community?",
            data: "Other than Buy4Less and Stake4PIE, we aim to boost growth of True DeFi blockchains like Bitcoin, Litecoin, Zilliqa, Ethereum Classic, Raven, Kaspa, Dodge, BlockDAG etc.",
            isOpen: false,
        },
        {
          key: 6,
          title: "6. What are $EBM presale security measures? ",
          data: "Tokens bought through presale are not transferable and tradable until listed for trading officially. Tokens allocated for our operations, marketing, teams and advisors are locked with linear vesting for periods from 2- 5 years.",
          isOpen: false,
        },
        {
            key: 7,
            title: "7. Maintaining $EBM value?",
            data: "We strongly advise Stake, HODL $EBM from day one for native token rewards and to reap benefits from Buy4Less and Stake4PIE programs.",
            isOpen: false,
          },
          {
            key: 8,
            title: "8. Has the project undergone any audits or security assessments?",
            data: "Yes, our smart contract audits can be verified here.",
            isOpen: false,
          },
      ]);
    
      const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
          if (accord.key === accordionkey) {
            return { ...accord, isOpen: !accord.isOpen };
          } else {
            return { ...accord, isOpen: false };
          }
        });
    
        setAccordion(updatedAccordions);
      };
  return (
    <div className=" tw-bg-white     tw-bg-no-repeat tw-w-full tw-bg-cover   tw-h-auto tw-py-20">
       
      <div className=" container">
      <div className='row tw-items-center'>
        <div className='col-lg-6 col-md-12'>
        <h2 className='tw-text-[#456DA7] '>  FAQS</h2>
        <h1 className=" tw-font-medium tw-text-4xl sm:tw-text-start tw-text-center  tw-text-[#456DA7]">Frenquently Questions</h1>
        <div className="  tw-mt-12">
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
        </div>
        <div className="col-lg-6 col-md-12  md:tw-pt-32 tw-pt-0 tw-relative">
            
            <div className="row">
              <div className="col-md-12  tw-mx-auto">
               <div className='row'>
                <div className='col-md-10 tw-mx-auto'>
                <img
                  src={require("../../assets/images/faq.png")}
                  className=" tw-w-full"
                />
                </div>
               </div>
              </div>
            </div>
           
          </div>
      </div>
      </div>
    </div>
  )
}

export default FAQ
