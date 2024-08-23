import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {

  accounts:Account[]=[];  /*empty array*/

        /* call accountService method*/
  constructor(private accountService:AccountService,private router:Router){}

   ngOnInit(){   /* call ngOnInit after loading the component */ 
    this.getAccounts(); /*call getAccounts()*/
  }
    getAccounts(){
      this.accountService.getAllAccounts().subscribe(data=>{

        this.accounts=data; /* empty array data*/

      })
    }

    deposit(id:number){
            /* give path */
        this.router.navigate(['/deposit',id])
    }

    withdraw(id:number){

      this.router.navigate(['/withdraw',id])
    }

    delete(id:number){

      this.accountService.delete(id).subscribe(data=>{
        console.log(data);
        this.getAccounts();
      })
    }

    view(id:number){
      this.router.navigate(['/account-details',id])
    }


}
