import {Component} from '@angular/core';
import {AuthService} from "../../authentication/service/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent  {

  constructor(public authService: AuthService) {
  }
  logOut (): void {
    this.authService.logOut();
  }
}
