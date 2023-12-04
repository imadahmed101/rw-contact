import { render } from '@redwoodjs/testing/web'

import ContactIndividualPage from './ContactIndividualPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContactIndividualPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactIndividualPage />)
    }).not.toThrow()
  })
})
