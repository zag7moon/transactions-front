import Vue from 'vue';
import Component from '@/components/Login/Login';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual(
      'Welcome to Your Vue.js App'
    );
  });
});
