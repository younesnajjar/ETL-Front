import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http' ;
import * as go from 'gojs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Graph} from './models/graph'
@Injectable({
  providedIn: 'root'
})
export class DatasetsService {
  myDiagram:any;
  $ = go.GraphObject.make;
  selecteditem = 0;
  constructor(private http: HttpClient) {
    
  }
  getDataSets(){
    return this.http.get('http://localhost:8080/datasets');
  }
  getPreview(key){
    return this.http.get('http://localhost:8080/data/'+key);
  }
  runGraph(graph: Graph): Observable<Graph> {

        // const maxId = this.listEmployees.reduce(function (e1, e2) {
        //     return (e1.id > e2.id) ? e1 : e2;
        // }).id;
        // employee.id = maxId + 1;
        // employee.id = 0;

        // this.listEmployees.push(employee);
        return this.http.post<Graph>('http://localhost:8080/run',
        JSON.parse( JSON.stringify(graph)), {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            // .pipe(catchError("this.handleError"));
}

}
