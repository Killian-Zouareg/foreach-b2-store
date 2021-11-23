const lion = require('./animals/lion');
const tigre = require('./animals/tigre');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');

function wakeUpTheZoo() {
  lion.roar();
  tigre.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
}

function giveFood() {
  lion.miam();
  tigre.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
}

function closeTheZoo() {
  lion.sleep();
  tigre.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
}

wakeUpTheZoo();