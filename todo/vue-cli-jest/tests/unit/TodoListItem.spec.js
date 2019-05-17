import {shallowMount} from '@vue/test-utils';
import TodoListItem from '@/components/TodoListItem.vue';

const factory = (values = {}) => {
  return shallowMount(TodoListItem, {
    propsData: {...values},
  });
};

describe('TodoListItem', () => {
  it('renders todo text received from props', () => {
    const sampleTodo = 'yoga';
    const wrapper = factory({
      todo: sampleTodo,
      index: 0,
    });

    expect(wrapper.text()).toContain(sampleTodo);
  });

  it('emits "done" event on button click', () => {
    const sampleTodo = 'yoga';
    const wrapper = factory({
      todo: sampleTodo,
      index: 0,
    });

    const button = wrapper.find('.done');
    button.trigger('click');

    expect(wrapper.emitted()['done']).toBeTruthy();
  });
});
