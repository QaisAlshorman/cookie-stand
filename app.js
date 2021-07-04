'use strict ';
// global array for working houers
const workHourse = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm ',
];
//Global Functio Random Number Of User
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Global Array that is contain all the created object
let shopsArray = [];
// constrected function
function Shops(locationName, minCustmer, maxCustmer, avgCoockies) {
  this.locationName = locationName;
  this.minCustmer = minCustmer;
  this.theMaximum = maxCustmer;
  this.avgCoockies = avgCoockies;
  //empty array to calculate the # number each houre
  this.customerEachHourse = [];
  //empty array to caculate coockies per hours
  this.coockiesEachHourse = [];
  this.totalCoockesPerDay = 0;
  shopsArray.push(this);
}
Shops.prototype.calCustmerPerHourse = function () {
  for (let i = 0; i < workHourse.length; i++) {
    this.customerEachHourse.push(random(this.minCustmer, this.theMaximum));
    console.log(this.calCustmerPerHourse);
  }
};
Shops.prototype.calCookiesEachHourse = function () {
  for (let i = 0; i < workHourse.length; i++) {
    let x = Math.floor(this.avgCoockies * this.customerEachHourse[i]);
    this.coockiesEachHourse.push(x), //delete ,
    this.total += this.coockiesEachHourse[i] ,//delete , and edit the property
    this.totalCoockesPerDay += this.coockiesEachHourse[i]; //delete ,
  }
};
new Shops('Seattle', 23, 65, 6.3);
new Shops('Tokyo', 3, 24, 1.2);
new Shops('Dubai', 11, 38, 3.7);
new Shops('Paris', 20, 38, 2.3);
new Shops('Lima', 2, 16, 4.6);
//1. header rendering Global function
let parent = document.getElementById('result');
// creating table
let tabelElement = document.createElement('table');
parent.appendChild(tabelElement);
function makeHeader() {
  // create header
  let headerRaw = document.createElement('tr');
  tabelElement.appendChild(headerRaw);
  // create th
  let firsTh = document.createElement('th');
  headerRaw.appendChild(firsTh);// delete ,
  firsTh.textContent = 'Name';
  //hourse
  for (let i = 0; i < workHourse.length; i++) {
    let theElment = document.createElement('th');
    headerRaw.appendChild(theElment); // add appendChild
    theElment.textContent = workHourse[i];
  }
  let lastTh = document.createElement('th');
  headerRaw.appendChild(lastTh);
  lastTh.textContent = 'Daily total';
}
// prototype fuction
Shops.prototype.render = function () {
  let dataRaw = document.createElement('tr');
  tabelElement.appendChild(dataRaw);
  let nameData = document.createElement('td');
  dataRaw.appendChild(nameData);
  nameData.textContent = this.locationName;
  // coockies data
  for (let i = 0; i < workHourse.length; i++) {
    let tdElement = document.createElement('td');
    dataRaw.appendChild(tdElement);
    tdElement.textContent = this.coockiesEachHourse[i];
  }
  let totalDailyForEachShop = document.createElement('td');
  dataRaw.appendChild(totalDailyForEachShop);
  totalDailyForEachShop.textContent = this.totalCoockesPerDay;
};
// for loop to call the functions



// function make footer
function makeFooter() {
  let footerRaw = document.createElement('tr');
  tabelElement.appendChild(footerRaw);
  let footerTh = document.createElement('th');
  footerRaw.appendChild(footerTh); // change the element to footerRaw.appendChild insted of tabelElement.appendChild
  footerTh.textContent = 'Totals';
  let megTotal = 0;
  console.log(shopsArray);
  for (let i = 0; i < workHourse.length; i++) {
    let totalEachHourse = 0; //move it inside the outer for loop
    for (let j = 0; j < shopsArray.length; j++) {
      totalEachHourse += shopsArray[j].coockiesEachHourse[i];
    }
    megTotal += totalEachHourse;
    let footerDate = document.createElement('td'); //move these 3 lines inside the outer for loop
    footerRaw.appendChild(footerDate);
    footerDate.textContent = totalEachHourse;
  }
  let finalTd = document.createElement('td');
  footerRaw.appendChild(finalTd);
  finalTd.textContent = megTotal;
}
makeHeader();

let locationNameForme = document.getElementById('locationNameForm');
locationNameForme.addEventListener('submit', handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  let locationName = event.target.locationName.value;
  let minCustmer = event.target.minCustmer.value;
  let maxCustmer = event.target.maxCustmer.value;
  let avgCoockies = event.target.avgCoockies.value;

  let newLocation = new Shops(locationName, minCustmer, maxCustmer, avgCoockies);
  newLocation.calCustmerPerHourse();
  newLocation.calCookiesEachHourse();
  newLocation.render();
  tabelElement.textContent = "";
  for (let i = 0; i < shopsArray.length; i++) {
    shopsArray[i].calCustmerPerHourse();
    shopsArray[i].calCookiesEachHourse();
    shopsArray[i].render();
  
  }
  makeFooter();
}

for (let i = 0; i < shopsArray.length; i++) {
  shopsArray[i].calCustmerPerHourse();
  shopsArray[i].calCookiesEachHourse();
  shopsArray[i].render();


  
}
makeFooter();



