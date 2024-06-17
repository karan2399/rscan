import { Component } from '@angular/core';
import { OcrService } from '../services/ocr.service';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recognizedText: any;
  photo!: UserPhoto;

  constructor(public photoService: PhotoService,
    public ocrService: OcrService) {}


  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();

    this.photo = this.photoService.getCapturedPhoto();

    
    if (!!this.photo) {
      this.recognizedText = await this.ocrService.recognizeImage(this.photo.webviewPath);
      this.ocrService.setText(this.recognizedText);
      this.ocrService.parseReceipt(this.recognizedText);
      console.log(this.recognizedText);
    }
  }
}
