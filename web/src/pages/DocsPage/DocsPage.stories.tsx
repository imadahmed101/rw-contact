import type { Meta, StoryObj } from '@storybook/react'

import DocsPage from './DocsPage'

const meta: Meta<typeof DocsPage> = {
  component: DocsPage,
}

export default meta

type Story = StoryObj<typeof DocsPage>

export const Primary: Story = {}
