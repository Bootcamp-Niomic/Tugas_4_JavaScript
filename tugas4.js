// ====== Tugas 4 JavaScript =====

var AA = 100
var BB = 130
var CC = 80

function rank(){
	if(AA == BB || AA == CC || CC == BB) {
		console.log("Ada nilai yang sama!");
	}else if(AA > BB) {
		if(AA > CC && CC > BB) {
			console.log("1. AA")
			console.log("2. CC") /
			console.log("3. BB")
		}else if(AA > CC && CC < BB){
			console.log("1. AA")
			console.log("2. BB") /
			console.log("3. CC")
		}else {
			console.log("1. CC")
			console.log("2. AA") /
			console.log("3. BB")
		}
	}else if(BB > CC) {
		if(BB > AA && AA > CC) {
			console.log("1. BB")
			console.log("2. AA") /
			console.log("3. CC")
		}else if(BB > AA && AA < CC){
			console.log("1. BB")
			console.log("2. CC") /
			console.log("3. AA")
		}
	}else {
		console.log("1. CC")
		console.log("2. BB") /
		console.log("3. AA")
	}
}

rank()