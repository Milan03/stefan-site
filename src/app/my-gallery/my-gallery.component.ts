import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-gallery',
    templateUrl: './my-gallery.component.html',
    styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {
    private flexBorderSize: number = 3;
    private flexImageSize: number = 7;
    private galleryName: string = '';

    constructor() {
        this.galleryName = "gallery-3d";
    }

    ngOnInit() {

    }

    onViewerVisibilityChanged(isVisibile: boolean) {
        console.log('viewer visible: ' +isVisibile);
    }
}