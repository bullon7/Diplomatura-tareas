import React from "react";

const InformacionPage = (props) => {
    return (
        <main className="holder">
            <div className="tituloinformacion">
                <h2>Lo que debes saber antes de hacerte un tattoo</h2>
                <div className="introduccioninformacion">
                <p>Los tatuajes son heridas y hay que cuidarlos para que cicatricen de la manera correcta. Los primeros dias
                    de
                    un tatuaje son los mas criticos y los que mas tenemos que brindarle los cuidados necesarios a la piel.
                </p>
                </div>
            </div>
            <div className="cuidados">
                <h3>Cuidados de la piel</h3>
                <ul>
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Luego de la sesion debemos cuidar nuestro tattoo del sol, por lo menos los primeros 15 dias, no
                        exponerlo a los rayos UV. Por esto no es recomendable tatuarse en temporada de verano, ya que en
                        esta epoca, los rayos del sol son mucho mas dañinos que de lo normal.</li> <br />
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Lavar con jabon neutro nuestro tattoo 3 veces al dia (ni mas, ni menos), luego secar con rollo de
                        cocina y por ultimo aplicar la crema recomendada por el tatuador en muy pocas cantidades. Si
                        aplicamos demasiada crema, podemos causarle sobrehidratacion a la piel, y eso causaria una reaccion
                        alergica.</li> <br />
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Evitar roces fuertes y/o con animales</li>
                </ul>
            </div>
            <div className="nadiedice">
                <h3>Lo que nadie te dice</h3>
                <ul>
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Si, los tatuajes duelen. Si bien no es un dolor inaguantable, son una molestia, aqui interviene una
                        aguja que penetrara nuestra piel. Esto varia y depende del umbral de dolor que tolere cada una y de
                        la zona donde te lo hagas.</li> <br />
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Puedes ser alergico a las tintas. Las tintas que se usan para realizar los tatuajes son una mezcla
                        de composiciones quimicas y algunas personas pueden ser alergicas a estos compuestos. Los tintes de
                        color rojo y verde se han catalogado como los mas infecciosos hasta el momento.</li> <br />
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Los tatuajes pierden su color. A medida que pasa el tiempo la tinta de nuestro tatuaje se va
                        oxidando y reabsorbiendo por lo que el tatuaje va a ir perdiendo su color.</li> <br />
                    <li><i className="fa-regular fa-heart fa-2xs"></i> Se pueden borrar si quieres. Hoy en dia existen maneras diferentes de eliminar un tattoo de la piel.
                        Puedes taparlo con otra pieza mas grande o simplemente eliminarlo con laser ultrapulsado.</li>
                </ul>
            </div>
        </main>
    );
}

export default InformacionPage;