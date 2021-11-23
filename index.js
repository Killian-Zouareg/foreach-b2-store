const lion = require('./animals/lion');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
const cheval = require('./animals/cheval');

function wakeUpTheZoo() {
  lion.roar();
  cheval.roar();
}

function giveFood() {
  lion.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  cheval.miam();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  cheval.sleep();
}



wakeUpTheZoo();