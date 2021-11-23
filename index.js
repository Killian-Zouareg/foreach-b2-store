const lion = require('./animals/lion');
const mouton = require('./animals/mouton');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
}

function giveFood() {
  lion.miam();
  mouton.miam();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
}

wakeUpTheZoo();
