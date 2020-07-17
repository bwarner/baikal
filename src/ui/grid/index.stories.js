import React from 'react';
import { Row, Col } from '.';

export default {
  title: 'Grid',
};

const cellCls = {
  border: '1px solid red',
  height: '100px',
};

export function GridStory() {
  return (
    <div>
      <Row columns={4}>
        <Col extraCls={cellCls}>1</Col>
        <Col extraCls={cellCls}>2</Col>
        <Col extraCls={cellCls}>3</Col>
        <Col extraCls={cellCls}>4</Col>
        <Col extraCls={cellCls}>5</Col>
      </Row>
      <Row columns={4}>
        <Col width={2} extraCls={cellCls}>
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
