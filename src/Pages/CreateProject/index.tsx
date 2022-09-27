import { ChangeEvent, useEffect, useState } from 'react'
import { WrapperPages } from '../../components/WrapperPages'
import { FormProject } from './FormProject'
import * as S from './Styles'

interface ICategory {
  id: number,
  name: string
}

export function CreateProject () {
  const [categories, setCategories] = useState<ICategory[] | []>([])
  const [values, setValues] = useState({
    price: '0',
    name: '',
    category: {
      id: '0',
      name: ''
    }
  })

  function handleSubmit (event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  function selectHandle (e: ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()
    setValues({
      ...values,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  const callApi = async () => await fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((resp) => resp.json())
    .then((data) => setCategories(data))
    .catch((err) => console.log(err))

  useEffect(() => {
    callApi()
  }, [])

  useEffect(() => {
    console.log(values)
  }, [values])

  return (

    <WrapperPages>
      <S.MainStyle>
        <h1>Crie um projeto</h1>

        <span>
          Crie seu projeto para depois adicionar os serviços
        </span>
        <br/>

        <S.CartStyle
          className='flip'
          id='cart'
        >
          <div className='face' id='back'>
            <img
              src='icon.svg'
              alt='moeda'
              width='100em'
              height='100em'
            />
          </div>

          <div className='face' id='front'>
            <FormProject
              categories={categories}
              handleSubmit={handleSubmit}
              selectHandle={selectHandle}
              values={values}
            />
          </div>
        </S.CartStyle>
      </S.MainStyle>
    </WrapperPages>
  )
}
