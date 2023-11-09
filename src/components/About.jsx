import React from 'react';

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        nombre: 'Johana Frache',
        edad: 20,
        profesion: 'Estudiante de Desarrollo Web',
        descripcion: 'Soy una apasionada estudiante de Desarrollo Web, en proseso de aprendizaje de tecnologías como React, Node.js y Bootstrap. Fuera del estudio, disfruto de la música, la lectura y las películas.',
    };

    return (
        <div className="container">
            <h2>Acerca de Mí</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.nombre}</h3>
                    <p className="card-text">Edad: {aboutData.edad} años</p>
                    <p className="card-text">Profesión: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;