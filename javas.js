var name1=" ";
var n = 0;
function log() {
    name1 = document.getElementById("int").value;
    n=1;
}
function log1(){
    if(n==1){
        alert("hello")
        document.getElementById("name").innerHTML = name1;
    }
}