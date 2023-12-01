import type { Prisma, Contact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: { name: 'String', email: 'String1891537', comment: 'String' },
    },
    two: {
      data: { name: 'String', email: 'String6286305', comment: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
