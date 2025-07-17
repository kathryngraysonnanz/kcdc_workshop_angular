import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    width: '300px'
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    width: '500px'
  },
};
