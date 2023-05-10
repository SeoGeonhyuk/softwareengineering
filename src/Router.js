import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Detail1() {
  return <div>상세페이지 1</div>;
}

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/detail1'>상세페이지 1</Link>
            </li>
            <li>
              <Link to='/detail2'>상세페이지 2</Link>
            </li>
            <li>
              <Link to='/detail3'>상세페이지 3</Link>
            </li>
            <li>
              <Link to='/detail4'>상세페이지 4</Link>
            </li>
          </ul>
        </nav>

        <Route exact path='/' component={App} />
        <Route path='/detail1' component={Detail1} />
        <Route path='/detail2' component={Detail2} />
        <Route path='/detail3' component={Detail3} />
        <Route path='/detail4' component={Detail4} />
      </div>
    </Router>
  );
}

export default Routes;
