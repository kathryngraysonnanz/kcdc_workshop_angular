import '@angular/localize/init';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KENDO_DATEINPUTS } from "@progress/kendo-angular-dateinputs";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";

@Component({
  selector: 'storybook-datetimepicker',
  standalone: true,
  imports: [CommonModule, KENDO_DATEINPUTS, KENDO_INPUTS, KENDO_LABEL],
  template: ` 
    <kendo-datetimepicker 
      [adaptive]="adaptive"
      [adaptiveSubtitle]="adaptiveSubtitle"
      [adaptiveTitle]="adaptiveTitle"
      [allowCaretMode]="allowCaretMode"
      [animateCalendarNavigation]="animateCalendarNavigation"
      [autoCorrectParts]="autoCorrectParts"
      [autoFill]="autoFill"
      [autoSwitchParts]="autoSwitchParts"
      [cancelButton]="cancelButton"
      [clearButton]="clearButton"
      [disabled]="disabled"
      [enableMouseWheel]="enableMouseWheel"
      [focusedDate]="focusedDate"
      [footer]="footer"
      [format]="format"
      [incompleteDateValidation]="incompleteDateValidation"
      [max]="max"
      [min]="min"
      [placeholder]="placeholer"
      [rangeValidation]="rangeValidation"
      [readonly]="readonly"
      [readOnlyInput]="readOnlyInput" 
      [rounded]="rounded"
      [showOtherMonthDays]="showOtherMonthDays"
      [size]="size"
      [twoYearDigitMax]="twoYearDigitMax"
      [value]="value"
      [weekDaysFormat]="weekDaysFormat"
      [weekNumber]="weekNumber"
      >
    </kendo-datetimepicker>
    `
})
export class DateTimePickerComponent {

  @Input()
  adaptive?: boolean; 

  @Input()
  adaptiveSubtitle?: string; 
  
  @Input()  
  adaptiveTitle?: string; 
  
  @Input()
  allowCaretMode?: boolean; 
  
  @Input()
  animateCalendarNavigation?: boolean; 

  @Input()
  autoCorrectParts?: boolean; 
  
  @Input()
  autoFill?: boolean; 
  
  @Input()
  autoSwitchParts?: boolean; 

  @Input()
  cancelButton?: boolean; 

  @Input()
  clearButton?: boolean; 

  @Input()
  disabled?: boolean; 

  @Input()
  enableMouseWheel?: boolean; 

  @Input()
  focusedDate?: Date; 

  @Input()
  footer?: boolean; 

  @Input()
  format?: string; 

  @Input()
  incompleteDateValidation?: boolean; 

  @Input()
  max?: Date;

  @Input()
  min?: Date;

  @Input()
  placeholder?: string; 

  @Input()
  rangeValidation?: boolean; 

  @Input()
  readonly?: boolean; 

  @Input()
  readOnlyInput?: boolean; 

  @Input()
  rounded?: 'small' | 'medium' | 'full' | 'large'; 

  @Input()
  showOtherMonthDays?: boolean; 

  @Input()
  size?: 'small' | 'medium' | 'large'; 

  @Input()
  twoYearDigitMax?: number; 

  @Input()
  value?: Date; 

  @Input()
  weekDaysFormat?: 'short' | 'narrow' | 'abbreviated'; 

  @Input()
  weekNumber?: boolean; 

  public get classes(): string[] {
    return ['storybook-datetimepicker'];
  }
}
