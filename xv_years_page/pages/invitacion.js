import StarAnimation from "@/components/common/StartAnimation";
import Countdown from "@/components/common/Countdown";
import BackgroundMusic from "@/components/common/BackgroundMusic";
import { Tangerine } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import Link from "next/link";
import { GiChurch } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { LuVenetianMask } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

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
    const photos = ["/0N1A0041.jpg", "/0N1A0152.jpg", "/0N1A0164.jpg", "/0N1A9977.jpg", "/0N1A0122.jpg", "/0N1A9988.jpg", "/0N1A0167.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [photos.length]);

    return (
        <div
            className="relative w-full overflow-hidden bg-white flex flex-col items-center justify-start">
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
                        src="/0N1A0167.jpg"
                        alt="Inicio"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-between p-4 sm:p-6 md:p-8">
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center">
                            <Countdown targetDate="2026-03-28T18:00:00" />
                        </div>
                        <p className={`text-2xl sm:text-xl md:text-2xl lg:text-4xl text-vic-1 ${tangerine.className}`}>
                            28 de marzo de 2026
                        </p>

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

            <div className="relative w-full h-screen overflow-hidden">

                <div
                    className="bg-white h-8/12 w-11/12 z-10 absolute inset-0 m-auto flex flex-col items-center justify-center p-2 sm:p-6 md:p-8 
                    shadow-xl rounded-lg">
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

            <div className="relative w-10/12 overflow-hidden bg-orange-950 py-24 sm:py-10 md:py-12 rounded-xl shadow-xl">
                <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                    <img
                        src="/Fondo_Vic_2.png"
                        alt="Inicio"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div
                    className=" w-11/12 z-10 gap-3 relative mx-auto flex flex-col items-center justify-center p-2 sm:p-6 md:p-8 ">
                    <p className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        En este día tan soñado,
                        acompañada del amor infinito de mis padres
                    </p>
                    <p className={`text-white text-5xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        Hector Rafael Hernandez
                    </p>
                    <p className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        y
                    </p>
                    <p className={`text-white text-5xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                        Maritza Maldonado
                    </p>
                    <p className={`text-white text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>

                        deseo compartir contigo la alegría de mis XV años.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-10 sm:py-10 md:py-12">
                <div
                    className="bg-white w-11/12 z-10 relative mx-auto flex flex-col items-start justify-center p-2 sm:p-6 md:p-8 
                    shadow-xl rounded-lg">
                    <div
                        className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-2">
                        <h1 className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-2 ${cormorantGaramond.className}`}>
                            Ubicaciones
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-1 border-b-2 border-vic-1">
                            <div className="flex items-center justify-center">
                                <GiChurch size={90} className="text-black" />
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
                                <FaGlassCheers size={90} className="text-black" />
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

            <div className="relative w-full overflow-hidden py-10 sm:py-10 md:py-12">
                <div
                    className="bg-white w-11/12 z-10 relative mx-auto flex flex-col items-start justify-center p-2 sm:p-6 md:p-8 
                    shadow-xl rounded-lg">
                    <div
                        className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-2">
                        <h1 className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-2 ${cormorantGaramond.className}`}>
                            Vestimenta
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-1 border-b-2 border-vic-1">
                            <div className="flex items-center justify-center">
                                <LuVenetianMask size={90} className="text-black" />
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 py-2 rounded gap-3">

                                <p className={`text-black text-5xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    Etiqueta:
                                </p>
                                <p className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    Formal.
                                </p>
                                <p className={`text-black text-3xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    Les pedimos amablemente no utilizar tonos rosa, azul marino ni plateado.
                                </p>
                            </div>
                            <div className="w-full h-auto flex items-center justify-center gap-6 py-2">
                                <FaTimes size={40} className="text-vic-1" />
                                <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-vic-1" />
                                <div className="w-10 h-10 rounded-full bg-blue-300 border-2 border-vic-1" />
                                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-vic-1" />
                                <FaTimes size={40} className="text-vic-1" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full overflow-hidden py-10 sm:py-10 md:py-12">
                <div
                    className="bg-white w-11/12 z-10 relative mx-auto flex flex-col items-start justify-center p-2 sm:p-6 md:p-8 
                    shadow-xl rounded-lg">
                    <div
                        className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-2">
                        <h1 className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-2 ${cormorantGaramond.className}`}>
                            Regalos
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-1 pb-3">
                            <div className="flex items-center justify-center">
                                <IoIosMail size={90} className="text-black" />
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 py-2 rounded gap-3">
                                <p className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                    Tu presencia en este día tan especial es el regalo más valioso.
                                    Pero si deseas acompañarlo con un detalle adicional,
                                    una lluvia de sobres será recibida con cariño y gratitud.
                                </p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-10 sm:py-10 md:py-12">
                <div
                    className="bg-white w-11/12 z-10 relative mx-auto flex flex-col items-start justify-center p-2 sm:p-6 md:p-8 
                    shadow-xl rounded-lg">
                    <div
                        className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-2">
                        <h1 className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-2 ${cormorantGaramond.className}`}>
                            ¿Nos acompañas en este día tan especial?
                        </h1>
                        <div className="flex flex-col items-center justify-center w-full gap-4 p-1">
                            <div className="flex items-center justify-center">
                                <FaHeartCircleCheck size={90} className="text-black" />
                            </div>
                            <div className="flex flex-col items-center justify-center px-4 py-2 rounded">

                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeW0S87RSbPgHxiHQ2eOEhY2jpCozWZzQX6LlsWCLMlWd71bg/viewform?usp=publish-editor"
                                    className={`group px-10 sm:px-5 sm:py-2.5 md:px-6 py-1 md:py-3 bg-vic-4 text-white sm:text-base md:text-lg lg:text-3xl xl:text-4xl 
                                    rounded-lg sm:rounded-xl mt-2 sm:mt-3 md:mt-4 ${cormorantGaramond.className} border border-vic-1 sm:border-2
                                    transform transition-all duration-300 ease-out hover:scale-110 hover:bg-vic-3 hover:text-black`}
                                >
                                    <p className={`text-white group-hover:text-black transition-colors duration-300 text-4xl text-center sm:text-base md:text-lg lg:text-3xl xl:text-4xl max-w-3xl ${tangerine.className}`}>
                                        Confirma Tu Asistencia
                                    </p>

                                </Link>
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-white w-11/12 z-10 relative mx-auto mb-8 flex flex-col items-start justify-center p-2 sm:p-6 md:p-8 
                    shadow-xl rounded-lg">
                <div className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-3">
                    <h1 className={`text-black text-4xl text-center sm:text-base md:text-lg lg:text-4xl xl:text-5xl max-w-3xl mb-2 ${cormorantGaramond.className}`}>
                        Momentos Especiales
                    </h1>
                    <div className="w-full h-10/12 sm:h-72 md:h-80 lg:h-96 z-10 relative mx-auto overflow-hidden rounded-lg bg-black/5">
                        <div
                            className="relative w-full h-full flex gap-2 transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(calc(${-currentPhotoIndex * 100}% - ${currentPhotoIndex * 8}px))`
                            }}
                        >
                            {photos.map((photo, index) => (
                                <div key={index} className="w-full h-full shrink-0 flex items-center justify-center">
                                    <img
                                        src={photo}
                                        alt={`Carrusel ${index}`}
                                        className="max-w-full max-h-full object-contain object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-2">
                        <Link
                            href="/galeria"
                            className={`group px-8 sm:px-6 py-2.5 bg-vic-4 text-white rounded-lg sm:rounded-xl ${cormorantGaramond.className} border border-vic-1 sm:border-2 transform transition-all duration-300 ease-out hover:scale-110 hover:bg-vic-3 hover:text-black`}
                        >
                            <p className={`text-white group-hover:text-black transition-colors duration-300 text-3xl sm:text-base md:text-lg lg:text-3xl xl:text-4xl text-center ${tangerine.className}`}>
                                Ver Galería Completa
                            </p>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}