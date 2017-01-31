import { MediaPlugin } from 'ionic-native';

export class ivrController {

  constructor() {
    console.log("ivrController: active");
  }

  playAudio(): any {
    console.log("ivrController: playAudio: Play");
    // Create a MediaPlugin instance.  Expects path to file or url as argument
    // We can optionally pass a second argument to track the status of the media

    const onStatusUpdate = (status) => console.log(status);

    const file = new MediaPlugin('file:///android_asset/www/assets/audio/1.mp3', onStatusUpdate);

    console.log(file);

    // // Catch the Success & Error Output
    // // Platform Quirks
    // // iOS calls success on completion of playback only
    // // Android calls success on completion of playback AND on release()
    // file.init.then(() => {
    //   console.log('Playback Finished');
    // }, (err) => {
    //   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
    // });

    // play the file
    file.play();
  }

}
