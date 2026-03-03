import BackgroundMusic from "@/components/common/BackgroundMusic";
import { Tangerine } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { useMemo, useState } from "react";

const tangerine = Tangerine({
	subsets: ["latin"],
	weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Galeria() {
	const [selectedPhoto, setSelectedPhoto] = useState(null);
	const photos = useMemo(
		() => [
			"/0N1A0005.jpg",
			"/0N1A0006.jpg",
			"/0N1A0009.jpg",
			"/0N1A0019.jpg",
			"/0N1A0021.jpg",
			"/0N1A0026.jpg",
			"/0N1A0028.jpg",
			"/0N1A0041.jpg",
			"/0N1A0047.jpg",
			"/0N1A0048.jpg",
			"/0N1A0053.jpg",
			"/0N1A0062.jpg",
			"/0N1A0068.jpg",
			"/0N1A0072.jpg",
			"/0N1A0073.jpg",
			"/0N1A0077.jpg",
			"/0N1A0081.jpg",
			"/0N1A0082.jpg",
			"/0N1A0086.jpg",
			"/0N1A0090.jpg",
			"/0N1A0094.jpg",
			"/0N1A0097.jpg",
			"/0N1A0098.jpg",
			"/0N1A0099.jpg",
			"/0N1A0106.jpg",
			"/0N1A0119.jpg",
			"/0N1A0122.jpg",
			"/0N1A0126.jpg",
			"/0N1A0132.jpg",
			"/0N1A0149.jpg",
			"/0N1A0152.jpg",
			"/0N1A0154.jpg",
			"/0N1A0161.jpg",
			"/0N1A0163.jpg",
			"/0N1A0164.jpg",
			"/0N1A0166.jpg",
			"/0N1A0167.jpg",
			"/0N1A0169.jpg",
			"/0N1A0170.jpg",
			"/0N1A0177.jpg",
			"/0N1A0180.jpg",
			"/0N1A0181.jpg",
			"/0N1A0183.jpg",
			"/0N1A0186.jpg",
			"/0N1A0188.jpg",
			"/0N1A0201.jpg",
			"/0N1A0207.jpg",
			"/0N1A9974.jpg",
			"/0N1A9977.jpg",
			"/0N1A9980.jpg",
			"/0N1A9986.jpg",
			"/0N1A9988.jpg",
			"/0N1A9989.jpg",
			"/0N1A9992.jpg",
			"/0N1A9996.jpg",
		],
		[]
	);

	const mixedPhotos = useMemo(() => {
		const orderedPhotos = [];
		let leftIndex = 0;
		let rightIndex = photos.length - 1;

		while (leftIndex <= rightIndex) {
			orderedPhotos.push(photos[leftIndex]);
			if (leftIndex !== rightIndex) {
				orderedPhotos.push(photos[rightIndex]);
			}
			leftIndex += 1;
			rightIndex -= 1;
		}

		return orderedPhotos;
	}, [photos]);

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-start py-10">
			<BackgroundMusic audioSrc="/Musica_1_Ed_Sheran.mp3" initialVolume={0.2} />

			<div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
				<img
					src="/Fondo_Vic_4.png"
					alt="Fondo"
					className="w-full h-full object-cover opacity-40"
				/>
			</div>

			<div className="w-11/12 z-10 relative mx-auto bg-white shadow-2xl rounded-lg p-3 sm:p-4 md:p-6 border-2 border-vic-1">
            <div  className="flex flex-col items-center justify-start w-full h-auto border-2 border-amber-300 px-4 py-4 gap-2"> 
                <h1 className={`text-black text-5xl text-center sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl ${cormorantGaramond.className}`}>
					Galería
				</h1>
                <div className="w-full flex items-center justify-center">
					<Link
						href="/invitacion"
						className={`group px-8 sm:px-6 py-2 bg-vic-4 text-white rounded-lg sm:rounded-xl ${cormorantGaramond.className} border border-vic-1 sm:border-2 transform transition-all duration-300 ease-out hover:scale-110 hover:bg-vic-3 hover:text-black`}
					>
						<p className={`text-white group-hover:text-black transition-colors duration-300 text-4xl sm:text-base md:text-lg lg:text-3xl xl:text-4xl text-center ${tangerine.className}`}>
							Volver a Invitación
						</p>
					</Link>
				</div>

				<div className="columns-2 md:columns-3 gap-3 sm:gap-4">
					{mixedPhotos.map((photo, index) => (
						<button
							key={`${photo}-${index}`}
							type="button"
							onClick={() => setSelectedPhoto(photo)}
							className="mb-3 sm:mb-4 block w-full rounded-lg overflow-hidden border-2 border-vic-4 bg-white hover:scale-[1.02] transition-transform duration-300 break-inside-avoid"
						>
							<img
								src={photo}
								alt={`Foto ${index + 1}`}
								className="w-full h-auto object-contain"
							/>
						</button>
					))}
				</div>

            </div>
				

				
			</div>

			{selectedPhoto && (
				<div
					className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
					onClick={() => setSelectedPhoto(null)}
				>
					<button
						type="button"
						aria-label="Cerrar imagen"
						className="absolute top-4 right-4 text-white"
						onClick={() => setSelectedPhoto(null)}
					>
						<FaTimes size={34} />
					</button>
					<img
						src={selectedPhoto}
						alt="Foto ampliada"
						className="max-w-full max-h-[85vh] object-contain rounded-lg"
						onClick={(event) => event.stopPropagation()}
					/>
				</div>
			)}
		</div>
	);
}
