import React from "react";
import '../styles/pages/contactanos.css';
import { useState } from "react";
import axios from 'axios';

const ContactanosPage = (props) => {

        const initialForm = {
            nombre: '',
            email: '',
            telefono: '',
            ciudad: '',
            mensaje: ''
        }

        const [sending, setSending] = useState(false);
        const [msg, setMsg] = useState('');
        const [formData, setFormData] = useState(initialForm);

        const handleChange = e => {
            const {name, value} = e.target;
            setFormData(oldData => ({
                ...oldData,
                [name]: value
            }));
        }

        const handleSubmit = async e => {
            e.preventDefault();
            setMsg('');
            setSending(true)
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm)
            }
        }
    

    return(
        <main className="holder contacto">
        <div>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                <h3>Completa con tus datos</h3>
                <p>
                    <label for="nombre">Tu nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label for="email">Tu email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="number" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label for="ciudad">Ciudad</label>
                    <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} />
                </p>
                <p>
                    <label for="mensaje">Tu idea</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" />
                </p>
            </form>
            <div className="mensajenv">
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            </div>
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