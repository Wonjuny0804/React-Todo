import TodoItem from './TodoItem'

export default {
  title: 'TodoItems/Containers/TodoItem',
  component: TodoItem,
  parameters: {
    docs: {
      description: {
        component:
          'Todo list에 전달된 TodoItem이 렌더링 됩니다.',
      },
    },
  }
}

const Template = (args) => <TodoItem {...args} />

export const TodoItem1 = Template.bind({})
TodoItem1.args = { value: 'Study React' }
TodoItem1.storyName = 'input'
