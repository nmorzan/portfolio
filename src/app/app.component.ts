import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio-frontend';
  
  
  constructor() {
    
  }
  ngOnInit(){
    this.headerChange()
  }

  public headerChange(){
    window.addEventListener('scroll',()=>{
      let header = document.getElementById('header');
      header?.classList.toggle('headerScroll',window.scrollY>0)
    })
  }

}
