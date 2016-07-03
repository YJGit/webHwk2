"use strict";

var students1 = {
	name: "Amy",
	age: 21,
	hometown: 'Beijing'
};

var students2 = {
	name: "Bob",
	age: 21,
	hometown: 'Beijing'
};

var students3 = {
	name: "Aay",
	age: 22,
	hometown: 'Shanghai'
};

var students4 = {
	name: "gay",
	age: 23,
	hometown: 'Shanghai'
};

var student = [students4];
var student1 = [students1, students3, students4];

function diff(){
	var arguLen = arguments.length;
	if(arguLen !== 2){
		return;
	}

	var stu = [];
	for(var i = 0; i < arguments[1].length; i++){
		var find = false;
		for(var j = 0; j < arguments[0].length; j++){
			if(arguments[1][i].name === arguments[0][j].name){
				find = true;
				break;
			}
		}

		if(!find){
			stu.push(arguments[1][i]);
		}
	}

	return stu;
}

console.log(diff(student, student1));