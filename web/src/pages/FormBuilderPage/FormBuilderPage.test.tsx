import { render } from '@redwoodjs/testing/web'

import FormBuilderPage from './FormBuilderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FormBuilderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormBuilderPage />)
    }).not.toThrow()
  })
})
