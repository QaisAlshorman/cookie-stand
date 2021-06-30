' use strict ';


// globally array to the working hours
const workHourse = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm ',
];
//Global Functio Random Number Of User
function random(min, max) {




  return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
  locationName: 'Seattel',
  minNumCustmer: 23,
  maxiNubcustmer: 65,
  avgCustmer: 6.3,
  total: 0,

  // Empty Array To Store the Values inside
  numCustmerPerHourse: [],
  // Empty Array To Calcuate This Number of Cookes per Hourse
  numCookesperHoure: [],
  // Function To Calculate the Number of Custmer per hourse

  calCustmerPerHourse: function () {
    for (let i = 0; i < workHourse.length; i++) {

      this.numCustmerPerHourse.push(random(this.maxiNubcustmer, this.minNumCustmer));
    }

  },

  // Function To Calculate The Number Purchesed Cookes

  calCookesperHoure: function () {
    for (let i = 0; i < workHourse.length; i++) {
      let value = Math.floor(this.numCustmerPerHourse[i] * this.avgCustmer);
      this.numCookesperHoure.push(value);

      this.total += Math.floor(this.numCookesperHoure[i]);
    }


  },



  //===== Render Function =======

  render: function () {
    let parent = document.getElementById('result');
    let shopeName = document.createElement('h3');
    parent.appendChild(shopeName);

    shopeName.textContect = this.locationName;

    // creating the list

    let unOrderlist = document.createElement('ul');
    parent.appendChild(unOrderlist);


    // li elements in an Array
    for (let i = 0; i < workHourse.length; i++) {
      let listItem = document.createElement('li');
      unOrderlist.appendChild(listItem);
      //get the text content

      // eslint-disable-next-line no-undef
      listItem.textContent = `${workHourse[i]}:${this.numCustmerPerHourse[i]}  cookes `;
      // listItem.textContent = `${workHourse[i]}: cookes `;


    }
    // Calculate The Total
    let totaiItems = document.createElement('li');
    unOrderlist.appendChild(totaiItems);
    totaiItems.textContent = `Total ${this.total}   cookies`;

  }


};

Seattle.calCustmerPerHourse();
Seattle.calCookesperHoure();
Seattle.render();







let Tokyo = {
  locationName: 'Tokyo',
  minNumCustmer: 2,
  maxiNubcustmer: 24,
  avgCustmer: 1.2,
  total: 0,

  // Empty Array To Store the Values inside
  numCustmerPerHourse: [],
  // Empty Array To Calcuate This Number of Cookes per Hourse
  numCookesperHoure: [],
  // Function To Calculate the Number of Custmer per hourse

  calCustmerPerHourse: function () {
    for (let i = 0; i < workHourse.length; i++) {

      this.numCustmerPerHourse.push(random(this.maxiNubcustmer, this.minNumCustmer));
    }

  },

  // Function To Calculate The Number Purchesed Cookes

  calCookesperHoure: function () {
    for (let i = 0; i < workHourse.length; i++) {
      let value = Math.floor(this.numCustmerPerHourse[i] * this.avgCustmer);
      this.numCookesperHoure.push(value);

      this.total += Math.floor(this.numCookesperHoure[i]);
    }


  },



  //===== Render Function =======

  render: function () {
    let parent = document.getElementById('result');
    let shopeName = document.createElement('h3');
    parent.appendChild(shopeName);

    shopeName.textContect = this.locationName;

    // creating the list

    let unOrderlist = document.createElement('ul');
    parent.appendChild(unOrderlist);


    // li elements in an Array
    for (let i = 0; i < workHourse.length; i++) {
      let listItem = document.createElement('li');
      unOrderlist.appendChild(listItem);
      //get the text content

      // eslint-disable-next-line no-undef
      listItem.textContent = `${workHourse[i]}:${this.numCustmerPerHourse[i]}  cookes `;
      // listItem.textContent = `${workHourse[i]}: cookes `;


    }
    // Calculate The Total
    let totaiItems = document.createElement('li');
    unOrderlist.appendChild(totaiItems);
    totaiItems.textContent = `Total ${this.total}   cookies`;

  }


};

Tokyo.calCustmerPerHourse();
Tokyo.calCookesperHoure();
Tokyo.render();









