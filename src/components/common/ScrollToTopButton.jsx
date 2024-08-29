import { useState, useEffect } from 'react';
import './ScrollTopButton.css'; // Asegúrate de que este archivo esté actualizado

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    // Maneja la visibilidad del botón basado en el desplazamiento
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpieza del evento al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Maneja el clic en el botón para desplazarse hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`scroll-to-top ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
