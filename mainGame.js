$( document ).ready(function() {
    
var getFamily = function() { 
  var family = {}; 
  family.members = [];

  family.members[0] = {name: "dad", age: "adult", fear: 100, relationships: [null, 100, 100, 100]};
  family.members[1] = {name: "mom", age: "adult", fear: 100, relationships: [100, null, 100, 100]};
  family.members[2] = {name: "boy", age: "teen", fear: 100, relationships: [100, 100, null, 100]};
  family.members[3] = {name: "girl", age: "child", fear: 100, relationships: [100, 100, 100, null]};

  family.lastName = "Testers";

  return family;
}



var getHouse = function() {
  var house = {};

  house.rooms = [];
  house.rooms[0] = {name: "Living Room", couch: true, chair: true, chandelier: true, rug: true, fireplace: true, plant: true, people: 0};
  house.rooms[1] = {name: "Bathroom", toilet: true, sink: true, bathtub: true, lamp: true, mirror: true, people: 0};
  house.rooms[2] = {name: "Kitchen", sink: true, oven: true, refrigerator: true, toaster: true, people: 0};
  house.rooms[3] = {name: "Master Bedroom", bed: true, dresser: true, fireplace: true, closet: true, mirror: true, people: 0};
  house.rooms[4] = {name: "Second Bedroom", bed: true, dresser: true, desk: true, people: 0};
  house.rooms[5] = {name: "Conservatory", piano: true, chair: true, harp: true, plant: true, people: 0};

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




family = getFamily();
house = getHouse();
timeControl.newMonth();

});