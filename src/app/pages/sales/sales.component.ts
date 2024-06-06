import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

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

  onCamerasFound(devices: MediaDeviceInfo[]) {
    console.log(devices);
    this.selectedDevice = devices[0];
    console.log('device selected', this.selectedDevice);
  }

  onCodeResult(data: any) {
    console.log(data);
    this.codeResult = data;
  }
  onScanComplete(data: any) {
    console.log(data);
  }
}
