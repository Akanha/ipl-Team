import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../team.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private static baseUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  tms:Team[]=[];

  addTeam(team : Team){
    this.http.post(AdminService.baseUrl+"/teams",team).subscribe(d=>d=team);
  }
  addPlayer(team:Team){
    this.http.post(AdminService.baseUrl+"/teams/"+team.id,team).subscribe(d=>d=team);
  }

  listTeam(){
    return this.http.get<Team[]>(AdminService.baseUrl+"/teams");
  }
}
