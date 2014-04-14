module.exports = function (config) {
    config.set({
        basePath: '../',

        preprocessors: {
            'src/main/webapp/partials/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/main/webapp',
            moduleName: 'partials'
        },

        files: [
            //src
            'src/main/resources/public/bower_components/jquery/dist/jquery.js',
            'src/main/resources/public/bower_components/angular/angular.js',
            'src/main/resources/public/bower_components/angular-ui-router/release/angular-ui-router.js',
            'src/main/resources/public/bower_components/angular-mocks/angular-mocks.js',
//            'src/main/webapp/js/angular/dropdown.js',
            'src/main/resources/public/bower_components/angular-elastic/elastic.js',
            'src/main/resources/public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'src/main/resources/public/bower_components/underscore/underscore.js',
            'src/main/resources/public/bower_components/moment/moment.js',
//            'src/main/webapp/js/bootstrap-datetimepicker.min.js',
            'src/main/resources/public/bower_components/ng-grid/ng-grid-2.0.7.debug.js',
            'src/main/js/StrategyApp.js',
            'src/main/js/play/**/*.js',
//            'src/main/js/app/**/*.js',
//            'src/main/js/admin/**/*.js',
//            'src/main/js/client/**/*.js',
//            'src/main/js/ops/**/*.js',
//            'src/main/js/services/**/*.js',
//            'src/main/js/supervisor/**/*.js',
            'src/main/webapp/partials/**/*.html',
            // test
            'node_modules/jasmine-expect/dist/jasmine-matchers.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'src/test/js/lib/*.js',
            'src/test/js/**/*.js'
        ],

        exclude: [
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
