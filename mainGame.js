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
  this.startDay();
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
timeControl.startDay = function() {
  moveFamilyMembers();

  drawHouse();
};

var moveFamilyMembers = function() {
  var relCheck = 0;
  for (var i = 0; i < house.rooms.length; i++) {
    house.rooms[i].contents.people = [];
  }
  for (i = 0; i < family.members.length; i++) {
    var placeThem = true;

    if (family.members[i].fear == 0) { 
      relCheck = 0;
      for (var rel = 0; rel < family.members.length; rel++) {
        var xRel = i;
        var yRel = rel;
        if (xRel > yRel) {
          xRel = rel;
          yRel = i;
        }
        if (family.relationships[xRel][yRel]) {
          relCheck += family.relationships[xRel][yRel];
        }
      }

      if (relCheck >= (80 * (family.members.length - 1))) {
        placeThem = false;
      }
    }
    
    if (placeThem) {
      var newRoom = Math.floor(Math.random() * 6);
      house.rooms[newRoom].contents.people[i] = true;
    }
  }
};

var drawHouse = function() {
  var peopleInRoom = '';
  for (var i = 0; i < house.rooms.length; i++) { 
    peopleInRoom = '';
    for (var peep = 0; peep < family.members.length; peep++) {
      if (house.rooms[i].contents.people[peep] == true) {
        if (peopleInRoom != '') {
          peopleInRoom += '<br>';
        }
        peopleInRoom += family.members[peep].name;
      }
    }

    $('#roomTd' + i + ' div.roomPeople').html(peopleInRoom);
  }
};


var family = {};
var house = getHouse();
timeControl.newMonth();


});