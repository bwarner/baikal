import { mq } from '../ui/css';

export default (storyFn) => (
  <div
    css={mq({
      width: ['100%', '1024px'],
      margin: '115px auto',
    })}
  >
    <div css={{ width: 980 }}>{storyFn()}</div>
  </div>
);
