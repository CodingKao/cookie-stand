'use strict';
function ranNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// SEATTLE
let seattleList = document.getElementById('seattleList');
const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  getCustPerHr: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHr.push(ranNumb(this.minCust, this.maxCust));
    }
  },
  getCookiesPerHr: function () {
    this.getCustPerHr();
    for (let i = 0; i < hours.length; i++) {
      let salesPerHour = Math.ceil(this.custPerHr[i] * this.avgSale);
      this.cookiesPerHr.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render() {
    this.getCookiesPerHr();
    for (let i = 0; i < hours.length; i++) {
      let item = document.createElement('li');
      item.textContent = `${hours[i]}; ${this.cookiesPerHr[i]} cookies`;
      seattleList.appendChild(item);
    }
    let item = document.createElement('li');
    item.textContent = `total: ${this.totalCookies} cookies`;
    seattleList.appendChild(item);
  }
};
seattle.render();
console.log(seattle.custPerHr);
console.log(seattle.cookiesPerHr);
console.log(seattle.totalCookies);


// Tokyo
let tokyoList = document.getElementById('tokyoList');
const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  getCustPerHr: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHr.push(ranNumb(this.minCust, this.maxCust));
    }
  },
  getCookiesPerHr: function () {
    this.getCustPerHr();
    for (let i = 0; i < hours.length; i++) {
      let salesPerHour = Math.ceil(this.custPerHr[i] * this.avgSale);
      this.cookiesPerHr.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render() {
    this.getCookiesPerHr();
    for (let i = 0; i < hours.length; i++) {
      let item = document.createElement('li');
      item.textContent = `${hours[i]}; ${this.cookiesPerHr[i]} cookies`;
      tokyoList.appendChild(item);
    }
    let item = document.createElement('li');
    item.textContent = `total: ${this.totalCookies} cookies`;
    tokyoList.appendChild(item);
  }
};
tokyo.render();
console.log(tokyo.custPerHr);
console.log(tokyo.cookiesPerHr);
console.log(tokyo.totalCookies);


// DUBAI
let dubaiList = document.getElementById('dubaiList');
const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  getCustPerHr: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHr.push(ranNumb(this.minCust, this.maxCust));
    }
  },
  getCookiesPerHr: function () {
    this.getCustPerHr();
    for (let i = 0; i < hours.length; i++) {
      let salesPerHour = Math.ceil(this.custPerHr[i] * this.avgSale);
      this.cookiesPerHr.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render() {
    this.getCookiesPerHr();
    for (let i = 0; i < hours.length; i++) {
      let item = document.createElement('li');
      item.textContent = `${hours[i]}; ${this.cookiesPerHr[i]} cookies`;
      dubaiList.appendChild(item);
    }
    let item = document.createElement('li');
    item.textContent = `total: ${this.totalCookies} cookies`;
    dubaiList.appendChild(item);
  }
};
dubai.render();
console.log(dubai.custPerHr);
console.log(dubai.cookiesPerHr);
console.log(dubai.totalCookies);


// PARIS
let parisList = document.getElementById('parisList');
const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  getCustPerHr: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHr.push(ranNumb(this.minCust, this.maxCust));
    }
  },
  getCookiesPerHr: function () {
    this.getCustPerHr();
    for (let i = 0; i < hours.length; i++) {
      let salesPerHour = Math.ceil(this.custPerHr[i] * this.avgSale);
      this.cookiesPerHr.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render() {
    this.getCookiesPerHr();
    for (let i = 0; i < hours.length; i++) {
      let item = document.createElement('li');
      item.textContent = `${hours[i]}; ${this.cookiesPerHr[i]} cookies`;
      parisList.appendChild(item);
    }
    let item = document.createElement('li');
    item.textContent = `total: ${this.totalCookies} cookies`;
    parisList.appendChild(item);
  }
};
paris.render();
console.log(paris.custPerHr);
console.log(paris.cookiesPerHr);
console.log(paris.totalCookies);


// LIMA
let limaList = document.getElementById('limaList');
const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHr: [],
  cookiesPerHr: [],
  totalCookies: 0,
  getCustPerHr: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHr.push(ranNumb(this.minCust, this.maxCust));
    }
  },
  getCookiesPerHr: function () {
    this.getCustPerHr();
    for (let i = 0; i < hours.length; i++) {
      let salesPerHour = Math.ceil(this.custPerHr[i] * this.avgSale);
      this.cookiesPerHr.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  },
  render() {
    this.getCookiesPerHr();
    for (let i = 0; i < hours.length; i++) {
      let item = document.createElement('li');
      item.textContent = `${hours[i]}; ${this.cookiesPerHr[i]} cookies`;
      limaList.appendChild(item);
    }
    let item = document.createElement('li');
    item.textContent = `total: ${this.totalCookies} cookies`;
    limaList.appendChild(item);
  }
};
lima.render();
console.log(lima.custPerHr);
console.log(lima.cookiesPerHr);
console.log(lima.totalCookies);
