import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../Section/Section.module.css';

export const Section = ({ title, children }) => (
  <>
    <h2 className={clsx(css.title)}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
