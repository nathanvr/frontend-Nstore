import { Component } from '@angular/core';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { Card } from '../../../interfaces/cardInfo.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMoneyBillTrendUp,
  faCartFlatbed,
  faHandshake,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfoCardComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  initOptions: Card[] = [
    {
      type: 'sales',
      title: 'Ventas',
      subtitle: 'Gestiona las ventas de tu negocio',
      body: 'Usa la camara de tu dispositivo para leer los codigos',
      icon: faMoneyBillTrendUp,
      path: '/sales',
    },
    {
      type: 'purchases',
      title: 'Compras',
      subtitle: 'Gestiona las compras de tu negocio',
      body: 'Verifica tus ordenes de compra para ingresarlas a inventario',
      icon: faCartFlatbed,
      path: '/purchases',
    },
    {
      type: 'suppliers',
      title: 'Proveedores',
      subtitle: 'Gestiona tus proveedores',
      body: 'Crea, edita y elimina a tus proveedores',
      icon: faHandshake,
      path: '/suppliers',
    },
    {
      type: 'inventories',
      title: 'Inventario',
      subtitle: 'Gestiona tu inventario',
      body: 'Crea, edita y elimina productos, revisa niveles de inventario',
      icon: faWarehouse,
      path: '/inventories',
    },
  ];
}
