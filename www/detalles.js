var API_BASE_URL = "http://localhost:8080/restaurapp-api/restaurantes";
var USERNAME = "admin";
var PASSWORD = "admin";

$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }

});
idrestaurante = location.search.substring(1,location.search.length);
console.log(idrestaurante);
getdetailrestaurante();
getlistrest();



function getdetailrestaurante() {

	var url = API_BASE_URL + '/'+idrestaurante;

	$("#restaurante_result_detail").text('');
	
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
					var restaurante = data;
					$('<strong>' + restaurante.nombre +'</strong>').appendTo($('#restaurante_result_detail'));
					$('<p>').appendTo($('#restaurante_result_detail'));	
					$('<h6>' + restaurante.creador+ '</h6>').appendTo($('#restaurante_result_detail'));
					$('<h6>'+ restaurante.direccion + '</h6>').appendTo($('#restaurante_result_detail'));
					$('<h6>'+ restaurante.email + '</h6>').appendTo($('#restaurante_result_detail'));
					$('<h6>'+ restaurante.horario + '</h6>').appendTo($('#restaurante_result_detail'));
					$('<h6>'+ restaurante.provincia + '</h6>').appendTo($('#restaurante_result_detail'));
					$('<h6>'+ restaurante.telefono +'</h6>').appendTo($('#restaurante_result_detail'));
					
	}).fail(function() {
		$("#restaurante_result_detail").text("El restaurante no existe.");
	});

}

function getlistrest() {

	var url = API_BASE_URL +'/opinion/'+idrestaurante;

	$("#restaurante_result_opinion").text('');
	
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var big = data;

				$.each(big, function(i, v) {

					var opiniones = v;
						$.each(opiniones, function(i, v) {
							var opinion = v;
							console.log(opinion.titulo);

							if (opinion.titulo == null){
							}
							else {	
							$('<strong>' + opinion.titulo + '</strong>').appendTo($('#restaurante_result_opinion'));
							$('<p>').appendTo($('#restaurante_result_opinion'));	
							$('<h6>' + opinion.username + '</h6>').appendTo($('#restaurante_result_opinion'));
							$('<h6>' + opinion.puntuacion + '</h6>').appendTo($('#restaurante_result_opinion'));
							}
					
					});
				});

	}).fail(function() {
		$("#restaurante_result_opinion").text("No hay opiniones.");
	});

}


