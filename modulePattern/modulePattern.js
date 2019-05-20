var module = (function() {

   var count = 0;

   return {
       setCount: function(cnt) {
           count = cnt;
       },
       getCount: function() {
           return count;
       }
   };

})();


module.getCount()