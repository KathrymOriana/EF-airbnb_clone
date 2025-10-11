import { useState } from "react";

interface PlaceAmenitiesProps {
  amenities: string[];
}

export const PlaceAmenities = ({ amenities }: PlaceAmenitiesProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleAmenities = showAll ? amenities : amenities.slice(0, 4);
  const hasMore = amenities.length > 4;

  return (
    <section className="c-amenities">
      <h2 className="c-amenities__title">Lo que este lugar ofrece</h2>
      <ul className="c-amenities__list">
        {visibleAmenities.map((amenity, index) => (
          <li
            key={index}
            className="c-amenities__item"
            dangerouslySetInnerHTML={{ __html: amenity }}
          />
        ))}
      </ul>

      {hasMore && (
        <button
          className="c-amenities__button"
          onClick={() => setShowAll(!showAll)}
        >
          <i className="fas fa-th"></i>
          <span>{showAll ? "Mostrar menos" : "Mostrar más"}</span>
        </button>
      )}
    </section>
  );
};
