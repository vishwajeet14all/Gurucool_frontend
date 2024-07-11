import { ListGroup } from "react-bootstrap";

const Step3 = ({ data }) => {
  return (
    <div>
      <h3>Confirmation</h3>
      <ListGroup>
        <ListGroup.Item>
          <strong>Name:</strong> {data.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Email:</strong> {data.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Phone:</strong> {data.phone}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Address Line 1:</strong> {data.address1}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Address Line 2:</strong> {data.address2}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>City:</strong> {data.city}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>State:</strong> {data.state}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Zip Code:</strong> {data.zip}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Step3;
