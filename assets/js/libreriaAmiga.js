const peliculasCopadas = [
    { nombre: 'Batman', 
        anio: '1985', 
        origen: 'USA',
        cast: [
            { name: 'Michael Keaton', age: 60 },
            { name: 'Michael Fifer', age: 50 },
        ],
        data: {format: 'vhs'}, 
    },
    { nombre: 'Batman II', anio: '1989', origen: 'USA' },
    { nombre: 'Evangelion', anio: '1980', origen: 'Japón' },
    { nombre: 'Exterminator II', anio: '1988', origen: 'Argentina' },
    { nombre: 'Kill Bill', anio: '2003', origen: 'USA' },
    { nombre: 'La Jetté', anio: '1990', origen: 'Francia' },
  ];
  
const actores = [
      { nombre: 'Guillermo Franchela', edad: '67', origen: 'Argentina' },
      { nombre: 'Ricardo Darín', edad: '65', origen: 'Argentina' },
    ];

const cantidadPeliculas = (arrayPelis) => arrayPelis.length;
//toma el array de pelis y me devuelve el tamano/ length que tiene

export { peliculasCopadas, cantidadPeliculas };
export default actores;