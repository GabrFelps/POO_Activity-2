var Exibidor = /** @class */ (function () {
    function Exibidor() {
    }
    Exibidor.exibir = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        strings.forEach(function (str) {
            console.log(str);
        });
    };
    return Exibidor;
}());
Exibidor.exibir("a", "b");
Exibidor.exibir("a", "b", "c");
Exibidor.exibir("a", "b", "c", "d");
