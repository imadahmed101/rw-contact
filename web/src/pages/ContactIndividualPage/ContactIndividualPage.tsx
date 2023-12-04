import { MetaTags } from '@redwoodjs/web'
import ContactIndividualCell from 'src/components/ContactIndividualCell'

interface Props {
  id: number
}

const ContactIndividualPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags
        title="ContactIndividual"
        description="ContactIndividual page"
      />

      <h1>ContactIndividualPage</h1>
      <ContactIndividualCell id={id}/>

    </>
  )
}

export default ContactIndividualPage
