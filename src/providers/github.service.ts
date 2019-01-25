// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface'

import { USER_LIST } from '../mocks/user.mocks'
import { REPOSITORY_LIST } from '../mocks/repository.mocks';


@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl:string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError)
  }

  mockGetRepositoryInformation(username:string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name == username))
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }

  private handleError(response: Response) {
    return Observable.throw(Error.json() || "Server error.")
  }

  private extractData(response: Response) {
    return response.json();
  }

  private logData(response: Response) {
    console.log(response);
    
  }

}