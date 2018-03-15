import React from 'react'
import { shallow } from 'enzyme'
import { Numerals } from '../Numerals'

describe('Numerals (snapshot)', () => {
  it('renders according to snapshot', () => {
    const component = shallow(<Numerals />)
    expect(component).toMatchSnapshot()
  })
})
