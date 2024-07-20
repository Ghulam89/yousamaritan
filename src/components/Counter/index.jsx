import React, { useState, useEffect } from 'react';

const Counter = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center ">
        <div className="tw-text-center tw-bg-button-gradient tw-rounded-lg  tw-w-24 tw-h-24 tw-flex tw-justify-center tw-items-center ">
        <div>
        <span className="tw-text-white tw-m-0 tw-font-poppins  tw-font-medium sm:tw-text-[17.15px] text-14.15px tw-leading-3">Days</span>
          <p className="tw-m-0 tw-text-white   tw-pt-1.5 tw-font-zen-dots  tw-font-bold sm:tw-text-[20px] tw-text-[18px] tw-leading-5">
            {String(timeLeft.days).padStart(2, '0')}
          </p>
        </div>
        </div>
        <div className="tw-text-center tw-bg-button-gradient tw-rounded-lg  tw-w-24 tw-flex tw-justify-center tw-items-center tw-h-24">
          <div>
          <span className="tw-text-white tw-m-0 tw-font-poppins tw-font-medium sm:tw-text-[17.15px] text-14.15px tw-leading-3">Hours</span>
          <p className="tw-m-0 tw-text-white  tw-pt-1.5 tw-font-zen-dots tw-font-bold sm:tw-text-[20px] tw-text-[18px] tw-leading-5">
            {String(timeLeft.hours).padStart(2, '0')}
          </p>
          </div>
        </div>
        <div className="tw-text-center tw-bg-button-gradient tw-rounded-lg  tw-w-24 tw-flex tw-justify-center tw-items-center tw-h-24">
        <div>
        <span className="tw-text-white tw-m-0  tw-font-poppins tw-font-medium  sm:tw-text-[17.15px] text-14.15px tw-leading-3">Minutes</span>
          <p className="tw-m-0 tw-text-white   tw-font-zen-dots tw-font-bold  sm:tw-text-[20px] tw-text-[18px] tw-leading-5">
            {String(timeLeft.minutes).padStart(2, '0')}
          </p>
        </div>
        </div>
        <div className="tw-text-center tw-bg-button-gradient tw-rounded-lg  tw-w-24 tw-flex tw-justify-center tw-items-center tw-h-24">
          <div>
          <span className="tw-text-white tw-m-0 tw-font-poppins  tw-font-medium sm:tw-text-[17.15px] text-14.15px tw-leading-3">Seconds</span>
          <p className="tw-m-0 tw-text-white    tw-font-zen-dots tw-font-bold sm:tw-text-[20px] tw-text-[18px] tw-leading-5">
            {String(timeLeft.seconds).padStart(2, '0')}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
