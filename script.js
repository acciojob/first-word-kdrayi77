function firstWord(s) {
  const A=s.split(' ');
	return A[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
