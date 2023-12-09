import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Form, FormError, Label, TextAreaField, TextField, FieldError, SelectField, Submit, SubmitHandler, useForm } from '@redwoodjs/forms'
import { CreateContactMutation, CreateContactMutationVariables } from 'types/graphql'

const CREATE_CONTACT = gql`
mutation CreateContactMutation($input: CreateContactInput!) {
  createContact(input: $input) {
    id
  }
}
`

interface FormValues {
  name: string,
  email: string,
  comment: string,
  courses: string,
}

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for contacting us!')
      formMethods.reset()
    }
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // console.log(data)
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <Form formMethods={formMethods} onSubmit={onSubmit} error={error} className='flex flex-col max-w-[350px] p-4 mx-auto rounded-md'>
        <FormError error={error} />
        <Label name='Name*' />
        <TextField
          name='name'
          validation={{ required: true }}
          className='border-b-[2px] border-gray-300'
        />
        <FieldError name='name' className='text-red-600' />
        <Label name='Email*' className='mt-4' />
        <TextField name='email'
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          className='border-b-[2px] border-gray-300'
        />
        <FieldError name='email' className='text-red-600' />
        <Label name='Comment*' className='mt-4' />
        <TextAreaField
          name='comment'
          validation={{ required: true }}
          className='border-b-[2px] border-gray-300'
        />
        <FieldError name='comment' className='text-red-600' />
        <Label name='Courses' className='mt-4' />
        <SelectField
        name='courses'
        multiple={false}
        className='border-b-[2px] border-gray-300'
        >
          <option>Select One</option>
          <option>MERN</option>
          <option>DevOps</option>
          <option>Cyber Security</option>
          <option>QA</option>
        </SelectField>
        <Submit disabled={loading} className='bg-black text-white mt-4'>Submit</Submit>
      </Form>

    </>
  )
}

export default ContactPage
