import React from 'react';
import styles from './PublicidadSlider.module.css';

const PublicidadSlider = () => {
    const images = [
        'https://dummyimage.com/200x100/000/fff&text=Marca+1',
        'https://dummyimage.com/200x100/000/fff&text=Marca+2',
        'https://dummyimage.com/200x100/000/fff&text=Marca+3',
        'https://dummyimage.com/200x100/000/fff&text=Marca+4',
        'https://dummyimage.com/200x100/000/fff&text=Marca+5',
        'https://dummyimage.com/200x100/000/fff&text=Marca+6',
        'https://dummyimage.com/200x100/000/fff&text=Marca+7',
    ];

    return (
        <div className={styles.slider}>
            <div className={styles.slideTrack}>
                {images.concat(images).map((img, index) => (
                    <div className={styles.slide} key={index}>
                        <img src={img} alt={`Publicidad ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PublicidadSlider;
