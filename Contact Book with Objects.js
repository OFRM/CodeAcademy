
var friends = {

bill: {
    firstName: "Bill", 
    lastName: "Gates",
    number: "000 999 888",
    address: ["No 1, The grove, Grove Street"]
    },
    
steve: {
    firstName: "Steve", 
    lastName: "Jobs",
    number: "012 345 677",
    address: ["No 2, The grove, Grove Street"]
    },
    
};

var list = function (obj) {
  for (var keys in obj) {
      console.log(keys); 
  }
    
};

var search = function (name) {
    for (var prop in friends) {
        if (friends[prop].firstName === name) {
            console.log(friends[prop]); 
            
        }
    }
};

search("Bill"); 
list(friends); 