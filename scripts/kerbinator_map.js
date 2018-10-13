var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let coords = JSON.parse(this.responseText);
            
            for (coor in coords.coords) {
              new google.maps.Marker({position: {lat: parseFloat(coor), lng: parseFloat(coords.coords[coor])}, map: map});
            }
        }
    };
        
    xhttp.open("GET", "/coords", true);
    xhttp.send();
}

/*
<script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let coords = JSON.parse(this.responseText);
            
            for (coor in coords.coords) {
              new google.maps.Marker({position: {lat: parseFloat(coor), lng: parseFloat(coords.coords[coor])}, map: map});
            }
          }
        };
        
        xhttp.open("GET", "/coords", true);
        xhttp.send();
      }
      
      function routeFirstToLast() {
        
      }

    </script>
*/