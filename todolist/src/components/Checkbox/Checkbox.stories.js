/* eslint-disable import/no-anonymous-default-export */
import Checkbox from './Checkbox'

export default {
  title: 'TodoItems/Components/Checkbox',
  component: Checkbox,
  args: {
    checked: true,
  },
}

export const Template = (args) => <Checkbox {...args}/>
