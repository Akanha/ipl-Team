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
  addPlayer(player:Team){
    this.http.post(AdminService.baseUrl+"/teams/",player.players).subscribe(d=>d=player);
  }

  listTeam(){
    return this.http.get<Team[]>(AdminService.baseUrl+"/teams");
  }
}
