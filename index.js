// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  
  const drivers = ["mohamed", "ahmed", "David", "Aisha"];
  console.log(findMatching(drivers, "mohamed")); 
  console.log(fuzzyMatch(drivers, "ahmed")); 
  
  const driverObjects = [
    { name: "mohamed", hometown: "New York" },
    { name: "ahmed", hometown: "Los Angeles" },
    { name: "David", hometown: "Chicago" }
  ];
  console.log(matchName(driverObjects, "mohamed")); 