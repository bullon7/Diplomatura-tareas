import React from "react";
import { Link } from "react-router-dom";
import '../styles/pages/home.css';
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

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
                        <h3><BsFillGeoAltFill /> Ubicacion</h3>
                        <p><b>Marb</b> todavia esta tatuando en su mini estudio: Juramento y Avalos, Villa Urquiza, CABA
                        </p>
                        <br />
                        <h3><BsFillTelephoneFill /> Contacto</h3>
                        <p>Para contactarme podes completar con tus datos en la siguiente <Link to="/contactanos">seccion</Link>.
                        </p>
                    </div>
                </div>
                <div className="mapa"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.018108264544!2d-58.48605832477291!3d-34.578408356161134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6685b8e8dbb%3A0x8a4b7a7d0888195a!2sJuramento%205147%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1689113272436!5m2!1ses!2sar" style={{ width: 400, height: 300, border: 0 }}></iframe>
                </div>
        </div>
        </main >

    );
}

export default HomePage;