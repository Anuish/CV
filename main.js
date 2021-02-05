var typeString = "SHE is a computing science undegraduate student with her strength in the following programming"
 + " languages respectively: Java, JavaScript and Python. She enjoys solving problems and music. In her spare time,"
 + " she practices the violin, watches finance videoes, and dances to the beat. Currently, she is interested in" 
 + " developing her acquired skills as well as acquiring new skills through internships and mentorships.";
var  i = 0;
var x = document.getElementById("link");
var word = "Check out her works.";
(function type() {
  
  if (i < typeString.length) {
    document.getElementById("typing").innerHTML += typeString.charAt(i);
    i++;
  }
  if(i == typeString.length){
    document.getElementById("head").style.display = "none";
    document.getElementById("link").style.display = "block";

  }
  
  
  setTimeout(type, 10);

}());





