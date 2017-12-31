import angular from "angular"

class navbarCtrl {}

var navbarComponent = {
  templateUrl: "app/components/navbar/pt-navbar.view.html",
  controller: navbarCtrl,
};

export default angular.module("NavbarComponent", [])
  .component("ptNavbar", navbarComponent)
  .name;
