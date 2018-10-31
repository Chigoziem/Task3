//days left till next christmas
today=new Date();
	var cmas =new Date(today.getFullYear(),11, 25);
	if (today.getMonth()== && today.getDate()>25) 
	{
		cmas.setFullYear(cmas.getFullYear()+1);
	}
	var one_day = 1000*60*60*24;
	console.log(math.ceil((cmas.getTime()-
		today.getTime())/(one_day))+
	"days left until christmas");
