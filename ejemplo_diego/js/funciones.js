(function(scope) {
    var getGanador = () => {
        return app._ganador;
    }

    return Object.assign(scope, {getGanador});

})(app.logica || (app.logica = {}));
