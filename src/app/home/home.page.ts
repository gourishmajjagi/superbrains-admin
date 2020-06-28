import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Payload } from '../models/tokenObject';

import { Plugins } from '@capacitor/core';

const { Clipboard, Toast } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  payload: Payload;

  constructor(
    private authService: AuthService,
    public toastController: ToastController,
  ) { }

  async generateToken() {
    this.payload = {
      allow: true,
      expiration: moment.utc().add(1, 'hours').format()
    };

    const token = this.authService.generateKey(this.payload);
    console.log(token);
    Clipboard.write({
      string: token
    });

    const result = await Clipboard.read();
    console.log('Got', result.type, 'from clipboard:', result.value);

    await Toast.show({
      text: 'Copied to clipboard'
    });
  }

}
