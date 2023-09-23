
var baseUrl = 'https://backend.getlinked.ai/'
document.addEventListener("DOMContentLoaded", function () {
    // This code will run when the page loads

    var endpoint = 'hackathon/categories-list';

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText);
                // You can do something with the response data here
            } else {
                console.error('Request failed with status:', this.status);
            }
        }
    });

    xhr.open("GET", baseUrl + endpoint);
    xhr.send();
});

function register(){
    // WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
    "email": "sample@eexample.com",
    "phone_number": "0903322445533",
    "team_name": "Space Explore",
    "group_size": 10,
    "project_topic": "Web server propagation",
    "category": 1,
    "privacy_poclicy_accepted": true
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", `${baseUrl}/hackathon/registration`);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);
}


function contactUs(){
    // WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
    "email": "sample@eexample.com",
    "phone_number": "0903322445533",
    "first_name": "Space Explore",
    "message": "I need further info"
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", `${baseUrl}/hackathon/contact-form`);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);
}
