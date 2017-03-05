//JavaScript Ex 1
var a_canvas = document.getElementById("a");
a_canvas.width = 1000;
a_canvas.height = 1000;
var a_context = a_canvas.getContext("2d");

var columns = 5;
var rows = 5;

//var x_coord = 0;
//var y_coord = 0;
var x_dimension = a_canvas.width/columns;
var y_dimension = a_canvas.height/rows;


for (var j = 0; j < rows; j++){
	
	for (var i = 0; i < columns; i++){
	var c = (1-i/columns) * (1-j/rows);
		a_context.fillStyle = 'rgba(0,0,0,'+ c +')';
		a_context.fillRect (x_dimension * i , y_dimension * j , x_dimension,y_dimension);

	}


}

//context.beginPath();
//context.moveTo(0, 0);
//context.lineTo(1000, 1000);
//context.stroke();

// rgba('+ color +','+ color+ ','+ color+ '1)



////////////////////////////////////////////////////////////////////////////
//////////////JavaScript Ex 2 -------BCANVAS------ /////////////////////////

var b_canvas = document.getElementById("b");
b_canvas.width = 1000;
b_canvas.height = 1000;
var b_context = b_canvas.getContext("2d");

/*
b_context.beginPath();
b_context.arc(500,500,200,.5*Math.PI,1.5*Math.PI);
b_context.stroke();

b_context.beginPath();
b_context.arc(200,500,200,1.5*Math.PI,.5*Math.PI);
b_context.stroke();
*/


b_context.beginPath();
b_context.moveTo(b_canvas.width/2, 0);
b_context.lineTo(b_canvas.width/2, b_canvas.height);
b_context.stroke();

b_context.beginPath();
b_context.moveTo(0, b_canvas.height/2);
b_context.lineTo(b_canvas.width, b_canvas.height/2);
b_context.stroke();



b_context.translate(b_canvas.width / 2 , b_canvas.height / 2);

/*
	b_context.fillStyle = 'rgba(0,0,0,1)';
	b_context.rotate(45 * Math.PI / 180);
	b_context.fillRect (20, 20, x_dimension,y_dimension);

	b_context.fillStyle = 'rgba(0,0,0,1)';
	b_context.rotate(90 * Math.PI / 180);
	b_context.fillRect (20, 20, x_dimension,y_dimension);

	b_context.fillStyle = 'rgba(0,0,0,1)';
	b_context.rotate(180 * Math.PI / 180);
	b_context.fillRect (20, 20, x_dimension,y_dimension);

	b_context.fillStyle = 'rgba(0,0,0,1)';
	b_context.rotate(270 * Math.PI / 180);
	b_context.fillRect (20, 20, x_dimension,y_dimension);
*/


/* CLEARING ROTATION ANGLE SINCE IT ITS ACUMULATIVE
b_context.beginPath();
b_context.save();
b_context.rotate(45 * Math.PI / 180);
b_context.arc(30,100,100,.5*Math.PI,1.5*Math.PI);
b_context.arc(-30,100,100,1.5*Math.PI,.5*Math.PI);
b_context.closePath();
b_context.fillStyle = 'rgba(50,50,50,.5)';
b_context.fill();
b_context.restore();
*/

//ctx.setTransform(1, 0, 0, 1, 0, 0);

/* ORIGINAL FORM
b_context.beginPath();
b_context.arc(30,100,100,.5*Math.PI,1.5*Math.PI);
b_context.arc(-30,100,100,1.5*Math.PI,.5*Math.PI);
b_context.closePath();
b_context.fillStyle = 'rgba(50,50,50,.5)';
b_context.fill();
*/

// bezierCurbeTo();
// quadraticCurveTo();


/* Petal();
b_context.beginPath();
b_context.moveTo(0,0);
b_context.quadraticCurveTo(100,0,0,200);
b_context.moveTo(0,0);
b_context.quadraticCurveTo(-100,0,0,200);
b_context.stroke();
*/

//SET CENTER b_context.translate(b_canvas.width / 2 , b_canvas.height / 2);

function Petal(pxd,pyd,deg,ac) {
b_context.beginPath();
b_context.rotate(deg);
b_context.moveTo(0,0);
b_context.quadraticCurveTo(pxd,0,0,pyd);
b_context.moveTo(0,0);
b_context.quadraticCurveTo(-pxd,0,0,pyd);
b_context.closePath();
b_context.fillStyle = 'rgba('+ ac +',' +ac + ',' + ac + ',1)';
b_context.fill();
b_context.restore();

};

// Petal(100,200,45);
// Petal(pxd,pyd,deg,ac);

	
//var generaciones = 4 + (Math.floor(Math.random() * 4) );
//var generaciones = 3 ;
//pnumber =  (Math.floor(Math.random() * 5) + 3);

//var generaciones = 2 ;
//var pnumber = 3 ;
var psizey = 400;
var psizex = 100;
var deg = 2 * (Math.atan( psizey / psizex));
var pnumber = (2*Math.PI) / Math.atan( psizey / psizex);
//var j = 0;
//var ac = (255 * (1-j/generaciones);
//var pyd = psize * (i/generaciones);
//var pxd = pyd / 2 ;


//for (var j = 0; j < generaciones; j++){
//var deg = (360 / pnumber) + (180 / pnumber) * (j-1);
//var pyd = psizey / j;
//var pxd = pyd / 2 ;
//var ac = (255 * (1 -(j/generaciones)));
//Petal generation
//for (var i = 0; i < pnumber; i++){	
//	Petal(pxd,pyd,deg,ac);
//}
//}



for (var i = 0; i < pnumber; i++){
Petal(psizex,psizey,deg,0);
}