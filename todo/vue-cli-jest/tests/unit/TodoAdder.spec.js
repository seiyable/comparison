import {shallowMount} from '@vue/test-utils';
import TodoAdder from '@/components/TodoAdder.vue';

describe('TodoAdder.vue', () => {
  it('emits "add-todo" event with todo on button click', () => {
    const wrapper = shallowMount(TodoAdder);

    const sampleTodo = 'yoga';
    wrapper.setData({newTodo: sampleTodo});

    const button = wrapper.find('button');
    button.trigger('click');

    const firstArgOfFirstEmittedEvent = wrapper.emitted()['add-todo'][0][0];
    expect(firstArgOfFirstEmittedEvent).toBe(sampleTodo);
  });
});
