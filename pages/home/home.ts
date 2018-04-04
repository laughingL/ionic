import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public datalist =[];
  public index = 0;
  public items = [];
  constructor(public navCtrl: NavController,private http:Http) {
    this.getData();
  }
  doRefresh(refresher) {
    setTimeout(() => {
      for(let i = 0;i<4;i++){
        if(this.index<this.datalist.length){
          this.items.unshift(this.datalist[this.index++]);
        }
      }
      refresher.complete();
    }, 1000);
  }
  doInfinite(infiniteScroll) {
    if (this.items.length==this.datalist.length){
      infiniteScroll.enabled = false;
    }
    setTimeout(() => {
      for (let i = 0; i< 4;i++){
        if(this.items.length==this.datalist.length)
        {
          break;
        }
        this.items[this.index] = this.datalist[this.index++];
      }
      infiniteScroll.complete();
    }, 200);
  }
  getData(){
    this.http.get('assets/json/data.json').subscribe(data => {
      this.datalist = data.json();
      for(let i = 0;i<4;i++){
        this.items[this.index] = this.datalist[this.index++];
      }
    });
  }
}
