var JASMINE_CORE_PATTERN = /([\\/]karma-jasmine[\\/])/i;
var createPattern = function (path) {
    return {pattern: path, included: true, served: true, watched: false};
};

var initReporter = function (files, baseReporterDecorator) {
    var jasmineCoreIndex = 0;

    baseReporterDecorator(this);

    files.forEach(function (file, index) {
        if (JASMINE_CORE_PATTERN.test(file.pattern)) {
            jasmineCoreIndex = index;
        }
    });

    files.splice(++jasmineCoreIndex, 0, createPattern(__dirname + '/phantom.reporter.js'));
    files.splice(++jasmineCoreIndex, 0, createPattern(__dirname + '/adapter.js'));
};

initReporter.$inject = ['config.files', 'baseReporterDecorator'];

module.exports = {
    'reporter:callphantom': ['type', initReporter]
};
