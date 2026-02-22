import { useState, useRef, useEffect } from 'react';

export default function BackgroundMusic({ audioSrc, initialVolume = 0.5 }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(initialVolume);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Establecer el volumen inicial
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, []);

    useEffect(() => {
        // Actualizar el volumen cuando cambia
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        // Intentar reproducir automáticamente cuando el componente se monta
        const playAudio = async () => {
            try {
                if (audioRef.current) {
                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (error) {
                // Los navegadores bloquean autoplay, el usuario necesita interactuar primero
                console.log('Autoplay bloqueado. El usuario debe hacer clic en play.');
            }
        };
        
        playAudio();
    }, []);

    const togglePlay = async () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.error('Error al reproducir:', error);
                }
            }
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
            <audio
                ref={audioRef}
                loop
                preload="auto"
            >
                <source src={audioSrc} type="audio/mpeg" />
                Tu navegador no soporta audio.
            </audio>
            
            {/* Slider de volumen */}
            {showVolumeSlider && (
                <div className="bg-vic-3 rounded-lg p-3 shadow-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vic-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={(e) => setVolume(e.target.value / 100)}
                        className="w-24 h-2 bg-vic-2 rounded-lg appearance-none cursor-pointer accent-vic-4"
                    />
                    <span className="text-vic-1 text-xs font-bold min-w-8">{Math.round(volume * 100)}%</span>
                </div>
            )}

            {/* Botones de control */}
            <div className="flex gap-2">
                {/* Botón de volumen */}
                <button
                    onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                    className="bg-vic-3 hover:bg-vic-4 text-vic-1 rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Control de volumen"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>

                {/* Botón de play/pause */}
                <button
                    onClick={togglePlay}
                    className="bg-vic-3 hover:bg-vic-4 text-vic-1 rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
                >
                    {isPlaying ? (
                        // Icono de pausa
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                    ) : (
                        // Icono de play
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
