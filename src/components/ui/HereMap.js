import * as React from 'react';

const angleFromCoordinate = (startCoordinate, endCoordinate) => {
  var angleDeg = Math.atan2(endCoordinate.lng - startCoordinate.lng, endCoordinate.lat - startCoordinate.lat) * 180 / Math.PI;
  return angleDeg;  
}

const getZoomCoordinates = (coordinate1, coordinate2) => {
  const maxLat = Math.max(coordinate1.lat, coordinate2.lat);
  const maxLng = Math.max(coordinate1.lng, coordinate2.lng);
  const minLat = Math.min(coordinate1.lat, coordinate2.lat);
  const minLng = Math.min(coordinate1.lng, coordinate2.lng);
  const marginLat = (maxLat - minLat) / 100 * 30;
  const marginLng = (maxLng - minLng) / 100 * 20;
  return {
    maxLat: maxLat + marginLat,
    maxLng: maxLng + marginLng,
    minLat: minLat - marginLat,
    minLng: minLng - marginLng
  }
}

const HereMap = (props) => {
  
  const mapRef = React.useRef(null);
  const start = props.start;
  const end = props.end;

  console.log(start)
  console.log(end)
  React.useLayoutEffect(() => {

    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "53fXnXsFXzd1Wyx34XLatDoKkskuTN6swHymh8OZq2A"
    });
    const defaultLayers = platform.createDefaultLayers();
    
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      zoom: 4,
      pixelRatio: window.devicePixelRatio || 1
    });

//    const airportIcon = new H.map.Icon('/airport.png');
    const airportCircle = '<svg width="18" height="18" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="8" cy="8" r="7" ' +
        'fill="red" stroke="blue" stroke-width="2"  />' +
      '</svg>';
    const dotIcon = new H.map.Icon(airportCircle, {anchor: {x:8, y:8}})
    var linestring = new H.geo.LineString();

    linestring.pushPoint(start);
    linestring.pushPoint(end)

    var polyline = new H.map.Polyline(linestring, { style: { lineWidth: 8, strokeColor: "red"}});
    var zoomCordinates = getZoomCoordinates(start, end)
    var zoomBox = new H.geo.Rect(
      zoomCordinates.maxLat,
      zoomCordinates.maxLng,
      zoomCordinates.minLat,
      zoomCordinates.minLng);
    hMap.addObject(polyline);
    hMap.addObjects([new H.map.Marker(start, {icon: dotIcon}), new H.map.Marker(end, {icon: dotIcon})])

    hMap.getViewModel().setLookAtData({bounds: zoomBox.getBoundingBox()});

    const createMarkers = () => {

      const planeIcon = `<div><img src="/airplane64.png"></div>`
      const domIcon = new H.map.DomIcon(planeIcon, {
        onAttach: function(clonedElement, domIcon, domMarker) {
          var clonedContent = clonedElement.getElementsByTagName('img')[0];
          clonedContent.style.transform = 'translate(-32px,-32px) rotate(' + angleFromCoordinate(start, end) + 'deg)';
        }});
      const plane = new H.map.DomMarker(start, {icon: domIcon});

      hMap.addObject(plane);
  
      setInterval(updateMarkerPositions, 5000);
  
      function updateMarkerPositions() {

        ease(
          start,
          end,
          4000,
          function(coord) {
            plane.setGeometry(coord);
          }
        )
      }
    }

    const ease = (
      startCoord = {lat: 0, lng: 0},
      endCoord = {lat: 1, lng: 1},
      durationMs = 200,
      onStep = console.log,
      onComplete = function() {},
    ) => {
      let raf = window.requestAnimationFrame || function(f) {window.setTimeout(f, 16)}
      let stepCount = durationMs / 16;
      let valueIncrementLat = (endCoord.lat - startCoord.lat) / stepCount;
      let valueIncrementLng = (endCoord.lng - startCoord.lng) / stepCount;
      let sinValueIncrement = Math.PI / stepCount;
      let currentValueLat = startCoord.lat;
      let currentValueLng = startCoord.lng;
      let currentSinValue = 0;
    
      const step = () => {
        currentSinValue += sinValueIncrement;
        currentValueLat += valueIncrementLat * (Math.sin(currentSinValue) ** 2) * 2;
        currentValueLng += valueIncrementLng * (Math.sin(currentSinValue) ** 2) * 2;
    
        if (currentSinValue < Math.PI) {
          onStep({lat: currentValueLat, lng: currentValueLng});
          raf(step);
        } else {
          onStep(endCoord);
          onComplete();
        }
      }
    
      raf(step);
    }

    createMarkers();

    new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    H.ui.UI.createDefault(hMap, defaultLayers);

    return () => {
      hMap.dispose();
    };
  }, [mapRef, start, end]);

  return <div className="map" ref={mapRef}  />;
};

export default HereMap;