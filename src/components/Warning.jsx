import { Alert } from "react-bootstrap";

const Warning = (props) => {
  return <Alert variant={props.variant}>{props.message}</Alert>;
};

export default Warning;
