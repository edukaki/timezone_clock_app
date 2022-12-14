import React from 'react'
import InfoItems from '../InfoItems'
import './InfoMenu.css'


const InfoMenu = (props) => {
  const data = props.data;
  return (
    <section className='c-info-menu c-info-menu--hide'>
      <div className='c-info-menu__column'>
        <InfoItems title='Current Timezone' description={data.timezone} />
        <InfoItems title='Day of the year' description={data.day_of_year} />
      </div>
      <div className='c-info-menu__column'>
        <InfoItems title='Day of the week' description={data.day_of_week} />
        <InfoItems title='Week number' description={data.week_number} />
      </div>
    </section>
  )
}

export default InfoMenu
