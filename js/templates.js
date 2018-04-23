(function(scope = {}) {
    
    var grupoTemplate = function(data) {
        return `<div class="col-sm-6 col-lg-3"><div style="background-color:black;
        color:#fff9f9; text-align: center"><b>GRUPO ${data.letra} </b></div>
        <table style="width:100%">
            ${data.equipos.map(e => `<tr><td style="border-top-color: transparent;"
            onmouseover="mOver(this)" onmouseout="mOut(this)" abbr="${e.bandera}">
            <img src="../static/img/banderas/${e.bandera}.png" height="22" width="22">
            <strong>${e.nombre}</strong></td></tr>`).join("")}
        </table>
        </div>`;
    }

    return Object.assign(scope, {grupoTemplate});

})(app.templates || (app.templates = {}));
