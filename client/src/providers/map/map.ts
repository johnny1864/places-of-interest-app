import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Geolocation } from "@ionic-native/geolocation";

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var google: any;
@Injectable()
export class MapProvider {
  maps_api_key = "AIzaSyDS1C0gpAmKjKwk2cABbFrK21weGf76xeA";
  latitude: any;
  longitude: any;

  constructor(public http: HttpClient, private geolocation: Geolocation) {}

  getMap(mapRef) {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        const location = new google.maps.LatLng(this.latitude, this.longitude);

        const options = {
          center: location,
          zoom: 14
        };

        return new google.maps.Map(mapRef.nativeElement, options);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
}
