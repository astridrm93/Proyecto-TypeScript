export class Persona {
    
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    fecha_nacimiento: string;
    colorFavorito: string;
    sexo: string;
    direccion: Direccion;
    email: Email;
    telefono: Telefono;
    notas: string;


    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        fecha_nacimiento: string,
        colorFavorito: string,
        sexo: string,
        direccion: Direccion,
        email: Email,
        telefono: Telefono,
        notas: string,
        calle: string,
        numero: string,
        piso: string,
        letra: string,
        codigopostal: string,
        poblacion: string,
        provincia: string,
) {

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.fecha_nacimiento = fecha_nacimiento;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direccion = direccion;
        this.email = new Email('Correo', email);
    this.telefono = telefono;
        this.notas = notas;
        this.direccion = new Direccion(calle, numero, piso, letra, codigopostal, poblacion, provincia);
        this.email = 
        this.telefono = new Telefono('Móvil', telefono);
        this.notas = notas;
        
    }
}