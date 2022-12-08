getAge = (dob, now) => {
    let birthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now >= birthday)
    return now.getFullYear() - dob.getFullYear();
    else
    return now.getFullYear() - dob.getFullYear() - 1;
}

document.getElementById("dateInput").addEventListener("change", funtion() {
    let input = this.value;
    let dateInput = newDate(input);

    let now = new D
})