import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'

import MyComponent from '@/components/MyComponent.vue'

const vuetify = new Vuetify()
const wrapper = mount(MyComponent, {
  vuetify
})

describe('MyComponent.vue:', () => {
  it('1. Mounts properly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
