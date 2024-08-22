import { useNavigate } from 'react-router-dom';
import styles from './Categorias.module.css';

const Categorias = () => {
    const navigate = useNavigate();

    const categories = [
        { name: 'Nena', img: 'https://assets.nicepagecdn.com/49098a58/6286548/images/nene-1.jpg' },
        { name: 'Nene', img: 'https://assets.nicepagecdn.com/49098a58/6286548/images/nene2.jpg' },
        { name: 'Bebé Nena', img: 'https://assets.nicepagecdn.com/49098a58/6286548/images/bebenena.png' },
        { name: 'Bebé Nene', img: 'https://assets.nicepagecdn.com/49098a58/6286548/images/bebenene.png' },
    ];

    const handleCategoryClick = () => {
        navigate('/bebes');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¡Conocé nuestras categorías!</h1>
            <div className={styles.categories}>
                {categories.slice(0, 2).map((category, index) => (
                    <div key={index} className={styles.category} onClick={handleCategoryClick}>
                        <div className={styles.imageContainer}>
                            <img src={category.img} alt={category.name} className={styles.image} />
                            <p className={styles.categoryName}>{category.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.categories}>
                {categories.slice(2, 4).map((category, index) => (
                    <div key={index} className={styles.category} onClick={handleCategoryClick}>
                        <div className={styles.imageContainer}>
                            <img src={category.img} alt={category.name} className={styles.image} />
                            <p className={styles.categoryName}>{category.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categorias;
