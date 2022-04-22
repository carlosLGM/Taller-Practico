function myFunction() {
  var x = document.getElementById("telefono-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}$("#menu-btn").click(function(){
        $(".telefono-menu").toggle();
    });
