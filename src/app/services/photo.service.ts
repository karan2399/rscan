import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})


export class PhotoService {
  public photo!: UserPhoto;
  private PHOTO_STORAGE: string = 'photos';
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
   }

  public async addNewToGallery() {

    
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
    });
  
    // this.photo.unshift({
    //   filepath: "soon...",
    //   webviewPath: capturedPhoto.webPath!
    // });
    this.photo = {
      filepath : "soon...",
      webviewPath : capturedPhoto.dataUrl || ''
    }
  }

  public getCapturedPhoto(){
    return this.photo;
  }
  
  
}
