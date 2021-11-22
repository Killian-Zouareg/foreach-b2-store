const lion = require('./animals/lion');

function wakeUpTheZoo() {
  lion.roar();
}

function giveFood() {
  lion.miam();
}

function closeTheZoo() {
  lion.sleep();
}

wakeUpTheZoo();
