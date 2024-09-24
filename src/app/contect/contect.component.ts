import { Component, OnInit } from '@angular/core';
import { ContectService } from '../contect.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Icontect } from '../Icontect';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {
  data!:any[];
  firstDemo!:FormGroup;
  contacts!:Icontect;
  
  /**
   *
   */
  constructor(private readonly _servicecontec:ContectService) {
  }
  ngOnInit(): void {
    this.GetContectList();
  }
  GetContectList(){
    this._servicecontec.getContectList().subscribe(res=>{
      this.data=res;
      console.log(res);

    })
  }
  createNewContact(){
    this.firstDemo=new FormGroup({
      FirstName:new FormControl(' '),
      LastName:new FormControl(' '),
      Email:new FormControl(' '),
      Age:new FormControl(' '),
      Gender:new FormControl(' '),
      MobileNO:new FormControl(' '),
      PhoneNo:new FormControl(' '),
      AdharNo:new FormControl(' ')

    })
  }
  clickPostData(){
   
  }
}
