import { Component, OnInit } from "@angular/core";

interface User {
  id: number;
  name: string;
}

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    { name: "Pierre", id: 1 },
    { name: "Paul", id: 2 },
    { name: "Jacques", id: 3 }
  ];
  constructor() {}

  ngOnInit() {}
}
