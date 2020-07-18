import { Col, Row } from '../grid';
import Button from '../button/button';
import PageDecorator from '../../decorators/page-decorator';

export default {
  title: 'Base',
  component: Button,
  decorators: [PageDecorator],
};

const baseButton = {
  textTransform: 'uppercase',
  width: 230,
  height: 45,
  margin: 5,
};

export const Input = () => (
  <Row columns={4} width={1}>
    <Col>
      <Button buttonType="primary" styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="secondary" styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="tertiary" styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="quaternary" styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="primary" outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="secondary" outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="tertiary" outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="quaternary" outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="primary" rounded styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="secondary" rounded styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="tertiary" rounded styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="quaternary" rounded styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="primary" rounded outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="secondary" rounded outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="tertiary" rounded outline styles={baseButton}>
        Button
      </Button>
    </Col>
    <Col>
      <Button buttonType="quaternary" rounded outline styles={baseButton}>
        Button
      </Button>
    </Col>
  </Row>
);
