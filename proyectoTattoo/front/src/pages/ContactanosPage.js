import React from "react";

const ContactanosPage = (props) => {
    return(
        <main className="holder contacto">
        <div>
            <form action="" method="" className="formulario">
                <h3>Completa con tus datos</h3>
                <p>
                    <label for="nombre">Tu nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="email">Tu email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="number" name="" />
                </p>
                <p>
                    <label for="ciudad">Ciudad</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Tu idea</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </div>
        <div className="datos">
            <h3>Contactate conmigo</h3>
            <ul>
                <li>Buenos Aires, Villa Urquiza<br />martubullon@gmail.com</li>
                <li>ig: @marbtattoo</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactanosPage;