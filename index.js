const lion = require('./animals/lion');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const ours = require('./animals/ours');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
  ours.roar();
}

function giveFood() {
  lion.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  ours.miam();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  ours.sleep();
}

wakeUpTheZoo();