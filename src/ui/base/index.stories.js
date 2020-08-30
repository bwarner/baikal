/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Col, Row } from '../grid';
import Button from '../button/button';
import Input, { Styles } from '../form/input';
import InputButton from '../form/input-button';
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

const cellStyle = css`
  display: flex;
  flex-direction: column;
`;

const CellHeader = styled.div(`
  text-align: left;
  margin: 5px;
  font-size: 12px;
`);

export const Base = () => (
  <>
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
    <Row>
      <Col css={cellStyle}>
        <CellHeader>Active</CellHeader>
        <Input css={css({ width: 230, lineHeight: '45px' })} />
      </Col>
      <Col css={cellStyle}>
        <CellHeader>Success</CellHeader>
        <Input css={css({ width: 230, lineHeight: '45px' }, Styles.Success)} />
      </Col>
      <Col css={cellStyle}>
        <CellHeader>Error</CellHeader>
        <Input css={css({ width: 230, lineHeight: '45px' }, Styles.Error)} />
      </Col>
      <Col css={cellStyle}>
        <CellHeader>Disabled</CellHeader>
        <Input css={css({ width: 230, lineHeight: '45px' }, Styles.Disabled)} />
      </Col>
    </Row>
    <Row columns={2} width={1}>
      <Col>
        <Input css={css({ width: 475, lineHeight: '45px' }, Styles.Username)} />
      </Col>
      <Col>
        <Input css={css({ width: 475, lineHeight: '45px' }, Styles.Password)} />
      </Col>
    </Row>
    <Row columns={4} width={1}>
      <Col>
        <InputButton
          css={css({ width: 230, height: 45, lineHeight: '45px' })}
        />
      </Col>
      <Col>
        <Input
          css={css({ width: 230, lineHeight: '45px' }, Styles.WithButton)}
        />
      </Col>
      <Col width={2}>
        <Input css={css({ width: 475, lineHeight: '45px' }, Styles.Email)} />
      </Col>
    </Row>
  </>
);
