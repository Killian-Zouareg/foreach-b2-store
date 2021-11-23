const lion = require('./animals/lion');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const crotal = require('./animals/crotal');

function wakeUpTheZoo() {
  lion.roar();
  mouton.roar();
  singe.roar();
  loup.howling();
  crotal.rattle();
  crotal.hissing();

}

function giveFood() {
  lion.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  crotal.eat();
}

function closeTheZoo() {
  lion.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  crotal.sleep();
}



wakeUpTheZoo();