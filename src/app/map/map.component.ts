import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 

  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions={
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) =>{
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
  zoomIn(){
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut(){
    if (this.zoom > this.options.minZoom) this.zoom--
  }

}
