function bin3(){	
    	var binary=document.getElementById("contents").value;
		var outputStr = binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    		document.getElementById("encrypt").innerHTML=outputStr;		
} 