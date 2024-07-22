import React, { useState } from 'react';
import TextBox from '../components/TextBox';
import useValidation from '../hooks/useValidation';
import ElasticTextBox from '../components/ElasticTextBox';
import Attachments from '../components/Attachments';
import CountrySelector from '../components/CountrySelector';
import Accordions from '../components/Accordions';
import PhoneSelector from '../components/PhoneSelector';
import CheckboxGroup from '../components/CheckboxGroup';
import RadioGroup from '../components/RadioGroup';
const accordionData = [
  {
    title: 'Healthy Eating',
    subtitle: 'Tips for a balanced diet',
    content:
      'Healthy eating means consuming a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy. These nutrients include protein, carbohydrates, fat, water, vitamins, and minerals.',
  },
  {
    title: 'Exercise Benefits',
    subtitle: 'Why staying active is important',
    content:
      'Regular physical activity can improve muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.',
  },
  {
    title: 'Mental Health',
    subtitle: 'Caring for your mental well-being',
    content:
      'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.',
  },
  {
    title: 'Sleep Hygiene',
    subtitle: 'Tips for better sleep',
    content:
      'Good sleep hygiene includes setting a consistent sleep schedule, creating a restful environment, and avoiding screens before bedtime. Getting enough quality sleep is essential for maintaining physical health, emotional well-being, and cognitive functioning.',
  },
];
const options = [
  { value: 'checkedA', label: 'Option A', checked: true },
  { value: 'checkedB', label: 'Option B', checked: false },
  { value: 'checkedC', label: 'Option C', checked: false },
];
const radioOptions = [
  { value: 'option1', label: 'Option 1', selected: true },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
  { value: 'option4', label: 'Option 4' },
];
const Form = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState([]);
  const [contactNumber, setContactNumber] = useState('');
  const { validationError: emailError } = useValidation('email');
  const { validationError: passwordError } = useValidation('password');
  const { validationError: phoneNumberError } = useValidation('number');
  const { validationError: textError } = useValidation('text');
  const { validationError: messageError } = useValidation('text');
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxGroupChange = (newCheckedItems) => {
    console.log(newCheckedItems);
    setCheckedItems(newCheckedItems);
  };
  const HandleRemove = (files) => {
    setFile((prev) => prev.filter((file) => file.name !== files.name));
  };
  const handlePhoneChange = (newPhone) => {
    setContactNumber(newPhone);
  };
  const [selectedValue, setSelectedValue] = useState(null);
  const handleRadioChange = (value) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
  };
  return (
    <div className="w-11/12 md:w-4/5   m-auto shadow-md p-5 my-5">
      <form className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="min-w-[250px]">
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
            success={
              !phoneNumberError && phoneNumber !== '' ? 'Looks good!' : ''
            }
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
          <Attachments
            onSelect={(file) => setFile(file)}
            onRemove={HandleRemove}
            files={file}
            label={'Attachment'}
            id="File"
            multiple={true}
          />
          <CountrySelector
            onChange={(country) => console.log(country)}
            label={'Select Country'}
          />
          <PhoneSelector
            label="Phone Number"
            defaultCountry="CA"
            value={contactNumber}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="min-w-[250px]">
          <CheckboxGroup
            headingLabel={'Dynamic Checkbox Group with Material-UI'}
            type="vertical"
            labelPlacement="end"
            options={options}
            onChange={handleCheckboxGroupChange}
            color="primary"
          />
          <RadioGroup
            type="vertical"
            options={radioOptions}
            name="exampleRadioGroup"
            onChange={handleRadioChange}
            className="custom-radio-class"
            iconClass="custom-icon-class"
            headingLabel="Choose an Option"
          />
          <Accordions accordions={accordionData} label={'Accordion'} />
        </div>
      </form>
    </div>
  );
};
export default Form;
