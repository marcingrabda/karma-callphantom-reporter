(function (window) {
    var env = jasmine.getEnv();
    env.addReporter(PhantomReporter);
})(window);
