'use strict';
function ranNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let salesList = document.getElementById('storeList');

let table = document.getElementById('cookieSales');
console.log(table);

let thead = document.getElementById('table-head');
console.log(thead);

let tableBody = document.getElementById('table-values');
console.log(tableBody);


let allStores = [];
function Cookiestore(name, min, max, ave) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgSale = ave;
  this.custPerHr = [];
  this.cookiesPerHr = [];
  this.totalCookies = 0;

  allStores.push(this);

  this.getCustPerHr = function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHr.push(ranNumb(this.minCust, this.maxCust));
    }
  };

  this.getCookiesPerHr = function () {
    this.getCustPerHr();
    for (let i = 0; i < hours.length; i++) {
      let salesPerHour = (Math.ceil(this.custPerHr[i] * this.avgSale));
      this.cookiesPerHr.push(salesPerHour);
      this.totalCookies += salesPerHour;
    }
  };

  this.render = function () {
    this.getCookiesPerHr();

    // Table Body
    let tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    let cityNameCell = document.createElement('th');
    cityNameCell.textContent = this.name;
    tableRow.appendChild(cityNameCell);

    for (let i = 0; i < hours.length; i++) {
      let item = document.createElement('td');
      item.textContent = this.cookiesPerHr[i];
      tableRow.appendChild(item);
    }
    let cityTotalCell = document.createElement('th');
    cityTotalCell.textContent = this.totalCookies;
    tableRow.appendChild(cityTotalCell);
  };
}

// Table Head
function renderHeader() {
  let row = document.createElement('tr');
  thead.appendChild(row);
  let blank = document.createElement('th');
  row.appendChild(blank);
  for (let i = 0; i < hours.length; i++) {
    let tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    row.appendChild(tableHeader);
  }
  let totalhead = document.createElement('th');
  totalhead.textContent = 'Daily Location Total';
  row.appendChild(totalhead);
}
renderHeader();

// Table Footer
function renderFooter() {
  let row = document.createElement('tr');
  let total = document.createElement('th');
  total.textContent = 'Totals';
  row.appendChild(total);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let colTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      colTotal += allStores[j].cookiesPerHr[i];
      grandTotal += allStores[j].cookiesPerHr[i];
    }

    let footer = document.createElement('th');
    footer.textContent = colTotal;
    row.appendChild(footer);
  }
  let gtotal = document.createElement('th');
  gtotal.textContent = grandTotal;
  row.appendChild(gtotal);
  tableBody.appendChild(row);
}
let seattleList = document.getElementById('seattlelist');
let seattle = new Cookiestore('Seattle', 23, 65, 6.3);
let tokyo = new Cookiestore('Tokyo', 3, 24, 1.2);
let dubai = new Cookiestore('Dubai', 11, 38, 3.7);
let paris = new Cookiestore('Paris', 20, 38, 2.3);
let lima = new Cookiestore('Lima', 2, 16, 4.6);

for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

renderFooter();
