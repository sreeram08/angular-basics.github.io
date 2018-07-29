import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from '../viewservice.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allData;
  public fData;
  public Save;
  public SortedArray;
  public SortedData;

  constructor(public viewservice: ViewserviceService) { }

  ngOnInit() {
    console.log("Home ngoninit is called");
     this.allData=this.viewservice.getAllData().subscribe(
      data=>{
        console.log(data)
        this.allData = data;
        this.fData = this.allData[0].concat(this.allData[1],this.allData[2])
        this.SortedArray = _.sortBy(this.fData, 'name');
        this.SortedData = this.SortedArray.reverse();
        console.log(this.SortedData);
      },
      error => {
        console.log(error.errorMessage)
      }
    )
    console.log(this.SortedArray)

  }
  ngOnDestroy(){

  }

}
