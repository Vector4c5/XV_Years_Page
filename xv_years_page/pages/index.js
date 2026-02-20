import StarAnimation from "@/components/common/StartAnimation";


export default function Home() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-start bg-black"
    >
      <StarAnimation />
        <div className="fixed inset-0 z-0 w-full h-full">
            <img
              src="/fondo_tapiz_2.png"
              alt="Inicio"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="w-3/4 h-auto z-10 inset-0 flex items-center justify-start flex-col p-10">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Mis XV Años
              </h1>
            </div>
            <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden bg-black">
              <img
                src="/Foto_1.png"
                alt="Logo"
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            <div
            className="w-3/4 h-44 bg-blue-600 my-2">
              <h1
              className="text-white">
                Mensaje Bonito
              </h1>
              
            </div>

            <div 
            className="w-3/4 h-44 bg-amber-600 my-2">       
              <h1
              className="text-white">
                contador
              </h1>
            </div>

            <div 
            className="w-3/4 h-44 bg-yellow-600 my-2">       
              <h1
              className="text-white">
                Palabras que alienten a venir
              </h1>
            </div>

            <div 
            className="w-3/4 h-44 bg-pink-600 my-2">       
              <h1
              className="text-white">
                Informacion del lugar, fecha y hora
              </h1>
            </div>

            <div 
            className="w-3/4 h-44 bg-red-600 my-2">       
              <h1
              className="text-white">
               Fotos
              </h1>
            </div>

             <div 
            className="w-3/4 h-44 bg-orange-600 my-2">       
              <h1
              className="text-white">
               Confirmacion de invitacion
              </h1>
            </div>
          </div>

    </div>
  );
}
