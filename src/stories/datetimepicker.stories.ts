import type { Meta, StoryObj } from '@storybook/angular';

import { DateTimePickerComponent } from './datetimepicker.component';

const meta: Meta<DateTimePickerComponent> = {
  title: 'Example/DateTimePicker',
  component: DateTimePickerComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DateTimePickerComponent>;

export const Default: Story = {
  args: {

  },
};

