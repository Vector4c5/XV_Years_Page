import StarAnimation from "@/components/common/StartAnimation";
import BackgroundMusic from "@/components/common/BackgroundMusic";
import { Tangerine } from 'next/font/google'
import Link from "next/link";

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400'],
})


export default function Home() {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center bg-vic-6"
    >
      <StarAnimation />
      <BackgroundMusic audioSrc="/Musica_1_Ed_Sheran.mp3" initialVolume={0.2} />
      <div className="fixed inset-0 z-0 w-full h-full">
        <img
          src="/Fondo_Vic_4.png"
          alt="Inicio"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div
        className="relative flex flex-col items-center justify-center w-11/12 sm:w-3/4 h-auto sm:h-11/12 bg-vic-2 border-2 sm:border-3 md:border-4 border-vic-3 rounded-lg sm:rounded-2xl md:rounded-3xl z-20 m-1 sm:m-2 p-2 sm:p-4">
        <img
          src="/Fondo_Vic_2.png"
          alt="Inicio"
          className="w-full h-full object-cover opacity-10 absolute"
        />
        <div className="w-full h-full z-10 inset-0 flex items-center justify-start flex-col p-4 sm:p-6 md:p-10">
          <div className="flex flex-col w-full items-center gap-3 justify-center">
            <div>
              <h1 className={`text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-bold text-vic-1 ${tangerine.className}`}>
                Acompáñame en este día tan especial
              </h1>
            </div>
            <div className="w-3/4 h-auto sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-auto border-2 sm:border-3 md:border-4 border-vic-5 overflow-hidden bg-vic-1">
              <img
                src="/0N1A0048.jpg"
                alt="Foto_De_XV"
                className="w-full h-full object-cover object-center scale-200"
              />
            </div>
            <div
              className="flex flex-col items-center justify-start h-auto w-full sm:w-3/4 gap-2">
              <p className={`text-vic-1 text-bold text-3xl sm:text-xl md:text-3xl lg:text-5xl text-center border-b-2 border-vic-4
                 ${tangerine.className}`}>
                Aylin Maritza Hernandez Maldonado
              </p>
              <p className={`text-vic-1 text-3xl sm:text-xl md:text-3xl lg:text-5xl text-bold text-center ${tangerine.className}`}>
                Celebremos juntos este momento inolvidable
              </p>
            </div>
            <Link
              href="/invitacion"
              className={`px-5 py-1 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-vic-3 text-white text-3xl sm:text-base md:text-lg lg:text-2xl 
                rounded-lg sm:rounded-xl mt-2 sm:mt-3 md:mt-4 ${tangerine.className} border border-vic-1 sm:border-2
                transform transition-all duration-300 ease-out hover:scale-110 hover:bg-vic-4 hover:text-black`}
            >
              Abrir Invitación
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}