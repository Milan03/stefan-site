import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styles: ['./about.component.css'],
  templateUrl: './about.component.html' 
})
export class AboutComponent implements OnInit {

  public localState: any;

  constructor(
    public route: ActivatedRoute
  ) {
    
  }

  private flexBorderSize: number = 1;
  private flexImageSize: number = 10;
  private galleryName: string = '';

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          //console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

  onViewerVisibilityChanged(isVisibile: boolean) {
   // console.log('viewer visible: ' + isVisibile);
  }
}
