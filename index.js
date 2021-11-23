const lion = require('./animals/lion');
const tigre = require('./animals/tigre');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const cat = require('./animals/cat')
const crotal = require('./animals/crotal');
const ours = require('./animals/ours');
const ara = require('./animals/ara');
const cheval = require('./animals/cheval');
const panda = require('./animals/panda')
const cheval = require('./animals/cheval');

function wakeUpTheZoo() {
  lion.roar();
  tigre.roar();
  mouton.bele();
  singe.roar();
  loup.howling();
  cat.meow();
  crotal.rattle();
  crotal.hissing();
  cheval.roar();
<<<<<<< HEAD
  ours.roar();
  ara.roar();
  panda.roar();
=======
>>>>>>> 1108039 (feat: added crotale)
}

function giveFood() {
  lion.miam();
  tigre.miam();
  mouton.miam();
  singe.eat();
  loup.miam();
  cat.eat();
  crotal.eat();
  cheval.miam();
  ours.miam();
  ara.miam();
  panda.miam();
}

function closeTheZoo() {
  lion.sleep();
  tigre.sleep();
  mouton.sleep();
  singe.sleep();
  loup.sleep();
  cat.sleep();
  crotal.sleep();
  cheval.sleep();
  ours.sleep();
  ara.sleep();
  panda.sleep();
}

wakeUpTheZoo();