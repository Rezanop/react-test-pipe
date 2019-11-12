import { Ring } from '..'
import React from 'react'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Ring />).toJSON()
  expect(tree).toMatchSnapshot()
})
