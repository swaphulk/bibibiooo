$( document ).ready(function() {
    


function getFamily() {

var family = [];
                 

family[0] = {name: "dad", age: "adult", fear: 100, relationships: [null, 100, 100, 100]};
             
family[1] = {name: "mom", age: "adult", fear: 100, relationships: [100, null, 100, 100]};

family[2] = {name: "boy", age: "teen", fear: 100, relationships: [100, 100, null, 100]};

family[3] = {name: "girl", age: "child", fear: 100, relationships: [100, 100, 100, null]};

return family;
}



function getHouse() {

var house = [];

house[0] = {name: "Living Room", couch: true, chair: true, chandelier: true, rug: true, fireplace: true, plant: true, people: 0};

house[1] = {name: "Bathroom", toilet: true, sink: true, bathtub: true, lamp: true, mirror: true, people: 0};

house[2] = {name: "Kitchen", sink: true, oven: true, refrigerator: true, toaster: true, people: 0};

house[3] = {name: "Master Bedroom", bed: true, dresser: true, fireplace: true, closet: true, mirror: true, people: 0};

house[4] = {name: "Second Bedroom", bed: true, dresser: true, desk: true, people: 0};

house[5] = {name: "Conservatory", piano: true, chair: true, harp: true, plant: true, people: 0};

return house;
}



});