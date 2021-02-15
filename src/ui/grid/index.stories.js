/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Row, Col } from '.';

export default {
  title: 'Grid',
};

const cellCls = css({
  border: '1px solid red',
  height: '100px',
});

export function GridStory() {
  return (
    <div>
      <Row columns={4}>
        <Col className={cellCls}>1</Col>
        <Col className={cellCls}>2</Col>
        <Col className={cellCls}>3</Col>
        <Col className={cellCls}>4</Col>
        <Col className={cellCls}>5</Col>
      </Row>
      <Row columns={4}>
        <Col width={2} className={cellCls}>
          1
        </Col>
        <Col width={2}>2</Col>
        <Col width={2}>3</Col>
        <Col width={2}>4</Col>
        <Col width={2}>4</Col>
      </Row>
    </div>
  );
}
