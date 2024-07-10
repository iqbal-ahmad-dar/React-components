import React, { useState } from 'react'
import TextBox from '../TextBox';
import useValidation from '../TextBox/useValidation';
const TestComponents = () => {
  const [text, setText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const { validationError: emailError } = useValidation('email');
  const { validationError: passwordError } = useValidation('password');
  const { validationError: phoneNumberError } = useValidation('number');
  const { validationError: textError } = useValidation('text');
  return (
    <div>
      <div className="w-2/3">
        <TextBox
          id="test-id"
          labelName="Text Input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter text here"
          type="text"
          readOnly={false}
          error={textError}
          success={!textError && text !== '' ? 'Looks good!' : ''}
          disable={false}
          steps={1}
          min={1}
          max={100}
          onClick={() => console.log('TextInput clicked')}
          onFocus={() => console.log('TextInput focused')}
          onBlur={() => console.log('TextInput blurred')}
          autoFocus={true}
          name="testName"
        />
        <TextBox
          id="number-input"
          labelName="Number Input"
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
          autoFocus={true}
          name="phoneNumber"
        />
        <TextBox
          id="email-input"
          labelName="Email Input"
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
          autoFocus={true}
          name="email"
        />
        <TextBox
          id="password-input"
          labelName="Password Input"
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
          name="passwordInput"
        />
      </div>
    </div>
  )
}

export default TestComponents