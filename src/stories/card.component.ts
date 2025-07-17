import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  KENDO_LAYOUT
} from "@progress/kendo-angular-layout";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'storybook-card',
  standalone: true,
  imports: [CommonModule, KENDO_LAYOUT, KENDO_BUTTONS],
  template: ` 
      <kendo-card [orientation]="orientation" [width]="width">
          <img kendoCardMedia src="https://demos.telerik.com/kendo-angular-ui/assets/layout/card/coffee_second.jpg" />
          <div>
            <kendo-card-header>
              <h1 kendoCardTitle>Coffee with friends</h1>
              <p kendoCardSubtitle>An example card layout</p>
            </kendo-card-header>
            <kendo-card-body>
              <p>
                The right place to be if you're in love with high quality
                espresso or tea. We offer wide range to top coffee brands as
                Davidoff Cafe, Lavazza, Tchibo, Illy.
              </p>
            </kendo-card-body>
            <kendo-card-actions>
              <button kendoButton themeColor="primary">
                Add
              </button>
               <button kendoButton>
                Decline
              </button>
            </kendo-card-actions>
          </div>
        </kendo-card>
    `
})
export class CardComponent {

  @Input()
  orientation?: 'horizontal' | 'vertical'; 

  @Input()
  width?: string; 

  public get classes(): string[] {
    return ['storybook-card'];
  }
}
