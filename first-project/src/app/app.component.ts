import { Component } from '@angular/core';
import { User } from './address/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project merhaba';
  abc = 'noktalı virgül';
  dateMessage : string;
  date = new Date();
  user : User;
  isCollabsed : boolean = true;
  inputText : string  = 'Initial Value';
  constructor(private testService : TestService,private http : HttpClient){
    
    testService.printToConsole('Selamun aleyküm google chromenin konsolu\n ');
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.title = 'Software Developer',
    this.user.address = '1000 street city state'
    this.user.phone = [
      '123',
      '456'
    ];
    this.abc = 'noktasız virgül';
    this.date = new Date();
    setInterval(()=>{
      this.date = new Date();
      this.dateMessage = this.date.toDateString() + " - " + this.date.toTimeString();
    },1000);
    
  }

  public toggleCollabse(){
    this.isCollabsed = !this.isCollabsed;
  }

  public ngOnInit(){
    let obs = this.http.get('https://google.com');//'https://api.github.com/users/koishikkothagal');
    obs.subscribe((response) =>{
       console.log('Got the response / Cevap aldım ' + response);
    });
  }
}
