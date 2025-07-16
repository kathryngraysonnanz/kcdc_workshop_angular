import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  KENDO_BUTTONS,
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor,
} from "@progress/kendo-angular-buttons";

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, KENDO_BUTTONS],
  template: ` <button
  kendoButton
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [themeColor]="themeColor"
>
  {{ label }}
</button>`
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  themeColor?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['storybook-button', `storybook-button--${this.themeColor}`];
  }
}
