import { Checkbox } from 'components';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    id: {
      type: {
        name: 'id'
      },
      description: 'id는 label과 input을 묶어줄때 사용합니다.'
    },
    checked: {
      description: '체크박스의 상태를 나타냅니다. 상위로부터 전달 받아 렌더합니다.',
    }
  }
}

const Template = (args) => <Checkbox {...args} />

export const Sample = Template.bind({})
Sample.args = {
  id: 'Sample',
  checked: false,
  onChange: () => alert('checked')
}