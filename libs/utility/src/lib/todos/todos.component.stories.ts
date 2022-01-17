import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TodosComponent } from './todos.component';

export default {
  title: 'TodosComponent',
  component: TodosComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TodosComponent>;

const Template: Story<TodosComponent> = (args: TodosComponent) => ({
  component: TodosComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    todos:  [{title: 'Todo 1'}, {title: 'Todo2'}],
}