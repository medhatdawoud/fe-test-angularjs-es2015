import angular from 'angular';

class navbarCtrl {}

const navbarComponent = {
  templateUrl: 'app/components/navbar/pt-navbar.view.html',
  controller: navbarCtrl,
};

export default angular.module('NavbarComponent', [])
  .component('ptNavbar', navbarComponent)
  .name;
