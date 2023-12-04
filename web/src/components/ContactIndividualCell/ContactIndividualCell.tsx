import type {
  FindContactIndividualQuery,
  FindContactIndividualQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindContactIndividualQuery($id: Int!) {
    contactIndividual: contact(id: $id) {
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

export const Failure = ({
  error,
}: CellFailureProps<FindContactIndividualQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  contactIndividual,
}: CellSuccessProps<
  FindContactIndividualQuery,
  FindContactIndividualQueryVariables
>) => {
  return (
    <>
      <article key={contactIndividual.id} className='mt-8'>
        <header>
          <h2 className='text-lg font-bold'>
            {contactIndividual.name}
          </h2>
        </header>
        <span className='bg-gray-800 text-white px-2 rounded-full'>{contactIndividual.courses}</span>
        <p>{contactIndividual.comment}</p>
        <p>{contactIndividual.email}</p>
        <p className='text-gray-600 text-sm'>Posted at: {contactIndividual.createdAt}</p>
      </article>
    </>
  )
}
