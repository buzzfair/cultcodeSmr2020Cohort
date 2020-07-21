// Create an "x" button and append it to each list item
var myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  var x = document.createTextNode("\u0058");
  span.classList.add("hide");
  span.appendChild(x);
  myList[i].appendChild(span);
}

// Click on x to hide the current list item
var hide = document.getElementsByClassName("hide");
var i;
for (i = 0; i < hide.length; i++) {
  hide[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a check and change styling when clicking on a list item
var list = document.querySelector('ul');
list.classList.add("toDoList");
list.addEventListener("click", function(event) {
  if (event.target.className == "") {
    event.target.classList.toggle("checked");
  } else {
      if (event.target.className == "checked") {
        event.target.classList.toggle("hide");
      }
  }
});


// Create a new list item when clicking on the "Add" button
var button = document.body.querySelector("button");
button.addEventListener ("click", function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Add a to-do item");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


  let span = document.createElement("span");
  let txt = document.createTextNode("\u0058");
  span.classList.add("hide");
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < hide.length; i++) {
    hide[i].addEventListener("click", function() {
      var div = this.parentElement;
      div.style.display = "none";
    })
  }
});
