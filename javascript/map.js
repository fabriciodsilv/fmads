var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE

var googleStreet = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google | Desenvolvido por Fabricio Durante</a>'
});
baseMaps["Google Maps"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google | Desenvolvido por Fabricio Durante</a>'
});
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google | Desenvolvido por Fabricio Durante</a>'
});
googleHybrid.addTo(map);
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _sinfat_plugin = L.geoJSON(_sinfat_plugin_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_0'})},
			style: function (feature) {
				if ( feature.properties["Tipo da Li"] == 'Ampliação LAI') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(129, 200, 110, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Ampliação LAP') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(94, 26, 212, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Autorização Ambiental') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(235, 228, 128, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Certidão de Atividade Não Constante da Resolução CONSEMA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(214, 141, 69, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Certidão de Conformidade Ambiental') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(122, 179, 239, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Licença Ambiental de Instalação') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(184, 47, 218, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Licença Ambiental de Operação') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(215, 64, 50, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Licença Ambiental de Operação de Correção') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(128, 132, 217, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Licença Ambiental Prévia') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(123, 215, 223, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Licença Ambiental Prévia com dispensa de Licença Ambiental de Instalação') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(223, 99, 142, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Renovação AuA') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(201, 26, 160, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Renovação LAI') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(76, 208, 164, 1.00)'
					}
				} else if ( feature.properties["Tipo da Li"] == 'Renovação LAO') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 5.0,
						weight: 2.0,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(35, 225, 76, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4></h4>'  +
							'<b>FCEI:</b>&ensp;' + feature.properties['Código do'] + '<br/>' +
							'<b>PROCESSO:</b>&ensp;' + feature.properties['Número do'] + '<br/>' + '<br/>' +							
							'<b>CÓDIGO CONSEMA:</b>&ensp;' + feature.properties['Código CO'] + '<br/>' +
							'<b>ATIVIDADE:</b>&ensp;' + feature.properties['Descriçã'] + '<br/>' +
							'<b>PORTE:</b>&ensp;' + feature.properties['Porte do E'] + '<br/>' +
							'<b>POTENCIAL POLUIDOR:</b>&ensp;' + feature.properties['Potencial'] + '<br/>' + '<br/>' +							
							'<b>EMITIDO EM:</b>&ensp;' + feature.properties['Data de Em'] + '<br/>' +
							'<b>TIPO DA LICENÇA:</b>&ensp;' + feature.properties['Tipo da Li'] + '<br/>' 
													
							
							
							
							
							
							
							
							
				});
			}
}).addTo(map);
overlayMaps['SINFAT (Jan/2022)'] = _sinfat_plugin;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_sinfat_plugin_lgd">Tipos de licenças</dt>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(129, 200, 110, 1.00)"></svg>Ampliação LAI</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(94, 26, 212, 1.00)"></svg>Ampliação LAP</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(235, 228, 128, 1.00)"></svg>Autorização Ambiental</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(214, 141, 69, 1.00)"></svg>Certidão de Atividade Não Constante da Resolução CONSEMA</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(122, 179, 239, 1.00)"></svg>Certidão de Conformidade Ambiental</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(184, 47, 218, 1.00)"></svg>Licença Ambiental de Instalação</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(215, 64, 50, 1.00)"></svg>Licença Ambiental de Operação</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(128, 132, 217, 1.00)"></svg>Licença Ambiental de Operação de Correção</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(123, 215, 223, 1.00)"></svg>Licença Ambiental Prévia</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(223, 99, 142, 1.00)"></svg>Licença Ambiental Prévia com dispensa de Licença Ambiental de Instalação</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(201, 26, 160, 1.00)"></svg>Renovação AuA</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(76, 208, 164, 1.00)"></svg>Renovação LAI</dd>';
	div.innerHTML += 		'<dd class="_sinfat_plugin_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(35, 35, 35, 1.00)" stroke-width="2" fill="rgba(35, 225, 76, 1.00)"></svg>Renovação LAO</dd>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
