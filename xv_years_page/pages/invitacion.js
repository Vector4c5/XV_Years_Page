import StarAnimation from "@/components/common/StartAnimation";
import Countdown from "@/components/common/Countdown";
import BackgroundMusic from "@/components/common/BackgroundMusic";
import { Tangerine } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import Link from "next/link";
import { GiChurch } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { useState, useEffect } from "react";

const tangerine = Tangerine({
    subsets: ['latin'],
    weight: ['400'],
})

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['600'],
})

export default function Invitacion() {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const photos = ["/Foto_1.png", "/Foto_2.png", "/Foto_3.png", "/Foto_1.png"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (photos.length - 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden bg-white"
        >
            <BackgroundMusic audioSrc="/Musica_1_Ed_Sheran.mp3" initialVolume={0.2} />
            <div className="inset-0 z-0 w-full h-screen fixed pointer-events-none">
                <img
                    src="/Tapiz_1.png"
                    alt="Inicio"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>



            <div className="relative w-full h-screen overflow-hidden border-b-2 border-vic-6 bg-vic-6">
                <div className="z-0 opacity-30">
                    <StarAnimation />
                </div>
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
                        <h2 className={`text-5xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-9xl text-center font-bold text-white border-b-2 border-white ${tangerine.className}`}>
                            Una nueva etapa comienza, y quiero compartirla contigo
                        </h2>
                        <p className={`text-white text-3xl sm:text-base md:text-lg lg:text-3xl xl:text-4xl text-center mt-4 max-w-3xl ${tangerine.className}`}>
                            Aylin Maritza Hernandez Maldonado
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-screen overflow-hidden border-b-2 border-vic-6">

                <div
                    className="bg-white h-8/12 w-11/12 z-10 absolute inset-0 m-auto flex flex-col items-center justify-center p-2 sm:p-6 md:p-8 
                    shadow-2xl rounded-lg">
                    <div
                        className="flex flex-col items-center justify-center w-full h-full border-2 border-amber-300 py-2 px-4">
                        <img
                            src="/Corona.png"
                            alt="Inicio"
                            className="w-64 h-auto"
                        />
                        <p className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                            Hoy mi vida florece en quince primaveras,
                        </p>
                        <p className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                            guiada por el amor de mi familia
                            y acompañada por quienes han sido parte de mi historia.
                        </p>
                        <p className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                            Con alegría, te invito a celebrar este momento conmigo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden bg-vic-3 py-10 sm:py-10 md:py-12 border-b-2 border-vic-6">
                <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                    <img
                        src="/Fondo_Vic_2.png"
                        alt="Inicio"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div
                    className=" w-11/12 z-10 relative mx-auto flex flex-col items-center justify-center p-2 sm:p-6 md:p-8 ">
                    <h1 className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-4 ${cormorantGaramond.className}`}>
                        Mis padres
                    </h1>
                    <p className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        Hector Rafael Hernandez
                    </p>
                    <p className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        y
                    </p>
                    <p className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        Maritza Maldonado
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-10 sm:py-10 md:py-12 border-b-2 border-vic-6">
                <div
                    className="bg-white w-11/12 z-10 relative mx-auto flex flex-col items-start justify-center p-2 sm:p-6 md:p-8 
                    shadow-2xl rounded-lg">
                    <div
                        className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-2">
                        <h1 className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-2 ${cormorantGaramond.className}`}>
                            Ubicaciones
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-1 border-b-2 border-vic-1">
                            <div className="flex items-center justify-center">
                                <GiChurch size={90} />
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 py-2 rounded">
                                <h1 className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${cormorantGaramond.className}`}>
                                    Ceremonia Religiosa
                                </h1>
                                <p className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                   6:00 PM
                                </p>
                                <p className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    Parroquia San Marcos Evangelista
                                </p>
                                <p className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    Ave. 5 y, Vicente Guerrero, Centro, 33620 Saucillo, Chih.
                                </p>
                                
                                <Link
                                    href="https://maps.app.goo.gl/sfFrAUgeguQ1roia6?g_st=aw"
                                    className={`px-10 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-vic-4 text-white text-xl sm:text-base md:text-lg lg:text-3xl xl:text-4xl 
                                    rounded-lg sm:rounded-xl mt-2 sm:mt-3 md:mt-4 ${cormorantGaramond.className} border border-vic-1 sm:border-2
                                    transform transition-all duration-300 ease-out hover:scale-110 hover:bg-vic-4 hover:text-black`}
                                >
                                    Ir Al Mapa
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-1 pt-5 border-b-2 border-vic-1">
                            <div className="flex items-center justify-center">
                                <FaGlassCheers size={90} />
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 py-2 rounded">
                                <h1 className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${cormorantGaramond.className}`}>
                                    Recepcion
                                </h1>
                                <p className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                   8:00 PM
                                </p>
                                <p className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    El Muelle de San Blas
                                </p>
                                <p className={`text-black text-2xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                   2PW2+V5 Piedra de Lumbre, Chihuahua
                                </p>
                                
                                <Link
                                    href="https://maps.app.goo.gl/bzAbxvpq67meRcKYA?g_st=aw"
                                    className={`px-10 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-vic-4 text-white text-xl sm:text-base md:text-lg lg:text-3xl xl:text-4xl 
                                    rounded-lg sm:rounded-xl mt-2 sm:mt-3 md:mt-4 ${cormorantGaramond.className} border border-vic-1 sm:border-2
                                    transform transition-all duration-300 ease-out hover:scale-110 hover:bg-vic-4 hover:text-black`}
                                >
                                    Ir Al Mapa
                                </Link>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="relative w-full overflow-hidden py-10 sm:py-10 md:py-12 border-b-2 border-vic-6">
                <div className="w-11/12 z-10 relative mx-auto h-56 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-2xl">
                    <div className="relative w-full h-full flex">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Carrusel ${index}`}
                                className="w-full h-full object-cover flex-shrink-0 transition-transform duration-1000 ease-in-out"
                                style={{
                                    transform: `translateX(calc(${-currentPhotoIndex * 100}%))`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}