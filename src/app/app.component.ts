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
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  onChangeName(member: string) {
    this.newMember = member;
    this.errorMessage = '';
  }

  onClickAdd() {
    if (!this.newMember) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMember);
    this.newMember = '';
  }

  onChangeNumberOfTeams(number: string) {
    this.numberOfTeams = Number(number);
    this.errorMessage = '';
  }

  onClickGenerate() {
    if (
      !this.numberOfTeams ||
      this.numberOfTeams <= 0 ||
      this.numberOfTeams > this.members.length
    ) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
