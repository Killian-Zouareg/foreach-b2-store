const lion = require('./animals/lion');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const cat = require('./animals/cat')

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
  cat.meow();
}

function giveFood() {
  lion.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  cat.eat();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  cat.sleep();
}



wakeUpTheZoo();