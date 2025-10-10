const SearchHeader = () => {
    return (
        <>
            <div className="header__search o-container o-container--margin">
                <div className="search-bar__item" data-modal="destinos">
                    <span className="search-bar__label">Dónde</span>
                    <div className="search-bar__item--hidden">
                        <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240" className="search-item__icon" alt="" />
                        <span className="search-bar__label--hidden">En cualquier lugar del mundo</span>
                    </div>
                    <input className="search-bar__value search-bar__value--input" placeholder="Explora destinos" />
                </div>
                <hr className="search-bar__division" />
                <div className="search-bar__item" data-modal="checkin">
                    <span className="search-bar__label">Check-in</span>
                    <span className="search-bar__value">Agrega fecha</span>
                </div>
                <hr className="search-bar__division" />
                <div className="search-bar__item" data-modal="checkout">
                    <span className="search-bar__label">Check-out</span>
                    <span className="search-bar__label--hidden">Cualquier fecha</span>
                    <span className="search-bar__value">Agrega fecha</span>
                </div>
                <hr className="search-bar__division" />
                <div className="search-bar__item search-bar__item--button" data-modal="huespedes">
                    <div className="search-bar__text">
                        <span className="search-bar__label">Quién</span>
                        <span className="search-bar__label--hidden">¿Cuántos?</span>
                        <span className="search-bar__value">¿Cuántos?</span>
                    </div>
                    <button className="search-bar__button">
                        <svg className="search-bar__icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20.666 20.666 10 10"></path>
                            <path
                                d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z"
                                fill="none"></path>
                        </svg>
                    </button>
                </div>
                <div className="search-bar__item search-bar__item--button-hidden" data-modal="huespedes">
                    <span className="search-bar__label">Empieza la búsqueda...</span>
                    <button className="search-bar__button">
                        <svg className="search-bar__icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20.666 20.666 10 10"></path>
                            <path
                                d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z"
                                fill="none"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchHeader;