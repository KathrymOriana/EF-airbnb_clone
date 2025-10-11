interface GalleryPlaceProps {
    images: string[];
}

const GalleryPlace = ({ images }: GalleryPlaceProps) => {
    return (
        <section className="c-gallery">
            <div className="c-gallery__item c-gallery__item--main">
                <img src={images[0]} alt="Vista principal del loft" className="c-gallery__image" />
                <button className="c-gallery__button">
                    <i className="fas fa-th"></i>
                    <span>Mostrar todas las fotos</span>
                </button>
            </div>
            {images.slice(1, 5).map((img, index) => (
                <div key={index} className="c-gallery__item">
                    <img src={img} alt={`Imagen ${index + 2}`} className="c-gallery__image" />
                </div>
            ))}
        </section>
    );
}

export default GalleryPlace;