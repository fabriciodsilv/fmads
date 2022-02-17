function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__sinfat_plugin = '<table id="_sinfat_plugin_table">';
tableHTML__sinfat_plugin += 	'<tr>';
tableHTML__sinfat_plugin += 		'<th>Mapa</th>';
tableHTML__sinfat_plugin += 		'<th>Código CONSEMA</th>';
tableHTML__sinfat_plugin += 		'<th>FCEI</th>';
tableHTML__sinfat_plugin += 		'<th>Data de Emissão</th>';
tableHTML__sinfat_plugin += 		'<th>Descrição</th>';
tableHTML__sinfat_plugin += 		'<th>Processo</th>';
tableHTML__sinfat_plugin += 		'<th>Porte</th>';
tableHTML__sinfat_plugin += 		'<th>Potencial poluidor</th>';
tableHTML__sinfat_plugin += 		'<th>Razão Social</th>';
tableHTML__sinfat_plugin += 		'<th>Tipo da Licença</th>';
tableHTML__sinfat_plugin += 	'</tr>';
tableHTML__sinfat_plugin += 	'<tr>';
tableHTML__sinfat_plugin += 		'<td></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Código CONSEMA"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar FCEI"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar Data de Emissão"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar Descrição"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar Número do processo"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Porte"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar Potencial poluidor"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Razão Social"></td>';
tableHTML__sinfat_plugin += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar Tipo da Licença"></td>';
tableHTML__sinfat_plugin += 	'</tr>';

var _sinfat_plugin_IDs = Object.keys(_sinfat_plugin._layers);
for (var i=0; i < _sinfat_plugin_IDs.length; i++){
	var feature = _sinfat_plugin._layers[_sinfat_plugin_IDs[i]].feature;
	tableHTML__sinfat_plugin += '<tr>';
	tableHTML__sinfat_plugin += 	'<td onclick="goToMap(_sinfat_plugin, ' + _sinfat_plugin_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Código CO'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Código do'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Data de Em'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Descriçã'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Número do'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Porte do E'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Potencial'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Razão Soc'] + '</td>';
	tableHTML__sinfat_plugin += 	'<td>' + feature.properties['Tipo da Li'] + '</td>';
	tableHTML__sinfat_plugin += '</tr>';
}

tableHTML__sinfat_plugin += '</table>';
document.getElementById('_sinfat_plugin_tab').innerHTML = tableHTML__sinfat_plugin;

