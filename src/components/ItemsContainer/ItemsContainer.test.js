import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ItemsContainer from './ItemsContainer';


describe ("ItemsContainer component test",()=> {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ItemsContainer/>);

    });


    it('should test ItemsContainer component snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    });

})