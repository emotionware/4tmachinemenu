<script>



 $(document).ready(function () { $("#IDSYSUSER").on("change", 

 function (event) { 

 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 

   var value = $("#IDSYSUSER").val(); 
   
   //alert(value.value);
   
   //Completando nombre a partir del ID
   
   
    $(document).ready(function () {
            $.ajax({
                url: "/obtenervalor" + '?sentencia=' + 'select NAME FROM TBLSYSUSER WHERE IDSYSUSER=' + value.value
            }).then(function (data) {

 			$('#NOMBRE').val(data);

            });
        });
   
    $(document).ready(function () {
            $.ajax({
                url: "/obtenervalor" + '?sentencia=' + 'select EMAIL FROM TBLSYSUSER WHERE IDSYSUSER=' + value.value
            }).then(function (data) {

 			$('#EMAIL').val(data);

            });
        });

 });}); 




$(document).ready(function () { $("#IDSUPERVISOR").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDSUPERVISOR").val(); 
 });}); 

 $(document).ready(function () { $("#NOMBRE").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#NOMBRE").val(); 
 });}); 

 $(document).ready(function () { $("#EMAIL").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#EMAIL").val(); 
 });}); 

 $(document).ready(function () { $("#TELEFONO").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#TELEFONO").val(); 
 });}); 

 $(document).ready(function () { $("#IDGERENTE").on("change", 
 function (event) { 
 // var type = event.args.type; // keyboard, mouse or null depending on how the value was changed. 
   // var value = $("#IDGERENTE").val(); 
 });}); 

 </script>