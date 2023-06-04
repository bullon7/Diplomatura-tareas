import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <main>
            <div className="homeimg">
                <img src="img/2.png" width="100%" />
            </div>

            <div className="holder">
                <div className="homeparrafo">
                    <h2>Hola.</h2>
                    <p>Esta es la primera pagina web de <b>Marb Tattoo</b> diseñada tambien por la misma tatuadora.<br />
                        <br />
                        Aqui van a
                        encontrar informacion acerca de mi, de mis trabajos, de como trabajo, en que zonas estoy,
                        como contactarme y demas, en esta pagina web dinamica hecha por mi misma.<br />
                        <br />
                        Este es un emprendimiento que
                        surgio por el 2020, en Villa Gesell cuando la pandemia solo planteaba ideas locas en mi cabeza. Pero
                        esas ideas locas un dia se convirtieron en una realidad, haciendo cursos, capacitaciones y apostando a
                        mis objetivos, en 2021 me compre mi primera maquina de tattoos y empece tatuando naranajas y piel
                        sintetica. Poco a poco hice mis primeros trabajos a clientes (mis amigos), que apostaron por mi desde el
                        dia 1 y me dejaron practicar en sus cuerpos en reiteradas ocasiones.
                    </p>
                </div>
            </div>

            <div className="columnas">
                <div className="homesecciones">
                    <div className="holder">
                        <h3><i className="fa-solid fa-location-dot"></i> Ubicacion</h3>
                        <p><b>Marb</b> todavia esta tatuando en su mini estudio: Juramento y Avalos, Villa Urquiza, CABA
                        </p>
                        <br />
                        <h3><i className="fa-solid fa-phone"></i> Contacto</h3>
                        <p>Para contactarme podes completar con tus datos en la siguiente <Link to="/contactanos">seccion</Link>.
                        </p>
                    </div>
                </div>
                <div className="homemapa">
                    <img src="img/MarbTattoo.png" />
                </div>
            </div>
        </main>

    );
}

export default HomePage;