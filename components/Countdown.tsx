import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="relative min-w-[3rem] md:min-w-[4.5rem] flex justify-center">
        <span className="text-3xl md:text-5xl font-serif text-rose-900 font-medium drop-shadow-sm tabular-nums leading-none">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-rose-800 mt-2 font-sans-clean font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center py-4 px-6 md:px-10 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-xl animate-fade-in-up">
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <div className="h-8 w-[1px] bg-rose-400/40"></div>
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <div className="h-8 w-[1px] bg-rose-400/40"></div>
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <div className="h-8 w-[1px] bg-rose-400/40"></div>
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};

export default Countdown;