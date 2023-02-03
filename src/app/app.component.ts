import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';

  public CreateButton() {
    console.log("create Button");
  }
  public deleteButton() {
    console.log("delete Button");
  }
  public DownloadButton() {
    console.log("download Button");
  }
  public UpdateButton() {
    console.log("update Button");
  }
  public TimepassButton() {
    console.log("Timepass Button");
  }
  public PassTimeButton() {
    console.log("PassTime Button");
  }
  public SameButton1() {
    console.log("Same Button1");
  }
  public SameButton2() {
    console.log("Same Button2");
  }
}
