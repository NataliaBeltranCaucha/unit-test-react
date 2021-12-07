import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './../App'

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {

    it("renders Account header", () => {
        const wrapper = shallow(<App />);
        const text = <h1>Aquí van los tests</h1>;
        expect(wrapper.contains(text)).toEqual(true);
    });

})
