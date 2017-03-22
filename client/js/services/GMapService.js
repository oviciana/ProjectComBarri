angular.module('appServices')
	.factory("GMapService", function( $rootScope, NgMap ) {

		function getMarkers() {
		 	cleanMarkers();
		 	return NgMap.getMap({ id: 'main-map' }).then( showMarkers )
		}

		function showMarkers(map){
			let bounds = new google.maps.LatLngBounds()
		 	$rootScope.shopsFound.forEach( shop => {
		 		const marker = createMarker( map, shop );
		 		$rootScope.markers.push(marker)
		 		bounds.extend(marker.position)
			})
			map.fitBounds( bounds )
		}

		function cleanMarkers() {
			if ($rootScope.markers && $rootScope.markers.length) {
				$rootScope.markers.forEach( marker => marker.setMap(null) )
			}
			else {
				$rootScope.markers = []
			}
		}

		function createMarker( map, shop ) {
		 	const [ lat, lng ] = shop.address.coord;
		 	const myLatLng = { lat, lng };
		 	let defaultOptions = {
				position: myLatLng,
		 		map: map,
		 		title: ''	 	
		 	};
		 	const marker = new google.maps.Marker(defaultOptions);
			const infowindow = new google.maps.InfoWindow({
			  content: `<h5><a href="#!/shop/${shop._id}">${ shop.name }</h5><p>${ shop.bussinessType }</p>` 
		  });
		  marker.addListener('click', function() {
		    infowindow.open(map, marker);
		  });
		  return marker;
		}

	

		// function getDetailsMarker(idMap, rest ){

		// 	let optionsMarker = {
		// 		animation: google.maps.Animation.DROP
		// 	};

		// 	if (idMap == "edit-map") {
		// 		optionsMarker = _.extend( optionsMarker, {
		// 			draggable: true
		// 		})
		// 	}

		// 	return NgMap.getMap({ id: idMap })
		// 		.then( (map) => {

		// 			const prevMarker = getDetailsMarker.marker;
		// 			const [ lat, lng ] = rest.address.coord;
		// 			const myLatlng = new google.maps.LatLng(lng, lat);

		// 			prevMarker ? prevMarker.setMap(null) : null;
		// 			getDetailsMarker.marker = createMarker( map, rest, optionsMarker );

		// 			map.setZoom(16);
	 //  			map.panTo(myLatlng)

	 //  			return getDetailsMarker.marker;

		// 		})

		// }

		

		// $rootScope.setCenter = function( coords ) {

	 //  	const [ lat, lng ] = coords;
	 //  	const myLatlng = new google.maps.LatLng(lng, lat);

	 //  	NgMap.getMap({ id: 'main-map' })
	 //  		.then( map => {
	 //  			map.setZoom(16);
	 //  			map.panTo(myLatlng)
	 //  		})

	 //  }


		//return { getMarkers, getDetailsMarker }
		return { getMarkers }

	})