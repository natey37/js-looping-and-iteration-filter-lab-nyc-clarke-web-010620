// Code your solution in this file
function findMatching(list, name){
    // console.log(name)
    // console.log(list.filter(function(driverName){
    // driverName.toLowerCase() === name.toLowerCase();}))
    return list.filter(function(driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });

    // return list.filter(function(driverName){
    //     console.log(list.filter(function(driverName))
    //     driverName.toLowerCase() === name.toLowerCase();
    // })
}

function fuzzyMatch(list, letters){
    let lengthOfName = letters.length
    return list.filter(function(driverName){
        return driverName.slice(0, lengthOfName) === letters
    });
}

function matchName(list, name){
    return list.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}