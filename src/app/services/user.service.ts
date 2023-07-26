import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../team.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static baseUrl="http://localhost:3000";

  constructor(private http:HttpClient) { }

  listTeam(){
    return this.http.get<Team[]>(UserService.baseUrl+"/teams");
  }

  listPlayer(){

  }
}
