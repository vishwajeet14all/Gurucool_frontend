import { Form } from "react-bootstrap";

const Step2 = ({ data, handleChange, errors }) => {
  return (
    <div>
      <h3>Address Information</h3>
      <Form>
        <Form.Group controlId="formAddress1" className="p-2">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            name="address1"
            value={data.address1}
            onChange={handleChange}
            isInvalid={!!errors.address1}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address1}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAddress2" className="p-2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            name="address2"
            value={data.address2}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCity" className="p-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            isInvalid={!!errors.city}
          />
          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formState" className="p-2">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            isInvalid={!!errors.state}
          />
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formZip" className="p-2">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            value={data.zip}
            onChange={handleChange}
            isInvalid={!!errors.zip}
          />
          <Form.Control.Feedback type="invalid">
            {errors.zip}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Step2;
