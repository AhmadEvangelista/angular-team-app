import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMember: string = '';
  members: string[] = [];
  errorMessage: string = '';

  onClickAdd() {
    if (!this.newMember) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMember);
    this.newMember = '';
  }

  onClickGenerate() {
    console.log('GENERATE CLICKED');
  }

  onChangeName(member: string) {
    this.newMember = member;
    this.errorMessage = '';
  }
}
