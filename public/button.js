const continueButton = document.getElementById("continueButton");
continueButton.addEventListener("click", buttonAction);

async function sendPostRequest(url,nickname) {
  console.log("about to send post request");
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'text/plain'},
    body: nickname });
  if (response.ok) {
    let nickname = await response.text();
    console.log(nickname);
    console.log('got POST');
    return nickname;
  } else {
    throw Error(response.status);
  }
}

function buttonAction() {
  let username = document.getElementById("username").value;
  let url = document.getElementById("url").value;
  let nickname = document.getElementById("nickname").value;
  console.log(nickname);
  let data = username+url+nickname;
  console.log("sending",data);
  // sendPostData takes a relative url and the data to send 
  // as inputs and returns a Promise object
  
  sendPostRequest('/videoData',nickname)
    .then(function(nickname) {
      sessionStorage.setItem("nick", nickname);
      window.location="/connect-page.html"; })
    .catch(function(error) {
      console.log("Error occurred:",error)
    });
}






/*sendPostRequest('/videoData', )*/
console.log("starting up");

