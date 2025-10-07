import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalLanguageProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalLanguage = ({ isOpen, onClose }: ModalLanguageProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className="modal__overlay" 
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <motion.div className="modal modal--language"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <div className="modal__header">
                            <button onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="modal__section-title">
                                <h3 className="modal__title">Idiomas y región</h3>
                            </div>
                        </div>
                        <hr className="modal__divider" />
                        <div className="modal__content">
                            <div className="modal__section modal__section--traduction">
                                <h3 className="modal__subtitle modal__subtitle--info">
                                    Traducción
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 1792 1792">
                                        <path fill="currentColor"
                                            d="M891 689q-6-87-66-144q-30-27-50-37.5T715 488q1-5 4.5-26t6.5-35l-91-12l-10 50q-79-14-136 3V354q151-6 306-23l-14-94q-126 21-286 29q2-30 6-49t6-37q-5 0-36-.5t-53-.5q-2 18-5.5 40t-5.5 51l-154 3l14 94l120-6l5 137q-100 50-150.5 114T191 781q0 64 30 97t75 33.5t94-17t89-49.5l18 36l72-46l-21-43q34-34 54-56.5t50.5-71.5T700 562q60 17 82 43t19 86q-48 10-80 48t-32 88v25q-37 10-81 13l46 73q5-1 35-6v68H179q-31 0-53-22.5T104 924V179q0-31 22-53t53-22h745q31 0 53.5 22t22.5 53v510H891zm212 0V138q0-57-41-97.5T965 0H138Q81 0 40.5 40.5T0 138v827q0 56 40.5 97t97.5 41h551v551q0 57 41 97.5t97 40.5h827q57 0 97.5-40.5t40.5-97.5V827q0-56-40.5-97t-97.5-41h-551zM401 584q10 120 32 181q-17 16-40.5 31T343 821t-44-1.5t-18-47.5q0-60 33-111t87-77zm90-33q54-26 119-7q-7 25-19.5 47.5t-22.5 35t-28 34.5l-27 33q-5-13-9-26t-6-21t-3.5-24t-2-20.5t-1-26t-.5-25.5zm504 1069H863l310-758h135l310 758h-132l-89-218h-312zm246-599l-116 281h231z" />
                                    </svg>
                                </h3>
                                <p className="modal__text">Traducir automáticamente las descripciones y las reseñas al Español.</p>
                            </div>
                            <div className="modal__section">
                                <h3 className="modal__subtitle">Idiomas y regiones sugeridos</h3>
                                <div className="modal__grid">
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Latinoamérica</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">México</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">España</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">United States</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">United Kingdom</small>
                                    </button>
                                </div>
                            </div>
                            <div className="modal__section">
                                <h3 className="modal__subtitle">Elige un idioma y una región</h3>
                                <div className="modal__grid">
                                    <button className="modal__language-group modal__language-group--active">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Perú</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Azərbaycan dili</h4>
                                        <small className="modal__language-option">Azərbaycan</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Bahasa Indonesia</h4>
                                        <small className="modal__language-option">Indonesia</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Bosanski</h4>
                                        <small className="modal__language-option">Bosna i Hercegovina</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Català</h4>
                                        <small className="modal__language-option">Espanya</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Čeština</h4>
                                        <small className="modal__language-option">Česká republika</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Crnogorski</h4>
                                        <small className="modal__language-option">Crna Gora</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Dansk</h4>
                                        <small className="modal__language-option">Danmark</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Deutsch</h4>
                                        <small className="modal__language-option">Deutschland</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Deutsch</h4>
                                        <small className="modal__language-option">Österreich</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Deutsch</h4>
                                        <small className="modal__language-option">Schweiz</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Deutsch</h4>
                                        <small className="modal__language-option">Luxemburg</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Eesti</h4>
                                        <small className="modal__language-option">Eesti</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">Australia</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">Canada</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">Guyana</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">India</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">Ireland</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">New Zealand</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">Singapore</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">English</h4>
                                        <small className="modal__language-option">United Arab Emirates</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Argentina</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Belice</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Bolivia</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Chile</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Colombia</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Costa Rica</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Ecuador</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">El Salvador</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Estados Unidos</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Guatemala</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Honduras</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Nicaragua</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Panamá</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Paraguay</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Español</h4>
                                        <small className="modal__language-option">Venezuela</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Français</h4>
                                        <small className="modal__language-option">Belgique</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Français</h4>
                                        <small className="modal__language-option">Canada</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Français</h4>
                                        <small className="modal__language-option">France</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Français</h4>
                                        <small className="modal__language-option">Suisse</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Français</h4>
                                        <small className="modal__language-option">Luxembourg</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Gaeilge</h4>
                                        <small className="modal__language-option">Éire</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Hrvatski</h4>
                                        <small className="modal__language-option">Hrvatska</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">isiXhosa</h4>
                                        <small className="modal__language-option">eMzantsi Afrika</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">isiZulu</h4>
                                        <small className="modal__language-option">iNingizimu Afrika</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Íslenska</h4>
                                        <small className="modal__language-option">Ísland</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Italiano</h4>
                                        <small className="modal__language-option">Italia</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Italiano</h4>
                                        <small className="modal__language-option">Svizzera</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Kiswahili</h4>
                                        <small className="modal__language-option">Āfrika</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Latviešu</h4>
                                        <small className="modal__language-option">Latvija</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Lietuvių</h4>
                                        <small className="modal__language-option">Lietuva</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Magyar</h4>
                                        <small className="modal__language-option">Magyarország</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Malti</h4>
                                        <small className="modal__language-option">Malta</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Melayu</h4>
                                        <small className="modal__language-option">Malaysia</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Vlaams</h4>
                                        <small className="modal__language-option">België</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Nederlands</h4>
                                        <small className="modal__language-option">Nederland</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Norsk</h4>
                                        <small className="modal__language-option">Norge</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Polski</h4>
                                        <small className="modal__language-option">Polska</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Português</h4>
                                        <small className="modal__language-option">Brasil</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Português</h4>
                                        <small className="modal__language-option">Portugal</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Română</h4>
                                        <small className="modal__language-option">România</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Shqip</h4>
                                        <small className="modal__language-option">Shqipëri</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Slovenčina</h4>
                                        <small className="modal__language-option">Slovensko</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Slovenščina</h4>
                                        <small className="modal__language-option">Slovenija</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Srpski</h4>
                                        <small className="modal__language-option">Srbija</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Suomi</h4>
                                        <small className="modal__language-option">Suomi</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Svenska</h4>
                                        <small className="modal__language-option">Sverige</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Tagalog</h4>
                                        <small className="modal__language-option">Pilipinas</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Tiếng Việt</h4>
                                        <small className="modal__language-option">Việt Nam</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Türkçe</h4>
                                        <small className="modal__language-option">Türkiye</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Ελληνικά</h4>
                                        <small className="modal__language-option">Ελλάδα</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Български</h4>
                                        <small className="modal__language-option">България</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Македонски</h4>
                                        <small className="modal__language-option">Северна Македонија</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Русский</h4>
                                        <small className="modal__language-option">Россия</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Українська</h4>
                                        <small className="modal__language-option">Україна</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">ქართული</h4>
                                        <small className="modal__language-option">საქართველო</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">Հայերեն</h4>
                                        <small className="modal__language-option">Հայաստան</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">עברית</h4>
                                        <small className="modal__language-option">ישראל</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">العربية</h4>
                                        <small className="modal__language-option">العالم</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">हिन्दी</h4>
                                        <small className="modal__language-option">भारत</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">ಕನ್ನಡ</h4>
                                        <small className="modal__language-option">ಭಾರತ</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">मराठी</h4>
                                        <small className="modal__language-option">भारत</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">ไทย</h4>
                                        <small className="modal__language-option">ประเทศไทย</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">한국어</h4>
                                        <small className="modal__language-option">대한민국</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">日本語</h4>
                                        <small className="modal__language-option">日本</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">简体中文</h4>
                                        <small className="modal__language-option">美国</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">繁體中文</h4>
                                        <small className="modal__language-option">美國</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">简体中文</h4>
                                        <small className="modal__language-option">中国</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">繁體中文</h4>
                                        <small className="modal__language-option">香港</small>
                                    </button>
                                    <button className="modal__language-group">
                                        <h4 className="modal__language-title">繁體中文</h4>
                                        <small className="modal__language-option">台灣</small>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ModalLanguage;