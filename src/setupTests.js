// executed automatically by jest during start
// initialize test environemnt

import raf from './shim';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

console.log('**setupTest')