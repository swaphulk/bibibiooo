$( document ).ready(function() {
    
var getFamily = function() { 
  var family = {}; 
  family.members = [];

  family.members[0] = {name: "dad", age: "adult", fear: 100};
  family.members[1] = {name: "mom", age: "adult", fear: 100};
  family.members[2] = {name: "boy", age: "teen", fear: 100};
  family.members[3] = {name: "girl", age: "child", fear: 100};

  family.relationships = [
    [null, 100,  100,  100],
    [null, null, 100,  100],
    [null, null, null, 100]
  ];

  family.lastName = "Testers";

  return family;
}

var getHouse = function() {
  var house = {};

  house.rooms = [];
  house.rooms[0] = {name: "Living Room", contents: {'people': [], 'objects': ['couch', 'chair', 'chandelier', 'rug', 'fireplace', 'plant']}};
  house.rooms[1] = {name: "Bathroom", contents: {'people': [], 'objects': ['toilet', 'sink', 'bathtub', 'lamp', 'mirror']}};
  house.rooms[2] = {name: "Kitchen", contents: {'people': [], 'objects': ['sink', 'oven', 'refrigerator', 'toaster']}};
  house.rooms[3] = {name: "Master Bedroom", contents: {'people': [], 'objects': ['bed', 'dresser', 'fireplace', 'closet']}}; 
  house.rooms[4] = {name: "Second Bedroom", contents: {'people': [], 'objects': ['bed', 'dresser', 'desk']}};
  house.rooms[5] = {name: "Conservatory", contents: {'people': [], 'objects': ['piano', 'chair', 'harp', 'plant']}};

  return house;
}

var timeControl = {'currentDay': 25, 'startDay' : 25}; 
timeControl.newMonth = function() {  // called at the start of the month to initialize days, family, health?, etc
  this.currentDay = this.startDay;  
  family = getFamily();
};
timeControl.getSetStartDay = function(newDay) { 
  if (newDay) {
    this.startDay = newDay;
  }
  return this.startDay;
}
timeControl.nextDay = function() {  // called at the end of a day (after attacks) 
  if (this.currentDay == 31) {
    this.newMonth();
    return;
  }
  this.currentDay++;
};




var family = {};
var house = getHouse();
timeControl.newMonth();


});