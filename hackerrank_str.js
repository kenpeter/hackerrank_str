
function hackerrankInString(s) {
	var str = 'hackerrank';
	var arrStr = str.split('');
	var arr = s.split('');

	if(s.length < str.length)
		return 'NO';

	var j = 0;
	for(var i=0; i<arr.length; i++) {
		var item = arr[i];
	
		// we keep moving, until len matches	
		if(j<str.length && item == arrStr[j])
			j++;
	}	

	if(j == str.length)
		return 'YES';
	else
		return 'NO';
}

var s = 'hereiamstackerrank'; 
var out = hackerrankInString(s);
console.log(out);
