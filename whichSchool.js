const whichSchool = function(age){ //assign school based on age parameter
  if (age < 13) {
    return "Elementary School"; //U 13 goes to elementary school
  } else if (age <= 18) {
    return "Secondary School"; //13-18 goes to secondary school
  } else {
    return"Lighthouse Labs"; // all other ages go to LHL
  }
}


console.log(whichSchool()); //This will print the school that the person will go to. write the age (argument) in the parentheses.
