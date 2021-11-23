const lion = require('./animals/lion');
<<<<<<< HEAD
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
=======
const cheval = require('./animals/cheval');

function wakeUpTheZoo() {
  lion.roar();
  cheval.roar();
>>>>>>> feat: ajout du Cheval
}

function giveFood() {
  lion.miam();
<<<<<<< HEAD
  mouton.miam();
  singe.eat();
  loup.miam();
=======
  cheval.miam();
>>>>>>> feat: ajout du Cheval
}

function closeTheZoo() {
  lion.sleep();
<<<<<<< HEAD
  mouton.sleep();
  singe.sleep();
  loup.sleep();
=======
  cheval.sleep();
>>>>>>> feat: ajout du Cheval
}



wakeUpTheZoo();