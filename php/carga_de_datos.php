 <?php

    Class Equipo{
        public $nombre;
        
        function __construct($nombre){
            $this->nombre = $nombre;
        }
    }

    Class Grupo{
        public $letra;
        public $equipos;

        function __construct($letra, $equipos){
            $this->letra = $letra;
            $this->equipos = $equipos;
        }
    }

    Class Llave{
        public $equipo1
        public $equipo2

        function __construct($equipo1, $equipo2){
            $this->equipo1 = $equipo1;
            $this->equipo2 = $equipo2;
        }
    }

    $rusia = new Equipo('Rusia');
    $arabiaSaudita = new Equipo('Arabia Saudita');
    $egipto = new Equipo('Egipto');
    $uruguay = new Equipo('Uruguay');

    $grupoA = new Grupo('A', array($rusia, $arabiaSaudita, $egipto, $uruguay));

    $json = json_encode($grupoA);
    header('Content-Type: application/json');
    echo $json;

 ?>

