import { DESTINATIONS } from "../../data/destinations.data";
import DestinationCard from "../components/DestinationCard";

const DestinationListing = () => {
    return ( 
        <section className="listing-sections">
            {DESTINATIONS.map((section) => (
                <div key={section.id} className="listing-section o-container">
                    <div className="listing-section__header">
                        <h2 className="listing-section__title">
                            <a href="#">{section.subtitle} {section.city} ›</a>
                        </h2>
                        <div className="listing-section__arrows">
                            <button className="listing-section__arrow listing-section__arrow--left" aria-label="Ver destinos anteriores">
                                <span data-button-content="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: 4, overflow: "visible" }}>
                                        <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                                    </svg></span>
                            </button>
                            <button className="listing-section__arrow listing-section__arrow--right" aria-label="Ver más destinos">
                                <span data-button-content="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                                        role="presentation" focusable="false"
                                        style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: 4, overflow: "visible" }}>
                                        <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <ul className="listing-section__carousel">
                        {section.places.map((place) => (
                            <li key={place.id}>
                                <DestinationCard place={place} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
 
export default DestinationListing;