'use strict';

(function () {
    angular
        .module('peachtreeBank')
        .component('ptNavbar', {
            template:`
                <nav class="navbar navbar-default peachtree-navbar">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">
                                <img alt="Brand" src="assets/images/logo.jpg">
                            </a>
                        </div>
                    </div>
                </nav>
            `,
            bindings: {
                date: "=",
            },
            controllerAs: "model",
            controller: function () {
                var model = this;
            }
        });
})();