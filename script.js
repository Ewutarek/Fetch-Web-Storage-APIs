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

// Database of dank imgaes
let img_1 = "http://elelur.com/data_images/dog-breeds/chihuahua/chihuahua-01.jpg";
let img_2 = "https://i.ytimg.com/vi/ZXA4UN-oQnY/maxresdefault.jpg";
let img_3 = "https://www.dailydot.com/wp-content/uploads/ec2/80/0e2a4c37fc69300576b91e9559695197.jpg";
let img_4 = "https://media.giphy.com/media/MS1brboOXGZyM/giphy.gif"
let img_5 = "https://media.giphy.com/media/26tPoyDhjiJ2g7rEs/giphy.gif";
let imagesARR = [img_1,img_2,img_3,img_4,img_5];

//add card elements
function addElement(list)
{
  
  list.forEach( 

   
    
     function (list) {
    //   function ellipsify (str) {
    //     if (str.length > 10) {
    //         return (str.substring(0, 10) + "...");
    //     }
    //     else {
    //         return str;
    //     }
    // }

    
      let card_div = document.createElement("div");
      card_div.className = "card";
      let card_img = document.createElement("img");
      let content_div = document.createElement("div");
      content_div.className = "content";
      let content_p = document.createElement("p");
      content_p.innerHTML += list;
      card_img.src = imagesARR[Math.floor(Math.random() * imagesARR.length)];
      // card_img.style = "width:100%";
      card_div.appendChild(card_img);
      content_div.appendChild(content_p);
      card_div.appendChild(content_div);
      document.getElementsByClassName("grid-container")[0].appendChild(card_div);

  })
}

//Add elemnts with  <a> tags
// function addElement(list)
// {
//   list.forEach( function (list) {
//     let _a = document.createElement('a');
//     let linkText = document.createTextNode(list);
//     _a.appendChild(linkText);
//     _a.href = "#";
//     let newLi = document.createElement("li");
//     newLi.appendChild(_a);
//     document.getElementById('list').appendChild(newLi);
//     // newLi.innerHTML += _a; 
//   })
// }

//Posting message
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

// Search Function with a tags
// function mySearchFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("list");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

// Search Function without a tags
function mySearchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  //Search function for divs
  // function mySearchFunction() {
  //   // Declare variables
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById('myInput');
  //   filter = input.value.toUpperCase();
  //   div = document.getElementsByClassName();
  //   li = ul.getElementsByTagName('li');
  
  //   // Loop through all list items, and hide those who don't match the search query
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // }

