import { Author } from '../component/authors/model/Author';

export  const  authors: Author[] = [
  { 
    id: "70bgb9a0-2279-11e9-906f-e348aa60aded",
    name: 'Gabriel Garcia Marquez',
    email: 'gabo@marquez.com', 
    publications: [
      { 
        body: '... Es una de las más célebres de las escritas por el autor.', 
        title: 'El Coronel No tiene Quien Le Escriba',
        date: '1961'
      },
      { 
        body: `Es considerada una obra maestra de la literatura hispanoamericana y universal, 
        así como una de las obras más traducidas y leídas en español.1`, 
        title: 'Cien Años de Soledad', 
        date: '1967' 
      }
    ]
  }, {
    id: "70bdb9a0-2279-11e9-906f-e948aa60aded",
    name: 'Oscar Wild',
    email: 'Oscar.wild@domain1900.com',
    publications: [
      {
        body: 'El retrato de Dorian Gray es considerada una de las últimas obras clásicas de la novela de terror gótica ',
        date: '1890',
        title:'El retrato de Dorian Gray'
      },
      {
        body: 'publicada por primera vez por su albacea literario Robert Baldwin Ross en 1905, cinco años después de la muerte del poeta y dramaturgo irlandés.',
        date: '1905',
        title:'De profundis'
      },
    ]
  }
];