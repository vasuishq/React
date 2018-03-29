// Ajax call(xmlHttpRequest) initiation
function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function () {
  if(xhr.readyState===4 && xhr.status =="200"){
    callback(xhr.responseText);
  }
}
xhr.send();
}
// function calling
loadjson("data.json", function (text) {
  let data=JSON.parse(text);
  console.log(data);
  basics(data.left);
  education(data.education);
  skill(data.skills)
})
// for main div class calling
// var main=document.queryselector(".main");
// for main div id calling
var main=document.getElementById('main');
// element creation
var left=document.createElement("div");
// add class name to element
left.classList.add("left");
// add id to element
left.setAttribute("id","left");
// adding text to div
left.textContent="profile Details:"
left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);
function basics(leftside){
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h3");
email.textContent=leftside.email;
name.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
email.appendChild(ph);
console.log(left);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
// education div start
var edu=document.createElement("h3");
edu.classList.add("edu1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(educa) {
for(i in educa){
var e1=document.createElement("div");

e1.classList.add("edu2")
e1.textContent=educa[i].course;
var ul=document.createElement("ul");
for(j in educa[i].college){
  var li=document.createElement("li");
  li.textContent=educa[i].college[j];
ul.appendChild(li);
e1.appendChild(ul);
edu.appendChild(e1);
}
}
  }
function skill(skills){
  var skill_title=document.createElement("h4");
  skill_title.classList.add("tech_skills");
  skill_title.textContent="technical skills:";
  skill_title.appendChild(document.createElement("HR"));
  right.appendChild(skill_title);
  // table creation
  var table=document.createElement("table");
  var row="";
  for (var i = 0; i < skills.length; i++) {
  row =row+"<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>"

  }
  table.innerHTML=row;
  skill_title.appendChild(table);
}
