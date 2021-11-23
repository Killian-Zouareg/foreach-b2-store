const lion = require('./animals/lion');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
}

function giveFood() {
  lion.miam();
  mouton.miam();
  singe.eat();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
  singe.sleep();
}



wakeUpTheZoo();