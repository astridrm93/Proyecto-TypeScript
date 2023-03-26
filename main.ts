import { Persona } from './persona';
import { Direccion } from "./Direccion.1";
import { Telefono } from './telefono';
import { Email } from './mail';


const persona1 = new Persona(
    'Marta',
    'Sánchez Pérez',
    38,
    '12345678M',
    '13/02/1985',
    'Verde',
    'Mujer',
    'Calle Jabonerias',
    '13',
    '4',
    'D',
    '30203',
    'Cartagena',
    'Region de Murcia',
    'marta.sanchez@gmail.com',
    'Móvil',
    '65989898',
    'No se le puede llamar los lunes y los viernes.'
);


const persona2 = new Persona(
    'Álvaro',
    'Guillamón Ruiz',
    22,
    '12345678A',
    '31/03/2000',
    'Amarillo',
    'Hombre',
    'Calle Asdrubal',
    '25',
    '6',
    'A',
    '30227',
    'Cartagena',
    'Region de Murcia',
    'alvaro.guillamon@gmail.com',
    'Móvil',
    '33254177',
    'Se le puede llamar todos los días.'
);


const persona3 = new Persona(
    'Pablo',
    'González Campillo',
    47,
    '12345678P',
    '17/01/1976',
    'Rojo',
    'Hombre',
    'Calle Esmeralda',
    '17',
    '2',
    'B',
    '30310',
    'Cartagena',
    'Region de Murcia',
    'pablo.gonzalez@gmail.com',
    'Móvil',
    '44879563',
    'No enviar SMS.'
);

console.log('Personas en la agenda:');
console.log(persona1);
console.log(persona2);
console.log(persona3);

const buscarpersona = Persona.dni('12345678M');

const personamodificada = persona1;
personamodificada.direccion = new Direccion('Calle Juan Fernández', '33', '5', 'C', '30204', 'Cartagena', 'Región de Murcia');
personamodificada.telefono = new Telefono('movil', 33265984);
personamodificada.email = new Email('Gmail', 'martasanchez@gmail.com');

console.log('Personas con modificación en la agenda:');
console.log(personamodificada);
console.log(persona2);
console.log(persona3);