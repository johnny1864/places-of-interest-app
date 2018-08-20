import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import { MapProvider } from "../../providers/map/map";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("map")
  mapRef: ElementRef;

  map: any;

  constructor(
    public navCtrl: NavController,
    private _map: MapProvider,
    private platform: Platform
  ) {}

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.showMap();
    });
  }

  showMap() {
    this.map = this._map.getMap(this.mapRef);
  }
}
