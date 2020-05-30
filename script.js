//Api Stuff

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json())
.then(data => addElement(data))


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
    
      //Create card
      let card_div = document.createElement("div"); 
      card_div.className = "card";
      //Create image
      let card_img = document.createElement("img");
      card_img.src = imagesARR[Math.floor(Math.random() * imagesARR.length)];
     // create content conatiner and add list item to p
      let content_div = document.createElement("div");
      content_div.className = "content";
      let content_p = document.createElement("p");
      content_p.innerHTML += list;
     
      //append p to conent within to created nested element
      content_div.appendChild(content_p);
      card_div.appendChild(content_div);
      card_div.appendChild(card_img);
      document.getElementsByClassName("grid-container")[0].appendChild(card_div);

  })
}

//Posting message
function userPosting(_theMessage)
{
   if (_theMessage.value.length >= 30) //charcter limit 
   {
    alert('Message should be 30 characters or less. Please shorten your message')
   } else
    {
      fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
      method: 'POST',
      body: JSON.stringify({message: _theMessage.value})// push value entered fro user into lis
      }).then(function (response) {
      if (response.status == 200) {
          console.log("Ok!")
          console.log( _theMessage.value)
      } else {console.log("Oh no!")}
      })
    }
    
}

  //Search function for divs
  function mySearchFunction() {
    // Declare variables
    var input, filter, div_card, div_grid, p, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    div_grid = document.getElementsByClassName("grid-container")[0];
    div_card = div_grid.getElementsByClassName("card");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < div_card.length; i++) {
      p = div_card[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        div_card[i].style.display = "";
      } else {
        div_card[i].style.display = "none";

      }
    }
  }
  




  function onToggled() {
    // Get the checkbox
    var checkBox = document.getElementById("modeToggle");
    var theme = document.getElementById('pageTheme');
    if (checkBox.checked == true){
      theme.href = "styles_dark.css";
      console.log('Checked');
    } else {
      theme.href = "styles.css";
        console.log('Not checked');
    }
  }