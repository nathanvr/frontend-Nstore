import { Component, Input } from '@angular/core';
import { Card } from '../../../interfaces/cardInfo.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  @Input() cardInfo!: Card;
}
