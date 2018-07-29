import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from '../viewservice.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public Currentview;

  constructor(public viewservice: ViewserviceService,private _route:ActivatedRoute,private router:Router, ) { 

  }

  ngOnInit() {
    let url=this._route.snapshot.paramMap.get("url")
  console.log(url+"URL");
   this.viewservice.getSingleData(url).subscribe (
    data => {
        this.Currentview=data;
        console.log(this.Currentview);
    },
    error => {
      console.log(error.errorMessage)
    }
  )
}
}
