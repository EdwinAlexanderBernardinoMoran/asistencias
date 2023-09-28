// $( document ).ready(function(){
//   $('.tabs').tabs();
//   $(".dropdown-trigger").dropdown();
// });

document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.querySelectorAll(".sidenav");
  const sidenavInstance = M.Sidenav.init(sidenav);

  const collapsible = document.querySelectorAll(".collapsible");
  const collapsibleInstance = M.Collapsible.init(collapsible);
})
