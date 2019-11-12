import { Ellipsis } from '..'
import React from 'react'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Ellipsis />).toJSON()
  expect(tree).toMatchSnapshot()
})
