import {mount} from '@vue/test-utils';
import App from '@/App.vue';
import TodoAdder from '@/components/TodoAdder.vue';
import TodoList from '@/components/TodoList.vue';

const factory = (values = {}) => {
  return mount(App, {
    data: () => ({...values}),
  });
};

describe('App.vue', () => {
  it('adds a todo when it receives "add-todo" event from TodoAdder component', () => {
    const appWrapper = factory({todos: []});

    const todoAdderWrapper = appWrapper.find(TodoAdder);
    const newTodo = 'yoga';
    todoAdderWrapper.vm.$emit('add-todo', newTodo);

    const hasNewTodo = appWrapper.vm.todos.includes(newTodo);
    expect(hasNewTodo).toBeTruthy();
  });

  it('removes a todo when it receives "remove-todo" event from TodoList component', () => {
    const sampleTodos = ['yoga', 'tax return', 'reply mails'];
    const appWrapper = factory({todos: [...sampleTodos]});

    const todoListWrapper = appWrapper.find(TodoList);
    todoListWrapper.vm.$emit('remove-todo', 0);

    const initialNum = sampleTodos.length;
    const finalNum = appWrapper.vm.todos.length;
    expect(finalNum).toBe(initialNum - 1);
  });
});
