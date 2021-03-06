define(
    ['jquery', 'knockout', './router', 'services/MockProductService', 'services/MockLoginService', 'bootstrap', 'knockout-projections'],
    function($, ko, router, MockProductService, MockLoginService) {
        // Components can be packaged as AMD modules, such as the following:
        ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
        ko.components.register('home-page', { require: 'components/home-page/home' });
        ko.components.register('product-tile', { require: 'components/product-tile/product-tile' });
        ko.components.register('login-page', { require: 'components/login-page/login' });

        // ... or for template-only components, you can just point to a .html file directly:
        ko.components.register('about-page', {
        template: { require: 'text!components/about-page/about.html' }
        });

        // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

        MockLoginService.createUser("anth.richardson@test.com", "testPassword1!");
        // Start the application
        ko.applyBindings({
            route: router.currentRoute,
            productService: new MockProductService(),
            loginService: MockLoginService
        });
    }
);