let Dubai = {
  locationName: 'Dubai',
  minNumCustmer: 11,
  maxiNubcustmer: 38,
  avgCustmer: 3.7,
  total: 0,

  // Empty Array To Store the Values inside
  numCustmerPerHourse: [],
  // Empty Array To Calcuate This Number of Cookes per Hourse
  numCookesperHoure: [],
  // Function To Calculate the Number of Custmer per hourse

  calCustmerPerHourse: function () {
    for (let i = 0; i < workHourse.length; i++) {

      this.numCustmerPerHourse.push(random(this.maxiNubcustmer, this.minNumCustmer));
    }

  },

  // Function To Calculate The Number Purchesed Cookes

  calCookesperHoure: function () {
    for (let i = 0; i < workHourse.length; i++) {
      let value = Math.floor(this.numCustmerPerHourse[i] * this.avgCustmer);
      this.numCookesperHoure.push(value);

      this.total += Math.floor(this.numCookesperHoure[i]);
    }


  },



  //===== Render Function =======

  render: function () {
    let parent = document.getElementById('result');
    let shopeName = document.createElement('h3');
    parent.appendChild(shopeName);

    shopeName.textContect = this.locationName;

    // creating the list

    let unOrderlist = document.createElement('ul');
    parent.appendChild(unOrderlist);


    // li elements in an Array
    for (let i = 0; i < workHourse.length; i++) {
      let listItem = document.createElement('li');
      unOrderlist.appendChild(listItem);
      //get the text content

      // eslint-disable-next-line no-undef
      listItem.textContent = `${workHourse[i]}:${this.numCustmerPerHourse[i]}  cookes `;
      // listItem.textContent = `${workHourse[i]}: cookes `;


    }
    // Calculate The Total
    let totaiItems = document.createElement('li');
    unOrderlist.appendChild(totaiItems);
    totaiItems.textContent = `Total ${this.total}   cookies`;

  }


};

Dubai.calCustmerPerHourse();
Dubai.calCookesperHoure();
Dubai.render();







let Paris = {
  locationName: 'Paris',
  minNumCustmer: 20,
  maxiNubcustmer: 38,
  avgCustmer: 2.3,
  total: 0,

  // Empty Array To Store the Values inside
  numCustmerPerHourse: [],
  // Empty Array To Calcuate This Number of Cookes per Hourse
  numCookesperHoure: [],
  // Function To Calculate the Number of Custmer per hourse

  calCustmerPerHourse: function () {
    for (let i = 0; i < workHourse.length; i++) {

      this.numCustmerPerHourse.push(random(this.maxiNubcustmer, this.minNumCustmer));
    }

  },

  // Function To Calculate The Number Purchesed Cookes

  calCookesperHoure: function () {
    for (let i = 0; i < workHourse.length; i++) {
      let value = Math.floor(this.numCustmerPerHourse[i] * this.avgCustmer);
      this.numCookesperHoure.push(value);

      this.total += Math.floor(this.numCookesperHoure[i]);
    }


  },



  //===== Render Function =======

  render: function () {
    let parent = document.getElementById('result');
    let shopeName = document.createElement('h3');
    parent.appendChild(shopeName);

    shopeName.textContect = this.locationName;

    // creating the list

    let unOrderlist = document.createElement('ul');
    parent.appendChild(unOrderlist);


    // li elements in an Array
    for (let i = 0; i < workHourse.length; i++) {
      let listItem = document.createElement('li');
      unOrderlist.appendChild(listItem);
      //get the text content

      // eslint-disable-next-line no-undef
      listItem.textContent = `${workHourse[i]}:${this.numCustmerPerHourse[i]}  cookes `;
      // listItem.textContent = `${workHourse[i]}: cookes `;


    }
    // Calculate The Total
    let totaiItems = document.createElement('li');
    unOrderlist.appendChild(totaiItems);
    totaiItems.textContent = `Total ${this.total}   cookies`;

  }


};

Paris.calCustmerPerHourse();
Paris.calCookesperHoure();
Paris.render();





let Lima = {
  locationName: 'lima',
  minNumCustmer: 2,
  maxiNubcustmer: 16,
  avgCustmer: 4.6,
  total: 0,

  // Empty Array To Store the Values inside
  numCustmerPerHourse: [],
  // Empty Array To Calcuate This Number of Cookes per Hourse
  numCookesperHoure: [],
  // Function To Calculate the Number of Custmer per hourse

  calCustmerPerHourse: function () {
    for (let i = 0; i < workHourse.length; i++) {

      this.numCustmerPerHourse.push(random(this.maxiNubcustmer, this.minNumCustmer));
    }

  },

  // Function To Calculate The Number Purchesed Cookes

  calCookesperHoure: function () {
    for (let i = 0; i < workHourse.length; i++) {
      let value = Math.floor(this.numCustmerPerHourse[i] * this.avgCustmer);
      this.numCookesperHoure.push(value);

      this.total += Math.floor(this.numCookesperHoure[i]);
    }


  },



  //===== Render Function =======

  render: function () {
    let parent = document.getElementById('result');
    let shopeName = document.createElement('h3');
    parent.appendChild(shopeName);

    shopeName.textContect = this.locationName;

    // creating the list

    let unOrderlist = document.createElement('ul');
    parent.appendChild(unOrderlist);


    // li elements in an Array
    for (let i = 0; i < workHourse.length; i++) {
      let listItem = document.createElement('li');
      unOrderlist.appendChild(listItem);
      //get the text content

      // eslint-disable-next-line no-undef
      listItem.textContent = `${workHourse[i]}:${this.numCustmerPerHourse[i]}  cookes `;
      // listItem.textContent = `${workHourse[i]}: cookes `;


    }
    // Calculate The Total
    let totaiItems = document.createElement('li');
    unOrderlist.appendChild(totaiItems);
    totaiItems.textContent = `Total ${this.total}   cookies`;

  }


};

Lima.calCustmerPerHourse();
Lima.calCookesperHoure();
Lima.render();







