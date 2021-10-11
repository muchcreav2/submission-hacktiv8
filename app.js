var i = 0;
function start() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("prosesbar");
    var width = 0;
    var id = setInterval(frame, 40);
    function frame() {
      if (width >= 22) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + " Tahun";
      }
    }
  }
}
