import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const FormPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const FormPageTitle = styled.h1`
  font-family: Spectral, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #0a0a0b;
  margin-top: 48px;
`
export const FormPageSubtitle = styled.p`
  font-family: Suisse, sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0a0a0b;
  margin-top: 40px;
`
export const SubtitleLink = styled(Link)`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color: #0a0a0b;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
`
export const FormFieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 16px;
`

export const InputElement = styled.input`
  width: 540px;
  height: 40px;
  background: #f4f4f6;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 0 0 0 20px;
  font-family: Suisse, sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #62626a;

  &:focus {
    outline: none;
  }
`

export const TextAreaElement = styled.textarea`
  width: 540px;
  height: 160px;
  background: #f4f4f6;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 10px 0 0 20px;
  font-family: Suisse, sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #62626a;
  resize: none;

  &:focus {
    outline: none;
  }
`

export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  background: #ffff00;
  border-radius: 20px;
  border: none;
  padding: 0;
  align-self: flex-end;
  margin-top: 8px;

  &:hover {
    cursor: pointer;
  }
`

export const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-family: Suisse, sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #f53d5c;

  &:hover {
    cursor: pointer;
  }
`
export const HR = styled.hr`
  width: 540px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #e0e0e0;
  margin: 32px 0;
`
