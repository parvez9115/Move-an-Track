import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { websocket } from "src/app/interfaces/webSocket";
import { WebsocketService } from "src/app/services/websocket.service";

@Component({
  selector: "app-student-livetrack",
  templateUrl: "./student-livetrack.page.html",
  styleUrls: ["./student-livetrack.page.scss"],
})
export class StudentLivetrackPage implements OnInit, websocket {
  constructor(
    private location: Location,
    public router: Router,
    private websocketService: WebsocketService
  ) {}
  wsResponse(string: any): void {
    throw new Error("Method not implemented.");
  }
  locationBack() {
    this.router.navigateByUrl("student-dashboard");
  }
  connectWebsocket() {
    // this.websocketService.setProductService(this);
    // if (!this.websocketService.isAlive("livetrack")) {
    //   this.websocketService.connectSocket(
    //     JSON.parse(localStorage.selectedVin),
    //     "livetrack"
    //   );
    // }
  }
  wsOnError() {
    setTimeout(() => {
      this.websocketService.connectSocket(
        JSON.parse(localStorage.selectedVin),
        "livetrack"
      );
    }, 60000);
  }

  ngOnInit() {
    this.connectWebsocket();
  }
}
