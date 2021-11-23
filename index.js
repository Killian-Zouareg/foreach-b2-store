const lion = require('./animals/lion');
const tigre = require('./animals/tigre');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const ours = require('./animals/ours');
const ara = require('./animals/ara');
const cheval = require('./animals/cheval');

function wakeUpTheZoo() {
  lion.roar();
  tigre.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
  cheval.roar();
  ours.roar();
  ara.roar();
}

function giveFood() {
  lion.miam();
  tigre.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  cheval.miam();
  ours.miam();
  ara.miam();
}

function closeTheZoo() {
  lion.sleep();
  tigre.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  cheval.sleep();
  ours.sleep();
  ara.sleep();
}

wakeUpTheZoo();