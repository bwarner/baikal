/** @jsx jsx */
import { useContext } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Col, Row } from '../grid';
import Button from '../button/button';
import Dropdown from '../button/dropdown';
import RightArrow from '../button/right-arrow';
import Input, { Styles } from '../form/input';
import {
  Checkbox, RadioButton, ToggleSwitch, Stepper, Choice,
} from '../form';
import PageDecorator from '../../decorators/page-decorator';
import ThemeContext from '../css/theme-context';
import AllPosts from '../social/all-posts';
import { SocialShare, SocialShareCell } from '../social/shares';
import {
  FacebookButton,
  PinterestButton,
  TwitterButton,
} from '../social/button';
import { Tags } from '../tags';

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

const iconButtonCellStyle = css({
  position: 'relative',
  display: 'inline-block',
  width: 230,
  lineHeight: '45px',
  height: '45px',
  '& input': {
    padding: 0,
    lineHeight: 'inherit',
    width: 'calc(100% - 45px)',
  },
});

export const Base = () => {
  const theme = useContext(ThemeContext);
  return (
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
          <Input
            css={css({ width: 230, lineHeight: '45px' }, Styles.Success)}
          />
        </Col>
        <Col css={cellStyle}>
          <CellHeader>Error</CellHeader>
          <Input css={css({ width: 230, lineHeight: '45px' }, Styles.Error)} />
        </Col>
        <Col css={cellStyle}>
          <CellHeader>Disabled</CellHeader>
          <Input
            css={css({ width: 230, lineHeight: '45px' }, Styles.Disabled)}
          />
        </Col>
      </Row>
      <Row columns={2} width={1}>
        <Col>
          <Input
            css={css({ width: 475, lineHeight: '45px' }, Styles.Username)}
          />
        </Col>
        <Col>
          <Input
            css={css({ width: 475, lineHeight: '45px' }, Styles.Password)}
          />
        </Col>
      </Row>
      <Row columns={4} width={1}>
        <Col>
          <label htmlFor="dropdown" css={iconButtonCellStyle}>
            <Input id="dropdown" />
            <Dropdown
              css={css({
                '--button-color': theme.buttons.dropdown.color,
                '--button-background-color':
                  theme.buttons.dropdown.backgroundColor,
              })}
            />
          </label>
        </Col>
        <Col>
          <label htmlFor="right-arrow" css={iconButtonCellStyle}>
            <Input id="right-arrow" />
            <RightArrow
              css={css({
                '--button-color': theme.buttons.rightArrow.color,
                '--button-background-color':
                  theme.buttons.rightArrow.backgroundColor,
              })}
            />
          </label>
        </Col>
        <Col width={2}>
          <Input css={css({ width: 475, lineHeight: '45px' }, Styles.Email)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TwitterButton size="lg" rounded />
          <TwitterButton size="lg" rounded outline />
        </Col>
        <Col>
          <TwitterButton size="lg" />
          <TwitterButton size="lg" outline />
        </Col>
      </Row>

      <Row>
        <Col>
          <FacebookButton size="lg" rounded />
          <FacebookButton size="lg" rounded outline />
        </Col>
        <Col>
          <FacebookButton size="lg" />
          <FacebookButton size="lg" outline />
        </Col>
      </Row>
      <Row>
        <Col>
          <PinterestButton size="lg" rounded />
          <PinterestButton size="lg" rounded outline />
        </Col>
        <Col>
          <PinterestButton size="lg" />
          <PinterestButton size="lg" outline />
        </Col>
      </Row>
      <Row columns={5}>
        <Col>
          <AllPosts names={['twitter', 'facebook', 'instagram']} />
        </Col>
        <Col css={css({ height: 75 })} width={2}>
          <Row
            css={css`
              height: 100%;
            `}
            width={1}
            columns={3}
          >
            <Col width={1}>
              <TwitterButton size="md" />
            </Col>
            <Col>
              <FacebookButton size="md" />
            </Col>
            <Col>
              <PinterestButton size="md" />
            </Col>
            <Col>
              <TwitterButton size="md" outline />
            </Col>
            <Col>
              <FacebookButton size="md" outline />
            </Col>
            <Col>
              <PinterestButton size="md" outline />
            </Col>
          </Row>
        </Col>
        <Col css={css({ height: 75 })} width={2}>
          <Row
            css={css`
              height: 100%;
            `}
            width={1}
            columns={3}
          >
            <Col>
              <TwitterButton size="md" rounded />
            </Col>
            <Col>
              <FacebookButton size="md" rounded />
            </Col>
            <Col>
              <PinterestButton size="md" rounded />
            </Col>
            <Col>
              <TwitterButton size="md" rounded outline />
            </Col>
            <Col>
              <FacebookButton size="md" rounded outline />
            </Col>
            <Col>
              <PinterestButton size="md" rounded outline />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row columns={5} css={{ margin: '10px 0' }}>
        <Col width={1}>
          <SocialShare>
            <SocialShareCell network="facebook" count={122} />
            <SocialShareCell network="twitter" count={256} />
            <SocialShareCell network="pinterest" count={50} />
          </SocialShare>
        </Col>
        <Col width={4}>
          <Row columns={4}>
            <Col tag="form" width={3}>
              <Row width={1}>
                <Col>
                  <Checkbox
                    name="checkbox1"
                    id="checkbox1"
                    checked
                    content="Checked"
                  />
                </Col>
                <Col>
                  <RadioButton
                    name="radio-button"
                    id="radio-button1"
                    checked
                    content="Radiobutton + check"
                  />
                </Col>
                <Col>
                  <ToggleSwitch
                    name="switch1"
                    id="switch1"
                    checked
                    content="On"
                  />
                </Col>
              </Row>
              <Row width={1}>
                <Col>
                  <Checkbox
                    name="checkbox2"
                    id="checkbox2"
                    content="Checkbox"
                  />
                </Col>
                <Col>
                  <RadioButton
                    name="radio-button"
                    id="radio-button2"
                    content="Radiobutton"
                  />
                </Col>
                <Col>
                  <ToggleSwitch name="switch2" id="switch2" content="Off" />
                </Col>
              </Row>
            </Col>
            <Col tag="form" width={1}>
              <Stepper
                css={css`
                  width: 40px;
                `}
                name="switch"
                id="switch"
                value={1}
                min={1}
                step={2}
                max={100}
              />
            </Col>
          </Row>
          <Row columns={4}>
            <Col width={2}>
              <Tags
                tags={[
                  'TRAVEL',
                  'BAIKAL',
                  'LAKE',
                  'TRIP',
                  'VISTING',
                  'HOLIDAY',
                ]}
              />
            </Col>
            <Col width={2}>
              <Choice
                selected="credit"
                items={{
                  credit: 'CREDIT CARD',
                  paypal: 'PAYPAL',
                  cash: 'CASH',
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
