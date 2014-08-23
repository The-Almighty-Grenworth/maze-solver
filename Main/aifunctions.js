function left(str) {
	if (typeof str == 'undefined') {
		return displayboxs[coordx - 1][coordy][0];
	}
	else if (str == 'x') {
		return coordx - 1;
	}
	else if (str == 'y') {
		return coordy;
	}
}
function right(str) {
	if (typeof str == 'undefined') {
		return displayboxs[coordx + 1][coordy][0];
	}
	else if (str == 'x') {
		return coordx + 1;
	}
	else if (str == 'y') {
		return coordy;
	}
}

function up(str) {
	if (typeof str == 'undefined') {
		return displayboxs[coordx][coordy - 1][0];
	}
	else if (str == 'x') {
		return coordx;
	}
	else if (str == 'y') {
		return coordy - 1;
	}
}

function down(str) {
	if (typeof str == 'undefined') {
		return displayboxs[coordx][coordy + 1][0];
	}
	else if (str == 'x') {
		return coordx;
	}
	else if (str == 'y') {
		return coordy + 1;
	}
}

function move(str) {
	if (str == 'up') {
		coordx = up(x);
		coordy = up(y);
	}
	else if (str == 'down') {
		coordx = down(x);
		coordy = down(y);
	}
	else if (str == 'left') {
		coordx = left(x);
		coordy = left(y);
	}
	else if (str == 'right') {
		coordx = right(x);
		coordy = right(y);
	}

}

function ChangeCharTo(str) {
	displayboxs[coordx][coordy][0] = str;
}
function ChangeColourTo(str) {
	displayboxs[coordx][coordy][1].setFill(str);
	layer1.draw();
}

function endCheck() {
	if (down() == 'E') {
		//console.log('moving down');
		ChangeCharTo('D');
		ChangeColourTo('#66FF66');
		move('down');
		console.log('found and moved to E!');
		return true;
	}
	else if (right() == 'E') {
		ChangeCharTo('D');
		ChangeColourTo('#66FF66');
		move('right');
		console.log('found and moved to E!');
		return true;
	}
	else if (left() == 'E') {
		ChangeCharTo('D');
		ChangeColourTo('#66FF66');
		move('left');
		console.log('found and moved to E!');
		return true;
	}
	else if (up() == 'E') {
		ChangeCharTo('D');
		ChangeColourTo('#66FF66');
		move('up');
		console.log('found and moved to E!');
		return true;
	}
	else {
		//console.log('failed to find E!');
		return false;
	}
}

function CheckandMove(frst) {
	frst = typeof frst == 'undefined' ? true : false;
	if (checkpoints > 0) {
		if (down() == 'P') {
			//console.log('moving down');
			if (frst) {
				ChangeCharTo('c'+ checkpoints);
			}
			ChangeColourTo('yellow');
			move('down');
			//console.log('sucessflly moved down');
			return true;
		}
		else if (right() == 'P') {
			if (frst) {
				ChangeCharTo('c'+ checkpoints);
			}
			ChangeColourTo('yellow');
			move('right');
			return true;
		}
		else if (left() == 'P') {
			if (frst) {
				ChangeCharTo('c'+ checkpoints);
			}
			ChangeColourTo('yellow');
			move('left');
			return true;
		}
		else if (up() == 'P') {
			if (frst) {
				ChangeCharTo('c'+ checkpoints);
			}
			ChangeColourTo('yellow');
			move('up');
			return true;
		}
		else {
			console.log('this code isnt supposed to run, fix the handler before the main loop of Ai');
			return false;
		}
	}
	else if (checkpoints == 0) {
		if (down() == 'P') {
		//console.log('moving down');
		ChangeCharTo('D');
		ChangeColourTo('#66FF66');
		move('down');
		//console.log('sucessflly moved down');
		return true;
		}
		else if (right() == 'P') {
			ChangeCharTo('D');
			ChangeColourTo('#66FF66');
			move('right');
			return true;
		}
		else if (left() == 'P') {
			ChangeCharTo('D');
			ChangeColourTo('#66FF66');
			move('left');
			return true;
		}
		else if (up() == 'P') {
			ChangeCharTo('D');
			ChangeColourTo('#66FF66');
			move('up');
			return true;
		}
		else {
			console.log('this code isnt supposed to run, fix the handler before the main loop of Ai');
			return false;
		}
	}
}

function avaiablePaths() {
	var paths = 0;
	if (down() == 'P') {
		paths++;
	}
	if (right() == 'P') {
		paths++;
	}
	if (left() == 'P') {
		paths++;
	}
	if (up() == 'P') {
		paths++;
	}
	return paths;
}

