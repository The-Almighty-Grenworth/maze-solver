function makeCanvas(divID) {
	stage = new Kinetic.Stage({
	container: divID,
	width: gridL * (boxL+2)+20,
	height: gridL * (boxL+2)+200
	});

	layer1 = new Kinetic.Layer();
}

function makeGridarray() {
	var coX = 0;
	var coY = 0;
	for (var x = 0; x < gridL; x++) {
		displayboxs[x] = [];
		for (var y = 0; y < gridL; y++) {
			if (x > 0 & y > 0 & x < gridL-1 & y < gridL-1) {
				displayboxs[x][y] = ['X', new Kinetic.Rect({
					x: coX,
					y: coY,
					width: boxL,
					height: boxL,
					fill: 'black'
				})];
			}
			else {
				displayboxs[x][y] = ['X', new Kinetic.Rect({
					x: coX,
					y: coY,
					width: boxL,
					height: boxL,
					fill: '#6E0DFF'
				})];
			}

			coY += (boxL+gap);
		}
		coX += (boxL+gap);
		coY = 0;
	}
}

function makeButtons() {
	startboxtext = new Kinetic.Text({
	x: 0,
	y: (gridL * (boxL+gap)) + 4,
	text: 'Start',
	fontSize: 24,
	fontFamily: 'Calibri',
	fill: 'black'
	});
	startboxrect = new Kinetic.Rect({
		x: 0,
		y: (gridL * (boxL+gap)) + 4,
		width: startboxtext.width(),
		height: startboxtext.height(),
		fill: 'gold',
		stroke: 'black'
	});
	endboxtext = new Kinetic.Text({
		x: startboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		text: 'End',
		fontSize: 24,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	endboxrect = new Kinetic.Rect({
		x: startboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		width: endboxtext.width(),
		height: endboxtext.height(),
		fill: 'purple',
		stroke: 'black'
	});

	pathboxtext = new Kinetic.Text({
		x: endboxtext.width()+8+startboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		text: 'Path',
		fontSize: 24,
		fontFamily: 'Calibri',
		fill: 'black'
	});
	pathboxrect = new Kinetic.Rect({
		x: endboxtext.width()+8+startboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		width: pathboxtext.width(),
		height: pathboxtext.height(),
		fill: '#E0EBEB',
		stroke: 'black'
	});
	
	eraseboxtext = new Kinetic.Text({
		x: endboxtext.width()+8+startboxtext.width()+8+pathboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		text: 'Erase',
		fontSize: 24,
		fontFamily: 'Calibri',
		fill: 'black'
	});

	eraseboxrect = new Kinetic.Rect({
		x: endboxtext.width()+8+startboxtext.width()+8+pathboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		width: eraseboxtext.width(),
		height: eraseboxtext.height(),
		fill: 'yellow', //
		stroke: 'black'
	});
	clearboxtext = new Kinetic.Text({
		x: endboxtext.width()+8+startboxtext.width()+8+pathboxtext.width()+8+eraseboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		text: 'Clear',
		fontSize: 24,
		fontFamily: 'Calibri',
		fill: 'black'
	});

	clearboxrect = new Kinetic.Rect({
		x: endboxtext.width()+8+startboxtext.width()+8+pathboxtext.width()+8+eraseboxtext.width()+8,
		y: (gridL * (boxL+gap)) + 4,
		width: clearboxtext.width(),
		height: clearboxtext.height(),
		fill: 'silver', //
		stroke: 'black'
	});

	solveboxtext = new Kinetic.Text({
		x: 70,
		y: (gridL * (boxL + gap)) + 12 + startboxrect.height(),
		text: 'Solve!',
		fontSize: 24,
		fontFamily: 'Calibri',
		fill: 'black'
	});

	solveboxrect = new Kinetic.Rect({
		x: 0,
		y: (gridL * (boxL + gap)) + 12 + startboxrect.height(),
		width: startboxtext.width() + endboxtext.width() + pathboxtext.width() +eraseboxtext.width()+ 24,
		height: solveboxtext.height(),
		fill: 'green',
		stroke: 'black'
	});
	solveboxrectOP =new Kinetic.Rect({
		x: 0,
		y: (gridL * (boxL + gap)) + 12 + startboxrect.height(),
		width: startboxtext.width() + endboxtext.width() + pathboxtext.width() + eraseboxtext.width() + 24,
		height: solveboxtext.height(),
		fill: 'green',
		stroke: 'black',
		opacity: 0
	});
}

function addButtonEvents() {
	startboxtext.on('click', function() {
		if (startbutton == true) {
			startbutton = false;
			startboxrect.setFill('gold');
		}
		else {
			erasebutton = false;
			eraseboxrect.setFill('yellow');
			startbutton = true;
			startboxrect.setFill('blue');
			endboxrect.setFill('purple');
			pathboxrect.setFill('#E0EBEB');
			endbutton = false;
			pathbutton = false;
		}
		layer1.draw();
	});
	endboxtext.on('click', function() {
		if (endbutton == true) {
			endbutton = false;
			endboxrect.setFill('purple');
		}
		else {
			erasebutton = false;
			eraseboxrect.setFill('yellow');
			endbutton = true;
			startboxrect.setFill('gold');
			endboxrect.setFill('blue');
			pathboxrect.setFill('#E0EBEB');
			startbutton = false;
			pathbutton = false;
		}
		
		layer1.draw();
	});
	pathboxtext.on('click', function() {
		if (pathbutton == true) {
			pathbutton = false;
			pathboxrect.setFill('#E0EBEB');
		}
		else {
			erasebutton = false;
			eraseboxrect.setFill('yellow');
			pathbutton = true;
			startboxrect.setFill('gold');
			endboxrect.setFill('purple');
			pathboxrect.setFill('blue');
			startbutton = false;
			endbutton = false;
		}
		
		layer1.draw();
	});
	eraseboxtext.on('click', function() {
		if (erasebutton == true) {
			erasebutton = false;
			eraseboxrect.setFill('yellow');
		}
		else {
			erasebutton = true;
			startboxrect.setFill('gold');
			endboxrect.setFill('purple');
			pathboxrect.setFill('#E0EBEB');
			eraseboxrect.setFill("blue");
			pathbutton = false;
			startbutton = false;
			endbutton = false;
		}
		layer1.draw();
	});
	/*testboxrect.on('click', function () {
		var text = "";
		for (var y = 0; y < gridL; y++) {
			text = "";
			for (var x = 0; x < gridL; x++) {
				text += displayboxs[x][y][0] + " ";
			}
			console.log(text);
			console.log('\n');
		}
		console.log('\n');
		test();
	});*/
	solveboxrectOP.on('click', function () {
		solveboxrect.setFill('pink');
		layer1.draw();
		RunAItoSolve();
		solveboxrect.setFill('green');
		layer1.draw();
		clean = false;
	});
	clearboxtext.on('click', function() {
		if (clean) {
			for (var x = 0; x < gridL; x++) {
				for (var y = 0; y < gridL; y++) {
					displayboxs[x][y][0] = 'X';
					if (x > 0 & y > 0 & x < gridL-1 & y < gridL-1) {
						displayboxs[x][y][1].setFill('black');
					}
				}
			}
			layer1.draw();
		}
		else {
			cleanpls();
			clean = true;
		}
	});
}

function addGridEvents() {
	stage.on('mousedown', function() {
	click = true;
	});
	stage.on('mouseup', function() {
		click = false;
	});
	for (var x = 0; x < gridL; x++) {
		for (var y = 0; y < gridL; y++) {
			(function (x,y) {
				if (x > 0 & y > 0 & x < gridL-1 & y < gridL-1) {
					displayboxs[x][y][1].on('mouseover',function() {
						if (click) {
							if (pathbutton == true) {
								displayboxs[x][y][0] = 'P';
								displayboxs[x][y][1].setFill("#E0EBEB");
								layer1.draw();
							}
							else if (erasebutton == true) {
								displayboxs[x][y][0] = 'X';
								displayboxs[x][y][1].setFill("black");
								layer1.draw();
							}
						}
					});
					displayboxs[x][y][1].on('mousedown', function() {
						if (!click) {
							if (pathbutton == true) {
								displayboxs[x][y][0] = 'P';
								displayboxs[x][y][1].setFill("#E0EBEB");
								layer1.draw();
							}
							else if (erasebutton == true) {
								displayboxs[x][y][0] = 'X';
								displayboxs[x][y][1].setFill("black");
								layer1.draw();
							}
							else if (startbutton == true) {
								displayboxs[x][y][0] = 'S';
								displayboxs[x][y][1].setFill("gold");
								startbutton = false;
								startboxrect.setFill('gold');
								layer1.draw();
							}
							else if (endbutton == true) {
								displayboxs[x][y][0] = 'E';
								displayboxs[x][y][1].setFill("purple");
								endbutton = false;
								endboxrect.setFill('purple');
								layer1.draw();
								//var text = ""; //what is this and why
							}
						}
					});
				}
			})(x,y);
		}
	}
}

function addElementsToCanvas() {
	for (var x = 0; x < gridL; x++) {
		for (var y = 0; y < gridL; y++) {
			layer1.add(displayboxs[x][y][1]);
		}
	}
	layer1.add(startboxrect);
	layer1.add(startboxtext);
	layer1.add(endboxrect);
	layer1.add(endboxtext);
	layer1.add(pathboxrect);
	layer1.add(pathboxtext);
	layer1.add(eraseboxrect);
	layer1.add(eraseboxtext);
	layer1.add(clearboxrect);
	layer1.add(clearboxtext);
	layer1.add(solveboxrect);
	layer1.add(solveboxtext);
	layer1.add(solveboxrectOP);
	stage.add(layer1);
}
