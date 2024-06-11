import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLightbulb, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    RouterLink,
    ZXingScannerModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent {
  selectedDevice!: MediaDeviceInfo;
  codeResult: string = '';
  torchAvailable: boolean = false;
  allowedFormats = [BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];
  lintern = faLightbulb;
  camera = faCamera;
  torchOn: boolean = false;
  cameraAvailable: boolean = false;
  scannerAvailable: boolean = true;
  devicesList!: MediaDeviceInfo[];
  selectDeviceAvailable: boolean = false;
  selectDeviceForm = new FormControl();

  ngOnInit() {
    this.selectDeviceForm.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  onCamerasFound(devices: MediaDeviceInfo[]) {
    this.devicesList = devices;
    console.log(this.devicesList);
    if (this.devicesList.length < 1) {
      this.scannerAvailable = false;
    } else if (this.devicesList.length === 1) {
      this.selectedDevice = devices[0];
      this.scannerAvailable = true;
    } else {
      this.selectedDevice = devices[0];
      this.scannerAvailable = true;

      this.selectDeviceForm.setValue(devices[0]);
    }
  }

  onCodeResult(data: any) {
    console.log(data);
    this.codeResult = data;
  }
  onTorchCompatible(data: any) {
    this.torchAvailable = data;
  }
}
