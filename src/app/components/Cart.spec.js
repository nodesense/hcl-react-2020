import React from "react";

import {mount, shallow} from "enzyme";
import Cart from "./Cart";

//mount render child component render functions/ deep rendering, all the child in depth renderd
//shallow: render only current component Render function, doesn't render child components


describe("React Cart component Suite", ()=> {
    

    it("cart default test", ()=> {
        let wrapper = mount(<Cart  />);

        // enzyme has many wrapper methods
        expect(wrapper.find("table").length).toBe(1);
        expect(wrapper.find("tr").length).toBe(2);

       expect(wrapper.find("strong").text()).toBe("500");

        expect(wrapper.find("em").text()).toBe("5");
    })


    it("cart addItem test", ()=> {
        // deep, mount Cart, CartList, CartSumary, CartItem
        let wrapper = mount(<Cart  />);
        let component = wrapper.instance();
        component.addItem(); // add random items
        // calls render method
        wrapper.update();

        expect(wrapper.find("tr").length).toBe(3);
    })

    it("cart removeItem test", ()=> {
        let wrapper = mount(<Cart  />);
        let component = wrapper.instance();
        component.removeItem(1); // add random items
        // calls render method
        wrapper.update();

        expect(wrapper.find("tr").length).toBe(1);
    })

    it("shallow test state data", () => {
        // test classes/state/only one level of rendering
        let wrapper = shallow(<Cart  />);
        let component = wrapper.instance();

        expect(component.state.count).toBe(5);
        expect(component.state.amount).toBe(500);
        
        component.removeItem(1); // add random items
        // calls render method
        wrapper.update();

        expect(component.state.count).toBe(0);
        expect(component.state.amount).toBe(0);
        
    })
    

})