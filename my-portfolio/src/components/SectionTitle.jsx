import React from 'react'

/* It's possible that id={id && id} is included to conditionally add the id prop to the <h1> element only if an id prop is provided.

Here's how it works: if id prop is falsy (e.g. null, undefined, 0, etc.), then id && id evaluates to falsy and the id prop is not added to the <h1> element. However, if id prop is truthy (e.g. a string), then id && id evaluates to truthy and the id prop is added to the <h1> element.

This pattern allows for the SectionTitle component to be used with or without an id prop, while avoiding passing an empty id prop (e.g. <SectionTitle id="">) that could potentially cause issues with styling or accessibility. */

const SectionTitle = ({children, id}) => {
  return (
    <h1 id={id && id} className='text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-400' >
        {children}
    </h1>
  )
}

export default SectionTitle