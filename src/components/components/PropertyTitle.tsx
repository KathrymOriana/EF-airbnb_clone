interface PropertyTitleProps {
  title: string;
}

const PropertyTitle = ({ title }: PropertyTitleProps) => {
    return ( 
        <section className="c-property-title">
          <h1 className="c-property-title__heading">{title}</h1>
          <div className="c-property-title__actions">
            <div className="c-property-title__buttons">
              <button className="c-property-title__button">
                <i className="fas fa-arrow-up-from-bracket"></i>
                <span>Compartir</span>
              </button>
              <button className="c-property-title__button">
                <i className="far fa-heart"></i>
                <span>Guardar</span>
              </button>
            </div>
          </div>
        </section>
     );
}
 
export default PropertyTitle;
