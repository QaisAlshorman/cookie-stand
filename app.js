' use strict ';


// globally array to the working hours 
const workHourse = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm ',
];
//Global Functio Random Number Of User
function random(min, max) {




  return Math.floor(Math.random() * (max - min + 1) + min)
};

let Seattle = {
  locationNam: Seattel,
  minNumCustmer: 23,
  maxiNubcustmer: 65,
  avgCustmer: 6.3,
  total = 0,

  // Empty Array To Store the Values inside 
  numCustomerperHoure =[],
  // Empty Array To Calcuate This Number of Cookes per Hourse
  numCookesperHoure=[],
  // Function To Calculate the Number of Custmer per hourse

  numCustmerPerHourse: function () {
    for (let i = 0; i < workHourse.length; i++) {

      this.numCustmerPerHourse.push(random(this.maxiNubcustmer, this.minNumCustmer))

    }
  },

  // Function To Calculate The Number Purchesed Cookes 
  numCookesperHoure: function () {
    for (let i = 0; i < w.length; i++) {
      this.numCookesperHoure.push(this.numCustmerPerHourse[i] * this.avgCustmer)

    }

  },







  //===== Render Function =======
  render: function () {
    let parent = document.getElementById('result');
    let shopeName = document.getElement('h3');
    parent.appendChild(shopeName);

    shopeName.textContect = this.locationNam;

    // creating the list

    let unOrderlist = document.createElement('ul');
    parent.appendChild(unOrderlist);


    // li elements in an Array  
    for (let i = 0; i < workHourse.length; i++) {
      let listItem = document.createElement('li');
      unOrderlist.appendChild(listItem);
      //get the text content

      listItem.textContent = `${workHourse[i]}:${numCookesperHoure[i]}  cookes `


      // Calculate The Total
      let totaiItems = document.createElement('li');
      unOrderlist.appendChild(totaiItems)
      totaiItems.textContent = `Total ${this.total}   cookies`;

    }







  }
}

Seattel.numCustmerPerHourse();

Seattle.numCustmerPerHourse();

Seattle.render();







