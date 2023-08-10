import { useState, useEffect } from "react";
import axios from 'axios';
import PromocionItem from "../components/promociones/PromocionItem";
import '../styles/pages/promociones.css';

const PromocionesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {
        const cargarPromociones = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/promociones');
            setPromociones(response.data);
            setLoading(false)
        };
        cargarPromociones();
    }, []);

    return (
        <section className="holder">
            <h2 className="promoprincipal">Promociones</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    promociones.map(item => <PromocionItem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section>
    );
}

export default PromocionesPage;