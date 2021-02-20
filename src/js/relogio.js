window.setInterval(ut, 1000);

function ut() {
  var d = new Date();
  document.getElementById("rel").innerHTML = d.toLocaleTimeString();
}
