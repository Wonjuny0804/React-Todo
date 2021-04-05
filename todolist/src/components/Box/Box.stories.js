/* eslint-disable import/no-anonymous-default-export */
import Box from './Box'

export default {
  title: 'TodoItems/Components/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Todo list에 전달된 Todo의 content가 렌더링 됩니다.',
      },
    },
  }
}

const Template = (args) => <Box {...args} />

export const Checked = Template.bind({})
Checked.args = { active: true, value: 'Study React' }
Checked.storyName = 'input'


