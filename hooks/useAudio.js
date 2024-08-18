// `hooks/useAudio.js`
import { useEffect } from 'react';

const useAudio = (url) => {
    useEffect(() => {
        const audio = new Audio(url);
        audio.volume=0.3;
        const playAudio = () => {
            audio.play().catch(error => console.error('Error playing audio:', error));
        };

        const handleUserInteraction = () => {
            playAudio();
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };

        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('touchstart', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [url]);
};

export default useAudio;