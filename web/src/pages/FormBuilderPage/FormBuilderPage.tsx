import { Link, routes } from '@redwoodjs/router'
import { Form, FormError, Label, TextAreaField, TextField, FieldError, SelectField, Submit, SubmitHandler, useForm } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

const FormBuilderPage = () => {

  const formMethods = useForm({ mode: 'onBlur' })

  const [sections, setSections] = useState([])

  // const tester = [
  //   {
  //     label: 'first name',
  //     type: 'text',
  //   },
  //   {
  //     label: 'last name',
  //     type: 'text',
  //   }
  // ]


  // const [tester1, setTester1] = useState([
  //   {
  //     label: 'first name',
  //     type: 'text',
  //   },
  //   {
  //     label: 'last name',
  //     type: 'text',
  //   }
  // ])

  const addSection = ({ label, type }) => {
    const addition = {
      label,
      type,
    }
    console.log(label)
    setSections([...sections, addition])
    formMethods.reset()
  }


  return (
    <>
      <MetaTags title="FormBuilder" description="FormBuilder page" />

      <h1>Form Builder</h1>

      <p>Create your very own form</p>

      {/* <input name='label' value={label} onChange={setLabel(event.target.value)}/> */}


      <Form onSubmit={addSection} formMethods={formMethods} className='flex flex-col bg-gray-300 max-w-[300px] p-4'>

        <Label name='Label Name' className='mt-4' />

        <TextField
          name='label'
          validation={{ required: true }}
          className='border-b-[2px] border-gray-300 mt-2'
        />
        <FieldError name='label' className='text-red-600' />

        <Label name='Input Type' className='mt-4' />
        <SelectField
          name='type'
          multiple={false}
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return (
                  value !== 'Select One' || 'Select an Option'
                )
              },
            },
          }}
          className='border-b-[2px] border-gray-300 mt-2'
        >
          <option>Select One</option>
          <option>Text</option>
          <option>Number</option>
          <option>Email</option>
          <option>Message</option>
        </SelectField>
        <FieldError name='type' className='text-red-600' />



        <Submit className='bg-black text-white mt-4'>Add Section</Submit>

      </Form>


      {(sections.length > 0) && <div><h2 className='mt-8'>Form Preview</h2>
        {sections.map((item) => (
          <div className='flex flex-col max-w-[300px] py-4'>
            <label className='font-semibold'>{item.label}</label>
            <input type={item.type} className='border-b-[2px] border-gray-400'></input>
          </div>

        ))}
        <button className='bg-green-600 text-white p-2'>Save Form</button>
      </div>
      }
    </>
  )
}

export default FormBuilderPage
