import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfiguationServiceService {
   private Server:string = "";
   private AppKey = "";

  constructor(private _http:Http) {

  this.load();
  
  }

  public load() {
            return new Promise((resolve, reject) => {
              this._http.get('config.json')  // path of your config.json file
                .map(res => res.json())
                .subscribe(
                  (data:any) => {
                    this.Server = data.server;
                    this.AppKey = data.appkey;
                    resolve(true);
                  },
                  err=>console.log(err)
                );
            });
          }

      public getServer(){
           return  this.Server;
        }

    public getAppKey(){
           return  this.AppKey;
        }

}