import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  currentRoute: any;
  urlData: any;
  constructor(private router:Router) { 
    
    router.events.pipe(filter((event:any)=> event instanceof NavigationEnd)).subscribe( (event:any) => {
      this.currentRoute = event.url;
      this.urlData = event.url.split("/")
    })
  }
  ngOnInit(): void {
  }

}
