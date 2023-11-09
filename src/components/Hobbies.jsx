import React from 'react';

function Hobbies() {
    // Datos ficticios de hobbies
    const hobbies = [
        {
            id: 1,
            nombre: 'Lectura',
            descripcion: 'Literatura clásica argentina, asíatica y europea.',
        },
        {
            id: 2,
            nombre: 'Tocar instrumentos',
            descripcion: 'Me gusta mucho el violín y el piano.',
        },
        {
            id: 3,
            nombre: 'Bosquejo y dibujos',
            descripcion: 'Representar mis sueños e ideas en arte.',
        },
        {
            id: 4,
            nombre: 'Ver películas',
            descripcion: 'Amo ver series y películas, de cualquier género, la mayor cantidad posible.',
        },
    ];

    return (
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;