const findTheOldest = function(people) {
    return people.reduce((oldest,person)=>{
        return ((("yearOfDeath" in person?person.yearOfDeath:2022)-person.yearOfBirth) > (("yearOfDeath" in oldest?oldest.yearOfDeath:2022)-oldest.yearOfBirth)?person:oldest
    );},{name:"empty",yearOfBirth:0,yearOfDeath:0});
};

// Do not edit below this line
module.exports = findTheOldest;
