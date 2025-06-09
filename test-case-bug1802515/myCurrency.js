var Application;
(function (Application) {
    var Filters;
    (function (Filters) {
        angular.module('myApp')
            .filter('myCurrency', ['$filter', function ($filter) {
                return function (input) {
                    if (!input)
                        return input;
                    input = parseFloat(input);
                    input = input.toFixed(2);
                    input = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    input = input.substr(0, input.length - 3) + "." + input.substr(input.length - 2);
                    return input;
                };
            }]);
    })(Filters = Application.Filters || (Application.Filters = {}));
})(Application || (Application = {}));
//# sourceMappingURL=myCurrency.js.map