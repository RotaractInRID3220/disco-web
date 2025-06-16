'use client'
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDateTime }) => {
  // Only calculate initial value on the client to avoid hydration mismatch
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTimeLeft(getCountdown(targetDateTime));
    setHydrated(true);

    const timer = setInterval(() => {
      setTimeLeft(getCountdown(targetDateTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateTime]);

  function getCountdown(targetDateTime) {
    const now = new Date();
    const target = new Date(targetDateTime);
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  // Only render countdown after hydration to avoid SSR mismatch
  if (!hydrated) {
    return (
      <div className="">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max font-bebas">
          <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
            <span className="countdown text-6xl">
              <span suppressHydrationWarning>0</span>
            </span>
            days
          </div>
          <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
            <span className="countdown text-6xl">
              <span suppressHydrationWarning>0</span>
            </span>
            hours
          </div>
          <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
            <span className="countdown text-6xl">
              <span suppressHydrationWarning>0</span>
            </span>
            min
          </div>
          <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
            <span className="countdown text-6xl">
              <span suppressHydrationWarning>0</span>
            </span>
            sec
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max font-bebas">
        <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
          <span className="countdown text-6xl">
            <span suppressHydrationWarning>{timeLeft.days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
          <span className="countdown text-6xl">
            <span suppressHydrationWarning>{timeLeft.hours}</span>
          </span>
          hours
        </div>
        <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
          <span className="countdown text-6xl">
            <span suppressHydrationWarning>{timeLeft.minutes}</span>
          </span>
          min
        </div>
        <div className="flex flex-col w-20 h-24 bg-white rounded-lg text-blackD leading-none justify-center items-center">
          <span className="countdown text-6xl">
            <span suppressHydrationWarning>{timeLeft.seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;