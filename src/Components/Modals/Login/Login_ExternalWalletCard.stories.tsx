import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login_ExternalWalletCard from './Login_ExternalWalletCard';

import { ModalsDecorator } from 'src/utils/storybookDecorators'

export default {
    title: 'Login/External Wallet Card',
    component: Login_ExternalWalletCard,

    decorators: [ModalsDecorator]
} as ComponentMeta<typeof Login_ExternalWalletCard>;

const Template: ComponentStory<typeof Login_ExternalWalletCard> = (args) => <Login_ExternalWalletCard {...args} />;

export const Default = Template.bind({});

