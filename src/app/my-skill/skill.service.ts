import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, distinctUntilChanged, map } from "rxjs";

export interface Skill{
    name : string ,
    experienceInYears : number 
}

export interface SkillState{
    loading:boolean|null;
    skills:Skill[]|null;
    error:unknown|null;
  }

@Injectable({
    providedIn : "root" 
})

export class SkillService {
    constructor(private httpClient : HttpClient){}

    private skillsBehaviorSubject = new BehaviorSubject<SkillState>({skills:null,error:null,loading:null});

    private readonly skills$ = this.skillsBehaviorSubject.asObservable().pipe(
        map((skillState)=>skillState.skills),
        distinctUntilChanged()
      );

      public readonly loading$ = this.skillsBehaviorSubject.asObservable().pipe(
        map((skillState)=>skillState.loading),
        distinctUntilChanged()
      );
    
      public readonly error$ = this.skillsBehaviorSubject.asObservable().pipe(
        map((skillState)=>skillState.error),
        distinctUntilChanged()
      );

      getSkills(){
        //Sets the loading indicator
        this.skillsBehaviorSubject.next({
          loading:true,
          skills:null,
          error:null
        });


        this.httpClient.get<Skill[]>('../../assets/skills.json')
        .pipe(delay(500))
        .subscribe(
          {
            next : (skills)=>{
              this.skillsBehaviorSubject.next(
                {
                  loading:false,
                  skills:skills,
                  error:null
                }
              )
            },
            error : (error)=>{
              this.skillsBehaviorSubject.next(
                {
                  loading:false,
                  skills:null,
                  error:"Couldn't load skills!"
                }
              )
            }
          }
        )
      }
    }