 //Loading the Animation settings
 updateAnimation();

 function updateAnimation() {
        
     //Insert default text
     var name = document.getElementById("name").value;
     if (name == "") {
         name = "hello world";
     }

     //Insert default speed
     var speed = document.getElementById("speed").value;
     if (speed == "") {
         spaed = 2;
     }

     //Updating the iframe name and speed
     var url = "animation.html?text=" + name + "&speed=" + speed + "&bg=blue";
     var iframe = document.getElementsByTagName("iframe")[0];
     iframe.setAttribute("src", url);

     var showUrl = document.getElementsByClassName("url")[0];
     url = url.split("?")[1];

     //Showing the url 
     showUrl.innerText = "?" + url;
 }
