(function(scope) {
    var setGanador = (equipo) => {
        app._ganador = equipo
    }

    return Object.assign(scope, {setGanador});

})(app.logica || (app.logica = {}));
