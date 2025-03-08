import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { mockHeader } from '../__mocks__/header.mock';
import MainHeader from '../MainHeader.vue';

describe('MainHeader', () => {
  it('render title correctly', () => {
    const wrapper = mount(MainHeader, {
      slots: {
        title: mockHeader.title
      }
    });
    expect(wrapper.find('.title').text()).toBe(mockHeader.title);
  });
  it('render description correctly', () => {
    const wrapper = mount(MainHeader, {
      slots: {
        description: mockHeader.description
      }
    });
    expect(wrapper.find('.description').text()).toBe(mockHeader.description);
  });
  it('render action correctly', () => {
    const wrapper = mount(MainHeader, {
      slots: {
        action: mockHeader.action
      }
    });
    expect(wrapper.find('button').text()).toBe('Create');
  });
});
