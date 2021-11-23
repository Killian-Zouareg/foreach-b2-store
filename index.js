const lion = require('./animals/lion');
const singe = require('./animals/singe');

function wakeUpTheZoo() {
  lion.roar();
  singe.roar();
}

function giveFood() {
  lion.miam();
  singe.eat();
}

function closeTheZoo() {
  lion.sleep();
  singe.sleep();
}



wakeUpTheZoo();
