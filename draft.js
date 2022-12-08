function get_age(born, now) {
      var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
      if (now >= birthday) 
        return now.getFullYear() - born.getFullYear();
      else
        return now.getFullYear() - born.getFullYear() - 1;
    }

document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;
    var dateEntered = new Date(input);
    
       var now = new Date();
        var birthdate = input.split("-");
        var born = new Date(birthdate[0], birthdate[1]-1, birthdate[2]);
        age=get_age(born,now);
     
        console.log(birthdate[2]+" : "+birthdate[1]+" : "+birthdate[0]);
        console.log(age);
    
        if (age<=18)
        {
       alert("Input Error - Age should be greater then or equal to 18");
            return false;
        }
});