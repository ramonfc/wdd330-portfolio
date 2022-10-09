const Human = {
    arms: 2,
    legs: 2,
    change: function(){
        return `${this.realName} goes to a box and come out as ${this.name}`;
    }
}

const SuperHuman = Object.create(Human);
SuperHuman.name = "name needed";
SuperHuman.realName = "real name needed";

SuperHuman.init = function(name,realName){
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}

const batman = Object.create(SuperHuman);
batman.init('Batman','Bruce Wayne');

console.log(batman.change());

