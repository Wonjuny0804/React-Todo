import { ContentBox } from 'components';

/* ------------------------------------------------------------------- */

export default {
  title: 'Components/ContentBox',
  component: ContentBox,
  argTypes: {
    content: {
      type: {
        name: 'content'
      },
      description: ''
    }
  }
}

const Template = (args) => <ContentBox {...args} />

export const Sample = Template.bind({});
Sample.args = {
  content: 'Sample content box'
}