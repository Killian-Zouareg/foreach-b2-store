const lion = require('./animals/lion');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const ara = require('./animals/ara');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
  ara.roar();
}

function giveFood() {
  lion.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  ara.miam();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  ara.sleep();
}

wakeUpTheZoo();