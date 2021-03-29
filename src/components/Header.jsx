import React from 'react'
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className="header">
      <h1>
        <Link to="/">토익 영단어</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" href="#word" className="link">단어 추가</Link>
        <Link to="/create_day" href="#Day" className="link">Day 추가</Link>
        <Link to="/create_delday" href="#delDay" className="link">Day 삭제</Link>
      </div>
    </div>
  );
}
