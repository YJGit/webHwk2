"use strict";

var a = [1.2, 9.3, 10, 1.9];

//冒泡排序
function sortByBubble(){
	if(arguments.length === 0){
		return "error";
	}
	var len = arguments[0].length;
	for(var i = 0; i < len; i++){
		for(var j = 0; j < len - i; j++){
			if(arguments[0][j] > arguments[0][j + 1]){
				var temp = arguments[0][j];
				arguments[0][j] = arguments[0][j + 1];
				arguments[0][j + 1] = temp;
			}
		}
	}
	return arguments[0];
}

//插入排序
function sortByInsert(){
	if(arguments.length === 0){
		return "error";
	}
	var len = arguments[0].length;
	for(var i = 1; i < len; i++){ 
		var j = i; 
		var key = arguments[0][j]; 
		while(j--){ 
			if(arguments[0][j] > key){
				arguments[0][j + 1] = arguments[0][j]; 
			} 
			else{ 
				break; 
			} 
		} 
		arguments[0][j + 1] = key; 
	} 
	return arguments[0];
}

//选择排序
function sortBySelect(){
	if(arguments.length === 0){
		return "error";
	}
	var len = arguments[0].length;
	for (var i = 0; i < len; i++){
        var min = arguments[0][i];
        var k = i;
        for(var j = i + 1; j < len; j++){
            if (min > arguments[0][j]) {
                min = arguments[0][j];
                k = j;
            }
        }
        arguments[0][k] = arguments[0][i];
        arguments[0][i] = min;
    }
    return arguments[0];
}

console.log(sortByBubble(a));
console.log(sortByInsert(a));
console.log(sortBySelect(a));