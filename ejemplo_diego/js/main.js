const DATOS = {
    equipos: [
        {key: "ar", nombre: "Argentina"},
        {key: "br", nombre: "Brasil"},
        {key: "ru", nombre: "Rusia"},
        {key: "al", nombre: "Alemania"},
        {key: "tu", nombre: "Tunez"},
        {key: "po", nombre: "Polonia"}
    ],
    grupos: [
        {letra: "A", equipos: ["ar", "br", "ru", "al"]},
        {letra: "B", equipos: ["ar", "br", "ru", "al"]},
        {letra: "C", equipos: ["ar", "br", "ru", "al"]},
        {letra: "D", equipos: ["ar", "br", "ru", "al"]},
    ],
    partidos: [
        { local: "ar", vicitante: "br", estadio: "El estadio", fecha: "fecha 1" },
        { local: "ar", vicitante: "ru", estadio: "El estadio", fecha: "fecha 2" },
        { local: "ar", vicitante: "al", estadio: "El estadio", fecha: "fecha 3" },
        { local: "br", vicitante: "ru", estadio: "El estadio", fecha: "fecha 4" },
        { local: "br", vicitante: "al", estadio: "El estadio", fecha: "fecha 5" },
        { local: "al", vicitante: "ru", estadio: "El estadio", fecha: "fecha 6" },
    ]
};


$(() => {
    //$.get("", function (datos) {
        app.run(DATOS);
    //})
    
})