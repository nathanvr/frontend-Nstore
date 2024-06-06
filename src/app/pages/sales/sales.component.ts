import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [RouterLink, ZXingScannerModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent {
  selectedDevice!: MediaDeviceInfo;
  codeResult: string = '';
  torch: boolean = false;
  allowedFormats = [BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  onCamerasFound(devices: MediaDeviceInfo[]) {
    console.log(devices);
    this.selectedDevice = devices[0];
    console.log('device selected', this.selectedDevice);
  }

  onCodeResult(data: any) {
    console.log(data);
    this.codeResult = data;
  }
  onTorchCompatible(data: any) {
    console.log(data);
    this.torch = data;
  }
}