function moveTo(str) {
	for (var x = 0; x < gridL; x++) {
		for (var y = 0; y < gridL; y++) {
			if (displayboxs[x][y][0] == str) {
				coordx = x;
				coordy = y;
				console.log('found ' + str);
				return;
			}
		}
	}
	console.log('moveTo failed to find ' + str);
}

function countpls(str) {
	var count = 0;
	for (var x = 0; x < gridL; x++) {
		for (var y = 0; y < gridL; y++) {
			if (displayboxs[x][y][0] == str) {
				count++;
			}
		}
	}
	return count;
}

function RunAItoSolve() {
	if (countpls('S') > 1) {
		if (countpls('E') > 1) {
			alert('error there are more than 1 START and END markers!!!, please check your input')
		}
		else {
			alert('there are more than 1 START markers!!!!, please check your input');
		}
		return false;
	}
	else if (countpls('E') > 1) {
		alert('there are more than 1 END markers!!!!, please check your input');
		return false;
	}
	if (countpls('S') == 0) {
		alert('please add ONE START marker to signify the start of your maze');
		if (countpls('E') == 0) {
		alert('please add ONE END marker to signify the end of your maze');
	}
		return false;
	} 
	if (countpls('E') == 0) {
		alert('please add ONE END marker to signify the end of your maze');
		return false;
	}
	moveTo('S'); 	console.log('at '+coordx+' '+coordy);
	SX = coordx;
	SY = coordy;

	var run = true;
	while(run) {
		iterations++;
		if (endCheck()) {
			run = false;
			console.log('success')
			continue;
		}

		if (avaiablePaths() == 0 && checkpoints > 0) { //checling if there is nowhere to go
			ChangeCharTo('c' + checkpoints);
			ChangeColourTo('yellow');
			moveTo('C' + checkpoints);
			ChangeCharTo('P');
			ChangeColourTo('#E0EBEB');
			//make the checkpoint = P
			for (var x = 0; x < gridL; x++) {
				for (var y = 0; y < gridL; y++) {
					if (displayboxs[x][y][0] == 'c' + checkpoints) {
						displayboxs[x][y][0] = 'N';
					}
				}
			}
			checkpoints--; console.log('checkpoints was decremented');//decrement checkpoints 
			console.log(checkpoints);
			continue;//skip the rest of the loop
		}
		else if (avaiablePaths() == 0 && checkpoints == 0) {
			//the program failed to solve the maze
			alert('the program failed to solve the maze please check your maze for invalid inputs');
			run = false;
			continue;
		}

		if (avaiablePaths() > 1) {
			console.log('created a checkpoint at ' + coordx + ' ' + coordy);
			checkpoints++; console.log(checkpoints);
			displayboxs[coordx][coordy][0] = 'C'+ checkpoints;
			CheckandMove(false);
		}
		else {
			CheckandMove();
		}
	}
	displayboxs[SX][SY][0] = 'S';
	displayboxs[SX][SY][1].setFill('gold');
	layer1.draw();
	for (var x = 0; x < gridL; x++) {
		for (var y = 0; y < gridL; y++) {
			if (displayboxs[x][y][0][0] == 'C' || displayboxs[x][y][0][0] == 'c' || displayboxs[x][y][0] == 'N') {
				if (displayboxs[x][y][0] == 'N') {
					displayboxs[x][y][0] = 'P';
					displayboxs[x][y][1].setFill('#E0EBEB');
				}
				else {
					displayboxs[x][y][0] = 'D';
					displayboxs[x][y][1].setFill('#66FF66');
				}
			}
		}
	}
	layer1.draw();
	alert('Done, please use Clear before trying to solve/ edit the maze again, press clear another time if you wish to completely clear the maze');
	console.log('took ' + iterations + ' iterations to solve/fail');
}

function cleanpls() {
	checkpoints = 0;
	iterations = 0;
	for (var x = 0; x < gridL; x++) {
		for (var y = 0; y < gridL; y++) {
			if (displayboxs[x][y][0] == 'D') {
				displayboxs[x][y][0] = 'P';
				displayboxs[x][y][1].setFill('#E0EBEB');
			}
		}
	}
	layer1.draw();
}


/*var detonate = 0;
			function test() {
					if (detonate == 30) {
						alert('finato');
					}
					else {
						setTimeout(function () {
							console.log('woot' + detonate);
							detonate++;
							test();
						}, 250);
					}
			}*/