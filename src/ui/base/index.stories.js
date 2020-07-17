import { mq } from '../css';
import { Col, Row } from '../grid';
import Button from '../button/button';

export default { title: 'Base' };

const pageClass = mq({
  width: ['100%', '1024px'],
  margin: '115px auto',
});

const baseButton = {
  textTransform: 'uppercase',
  width: 230,
  height: 45,
  margin: 5,
};

export const Input = () => (
  <div css={pageClass}>
    <div css={{ width: 980 }}>
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
    </div>
  </div>
);
