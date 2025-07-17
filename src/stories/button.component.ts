import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  KENDO_BUTTONS
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
  [disabled]="disabled"
  [fillMode]="fillMode"
  [icon]="icon"
  [imageUrl]="imageUrl"
  [rounded]="rounded"
  [selected]="selected"
  [size]="size"
  [toggleable]="toggleable"
>
  {{ label }}
</button>`
})
export class ButtonComponent {

  @Input()
  disabled?: boolean; 

  @Input()
  fillMode?: 'solid' | 'flat' | 'outline' | 'clear' | 'link' | 'none'; 
  
  @Input()
  icon?: string; 

  @Input()
  imageUrl?: string; 

  @Input()
  rounded?: 'small' | 'medium' | 'large' | 'full' | 'none';

  @Input() 
  selected?: boolean; 

  @Input()
  size?: 'small' | 'medium' | 'large' | 'none'; 

  @Input()
  themeColor?: 'base'| 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse' | 'none'; 

  @Input() 
  toggleable?: boolean;

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
    return ['storybook-button'];
  }
}
