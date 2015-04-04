
/*module.exports.first = function(){
	console.log('Hi from first module');
}

module.exports.second = function(){
	console.log('Hi from second module');
}
*/

module.exports = function(name, age){
	this.name = name;
	this.age = age;
	this.about = function(){
		console.log(this.name + ' is ' + this.age + ' years old.');
	}
}