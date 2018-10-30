import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: '../../templates/dashboard/footer.template.html',
  styleUrls: ['../../styles/dashboard/footer.style.css']
})
export class FooterComponent {
  showFooter: boolean = true;
}
