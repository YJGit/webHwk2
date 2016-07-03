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

var student = [students1, students2, students3];

function search(){
	var arguLen = arguments.length;
	if(arguLen !== 2){
		return;
	}

	var stu = [];
	var i = 0;
	if(typeof arguments[1] === "number"){  //第一种情况
		for(i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].age === arguments[1]){
				stu.push(arguments[0][i]);
			}
		}
		if(stu.length === 0){
			return false;
		}

		return stu;
	}

	else if(typeof arguments[1] === "string"){ //第二种情况
		for(i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].name === arguments[1]){
				return arguments[0][i];
			}
		}
		return false;
	}

	else if(typeof arguments[1] === "object"){ //第三中情况
		for(i = 0; i < arguments[0].length; i++){
			var find = true;
			for(var p in arguments[1]){
				if(arguments[1][p] !== arguments[0][i][p]){
					find = false;
					break;
				}
			}

			if(find){
				stu.push(arguments[0][i]);
			}
		}

		if(stu.length === 0){
			return false;
		}

		return stu;
	}

	return;
}