var API_BASE_URL = "http://localhost:8080/restaurapp-api/restaurantes";
var USERNAME = "admin";
var PASSWORD = "admin";


$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }

});
getlistrest();

$("#button_list_rest").click(function(e) {
	e.preventDefault();
	getlistrest();
});


function getlistrest() {

	var url = API_BASE_URL ;

	$("#restaurantes_result").text('');
	
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var big = data;

				$.each(big, function(i, v) {

					var small = v;
					$.each(small, function(i, v) {
						var restaurantes = v;
					console.log(restaurantes.nombre);

					if (restaurantes.nombre == null){
					}
					else {	
					var id= restaurantes.idrestaurante;
					$('<a href="detalles.html?'+id+'" <h4> Name: ' + restaurantes.nombre + '</h4></a>').appendTo($('#restaurantes_result'));
					$('<p>').appendTo($('#restaurantes_result'));	
					}
					
				});
				});

	}).fail(function() {
		$("#restaurantes_result").text("No gists.");
	});

}

