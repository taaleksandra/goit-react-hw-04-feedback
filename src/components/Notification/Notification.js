import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../Notification/Notification.module.css';

export const Notification = ({ msg }) => (
  <span className={clsx(css.notification)}>{msg}</span>
);

Notification.propTypes = {
  msg: PropTypes.string,
};
