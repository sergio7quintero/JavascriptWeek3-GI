function privateInfo() {
    let PII = {
        name: "Sergio Quintero",
        SSN: "123-12-1234"
    };

    return {
    getName: function() {
        return PII.name;
    },
    getSSN: function() {
        return PII.SSN;
    }
};
}

let patient2 = privateInfo();

console.log(patient2.names); 
console.log(patient2.ssn); 
console.log(patient2.getName());
console.log(patient2.getSSN()); 
