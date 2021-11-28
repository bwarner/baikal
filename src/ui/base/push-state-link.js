import PropTypes from 'prop-types';

export default function PushStateLink({ href, children, ...rest }) {
  function changeURL(event) {
    window.history.pushState({}, '', href);
    event.preventDefault();
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={href} {...rest} onClick={changeURL}>
      {children}
    </a>
  );
}

PushStateLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};
