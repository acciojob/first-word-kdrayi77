function firstWord(s) {
	let A="";
	for(let x in s){
		if(s[x]==' ')
			break;
		A+=s[x];
	}
	return "'"+A+"'";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
