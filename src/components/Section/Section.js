import React from 'react';

function Section(title, name, children) {
  return (
    <section className='section' id={name}>
      <h2 className='section__title'>{title}</h2>
      {children}
    </section>
  )
}