import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }
    /*connection with springboot*/

private baseUrl="http://localhost:8080/api/accounts"

              /* to call Rest Api to related fields */
        /*first hit httpClient url..send request.. //than receive data in the form of Account[]*/
  getAllAccounts():Observable<Account[]>{
      return this.httpClient.get<Account[]>(`${this.baseUrl}`);
}

         /* call postMapping to createAccount */
  createAccount(account:Account):Observable<Account>{
    return this.httpClient.post<Account>(`${this.baseUrl}`,account)
 }

          /**before deposit first we get ac ID */
  getAccountById(id:number):Observable<Account>{
    return this.httpClient.get<Account>(`${this.baseUrl}/${id}`)
  }

          /* to  update   deposit amount */
  deposit(id:number,amount:number):Observable<Account>{
    const request={ amount }
    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/deposit`,request);

  }
            /*to call withdraw Rest Api */
  Withdraw(id:number,amount:number):Observable<Account>{
    const request={ amount }
    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/withdraw`,request)
  }

            /* call delete Rest Api */
  delete(id:number):Observable<Account>{

    return this.httpClient.delete<Account>(`${this.baseUrl}/${id}`)
  }


}
