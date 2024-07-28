let person = {
    name: "John",
    greet: function() {  // function name and variable is not required
        console.log(this.name);
    }
};
person.greet(); // output: John


