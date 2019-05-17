import {mount} from '@vue/test-utils';
import App from '@/App.vue';
import TodoAdder from '@/components/TodoAdder.vue';
import TodoList from '@/components/TodoList.vue';

describe('App.vue', () => {
  it('adds a todo when it receives "add-todo" event from TodoAdder component', () => {
    const appWrapper = mount(App);

    const todoAdderWrapper = appWrapper.find(TodoAdder);
    const newTodo = 'yoga';
    todoAdderWrapper.vm.$emit('add-todo', newTodo);

    expect(appWrapper.vm.todos).toContain(newTodo);
  });

  it('removes a todo when it receives "remove-todo" event from TodoList component', () => {
    const appWrapper = mount(App);

    const sampleTodos = ['yoga', 'tax return', 'reply mails'];
    appWrapper.setData({todos: [...sampleTodos]});

    const todoListWrapper = appWrapper.find(TodoList);
    const sampleIndex = 0;
    todoListWrapper.vm.$emit('remove-todo', sampleIndex);

    expect(appWrapper.vm.todos).not.toContain(sampleTodos[sampleIndex]);
  });
});
