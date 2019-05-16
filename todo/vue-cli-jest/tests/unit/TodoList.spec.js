import {mount} from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';
import TodoListItem from '@/components/TodoListItem.vue';

const factory = (values = {}) => {
  return mount(TodoList, {
    propsData: {...values},
  });
};

describe('TodoList.vue', () => {
  it('emits "remove-todo" event when "done" event is received from TodoListItem component', () => {
    const sampleTodos = ['yoga', 'tax return', 'reply mails'];
    const todoListWrapper = factory({todos: [...sampleTodos]});
    const todoListItemWrapper = todoListWrapper.find(TodoListItem);
    const index = 1;
    todoListItemWrapper.vm.$emit('done', index);

    const removeToDoEventHasEmitted = todoListWrapper.emitted()['remove-todo'].length > 0;
    expect(removeToDoEventHasEmitted).toBeTruthy();
  });
});
