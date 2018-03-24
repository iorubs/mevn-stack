import Vue from 'vue'
import Home from '@/components/home/home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Home Page')
    expect(vm.$el.querySelector('.hello').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
