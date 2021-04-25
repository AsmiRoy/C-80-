var line=[];
function get_paragraph(){
    for(var j=1; j<=4;j=j+1){
    console.log("asmi"+j);
    var k=document.getElementById("Input_Box_"+j).value;
    console.log(k);
    line.push(k);
    }
    console.log(line);
    var y=line.join(" ")
    var b=[];
    var l= line.length;
    console.log(l);
    for (var x=0;x<l;x=x+1){ 
        console.log(x);
        b.push("<h4>  "+ line[x]+"</h4>");
    }   
    console.log(b);
    document.getElementById("result").innerHTML=y;
}