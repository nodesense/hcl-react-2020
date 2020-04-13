import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

import {BrowserRouter as Router} from 'react-router-dom';

// test is like test suite + 1 test case inside
test('Link changes the class when hovered', () => {
  const component = renderer.create(
      <Router>
        <Footer companyName="HCL" 
            year={2020}
            branches = { ['IN', 'UK'] }
            > </Footer>
    </Router>        
            ,
  );
  // convert Virtual DOM into JSON structure
  let tree = component.toJSON();
  // create a file in the project very first time
  // second time onwards, uses snapshot file against test result
  expect(tree).toMatchSnapshot();
})