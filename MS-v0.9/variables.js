var x = 'x';
var y = 'y';
var coordx = 1;
var coordy = 1;
var SX = 1;
var SY = 1;
var checkpoints = 0;
var iterations = 0;
var clean = true;

var gridL = 30;
var gridmid = gridL % 2 == 0 ? gridL / 2 : gridL / 2 - 0.5;
var boxL = 15;
var gap = 1;

var stage;
var layer1;
var displayboxs = [];

var startboxtext; var startboxrect;
var endboxtext; var endboxrect;
var pathboxtext; var pathboxrect;
var solveboxtext; var solveboxrect; var solveboxrectOP;
var clearboxrect; var clearboxtext;

var startbutton = false;
var endbutton = false;
var pathbutton = false;
var click = false;