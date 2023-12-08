export const farmacias = [
    {
    nombre: "Farmar Suc. Alvarado",
    direccion: "Alvarado 730",
    telefono: "+5493874228047",
    ubicacion: "https://maps.app.goo.gl/WoX5XeVYDk4u9oRD7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: true,
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487681/SaltaDeTurnoImages/torcn6flqxojy43mxgok.png",
    Zona: "Centro"
    },
    { 
    nombre: "Farmacity 134",
    direccion: "Avda. Belgrano 1789",
    telefono: "+5493874221219",
    ubicacion: "https://maps.app.goo.gl/CP8GBhoeqgG9ZgbG6",
    estado: "Activo", 
    abierto24Horas: true,
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487685/SaltaDeTurnoImages/jktnokl3s73acvit4shz.png",
    Zona: "Oeste"
    },
    {
    nombre: "Farmasur",
    direccion: "Manz. 264 Parcela 18 B° Scalabrini Ortíz",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Santa Laura",
    direccion: "Urbanizacion Santa Laura, Manz. 4, lote 2, A4400 Salta",
    telefono: "+5493876125705",
    ubicacion: "https://maps.app.goo.gl/tzn3MfcRpfDPWypq6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:30",
            cierre: "14:00",
            apertura2: "18:00", 
            cierre2: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:30",
            cierre: "14:00",
            apertura2: "18:00",
            cierre2: "22:00",

            dias2: "Domingo",
            apertura3: "11:00",
            cierre3: "13:30",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534305/SaltaDeTurnoImages/vblzpruhcmhkafgvvxbq.png",
    Zona: "Sur"
    },
    {
    nombre: "Farmar Suc. San Martín",
    direccion: "San Martín 572",
    telefono: "+5493874373500",
    ubicacion: "https://maps.app.goo.gl/zRys19QrA722ypQ49",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: true, 
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487677/SaltaDeTurnoImages/wddknxeqmlran4shjhhx.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Valle IV",
    direccion: "Av. Paraguay 1211",
    telefono: "+5493874954757",
    ubicacion: "https://maps.app.goo.gl/vskvyLuQstG7B1Sx6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487689/SaltaDeTurnoImages/frit6ikbfvrjtkzctxgx.png",
    Zona: "Sur"
    },
    {
    nombre: "América",
    direccion: "Buenos Aires 498",
    telefono: "+5493874219519",
    ubicacion: "https://maps.app.goo.gl/1KtRKQ4dvWUFU8Ng7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "20:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487703/SaltaDeTurnoImages/bqnvbcyaraavpkgrwyeo.png",
    Zona: "Centro"
    },
    {
    nombre: "Nueva España VII",
    direccion: "Avda. Democracia s/n Local 2 - B° El Huaico",
    telefono: "+5493876708846",
    ubicacion: "https://maps.app.goo.gl/NTVXhBEQB45Bgh3k8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "17:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "10:00",
            cierre3: "14:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487673/SaltaDeTurnoImages/yemjpkppu75wfcdeat51.png",
    Zona: "Norte"
    },
    {
    nombre: "Fleming",
    direccion: "Avda. Belgrano 674",
    telefono: "+5493874793656",
    ubicacion: "https://maps.app.goo.gl/sUsbZVffs3R6HdaQ6",
    estado: "Activo", 
    abierto24Horas: true,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487617/SaltaDeTurnoImages/zm7mk7qx7bhsfuwenbyz.png",
    Zona: "Centro"
    },
    {
    nombre: "Caseros",
    direccion: "Avda. Sarmiento 1",
    telefono: "+5493874212345",
    ubicacion: "https://maps.app.goo.gl/FnwyMTitaGo4HiZP8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487693/SaltaDeTurnoImages/aodtzpb33zjovonqih57.png",
    Zona: "Centro"
    },
    {
    nombre: "Solidaridad",
    direccion: "Manz. 449 - Lote 1 - 3° Etapa B° Solidaridad",
    telefono: "+5493874718106",
    ubicacion: "https://maps.app.goo.gl/s3FrKZK9j8henJPZ6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura3: "09:00",
            cierre3: "14:00",
            apertura4: "17:00",
            cierre4: "22:00",

            dias2: "Domingo",
            apertura5: "09:00",
            cierre5: "14:00",
            apertura6: "17:00",
            cierre6: "22:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487657/SaltaDeTurnoImages/st3zmuezin7dbug0z30z.png",
    Zona: "Este"
    },
    {
    nombre: "Terminal",
    direccion: "Terminal de Ómnibus",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "San Francisco",
    direccion: "Deán Funes 596",
    telefono: "+5493874212984",
    ubicacion: "https://maps.app.goo.gl/1nYDnApmreUr6YYq6",
    estado: "Activo", 
    abierto24Horas: true,
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487667/SaltaDeTurnoImages/pni0peurxj1yr4gm0aeu.png",
    Zona: "Centro"
    },
    {
    nombre: "Sagrada Familia",
    direccion: "San Juan 1012",
    telefono: "+5493874216099",
    ubicacion: "https://maps.app.goo.gl/XdDigErnBfhgZrpz7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "20:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "15:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "",
    Zona: "Centro"
    },
    {
    nombre: "Santa Teresita",
    direccion: "Ruta 51km Km 4 Local 1 - San Luis",
    telefono: "+5493875101585",
    ubicacion: "https://maps.app.goo.gl/Rz52AZdTwVP9F56c6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "17:00",
            cierre2: "21:30",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:30",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "14:00",
            apertura3: "17:00",
            cierre3: "21:30",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-12T08:00:00Z'), new Date('2023-11-27T08:00:00Z')],
        diciembre: [new Date('2023-12-12T08:00:00Z'), new Date('2023-12-27T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487662/SaltaDeTurnoImages/xoecnx5svcdfytp9ewg2.png",
    Zona: "Sur"
    },
    {
    nombre: "Del Valle IX",
    direccion: "España 424",
    telefono: "+5493874317578",
    ubicacion: "https://maps.app.goo.gl/oxErvJhXwWrMjTm37",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:30",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487848/SaltaDeTurnoImages/euxtlcafqswdeweid1qb.png",
    Zona: "Centro"
    },
    {
    nombre: "Fleming Cuidad Judicial",
    direccion: "Avda. Housay Local 16",
    telefono: "+5493874252183",
    ubicacion: "https://maps.app.goo.gl/JYi3gmxuDgjPjEUg6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:00",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "23:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699487944/SaltaDeTurnoImages/zdo3tmldtr7mjrz6jhi9.png",
    Zona: "Norte"
    },
    {
    nombre: "Santa Ana",
    direccion: "Avda. Juan D. Perón 867",
    telefono: "+5493874292401",
    ubicacion: "https://maps.app.goo.gl/PpjNd6URKKhsFo9GA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:30",
            cierre2: "21:30",
            },
        finDeSemana: {
            dias: "Sábado",
            apertur3: "09:00",
            cierre3: "13:00",
            apertura4: "17:30",
            cierre4: "21:30",

            dias2: "Domingo",
            apertura5: "",
            cierre5: "",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488020/SaltaDeTurnoImages/i00v8gl4feej589xfbto.png",
    Zona: "Sur"
    },
    {
    nombre: "Dr. Ahorro suc. Florida",
    direccion: "La Florida 295",
    telefono: "+5493874224590",
    ubicacion: "https://maps.app.goo.gl/mgQ8FAnVCmjf3eYa8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "21:00",

            dias2: "Domingo",
            apertura2: "10:30",
            cierre2: "20:30",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488128/SaltaDeTurnoImages/h4zbxqr9d8q12ait75sa.png",
    Zona: "Centro"
    },
    {
    nombre: "Villa Lavalle",
    direccion: "Río Rosario de Lerma 351 - Villa Lavalle",
    telefono: "",
    ubicacion: "https://maps.app.goo.gl/AnWqAxWL5agyUuba8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:30",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "15:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488225/SaltaDeTurnoImages/zbnccjiqehikrbvqcm15.png",
    Zona: "Este"
    },
    {
    nombre: "Zuviría",
    direccion: "Zuvuría 1810",
    telefono: "+5493874393406",
    ubicacion: "https://maps.app.goo.gl/DiZAKJweinUUJpk28",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "21:30",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488475/SaltaDeTurnoImages/bvqe8mxiaspjkqclgm8b.png",
    Zona: "Norte"
    },
    {
    nombre: "Zabala",
    direccion: "Zabala 492",
    telefono: "+5493872425220",
    ubicacion: "https://maps.app.goo.gl/zqaRKTUHkDtnWMvR8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "21:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:30",
            cierre: "13:00",
            apertura2: "18:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488477/SaltaDeTurnoImages/f2ausartoxralxztwq3w.png",
    Zona: "Centro"
    },
    {
    nombre: "Paracelso",
    direccion: "Vicente López 1108",
    telefono: "+5493874315582",
    ubicacion: "https://maps.app.goo.gl/T8qNT8N6osASeb5q8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-13T08:00:00Z'), new Date('2023-11-28T08:00:00Z')],
        diciembre: [new Date('2023-12-13T08:00:00Z'), new Date('2023-12-28T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488559/SaltaDeTurnoImages/r6s90vlt5a48g0tnlepa.png",
    Zona: "Norte"
    },
    {
    nombre: "Grand Bourg",
    direccion: "Cnel. Miguel Di Pascuo 2965",
    telefono: "+5493874361453",
    ubicacion: "https://maps.app.goo.gl/LUBxPrytkPc6JTug6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura3: "09:00",
            cierre3: "13:00",
            apertura4: "18:00",
            cierre4: "22:00",

            dias2: "Domingo",
            apertura5: "",
            cierre5: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699489801/SaltaDeTurnoImages/kdxj4nfs1ztpp19fcgqe.png",
    Zona: "Oeste"
    },
    {
    nombre: "Padre Pío",
    direccion: "Radio El Fueguino 572 B° Intersindical",
    telefono: "+5493875567320",
    ubicacion: "https://maps.app.goo.gl/fPik8ca1uxKNwRq76",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:30",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura3: "09:30",
            cierre3: "13:30",
            apertura4: "17:00",
            cierre4: "22:00",

            dias2: "Domingo",
            apertura5: "",
            cierre5: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699488926/SaltaDeTurnoImages/qgfol0sh1a2psoqwxfaj.png",
    Zona: "Sur"
    },
    {
    nombre: "Del Valle XI",
    direccion: "Portugal 401",
    telefono: "+5493874261403",
    ubicacion: "https://maps.app.goo.gl/Ywft8NstYcpgksfc8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699489042/SaltaDeTurnoImages/vueh6pdqmjri6hivhufz.png",
    Zona: "Sur"
    },
    {
    nombre: "Integral SRL",
    direccion: "Avda. Bicentenario de la Batalla de Salta 23",
    telefono: "+5493874213700",
    ubicacion: "https://maps.app.goo.gl/73dEpHeiBzF3hCaKA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699489120/SaltaDeTurnoImages/ldxgihkdbaaoxdr2unfs.png",
    Zona: "Centro"
    },
    {
    nombre: "Circulo VI",
    direccion: "Manz. C - B° Santa Cecilia",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Nueva B & B",
    direccion: "Avda. Artigas 901",
    telefono: "",
    ubicacion: "https://maps.app.goo.gl/tBpGkCuCHeQijB8N6",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Monserrat VI",
    direccion: "España 492",
    telefono: "+5493874222998",
    ubicacion: "https://maps.app.goo.gl/wEx2tzhg9SnrFfHz9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "14:00",
            apertura3: "18:00",
            cierre3: "22:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699489339/SaltaDeTurnoImages/zpjojmgd2mt5it4zmyav.png",
    Zona: "Centro"
    },
    {
    nombre: "Anzorena",
    direccion: "Zabala 439",
    telefono: "+5493874960735",
    ubicacion: "https://maps.app.goo.gl/iPjm3bHi24zZ4sep8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "21:30",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699489401/SaltaDeTurnoImages/ggpwpfqtirqazl3vlpkf.png",
    Zona: "Centro"
    },
    {
    nombre: "Alpha Neo",
    direccion: "Buenos Aires 401",
    telefono: "+5493874311677",
    ubicacion: "https://maps.app.goo.gl/kKHNFVdKr8bRDCseA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "16:30",
            cierre2: "21:30",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-29T08:00:00Z')],
        diciembre: [new Date('2023-12-14T08:00:00Z'), new Date('2023-12-29T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699489588/SaltaDeTurnoImages/ikqlagxn5roeygnooqlj.png",
    Zona: "Centro"
    },
    {
    nombre: "Jujuy",
    direccion: "Jujuy 400",
    telefono: "+5493874227408",
    ubicacion: "https://maps.app.goo.gl/xoKLGogncMGouFKt7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699490286/SaltaDeTurnoImages/z9t2yrretbsrddnnfojz.png",
    Zona: "Centro"
    },
    {
    nombre: "Casa del sol",
    direccion: "Manz. 476 - Casa 12 B° El Huaico 2",
    telefono: "+5493874711918",
    ubicacion: "https://maps.app.goo.gl/hZcd1gawaHxxgvSU8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699490427/SaltaDeTurnoImages/vmgmcrxcbhpwuguju7po.png",
    Zona: "Norte"
    },
    {
    nombre: "Del Valle II",
    direccion: "Alvarado 602",
    telefono: "+5493874219053",
    ubicacion: "https://maps.app.goo.gl/1FsvQ8w2FyvCdgVf8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699600107/SaltaDeTurnoImages/v5kkitwz6jfqeufdmxa2.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Valle VI",
    direccion: "Avda. Arenales 1601",
    telefono: "+5493874215583",
    ubicacion: "https://maps.app.goo.gl/mNipNHcdSqAwxxKD9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:30",
            cierre2: "22:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699490632/SaltaDeTurnoImages/b8qknh9p6nhrtevlswkd.png",
    Zona: "Oeste"
    },
    {
    nombre: "Siria",
    direccion: "República de Siria 927",
    telefono: "+5493874314113",
    ubicacion: "https://maps.app.goo.gl/hFnDGJsChadBr5U6A",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "18:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699490732/SaltaDeTurnoImages/inxgqlarpahq2vflejj1.png",
    Zona: "Oeste"
    },
    {
    nombre: "El Cabildo S.R.L",
    direccion: "Avda. Belgrano 905",
    telefono: "+5493874215073",
    ubicacion: "https://maps.app.goo.gl/VLsvYETYjYUnNtrs5",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:30",
            apertura2: "17:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699490859/SaltaDeTurnoImages/xxkwip0ynsbeulxcjbdj.png",
    Zona: "Centro"
    },
    {
    nombre: "Victoria",
    direccion: "Pje. 24 - J. Ardiles 724 Aparece 1491 B° Santa Ana 1",
    telefono: "+5493874290337",
    ubicacion: "https://maps.app.goo.gl/ZDyioZux5mqQsssM6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura3: "09:00",
            cierre3: "14:00",
            apertura4: "17:00",
            cierre4: "22:00",

            dias2: "Domingo",
            apertura5: "",
            cierre5: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699490949/SaltaDeTurnoImages/troglrpvegmmkc1ojbqi.png",
    Zona: "Sur"
    },
    {
    nombre: "San Francisco VIII",
    direccion: "Diego Zabaleta 496",
    telefono: "+5493876711924",
    ubicacion: "https://maps.app.goo.gl/pdrtkVErpGKT8qXX8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699491086/SaltaDeTurnoImages/umgqxl5q654falyh2ahp.png",
    Zona: "Norte"
    },
    {
    nombre: "Sagrado Corazón",
    direccion: "Manz. 26 lote 11 Grupo 648 B° Castañares",
    telefono: "+5493874251246",
    ubicacion: "https://maps.app.goo.gl/MYdm2SYPmRKBvefq8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "18:00",
            cierre2: "22:30",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "18:00",
            cierre2: "23:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699491304/SaltaDeTurnoImages/gncosgfmc29jr94zzl9x.png",
    Zona: "Norte"
    },
    {
    nombre: "San Francisco V",
    direccion: "Ramón Cañavera 1926 B° El Periodista",
    telefono: "+5493874245700",
    ubicacion: "https://maps.app.goo.gl/QEq3ZuVWtdFMSe4j7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "13:00",
            apertura3: "18:00",
            cierre3: "22:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-15T08:00:00Z'), new Date('2023-11-30T08:00:00Z')],
        diciembre: [new Date('2023-12-15T08:00:00Z'), new Date('2023-12-30T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699491179/SaltaDeTurnoImages/lnhwpodgfrt7pqhnfrxv.png",
    Zona: "Sur"
    },
    {
    nombre: "Pieve 24",
    direccion: "Caseros 802",
    telefono: "+5493874221500",
    ubicacion: "https://maps.app.goo.gl/WqePsf19L7PgidLg8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:30",
            cierre: "23:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "14:00",
            apertura3: "18:00",
            cierre3: "22:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534413/SaltaDeTurnoImages/gj8auosxystvjdxyfdwh.png",
    Zona: "Centro"
    },
    {
    nombre: "Margarita II",
    direccion: "Radio Nacional 3005",
    telefono: "+5493874540122",
    ubicacion: "https://maps.app.goo.gl/2nCAj6XZ8LuNDAJSA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534546/SaltaDeTurnoImages/yq8cpywrcv5ptherp6zq.png",
    Zona: "Sur"
    },
    {
    nombre: "Nueva Galeno",
    direccion: "La Razón 3881 B° Intersindical",
    telefono: "+5493874240414",
    ubicacion: "https://maps.app.goo.gl/TUxHavLLdfZWktEEA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura3: "09:00",
            cierre3: "13:30",
            apertura4: "17:00",
            cierre4: "22:00",

            dias2: "Domingo",
            apertura5: "09:00",
            cierre5: "13:30",
            apertura6: "17:00",
            cierre6: "22:00",
            cerrado: false,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534639/SaltaDeTurnoImages/wm73mhzkg0cvrstx52ow.png",
    Zona: "Sur"
    },
    {
    nombre: "Del Valle",
    direccion: "Entre Ríos 850",
    telefono: "+5493874220403",
    ubicacion: "https://maps.app.goo.gl/GuartZQYo4rfphzy6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534748/SaltaDeTurnoImages/xg3kxh7syionqlspvy61.png",
    Zona: "Centro"
    },
    {
    nombre: "Medical",
    direccion: "Santiago del Estero 118",
    telefono: "+5493874227718",
    ubicacion: "https://maps.app.goo.gl/WNLNoTS57oLbkFNr5",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "17:30",
            cierre2: "21:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "17:30",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534850/SaltaDeTurnoImages/avufzsbipoylpt4j4udv.png",
    Zona: "Centro"
    },
    {
    nombre: "Mitre",
    direccion: "Avda. de las Américas 1092",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699534984/SaltaDeTurnoImages/fwpflq9shmyhue4ocljb.png",
    Zona: ""
    },
    {
    nombre: "Del Valle XIII",
    direccion: "Ruta 51 Km 3 1/2 San Luis",
    telefono: "+5493874972424",
    ubicacion: "https://maps.app.goo.gl/koorgoNu6Z6P4xUg7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "21:30",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "21:30",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535144/SaltaDeTurnoImages/jh0bu77vmhpup8dsuzar.png",
    Zona: "Sur"
    },
    {
    nombre: "Me-jor",
    direccion: "Córdoba 1874",
    telefono: "+5493874350389",
    ubicacion: "https://maps.app.goo.gl/6ME79rv3RHapaf8t6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:30",
            cierre: "15:00",
            apertura2: "17:30",
            cierre2: "23:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:30",
            cierre: "15:00",
            apertura2: "17:30",
            cierre2: "23:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535393/SaltaDeTurnoImages/sz1dowrzobwnysiu8dtd.png",
    Zona: "Sur"
    },
    {
    nombre: "Miralles II",
    direccion: "Santa Inés 2623 B° Santa Lucía",
    telefono: "+5493876709130",
    ubicacion: "https://maps.app.goo.gl/tdTQjFiTeXiA4RfD9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "22:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-1T08:00:00Z'), new Date('2023-12-16T08:00:00Z'), new Date('2023-12-31T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535528/SaltaDeTurnoImages/rnduup4hxrazzmlzrjc7.png",
    Zona: "Oeste"
    },
    {
    nombre: "Milagro",
    direccion: "España 601",
    telefono: "+5493874214100",
    ubicacion: "https://maps.app.goo.gl/JaWmJRb5aXfiai789",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535692/SaltaDeTurnoImages/ounwe5cn49qx5atvffka.png",
    Zona: "Centro"
    },
    {
    nombre: "Margarita",
    direccion: "Obispo Romero 2002",
    telefono: "+5493874540122",
    ubicacion: "https://maps.app.goo.gl/rQ8RbQssxbFJjxvM9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true,
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1700680236/SaltaDeTurnoImages/pokmnj9sm5v0rfibj4yt.png",
    Zona: "Este"
    },
    {
    nombre: "Nación",
    direccion: "Diario La Nación 3886 B° El Tribuno",
    telefono: "+5493874242590",
    ubicacion: "https://maps.app.goo.gl/zDFSLXy1L1xCW5LX9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "01:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "01:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "01:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535808/SaltaDeTurnoImages/jv98jcovbxtsi65erlhr.png",
    Zona: "Sur"
    },
    {
    nombre: "La Flor",
    direccion: "Avda. Batalla de Salta 310",
    telefono: "+5493874255161",
    ubicacion: "https://maps.app.goo.gl/fkkkZKHPacBaQYVF9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:30",
            cierre2: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535897/SaltaDeTurnoImages/rvprvzmkkxewn55hzurw.png",
    Zona: "Norte"
    },
    {
    nombre: "Las Melliz",
    direccion: "Avda. Chile 1420",
    telefono: "",
    ubicacion: "https://maps.app.goo.gl/AFHpXNFrZXBbaCxJ7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699535993/SaltaDeTurnoImages/a07vokrsnbtfcna3te8z.png",
    Zona: "Sur"
    },
    {
    nombre: "Fleming Grand Bourg",
    direccion: "Avda. Juan D. Perón 1",
    telefono: "+5493874361043",
    ubicacion: "https://maps.app.goo.gl/fNYJPcM3KvCWQvXeA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:00",
            cierre: "01:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "07:00",
            cierre: "01:00",

            dias2: "Domingo",
            apertura2: "07:00",
            cierre2: "01:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699536086/SaltaDeTurnoImages/vdqkzmlzzkodb0i6rnal.png",
    Zona: "Oeste"
    },
    {
    nombre: "Los Tilos",
    direccion: "Avda. Reyes Católicos 2081",
    telefono: "+5493874394242",
    ubicacion: "https://maps.app.goo.gl/4ByeMD4weTPEkY5i9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "12:30",
            apertura2: "17:00",
            cierre2: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699536601/SaltaDeTurnoImages/vszet89hjl0oztdd8e2d.png",
    Zona: "Norte"
    },
    {
    nombre: "Del Rosario",
    direccion: "Avda. San Martín 1039",
    telefono: "+5493874719235",
    ubicacion: "https://maps.app.goo.gl/LoWtZc2gU7StRUCT6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "21:30"
            },
        finDeSemana: {
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "21:30",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699536742/SaltaDeTurnoImages/togf9yxsknimx0ucpefk.png",
    Zona: "Centro"
    },
    {
    nombre: "Avenida II",
    direccion: "Avda. San Martín 2068",
    telefono: "+5493874227664",
    ubicacion: "https://maps.app.goo.gl/jGgF4RPKG8pevGQg6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "23:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-02T08:00:00Z'), new Date('2023-12-17T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699536849/SaltaDeTurnoImages/uvml1uo1z8ygybz8ogi4.png",
    Zona: "Oeste"
    },
    {
    nombre: "Avenida",
    direccion: "Avda. Entre Ríos 1788",
    telefono: "+5493874314049",
    ubicacion: "https://maps.app.goo.gl/vcLqR1R8xeqQzFj1A",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699536974/SaltaDeTurnoImages/ehkrd702divyeprjnxf3.png",
    Zona: "Oeste"
    },
    {
    nombre: "Farma Express II",
    direccion: "Laprida 162",
    telefono: "+5493874711000",
    ubicacion: "https://maps.app.goo.gl/4feLLsm3VAZwV2nb8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699537068/SaltaDeTurnoImages/gvttgh1iglxgqjbbno3n.png",
    Zona: "Oeste"
    },
    {
    nombre: "Marhan",
    direccion: "Avda. Asunción 1530",
    telefono: "+5493874283206",
    ubicacion: "https://maps.app.goo.gl/hZXFvDcReRMvx2w37",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699537176/SaltaDeTurnoImages/qjx8berkuxmyiospfnfh.png",
    Zona: "Este"
    },
    {
    nombre: "Del Valle III",
    direccion: "Avda. Bicentenario de la Batalla de Salta 932",
    telefono: "+5493874310204",
    ubicacion: "https://maps.app.goo.gl/S56ez2q1qDUcUrhP8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699537472/SaltaDeTurnoImages/iq1vat0foc50eaoywucz.png",
    Zona: "Norte"
    },
    {
    nombre: "Del Valle X",
    direccion: "Pueyrredón 2",
    telefono: "+5493874211578",
    ubicacion: "https://maps.app.goo.gl/y8m8QSUMfJfWYgYX8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699537560/SaltaDeTurnoImages/vluxyl5ahk4kj5p59tza.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Hospital",
    direccion: "Manz. 413 A lote 17 B° Solidaridad",
    telefono: "+5493874717741",
    ubicacion: "https://maps.app.goo.gl/P2xQn3JgtJiUYp9M9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699537706/SaltaDeTurnoImages/q2nppots6nv3ordxhdim.png",
    Zona: "Este"
    },
    {
    nombre: "Familiar Centro",
    direccion: "20 de Febrero 204",
    telefono: "+5493874223708",
    ubicacion: "https://maps.app.goo.gl/AYj7AUUpdvxeExPBA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699537791/SaltaDeTurnoImages/ivard8prtzep3r5t5gha.png",
    Zona: "Centro"
    },
    {
    nombre: "Chango Más",
    direccion: "Avda. Paraguay 1450",
    telefono: "+5493874960648",
    ubicacion: "https://maps.app.goo.gl/5yKqyGynP6Gq3Ctt7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-03T08:00:00Z'), new Date('2023-12-18T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699538109/SaltaDeTurnoImages/nfpad680blm4qiwvxc8i.png",
    Zona: "Sur"
    },
    {
    nombre: "Del Valle V",
    direccion: "Avda. Belgrano 369",
    telefono: "+5493874213962",
    ubicacion: "https://maps.app.goo.gl/sKgQY9C1g7FvbFH58",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699538380/SaltaDeTurnoImages/qigxuowl1tnquvqga0dc.png",
    Zona: "Centro"
    },
    {
    nombre: "San Carlos",
    direccion: "Manzana 7 Casa 27 B° San Carlos",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "San Bernardo",
    direccion: "Hipólito Yrigoyen 48",
    telefono: "+5493875884795",
    ubicacion: "https://maps.app.goo.gl/kjVgD2qFGetYAQy67",
    horario: {
        semana: {
            dias: "",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "",
            apertura: "",
            cierre: ""
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699538676/SaltaDeTurnoImages/w3x0gwgydcjjtcml4zwz.png",
    Zona: "Centro"
    },
    {
    nombre: "Virgen de Fátima",
    direccion: "Coronel Suaréz 201",
    telefono: "+5493874314945",
    ubicacion: "https://maps.app.goo.gl/VmEmqLLZZDLdvqxa9",
    horario: {
        semana: {
            dias: "",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "",
            apertura: "",
            cierre: ""
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699597050/SaltaDeTurnoImages/xjftblr90priihgvnwym.png",
    Zona: "Oeste"
    },
    {
    nombre: "Del Huaico",
    direccion: "Manzana 518 B Casa 27 B° El Huaico ",
    telefono: "+5493876106667",
    ubicacion: "https://maps.app.goo.gl/ZmomsBwVmcUKTMB57",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "22:00",

            dias2: "Domingo",
            apertura3: "10:00",
            cierre3: "13:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699539089/SaltaDeTurnoImages/uxxnepn5pdrs9phwasgm.png",
    Zona: "Norte"
    },
    {
    nombre: "Familiar Centro II",
    direccion: "Florida 888",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Don Emilio",
    direccion: "Barrio Don Emilio",
    telefono: "",
    ubicacion: "",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        diciembre: [new Date('2023-12-04T08:00:00Z'), new Date('2023-12-19T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Miralles",
    direccion: "Olavarría 784",
    telefono: "+5493874315247",
    ubicacion: "https://maps.app.goo.gl/6chnHhwic93VCSBJ9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "22:00",
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:00",
            cierre2: "22:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699539747/SaltaDeTurnoImages/onqmhwwerufmqrvwpvqc.png",
    Zona: "Oeste"
    },
    {
    nombre: "San Francisco VII",
    direccion: "Avda. Juan D. Perón 2983",
    telefono: "+5493874365601",
    ubicacion: "https://maps.app.goo.gl/XUWWBbtRKU9h78Df9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699539872/SaltaDeTurnoImages/kjjfpbk229uwjuwwaozs.png",
    Zona: "Oeste"
    },
    {
    nombre: "Monserrat IV",
    direccion: "Córdoba 788",
    telefono: "+5493874234117",
    ubicacion: "https://maps.app.goo.gl/kbLtboyV7otCFrGJ8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699540051/SaltaDeTurnoImages/v2qofiqldiy7sq6xlewm.png",
    Zona: "Centro"
    },
    {
    nombre: "San Francisco III",
    direccion: "Avda. Bicentenario 1245",
    telefono: "+5493874396010",
    ubicacion: "https://maps.app.goo.gl/p4bX6LsocN3e6SfD9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:00",
            apertura2: "18:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699540155/SaltaDeTurnoImages/bdxzlnmrlh9yk1io6tuz.png",
    Zona: "Norte"
    },
    {
    nombre: "Farmacorp",
    direccion: "Acceso a la UCASAL Campo Castañares",
    telefono: "+5493872535501",
    ubicacion: "https://maps.app.goo.gl/8MaLa7AScMdsibiA9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "21:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699540295/SaltaDeTurnoImages/ak0cyel08woceczg6rhk.png",
    Zona: "Norte"
    },
    {
    nombre: "B° Santa Cecilia",
    direccion: "Avda. Felipe Varela 330",
    telefono: "+5493874010333",
    ubicacion: "https://maps.app.goo.gl/WQHsrcjSV46wBGvy7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "21:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699540401/SaltaDeTurnoImages/xtdphz2frhjspccklmzb.png",
    Zona: "Este"
    },
    {
    nombre: "El Indio",
    direccion: "Santiado del Estero 597",
    telefono: "+5493874212260",
    ubicacion: "https://maps.app.goo.gl/XUhtGep4iWkURb3w7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "13:30",
            apertura2: "16:00",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699541068/SaltaDeTurnoImages/jei4umajabbpanjrtckq.png",
    Zona: "Centro"
    },
    {
    nombre: "Padre Pío II",
    direccion: "Avda. Lisandro de la Torre 38",
    telefono: "+5493875518897",
    ubicacion: "https://maps.app.goo.gl/EP6ZdTAF3NXj3NVb7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:30",
            cierre: "13:30",
            apertura2: "17:30",
            cierre2: "21:30"
            },
        finDeSemana: {
            apertura: "09:30",
            cierre: "13:30",
            apertura2: "17:30",
            cierre2: "21:30",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699541531/SaltaDeTurnoImages/ujatvlw4vjjupn07shtc.png",
    Zona: "Sur"
    },
    {
    nombre: "Pieve S.A",
    direccion: "San juan 687",
    telefono: "+5493874214843",
    ubicacion: "https://maps.app.goo.gl/8sA39htuPqTXwtmy7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699541630/SaltaDeTurnoImages/z1nytxkolbk96psvtg7e.png",
    Zona: "Centro"
    },
    {
    nombre: "Calchaqui II",
    direccion: "Avda. San Martín 1802",
    telefono: "+5493874217976",
    ubicacion: "https://maps.app.goo.gl/RBbboUWfjFNhVrjo7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "12:00",
            apertura2: "16:00",
            cierre2: "20:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-05T08:00:00Z'), new Date('2023-11-20T08:00:00Z')],
        diciembre: [new Date('2023-12-05T08:00:00Z'), new Date('2023-12-20T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699541721/SaltaDeTurnoImages/t8yjejr9crrmbnzxf4f1.png",
    Zona: "Oeste"
    },
    {
    nombre: "Farmacity",
    direccion: "J. B. Alberdi 84",
    telefono: "+5493874313188",
    ubicacion: "https://maps.app.goo.gl/ShkEx5GaPZ9cadnZA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699569872/SaltaDeTurnoImages/w3w4cpkqgtnspcju4nk2.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Hospital Barracas",
    direccion: "Ex Combatientes de Malvinas 3814",
    telefono: "+5493872216216",
    ubicacion: "https://maps.app.goo.gl/m8WEUMFdL4YakWvV7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "22:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699569980/SaltaDeTurnoImages/np7zdwjxzs5wny626kdp.png",
    Zona: "Sur"
    },
    {
    nombre: "Di Marco",
    direccion: "Avda. M. Moreno 5098 - B° Intersindical",
    telefono: "+5493874555660",
    ubicacion: "https://maps.app.goo.gl/Gfbec8BadMRgVA2i7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:30",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699570088/SaltaDeTurnoImages/uio6rxe3ojendsocc43l.png",
    Zona: "Sur"
    },
    {
    nombre: "Por la Vida",
    direccion: "Provisor Fernández 231",
    telefono: "+5493874230383",
    ubicacion: "https://maps.app.goo.gl/K6MQJ7bwNV44sBbm7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699570207/SaltaDeTurnoImages/wyasblijme9fszbndpva.png",
    Zona: "Este"
    },
    {
    nombre: "Amaicha",
    direccion: "Manzana 1 Casa 1 Etapa 10 B° Limache",
    telefono: "+5493874248301",
    ubicacion: "",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "13:00",
            apertura2: "16:00",
            cierre2: "20:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "13:00",
            apertura2: "16:00",
            cierre2: "20:30",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "",
    Zona: "Sur"
    },
    {
    nombre: "Palermo I",
    direccion: "Manzana 434 - Lote 1 B° Palermo",
    telefono: "+5493874365640",
    ubicacion: "https://maps.app.goo.gl/6iN4YFWoq1jMJX366",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699570424/SaltaDeTurnoImages/uym8dewhdbee19y0rbqy.png",
    Zona: "Oeste"
    },
    {
    nombre: "Farmar Suc. Urquiza",
    direccion: "Urquiza 902",
    telefono: "+5493874373502",
    ubicacion: "https://maps.app.goo.gl/oK6Adv6nh1fYEJGXA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "13:00",
            apertura3: "18:00",
            cierre3: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699570513/SaltaDeTurnoImages/misbfbtqvybphr78urhs.png",
    Zona: "Centro"
    },
    {
    nombre: "Monserrat San Bernardo",
    direccion: "Tobias 20",
    telefono: "+5493874216710",
    ubicacion: "https://maps.app.goo.gl/Jyvq4KcpovYcPvYw7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-06T08:00:00Z'), new Date('2023-11-21T08:00:00Z')],
        diciembre: [new Date('2023-12-06T08:00:00Z'), new Date('2023-12-21T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699570745/SaltaDeTurnoImages/t99mxbi1h4ejdmxcaqmy.png",
    Zona: "Centro"
    },
    {
    nombre: "Farmacity 129",
    direccion: "Avda. Bicentenario de la Batalla de Salta 702",
    telefono: "+5493874212556",
    ubicacion: "https://maps.app.goo.gl/GLQKeDQA5wChNaRv8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "10:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "10:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699570876/SaltaDeTurnoImages/tsvlsbkpcnvwn5o5viyj.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Valle XV",
    direccion: "Zuviría 1490",
    telefono: "+5493874392003",
    ubicacion: "https://maps.app.goo.gl/DBDBo3XuUby7KS4c7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699571027/SaltaDeTurnoImages/bjalccoimvrube5olxs8.png",
    Zona: "Norte"
    },
    {
    nombre: "Me-jor",
    direccion: "Manzana 375 C Casa 1 - B° Democracia",
    telefono: "",
    ubicacion: "",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Apolo",
    direccion: "Avda. San Martín 1493",
    telefono: "+5493874229891",
    ubicacion: "https://maps.app.goo.gl/V7WJYsuUk75gy7CT9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "16:30",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699571363/SaltaDeTurnoImages/vi25rwwdszugik3xszsk.png",
    Zona: "Centro"
    },
    {
    nombre: "Tres Cerritos",
    direccion: "Las Acacias 25",
    telefono: "+5493872429399",
    ubicacion: "https://maps.app.goo.gl/7ZUBUfsNyvNn4HgZ9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "21:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699571475/SaltaDeTurnoImages/vnyk7knfzi3xtqza5fnz.png",
    Zona: "Norte"
    },
    {
    nombre: "Del Cerro",
    direccion: "Avda. R. Sansón 2823",
    telefono: "",
    ubicacion: "",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Del Valle XII",
    direccion: "Catamarca 431",
    telefono: "+5493876094368",
    ubicacion: "https://maps.app.goo.gl/wWvWcCt7oLEwTvvQA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699571805/SaltaDeTurnoImages/fzq4wvlo0vku79jvxc7h.png",
    Zona: "Centro"
    },
    {
    nombre: "Homeopática Mendoza",
    direccion: "Ituzaingó 490",
    telefono: "+5493874317150",
    ubicacion: "https://maps.app.goo.gl/yrCY11dz4JXKJ9iV7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699571903/SaltaDeTurnoImages/g5tnyvjsqqw9x3mo2u9l.png",
    Zona: "Centro"
    },
    {
    nombre: "Nueva España",
    direccion: "España 899",
    telefono: "+5493874225279",
    ubicacion: "https://maps.app.goo.gl/HfsJcNnVk9Cbcct86",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:15",
            cierre: "13:00",
            apertura2: "16:15",
            cierre2: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:15",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572034/SaltaDeTurnoImages/pldxbdkavaja51bj4xid.png",
    Zona: "Centro"
    },
    {
    nombre: "Salud y Vida",
    direccion: "Manz. 22 Casa 2 B° Estación Alvarado",
    telefono: "+5493875386250",
    ubicacion: "https://maps.app.goo.gl/Rb5kx5ZJgq7M5uYd7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-07T08:00:00Z'), new Date('2023-11-22T08:00:00Z')],
        diciembre: [new Date('2023-12-07T08:00:00Z'), new Date('2023-12-22T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572120/SaltaDeTurnoImages/fjwfwggfrgbnbc2dv0kf.png",
    Zona: "Sur"
    },
    {
    nombre: "Manresa",
    direccion: "Avda. El Libano 764",
    telefono: "+5493874261336",
    ubicacion: "https://maps.app.goo.gl/XxzxAkDF4D1rFoWz8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "14:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572298/SaltaDeTurnoImages/hxbxhpwmzursupq5ppox.png",
    Zona: "Sur"
    },
    {
    nombre: "Chango Más Ciudad Judicial",
    direccion: "Av. Fuerza Aérea y Batalla de Salta",
    telefono: "+5493872201017",
    ubicacion: "https://maps.app.goo.gl/v7BHnPQxXHejvxSQA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699538109/SaltaDeTurnoImages/nfpad680blm4qiwvxc8i.png",
    Zona: "Norte"
    },
    {
    nombre: "Del Valle VII",
    direccion: "Hipólito Yrigoyen 339 Local 4 C",
    telefono: "+5493874321971",
    ubicacion: "https://maps.app.goo.gl/JH9AP4AoLUBtaaN5A",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572510/SaltaDeTurnoImages/gvm1ilbyr6ipic0daivo.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Hospital Sudeste",
    direccion: "Manz. E Casa 22 B° Santa Cecilia",
    telefono: "+5493872216217",
    ubicacion: "https://maps.app.goo.gl/1R2yKjAoUGogQUFTA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "23:00",

            dias2: "Domingo",
            apertura3: "09:00",
            cierre3: "01:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572602/SaltaDeTurnoImages/ndts5atorbvwlafukaii.png",
    Zona: "Este"
    },
    {
    nombre: "La Estrella",
    direccion: "Mendoza 701",
    telefono: "+5493874312190",
    ubicacion: "https://maps.app.goo.gl/wK9FtGTRuavdn2t48",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572207/SaltaDeTurnoImages/oyncrz2xssus9td6vh0t.png",
    Zona: "Centro"
    },
    {
    nombre: "Sudamericana",
    direccion: "J. B. Alberdi 102",
    telefono: "+5493874213100",
    ubicacion: "https://maps.app.goo.gl/QgUNgpLtUkXLQNPH8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "21:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572695/SaltaDeTurnoImages/mq14o7gjfaqydatda5cg.png",
    Zona: "Centro"
    },
    {
    nombre: "B+WELL",
    direccion: "Avda. Entre Ríos 202",
    telefono: "+5493873046181",
    ubicacion: "https://maps.app.goo.gl/GT3TQ9L9cMRntj8N6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:30",
            cierre: "23:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-08T08:00:00Z'), new Date('2023-11-23T08:00:00Z')],
        diciembre: [new Date('2023-12-08T08:00:00Z'), new Date('2023-12-23T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572811/SaltaDeTurnoImages/ovavswrxll9fezhuesrh.png",
    Zona: "Centro"
    },
    {
    nombre: "San Pedro",
    direccion: "Celedonio Molina 969",
    telefono: "+5493874345487",
    ubicacion: "https://maps.app.goo.gl/GpXnxsPyK5j6CYfXA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699572922/SaltaDeTurnoImages/eg10lllrddlkq1tun217.png",
    Zona: "Oeste"
    },
    {
    nombre: "Luján",
    direccion: "Pueyrredón 1492",
    telefono: "+5493876200607",
    ubicacion: "https://maps.app.goo.gl/Hrh1C4CUH6P2dHHW8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699573131/SaltaDeTurnoImages/fldlu2ihhdhd84qupybj.png",
    Zona: "Norte"
    },
    {
    nombre: "Dal Bosco",
    direccion: "Ituzaingó 1057",
    telefono: "+5493874232782",
    ubicacion: "https://maps.app.goo.gl/3pBpyKgVes4vU2kZ6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699573220/SaltaDeTurnoImages/ruusndtmjtgdjatptuk3.png",
    Zona: "Centro"
    },
    {
    nombre: "Dr. Favaloro",
    direccion: "Avda. B. Houssay s/n",
    telefono: "+5493874256390",
    ubicacion: "https://maps.app.goo.gl/p52NLQ7YG3YMqANm6",
    horario: {
        semana: {
            dias: "Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "12:00",
            apertura2: "15:00",
            cierre2: "22:00",

            dias2: "Lunes, Martes",
            apertura3: "09:00",
            cierre3: "13:00",
            apertura4: "18:00",
            cierre4: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "12:00",
            apertura2: "15:00",
            cierre2: "22:00",

            dias2: "Domingo",
            apertura3: "08:00",
            cierre3: "12:00",
            apertura4: "15:00",
            cierre4: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699573655/SaltaDeTurnoImages/oia8grrq6wfurjjx78zd.png",
    Zona: "Norte"
    },
    {
    nombre: "Familiar Norte",
    direccion: "Avda. Bolivia 1870",
    telefono: "+5493874390639",
    ubicacion: "",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "Nueva Entre Ríos",
    direccion: "20 de Febrero 185",
    telefono: "+5493874315137",
    ubicacion: "https://maps.app.goo.gl/CKJkgbTiCzaE455q8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "16:30",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699574327/SaltaDeTurnoImages/txvhnz89xoyaprbapgld.png",
    Zona: "Centro"
    },
    {
    nombre: "Esmeralda",
    direccion: "Avda. Juan B. Justo 55",
    telefono: "+5493874394580",
    ubicacion: "https://maps.app.goo.gl/HTLAbaC5KizBig5ZA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "13:00",
            apertura2: "18:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "",
            cierre3: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699574435/SaltaDeTurnoImages/igz2hfjw6wmiplczolq7.png",
    Zona: "Norte"
    },
    {
    nombre: "Par",
    direccion: "Bartolomé Mitre 699",
    telefono: "+5493876833352",
    ubicacion: "https://maps.app.goo.gl/VKb4cpL1u7sejLe57",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:30",
            cierre: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699574529/SaltaDeTurnoImages/dq7ylpa9fzqqzen9f03n.png",
    Zona: "Centro"
    },
    {
    nombre: "Farmacity 251",
    direccion: "Ameghino 593",
    telefono: "+5493874953075",
    ubicacion: "https://maps.app.goo.gl/rAKNx73yqk8HmFrk7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:30",
            cierre: "23:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "23:30",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "23:30",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699574749/SaltaDeTurnoImages/unxiaybidl5xic8vx2pw.png",
    Zona: "Norte"
    },
    {
    nombre: "Familiar Sur",
    direccion: "Los Chalchaleros 4669 B° Bancario",
    telefono: "+5493874247404",
    ubicacion: "https://maps.app.goo.gl/gqNpFXR2bDAR5XaS7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "10:00",
            cierre3: "14:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-09T08:00:00Z'), new Date('2023-11-24T08:00:00Z')],
        diciembre: [new Date('2023-12-09T08:00:00Z'), new Date('2023-12-24T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699574660/SaltaDeTurnoImages/r2uw3ql4wbaggdlhkelw.png",
    Zona: "Sur"
    },
    {
    nombre: "Monserrat III",
    direccion: "Avda. Ex Combatientes de Malvinas - Paseo Salta",
    telefono: "+5493874952733",
    ubicacion: "https://maps.app.goo.gl/fjmMYvt5eKs1TAhAA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699582194/SaltaDeTurnoImages/eeptfjc3uuqs8vhu6hbd.png",
    Zona: "Sur"
    },
    {
    nombre: "B&B Solidaridad",
    direccion: "Manz. 456 A Lote 27 - Etapa 1 B° Solidaridad",
    telefono: "+5493874419549",
    ubicacion: "https://maps.app.goo.gl/GsuMm3oik715opDb6",
    horario: {
        semana: {
            dias: "Miércoles, Jueves, Viernes",
            apertura: "09:30",
            cierre: "23:00",

            dias2: "Lunes, Martes",
            apertura2: "09:00",
            cierre2: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:30",
            cierre: "23:00",

            dias2: "Domingo",
            apertura2: "10:00",
            cierre2: "14:00",
            apertura3: "18:00",
            cierre3: "23:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699582290/SaltaDeTurnoImages/ggwbpbxjosr5bxruk41p.png",
    Zona: "Este"
    },
    {
    nombre: "San Francisco II",
    direccion: "José Tobías 98",
    telefono: "+5493874370690",
    ubicacion: "https://maps.app.goo.gl/4zSdAsoCcVLhn33VA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "07:30",
            cierre: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "07:30",
            cierre: "21:00",

            dias2: "Domingo",
            apertura2: "07:30",
            cierre2: "21:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699582407/SaltaDeTurnoImages/zsp9h3a9hz8fvxl8pr3w.png",
    Zona: "Centro"
    },
    {
    nombre: "San Pantaleón",
    direccion: "Manz. 467 Lote 22 - B° Portal de Lesser",
    telefono: "+5493874980457",
    ubicacion: "https://maps.app.goo.gl/q55z3KmiaDfTvvf77",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699582535/SaltaDeTurnoImages/uye6tiim1htdtgiozyck.png",
    Zona: "Norte"
    },
    {
    nombre: "Medicfarma",
    direccion: "Leguizamón 1457",
    telefono: "+5493876293924",
    ubicacion: "https://maps.app.goo.gl/xkDS7uKYcdE6Yu3x6",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:00",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1700680230/SaltaDeTurnoImages/sgrs0hdmwjkcx055uk1p.png",
    Zona: "Centro"
    },
    {
    nombre: "De la Cruz",
    direccion: "Entre Ríos 1903",
    telefono: "+5493874218611",
    ubicacion: "https://maps.app.goo.gl/Fa3p7S7d8aTqdagJ7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "17:30",
            cierre2: "21:30"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583112/SaltaDeTurnoImages/rfc90bk6o0z7mbawppzx.png",
    Zona: "Oeste"
    },
    {
    nombre: "Las Marías",
    direccion: "Radio Independencia de Tucumán 3052 - Local 3",
    telefono: "+5493874962855",
    ubicacion: "https://maps.app.goo.gl/GJgAymgu4FztatZUA",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "17:30",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",
            apertura2: "18:00",
            cierre2: "21:00",

            dias2: "Domingo",
            apertura3: "10:00",
            cierre3: "13:30",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583280/SaltaDeTurnoImages/p1fpwxwpjtdgvfjawk4b.png",
    Zona: "Sur"
    },
    {
    nombre: "Monserrat Grand Bourg",
    direccion: "Avda. Los Incas 3277",
    telefono: "+5493872451836",
    ubicacion: "https://maps.app.goo.gl/MEwdG9y4nAhJP5PB7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "10:00",
            cierre: "21:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583372/SaltaDeTurnoImages/fwtzqjz1p7ama7ljxnef.png",
    Zona: "Oeste"
    },
    {
    nombre: "Del Valle VIII",
    direccion: "20 de Febrero 28",
    telefono: "+5493874312307",
    ubicacion: "https://maps.app.goo.gl/yHZWUieo5ftMiREs9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583470/SaltaDeTurnoImages/mblkuxv16tvqvg4zzcu7.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Valle XVIII",
    direccion: "Ruta 51 Km. 3 1/2 San Luis",
    telefono: "+5493874972446",
    ubicacion: "https://maps.app.goo.gl/nES8wjchcGCfhx666",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "23:45"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "23:45",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "12:45",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-10T08:00:00Z'), new Date('2023-11-25T08:00:00Z')],
        diciembre: [new Date('2023-12-10T08:00:00Z'), new Date('2023-12-25T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583588/SaltaDeTurnoImages/kwr31ak2i4pvdsd8gunm.png",
    Zona: "Sur"
    },
    {
    nombre: "El Porvenir",
    direccion: "La Rioja 1472",
    telefono: "+5493874314627",
    ubicacion: "https://maps.app.goo.gl/5xFQUyjfzk9WXJPq8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584173/SaltaDeTurnoImages/uj7ecn2hqigiism6qof2.png",
    Zona: "Centro"
    },
    {
    nombre: "Di Marco II",
    direccion: "Tadeo Tadia 484",
    telefono: "+5493876720163 ",
    ubicacion: "https://maps.app.goo.gl/xgpjJm1F73KdUQHs7",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:30",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:30",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584499/SaltaDeTurnoImages/fmqvakhqofqkupzsbiwz.png",
    Zona: "Este"
    },
    {
    nombre: "San Benito",
    direccion: "Carlos Outes 263 V° Lavalle",
    telefono: "",
    ubicacion: "https://maps.app.goo.gl/HZGm6ZAQVPBu9V216",
    estado: "Cerrado Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583872/SaltaDeTurnoImages/da2uvdawmx5fiuyuw1wy.png",
    Zona: "Este"
    },
    {
    nombre: "San Luis",
    direccion: "Cerro Soyano 114",
    telefono: "+5493875065092",
    ubicacion: "https://maps.app.goo.gl/TL2YZZd2ofxmZQza6",
    horario: {
        semana: {
            dias: "Lunes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Martes",
            apertura2: "07:00",
            cierre2: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584263/SaltaDeTurnoImages/teur0fvbm4fnytfzvk3f.png",
    Zona: "Sur"
    },
    {
    nombre: "Farmar Suc. Caseros",
    direccion: "Caseros 745",
    telefono: "+5493874315978",
    ubicacion: "https://maps.app.goo.gl/o1HN2XgiUYqfV14o8",
    estado: "Activo", 
    abierto24Horas: true,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584588/SaltaDeTurnoImages/mlli08lmcncipavpjpbj.png",
    Zona: "Centro"
    },
    {
    nombre: "Tres Cerritos II",
    direccion: "Local 1092 - Portal Salta",
    telefono: "+5493875382556",
    ubicacion: "https://maps.app.goo.gl/1KpdAGxvE611XH28A",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "22:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "08:00",
            cierre: "22:00",

            dias2: "Domingo",
            apertura2: "08:00",
            cierre2: "22:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699583969/SaltaDeTurnoImages/u9xr97y7fjxzyhvhqkhu.png",
    Zona: "Norte"
    },
    {
    nombre: "La Isla",
    direccion: "Manz. A - Lote 1 B° El Círculo 4",
    telefono: "+5493875563667",
    ubicacion: "https://maps.app.goo.gl/wktmYpj4gL1XUp9S9",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "16:30",
            cierre2: "23:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:30",
            apertura2: "16:30",
            cierre2: "23:00",

            dias2: "Domingo",
            apertura3: "10:00",
            cierre3: "13:00",
            apertura4: "17:00",
            cierre4: "23:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584333/SaltaDeTurnoImages/ksm6ndhry7h9leoniha7.png",
    Zona: "Sur"
    },
    {
    nombre: "Monserrat del Centro",
    direccion: "Urquiza 939",
    telefono: "",
    ubicacion: "",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "",
            cierre: ""
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "",
            cierre: "",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Cerrar Permanentemente", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "",
    Zona: ""
    },
    {
    nombre: "San Francisco I",
    direccion: "Deán Funes 477",
    telefono: "+5493874212984",
    ubicacion: "https://maps.app.goo.gl/g3SXnhyQdEiT8DRT8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:30",
            cierre: "13:00",
            apertura2: "16:30",
            cierre2: "21:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "13:00",

            dias2: "Domingo",
            apertura2: "",
            cierre2: "",
            cerrado: true, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584087/SaltaDeTurnoImages/ztqn6wvz75zqjtjobf7i.png",
    Zona: "Centro"
    },
    {
    nombre: "Del Valle XIV",
    direccion: "Avda. Independencia 824",
    telefono: "+5493874260252",
    ubicacion: "https://maps.app.goo.gl/LshmsEFroy5PsgST8",
    horario: {
        semana: {
            dias: "Lunes, Martes, Miércoles, Jueves, Viernes",
            apertura: "08:00",
            cierre: "00:00"
            },
        finDeSemana: {
            dias: "Sábado",
            apertura: "09:00",
            cierre: "00:00",

            dias2: "Domingo",
            apertura2: "09:00",
            cierre2: "00:00",
            cerrado: false, 
            }
        },
    estado: "Activo", 
    abierto24Horas: false,
    turnos: {
        enero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        febrero: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        marzo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        abril: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        mayo: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        junio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        julio: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        agosto: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        septiembre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        octubre: [new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z'), new Date('2023-11-14T08:00:00Z')],
        noviembre: [new Date('2023-11-11T08:00:00Z'), new Date('2023-11-26T08:00:00Z')],
        diciembre: [new Date('2023-12-11T08:00:00Z'), new Date('2023-12-26T08:00:00Z')]
        },
    imagen: "https://res.cloudinary.com/dbvoybaoy/image/upload/v1699584428/SaltaDeTurnoImages/rrolbjtjujud4dawgbb4.png",
    Zona: "Sur"
    }
]