function getAge(dob, now) {
    // Getting Date and Time - Node.js. 
    // If the current moment is greater than or equal to the recent/upcoming birthday date of the user return the present year minus the Users year of birth otherwise if less than minus 1 (year). This is to calculate the amount of years between DOB and the present moment.
    let birthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now >= birthday)
    return now.getFullYear() - dob.getFullYear();
    else
    return now.getFullYear() - dob.getFullYear() - 1;
}
// This will grab the date inputted by the user 
document.getElementById("dateInput").addEventListener("change", function() {
    // The users input (DOB)
    let input = this.value;
    console.log(input);
    // Makes a new date value for the users input 
    let dateInput = new Date(input);
    console.log(dateInput);
// Creates a date of now, and 
    let now = new Date();
    let userDOB = input.split("-");
    let born = new Date(userDOB[0], userDOB[1] - 1, userDOB[2]);
    age = getAge(born, now);

    console.log(userDOB[2] + " : " + userDOB[1] + " : " + userDOB[0]);
    console.log(age);

    if (age <= 18) {

        alert("Sorry! it appears you are under the age of 18 and are not permitted to enter this site!\nTry in X days");
        return false; 
    }
});

