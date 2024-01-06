import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-vts-trip-details",
  templateUrl: "./vts-trip-details.component.html",
  styleUrls: ["./vts-trip-details.component.scss"],
})
export class VtsTripDetailsComponent implements OnInit {
  tripData: any;
  @Input() fabButtonTrip: boolean
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.tripData = JSON.parse(localStorage.getItem("trip"));
    setTimeout(() => {
      this.newItemEvent.emit(false);
    }, 30000)
  }

}
