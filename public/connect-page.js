const myvid = document.getElementById("ttx");

let userVid = sessionStorage.getItem("nick");
console.log(userVid);

let msg = myvid.textContent;
console.log(msg);
msg = msg.replace('inputed', userVid);
myvid.textContent = msg;