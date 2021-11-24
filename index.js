const express = require('express');
const app = express();
const port = 3000;
const lion = require('./animals/lion');
const tigre = require('./animals/tigre');
const loup = require('./animals/loup');
const mouton = require('./animals/mouton');
const singe = require('./animals/singe');
const cat = require('./animals/cat');
const crotal = require('./animals/crotal');
const ours = require('./animals/ours');
const ara = require('./animals/ara');
const cheval = require('./animals/cheval');
const panda = require('./animals/panda');

function wakeUpTheZoo() {
  var awake = lion.roar();
  awake += '<br/>'+tigre.roar();
  awake += '<br/>'+mouton.bele();
  awake += '<br/>'+singe.roar();
  awake += '<br/>'+loup.howling();
  awake += '<br/>'+cat.meow();
  awake += '<br/>'+crotal.rattle();
  awake += '<br/>'+crotal.hissing();
  awake += '<br/>'+cheval.roar();
  awake += '<br/>'+ours.roar();
  awake += '<br/>'+ara.roar();
  awake += '<br/>'+panda.roar();
  return awake
}

function giveFood() {
  var food = lion.eat();
    food += '<br/>'+tigre.eat();
    food += '<br/>'+mouton.eat();
    food += '<br/>'+singe.eat();
    food += '<br/>'+loup.eat();
    food += '<br/>'+cat.eat();
    food += '<br/>'+crotal.eat();
    food += '<br/>'+cheval.eat();
    food += '<br/>'+ours.eat();
    food += '<br/>'+ara.eat();
    food += '<br/>'+panda.eat();
    return food
}

function closeTheZoo() {
  var close = lion.sleep();
  close += '<br/>'+tigre.sleep();
  close += '<br/>'+mouton.sleep();
  close += '<br/>'+singe.sleep();
  close += '<br/>'+loup.sleep();
  close += '<br/>'+cat.sleep();
  close += '<br/>'+crotal.sleep();
  close += '<br/>'+cheval.sleep();
  close += '<br/>'+ours.sleep();
  close += '<br/>'+ara.sleep();
  close += '<br/>'+panda.sleep();
  return close
}

app.get('/close', (req, res) => {
  const close = closeTheZoo()
  res.send(close);
});

app.get('/awake', (req, res) => {
  const awake = wakeUpTheZoo()  
  res.send(awake);
})

app.get('/feed', (req, res) => {
    const food = giveFood()
    res.send(food)
})

app.get('/', (req, res) => {
    res.send('Hello Welcome to the zoo!');
  });

  app.listen(port, () => {
    console.log("Cool que vous puissiez voir ce log")
    process.exit(1)
    console.log(`Example app listening at http://localhost:${port}`)
  })
