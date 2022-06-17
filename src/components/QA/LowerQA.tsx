import React from 'react'
import CloseIcon from '../../svgs/CloseIcon'

const LowerQA = () => {
  return (
    <div className='px-8 md:pt-24'>
      <h1 className='text-left pt-18 md:px-12'>Grundlæggende</h1>
      <ul className='px-8 text-left pt-6 text-sm md:px-20'>
        <li>
          <p> <CloseIcon width={16} height={16}/> Hvordan får jeg adgang til min Dreamplan profil?</p>
        </li>
        <li className='pt-6'>
          <p> <CloseIcon width={16} height={16}/> Hvornår begynder mit abonnement?</p>
          <p className='font-thin pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nobis accusamus cupiditate fuga ad, quos, 
            nam minima eius quia incidunt praesentium debitis 
            cum nesciunt quibusdam harum aliquid quaerat! 
            Iusto, voluptatibus maiores?</p>
        </li>
      </ul>

    </div>
  )
}

export default LowerQA