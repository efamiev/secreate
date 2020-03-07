import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('passed title is correct display', () => {
  const wrapper = shallow(<App title='Secreate' />)
  const title = findByTestAttr(wrapper, 'app-title')

  expect(title.text()).toEqual('Secreate is work!')
})
