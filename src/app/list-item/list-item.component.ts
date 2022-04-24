import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    @Input() data: any;
    click = false;

    clicked(event: any) {
        this.click = !this.click;
        const elem: Element = event.target;
        if (elem.classList.contains('arrowSide') || elem.classList.contains('arrowDown') ) {
          if (this.click) {
            elem.classList.remove('arrowDown');
            elem.classList.add('arrowSide');
          } else {
            elem.classList.remove('arrowSide');
            elem.classList.add('arrowDown');
          }
        }
        event.stopPropagation();
      }
}
