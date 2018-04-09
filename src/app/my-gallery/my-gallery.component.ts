import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-gallery',
    templateUrl: './my-gallery.component.html',
    styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {

    constructor() {}

    private flexBorderSize: number = 3;
    private flexImageSize: number = 7;
    private galleryName: string = 'stefan-gallery';

    ngOnInit() {

    }

    onViewerVisibilityChanged(isVisibile: boolean) {
        console.log('viewer visible: ' +isVisibile);
    }
}