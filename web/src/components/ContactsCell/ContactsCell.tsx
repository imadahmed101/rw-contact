import type { ContactsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      name
      email
      courses
      comment
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<ContactsQuery>) => {
  return (
    <>
      {contacts.map((contact) => (
        <article key={contact.id} className='mt-8'>
          <header>
            <h2 className='text-lg font-bold'>
              <Link to={routes.contactIndividual({id: contact.id})}>
                {contact.name}
              </Link>
            </h2>
          </header>
          <span className='bg-gray-800 text-white px-2 rounded-full'>{contact.courses}</span>
          <p>{contact.comment}</p>
          <p>{contact.email}</p>
          <p className='text-gray-600 text-sm'>Posted at: {contact.createdAt}</p>
        </article>
      )
      )}
    </>
  )
}
