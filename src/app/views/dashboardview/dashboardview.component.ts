import { Component } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-dashboardview',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './dashboardview.component.html',
  styleUrl: './dashboardview.component.scss'
})
export class DashboardviewComponent {

}
