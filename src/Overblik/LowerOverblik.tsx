import React from 'react'

const lowerOverblik = () => {
  return (
    <div className='pt-24 px-8 md:pt-40'>
      <h1 className='text-left md:text-3xl lg:text-4xl'>Generelt</h1>
      <p className='font-thin pt-4 text-left text-sm '>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Aliquid vero at ea dicta 
        illum corrupti laudantium facilis eum accusamus
         nihil doloribus ullam quibusdam esse totam, 
         earum cum ex? Aliquid recusandae pariatur iusto. 
         Tempora alias, est porro fuga culpa ipsum delectus 
         minima omnis tempore. Dolorum mollitia illo porro 
         nostrum! Architecto neque, voluptate quo repellat 
         veritatis, quibusdam vitae enim id commodi ex, 
         placeat cupiditate illum dignissimos magni dolore? 
         Commodi recusandae quasi in dolor, aperiam id iure 
         possimus odio eius natus hic libero.</p>
         <p className='font-thin pt-4 text-left text-sm pb-4 '>Lorem, ipsum dolor sit amet consectetur
           adipisicing elit. Totam reiciendis soluta 
           voluptatibus fugit ipsam natus nihil id eveniet 
           aperiam expedita.</p>

          <button onClick={() => window.location.href='/qa'} className='bg-[#0700F6] text-xs text-white rounded-full py-4 px-6'>Læs mere på Q&A siden</button>
    </div>
  )
}

export default lowerOverblik