	const num = Math.ceil(Math.random()* 10);
	const gnum = prompt ('Guess the number between 1 and 10 inclusive');
	 if (gnum == num) 
	 	console.log('Matched')
	  else
	  	console.log('Not Matched, the number was $(num)');