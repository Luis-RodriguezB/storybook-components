import { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    fontColor: {
        control: 'color'
    }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Example1',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Example2',
    size: 'h1',
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Example2',
    size: 'h1',
    allCaps: true,
    color: 'tertiary',
  },
};

export const CustomFontColor: Story = {
  args: {
    label: 'Label Example',
    size: 'h1',
    fontColor: '#000000'
  },
};
