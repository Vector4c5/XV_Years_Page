import StarAnimation from "@/components/common/StartAnimation";
import Countdown from "@/components/common/Countdown";
import BackgroundMusic from "@/components/common/BackgroundMusic";
import { Tangerine } from 'next/font/google'
import Link from "next/link";

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400'],
})

export default function invitacion() {

    return (
        <div
            className="w-full overflow-hidden bg-vic-6"
        >
            <div className="z-0 opacity-30">
                <StarAnimation />
            </div>
           <BackgroundMusic audioSrc="/Musica_1_Ed_Sheran.mp3" initialVolume={0.2} />
           


            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0 z-0 w-full h-full">
                    <img
                        src="/Foto_4.png"
                        alt="Inicio"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-between p-4 sm:p-6 md:p-8">
                    <div className="flex items-center justify-center">
                        <Countdown targetDate="2026-03-28T18:00:00" />
                    </div>
                    <div className="flex flex-col items-center justify-center pb-8">
                        <h2 className={`text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-bold text-white border-b-2 border-white ${tangerine.className}`}>
                            Una nueva etapa comienza, y quiero compartirla contigo
                        </h2>
                        <p className={`text-white text-3xl sm:text-base md:text-lg lg:text-2xl text-center mt-4 max-w-3xl ${tangerine.className}`}>
                            Aylin Maritza Hernandez Maldonado
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0 z-0 w-full h-full">
                    <img
                        src="/Foto_1.png"
                        alt="Inicio"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
            </div>
        </div>
    );
}