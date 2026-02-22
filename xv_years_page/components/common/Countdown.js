import { useState, useEffect } from "react";
import { Tangerine } from 'next/font/google'

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400'],
})

const CountdownUnit = ({ value, label }) => (
    <div className="flex flex-col items-center sm:gap-2">
        <p className={`text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-vic-2 leading-none ${tangerine.className}`}>
            {String(value).padStart(2, '0')}
        </p>
        <p className={`text-2xl sm:text-xl md:text-2xl lg:text-4xl text-vic-1 ${tangerine.className}`}>
            {label}
        </p>
    </div>
);

export default function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 items-start justify-center">
            <CountdownUnit value={timeLeft.days} label="Días" />
            <span className={`text-6xl  sm:text-5xl md:text-6xl lg:text-8xl text-vic-2 leading-none ${tangerine.className}`}>
                :
                </span>
            <CountdownUnit value={timeLeft.hours} label="Horas" />
            <span className={`text-6xl sm:text-5xl md:text-6xl lg:text-8xl text-vic-2 leading-none ${tangerine.className}`}>
                :
                </span>
            <CountdownUnit value={timeLeft.minutes} label="Minutos" />
            <span className={`text-6xl sm:text-5xl md:text-6xl lg:text-8xl text-vic-2 leading-none ${tangerine.className}`}>
                :
                </span>
            <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>
    );
}
