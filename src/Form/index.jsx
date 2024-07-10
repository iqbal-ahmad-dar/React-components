import React, { useState } from 'react'
import TextBox from '../components/TextBox';
import useValidation from '../components/hooks/useValidation';
import ElasticTextBox from '../components/ElasticTextBox';
const Form = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const { validationError: emailError } = useValidation('email');
  const { validationError: passwordError } = useValidation('password');
  const { validationError: phoneNumberError } = useValidation('number');
  const { validationError: textError } = useValidation('text');
  const { validationError: messageError } = useValidation('text');
  return (
    <>
      <form>
        <div className="w-2/3">
          <TextBox
            id="test-id"
            label="Text Input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter text here"
            type="text"
            readOnly={false}
            error={textError}
            success={!textError && name !== '' ? 'Looks good!' : ''}
            disable={false}
            onClick={() => console.log('TextInput clicked')}
            onFocus={() => console.log('TextInput focused')}
            onBlur={() => console.log('TextInput blurred')}
            autoFocus={false}
            minLength={10}
            maxLength={20}
            name="name"
          />
          <TextBox
            id="number-input"
            label="Number Input"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Enter a number"
            type="number"
            readOnly={false}
            error={phoneNumberError}
            success={!phoneNumberError && phoneNumber !== '' ? 'Looks good!' : ''}
            disable={false}
            steps={5}
            min={1}
            max={100}
            onClick={() => console.log('NumberInput clicked')}
            onFocus={() => console.log('NumberInput focused')}
            onBlur={() => console.log('NumberInput blurred')}
            autoFocus={false}
            name="phone-number"
          />
          <TextBox
            id="email-input"
            label="Email Input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            type="email"
            readOnly={false}
            error={emailError}
            success={!emailError && email !== '' ? 'Looks good!' : ''}
            disable={false}
            onClick={() => console.log('EmailInput clicked')}
            onFocus={() => console.log('EmailInput focused')}
            onBlur={() => console.log('EmailInput blurred')}
            autoFocus={false}
            name="email"
          />
          <TextBox
            id="password-input"
            label="Password Input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            type="password"
            readOnly={false}
            error={passwordError}
            success={!passwordError && password !== '' ? 'Looks good!' : ''}
            disable={false}
            onClick={() => console.log('PasswordInput clicked')}
            onFocus={() => console.log('PasswordInput focused')}
            onBlur={() => console.log('PasswordInput blurred')}
            autoFocus={false}
            name="password"
          />
        </div>
        <div className='w-2/3'>
          <ElasticTextBox
            id="elastic-text-input"
            label="Elastic Text Input"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Enter Message here"
            type="text"
            readOnly={false}
            error={messageError}
            success={!messageError && message !== '' ? 'Looks good!' : ''}
            disable={false}
            minLength={10}
            maxLength={200}
            autoFocus={false}
            required={true}
            name="elasticTextInput"
          />
        </div>
      </form>
    </>
  )
}
export default Form