const found = findMiscreant(people);
alertForMiscreant(people);


function alertForMiscreant (people) {
    for(const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return;
        }
        if(p === "John") {
            setOffAlarms();
            return;
        }
    }
    return;
}

function findMiscreant(people) {
    for(const p of people) {
        if (p === "Don") {
            return "Don";
        }
        if(p === "John") {
            return "John";
        }
    }
    return "";
}