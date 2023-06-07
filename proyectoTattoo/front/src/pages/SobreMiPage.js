import React from "react";
import '../styles/pages/sobremi.css';

const SobreMiPage = (props) => {
    return (
        <main className="holder">
            <div className="titulosobremi">
                <h2>Sobre mi</h2>
            </div>

            <div className="soy"> 
                <img src="img/warap7.jpeg" />
                
                <div className="soycontenido">
                    <h3>Soy</h3>
                    <p>Mi nombre es Martina Bullon, tengo 20 años y soy de Villa Gesell, hace 2 años me mude a Capital
                        Federal donde actualmente vivo con mi mama. Desde que me mude tatuo como hobbie y a la par empece a
                        estudiar programacion. Hoy en dia estoy haciendo una diplomatura de desarrollo en el centro de
                        elearning de la UTN. Esta pagina es mi primer proyecto, y va con el objetivo de mostrar y combinar 2
                        cosas que se hacer.
                    </p>
                </div>
            </div>
            <div className="soy">
                <img src="img/warap27.jpeg" />
                <div className="soycontenido">
                    <h3>Como trabajo</h3>
                    <p>Me dedico mas que nada a lo que es linea fina, ya que me parece un estilo super delicado y adaptable
                        a cualquier tipo de piel, ademas de quedar prolijo y sutil, esto no quiere decir que no haga otros
                        estilos. Trabajo con señas, ya que considero que el tiempo de ambas personas (cliente/tatuador)
                        tiene que ser respetable. El dia de la cita se termina de discutir la idea del diseño, el lugar, por
                        lo general yo recomiendo las zonas donde quedaria mejor ya que hay que guiarse por las lineas de
                        langer y los movimientos corporales para que el tattoo no se deforme.</p>
                </div>
            </div>
            <div className="soy">
                <img src="img/warap22.jpeg" />
                <div className="soycontenido">
                    <h3>En que consiste mi proyecto</h3>
                    <p>Hoy en dia ya no me dedico al tatto como un trabajo, ya que me gusta hacerlo mas como un pasatiempo,
                        lo sigo haciendo solo para amigos muy cercanos o para mi misma. Hoy me dedico al desarrollo web, que
                        me deja en cierto punto implementar el lado artistico de mi vida diseñando plantillas.</p>
                </div>
            </div>
        </main>
    );
}

export default SobreMiPage;