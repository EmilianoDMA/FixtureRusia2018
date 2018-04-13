 <?php

    Class Equipo{
        public $nombre;
        public $bandera;
        
        function __construct($nombre, $bandera){
            $this->nombre = $nombre;
            $this->bandera = $bandera;
        }
    }

    Class Grupo{
        public $cont_ganadores = 1;
        public $letra;
        public $equipos;

        function __construct($letra, $equipos){
            $this->letra = $letra;
            $this->equipos = $equipos;
        }
    }

    Class FaseGrupos{
        public $grupos;

        function __construct($grupos){
            $this->grupos = $grupos;
        }
    }

    Class Llave{
        public $equipo1;
        public $equipo2;

        function __construct($equipo1, $equipo2){
            $this->equipo1 = $equipo1;
            $this->equipo2 = $equipo2;
        }
    }

    $rusia = new Equipo('Rusia', 'Rusia');
    $arabiaSaudita = new Equipo('Arabia Saudita', 'ArabiaSaudita');
    $egipto = new Equipo('Egipto', 'Egipto');
    $uruguay = new Equipo('Uruguay', 'Uruguay');

    $grupoA = new Grupo('A', array($rusia, $arabiaSaudita, $egipto, $uruguay));

    $portugal = new Equipo('Portugal', 'Portugal');
    $espania = new Equipo('España', 'España');
    $marruecos = new Equipo('Marruecos', 'Marruecos');
    $iran = new Equipo('Irán', 'Iran');

    $grupoB = new Grupo('B', array($portugal, $espania, $marruecos, $iran));

    $francia = new Equipo('Francia', 'Francia');
    $austrailia = new Equipo('Australia', 'Australia');
    $peru = new Equipo('Perú', 'Peru');
    $dinamarca = new Equipo('Dinamarca', 'Dinamarca');

    $grupoC = new Grupo('C', array($francia, $austrailia, $peru, $dinamarca));

    $argentina = new Equipo('Argentina', 'Argentina');
    $islandia = new Equipo('Islandia', 'Islandia');
    $croacia = new Equipo('Croacia', 'Croacia');
    $nigeria = new Equipo('Nigeria', 'Nigeria');

    $grupoD = new Grupo('D', array($argentina, $islandia, $croacia, $nigeria));

    $brasil = new Equipo('Brasil', 'Brasil');
    $suiza = new Equipo('Suiza', 'Suiza');
    $costa_rica = new Equipo('Costa Rica', 'CostaRica');
    $serbia = new Equipo('Serbia', 'Serbia');

    $grupoE = new Grupo('E', array($brasil, $suiza, $costa_rica, $serbia));

    $alemania = new Equipo('Alemania', 'Alemania');
    $mexico = new Equipo('México', 'Mexico');
    $suecia = new Equipo('Suecia', 'Suecia');
    $corea_del_sur = new Equipo('Corea del Sur', 'CoreaDelSur');

    $grupoF = new Grupo('F', array($alemania, $mexico, $suecia, $corea_del_sur));

    $belgica = new Equipo('Bélgica', 'Belgica');
    $panama = new Equipo('Panamá', 'Panama');
    $tunez = new Equipo('Túnez', 'Tunez');
    $inglaterra = new Equipo('Inglaterra', 'Inglaterra');

    $grupoG = new Grupo('G', array($belgica, $panama, $tunez, $inglaterra));

    $polonia = new Equipo('Polonia', 'Polonia');
    $senegal = new Equipo('Senegal', 'Senegal');
    $colombia = new Equipo('Colombia', 'Colombia');
    $japon = new Equipo('Japón', 'Japon');

    $grupoH = new Grupo('H', array($polonia, $senegal, $colombia, $japon));

    $faseDeGrupos = new FaseGrupos(array($grupoA, $grupoB, $grupoC, $grupoD, $grupoE, $grupoF, $grupoG, $grupoH));

    $json = json_encode($faseDeGrupos);
    header('Content-Type: application/json');
    echo $json;

 ?>

