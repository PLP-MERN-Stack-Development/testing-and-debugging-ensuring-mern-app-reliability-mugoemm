import React from 'react';

export default function Button({ children, variant='primary', size='md', disabled=false, className='', ...rest }) {
  const base = 'btn';
  const classes = `${base} ${className} btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''}`.trim();
  return <button className={classes} disabled={disabled} {...rest}>{children}</button>;
}
