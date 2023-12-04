import type { Meta, StoryObj } from '@storybook/react'

import ContactIndividualPage from './ContactIndividualPage'

const meta: Meta<typeof ContactIndividualPage> = {
  component: ContactIndividualPage,
}

export default meta

type Story = StoryObj<typeof ContactIndividualPage>

export const Primary: Story = {}
