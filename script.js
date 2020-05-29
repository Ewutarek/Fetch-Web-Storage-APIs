//Api Stuff




fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json())
.then(data => addElement(data))

// function addElement(list)
// {
//   list.forEach( function (list) {
//       let newLi = document.createElement("li");
//       document.getElementById('list').appendChild(newLi);
//       newLi.innerHTML += list; 
//   })
// }

function addElement(list)
{
  list.forEach( function (list) {
    let _a = document.createElement('a');
    let linkText = document.createTextNode(list);
    _a.appendChild(linkText);
    _a.href = "#";
    let newLi = document.createElement("li");
    newLi.appendChild(_a);
    document.getElementById('list').appendChild(newLi);
    // newLi.innerHTML += _a; 
  })
}

function userPosting(_theMessage)
{
    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
    method: 'POST',
    body: JSON.stringify({message: _theMessage.value})
    }).then(function (response) {
    if (response.status == 200) {
        console.log("Ok!")
    } else {console.log("Oh no!")}
    })
}

function mySearchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
