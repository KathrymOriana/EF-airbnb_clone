import type { Place } from "../../shared/types/place.types";

interface DestinationCardProps {
    place: Place;
}

const DestinationCard = ({ place }: DestinationCardProps) => {
    return (
        <article className="listing-card">
            <div className="listing-card__image-wrapper">
                <img src={place.images[0]} alt={place.title} className="listing-card__image" />
                {place.isFavorite && (
                    <div className="listing-card__badge">Favorito entre huéspedes</div>
                )}
                <button className="listing-card__like">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                        role="presentation" focusable="false" className="listing-card__icon">
                        <path
                            d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z">
                        </path>
                    </svg>
                </button>
            </div>
            <h3 className="listing-card__title">{place.title}</h3>
            <p className="listing-card__info">
                S/{place.pricePerNight * place.nights} por {place.nights} noches • ★{" "} {place.rating}
            </p>
        </article>
    );
}

export default DestinationCard;