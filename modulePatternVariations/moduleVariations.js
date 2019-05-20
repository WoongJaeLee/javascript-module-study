var myModule = (function() {
    var module = {},
        privateVal = "hi";

    function privateMethod() {
        console.log("private val");
    }

    module.publicVal = "public val";
    module.publicMethod = function () {
        console.log(privateVal);
    }

    return module;
})();