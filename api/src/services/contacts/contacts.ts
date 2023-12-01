import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = ({
  input,
}) => {
  // validate(input.name, 'name', { length: { equal:2 }})
  validate(input.email, 'email', { email:true })

    // const hello = 2

    // if (input.name.length < hello) {
    //   throw new Error(="Name must be more characters!")
    // }

  return db.contact.create({
    data: input,
  })
}