'use strict';
//Creo 4 clases principales que interactuaran entre si
class User {
  constructor(usuarioID, email, password, age) {
    this.usuarioID = usuarioID;
    this.email = email;
    this.password = password;
    this.age = age;
  }
//Creo un metodo para validar el usuario y brindar acceso al juego
  validarUsuario(proEmail, proPassword) {
    if (proEmail === this.email && proPassword === this.password) {
      alert('¡Bienvenido!'); // and go to Game.
    } else {
      alert('Nombre de usuario o contraseña incorrectos⚠️');
    }
  }
//creo un metodo para crear un nuevo perfil de usuario
  createProfile(newUser, newEmail, newPassword, newAge) {
    this.email = newEmail;
    this.usuarioID = newUser;
    this.password = newPassword;
    this.age = newAge;
  }
}

class Characters {
  constructor(colorSequence, animalSequence, number) {
    this.animalSequence = animalSequence;
    this.colorSequence = colorSequence;
    this.number = number;
  }
}

class Grid {
  constructor(colorSequence, files, columns) {
    this.colorSequence = colorSequence;
    this.files = files;
    this.columns = columns;
  }
}

class Game {
  constructor(level, characters, grid) {
    this.level = level;
    this.characters = characters;
    this.grid = grid;
    this.completeLevel = false;
  }
//creo un metodo para validar si se complet[o el nivel
  completarNivel(isCompleted) {
    this.completeLevel = isCompleted;
  }
//creo un metodo para asignar un nuevo nivel
  whenUser() {
    if (this.completeLevel) {
      this.level += 1;
      alert('¡Nivel completado!');
    }
  }
//creo un metodo para diseñar el nivel, asignando una secuencia de animales y un tipo de grid.
  designLevel() {
    switch (true) {
      case this.level < 10:
        const a1 = this.characters;
        const g1 = this.grid;
        break;
      case this.level >= 10 && this.level < 20:
        const a2 = this.characters;
        const g2 = this.grid;
        break;
      case this.level >= 20 && this.level < 30:
        const a3 = this.characters;
        const g3 = this.grid;
        break;
    }
    //seguiria hasta n niveles
  }
}
//adiero los datos del usuario a la clase User
let usuario1 = new User('userID123', 'usuario@example.com', 'contrasena123', 25); 
//declaro una cosntante con valores que se añadiran a la clase Characters
const a1 = new Characters(['red', 'green', 'blue'], ['lion', 'tiger', 'bear'], 12); creo
//declaro una constante con velores que se añadiran a la clase Grid
const g1 = new Grid(['red', 'green', 'blue'], 4, 3);
//declaro una variable juego que tomara los parametros de Game, añadiendo como argumentos 
//los valores de las constantes a1 y g1
const juego = new Game(1, a1, g1, usuario1);

juego.designLevel(); //aqui dependientemente del nivel cambiaran los argumentos de characters y grid
juego.completarNivel(true);//aqui se verificara si se completa el nivel
juego.whenUser();//aqui se aumentara el valor del nivel si se completa el nivel
juego.designLevel();//al completarse el nivel de nuevo hacemos un metodo que evaluando el numero de nivel
                    //asignara un diseño

