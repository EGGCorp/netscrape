import React from 'react';
import SideBarCard from './SideBarCard';

const SideBar = (props) => {

  return(
		<div>
			{props.list.map((movie) => {
            return (
              <div key={movie.id}>
                <SideBarCard title={movie.title} countrylist={movie.clist} rating={movie.imdbrating} synopsis={movie.synopsis}/>
              </div>
            )
          })}
		</div>
  )
}

export default SideBar;