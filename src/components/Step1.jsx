import { Form } from "react-bootstrap";

const Step1 = ({ data, handleChange, errors }) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <Form>
        <Form.Group controlId="formName" className="p-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={data.name}            
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail" className="p-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPhone" className="p-2">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
};



export default Step1;
