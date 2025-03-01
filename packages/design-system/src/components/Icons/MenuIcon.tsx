import React from 'react';
import SvgIcon, { IconCommonProps } from './SvgIcon';
import classNames from 'classnames';

const defaultProps = {
  className: '',
  title: 'Menu Icon',
  viewBox: '0 0 448 512',
};

function MenuIcon(props: IconCommonProps): React.ReactElement {
  const classes = classNames(props.className, 'ds-c-icon--menu');

  return (
    <SvgIcon {...defaultProps} {...props} className={classes}>
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </SvgIcon>
  );
}

export default MenuIcon;
