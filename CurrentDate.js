// a program to get the current date
var currrentday = function(sp){
	today = new Date;
	var dd = today.getDate();
	var mm =today.getMonth()+1;
	var yy = today.getFullYear();

	if (dd<10) dd = '0' +dd;
	 if (mm<10) dd = '0' +mm;
	 return (mm+sp+dd+sp+yyyy);
	};
	console.log(curday('/'));
	console.log(curday('-'));
