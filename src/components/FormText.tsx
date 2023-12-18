import React from 'react';
import Form from 'react-bootstrap/Form';

interface FormTextExampleProps {
  controlId: string;
  label: string;
  type: string;
  helpText: string;
  onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormTextExample({ controlId, label, type, helpText, onChange } : FormTextExampleProps) {
  return (
    <>
      <Form.Label className='mb-3' htmlFor={controlId}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        id={controlId}
        aria-describedby={`${controlId}HelpBlock`}
        onChange={onChange}
      />
      <Form.Text id={`${controlId}HelpBlock`} muted>
        {helpText}
      </Form.Text>
    </>
  );
}

export default FormTextExample;
