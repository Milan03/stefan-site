/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd
} from '@angular/router';
import {
  AppState
} from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    private route: ActivatedRoute,
    public appState: AppState,
    public router: Router
  ) {
     router.events.subscribe(s => {
       if (s instanceof NavigationEnd) {
         const tree = router.parseUrl(router.url);
         if (tree.fragment) {
           const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
         }
       }
     });
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

  }

  onAnchorClick() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView(element)
    });
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
