import React from 'react'
import useFetch from '../hooks/useFetch'
// import { Link } from 'react-router-dom';

export default function DeleteDay(){
  const days = useFetch("http://localhost:3001/days");

  return (
    <>
      <button className="btn_del">삭제</button>
      <ul className="list_day">
        {days.map(day => (
          <li 
            key={day.id}
          >
            <input type="checkbox"/>
            <button>Day {day.day}</button>
          </li>
        ))}
      </ul>
    </>
  )
}
