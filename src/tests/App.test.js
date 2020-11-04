import React from 'react';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Calculator from '../components/Calculator';
import sinon from 'sinon';


configure({
  adapter: new Adapter
});


describe('<Calcuator />', () => {
  let wrapper = mount(<Calculator />);

  beforeEach(() => {
    wrapper.setProps({
      evaluate: sinon.spy(),
      deleteLastEntry: sinon.spy(),
      calcualte: sinon.spy(),
      clear: sinon.spy()
    })
  });


  it('renders and mounts the app without error', () => {
    sinon.spy(Calculator.prototype, 'componentDidMount');
    mount(<Calculator />);

    expect(Calculator.prototype.componentDidMount.calledOnce).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('calls the calculate action on keypad click', () => {
    wrapper.find('button[name="5"]').simulate('click');
    expect(wrapper.prop('calculate').calledWith('5')).toBeTruthy();

    wrapper.find('button[name="*"]').simulate('click');
    expect(wrapper.prop('calculate').calledWith('5')).toBeTruthy();

    wrapper.find('button[name="5"]').simulate('click');
    expect(wrapper.prop('calculate').calledWithExactly('5')).toBeTruthy();

    expect(wrapper.prop('calculate').callCount).toBe(3);
    expect(wrapper.prop('calculate').notCalled).toBeTruthy();
    expect(wrapper.prop('deleteLastEntry').notCalled).toBeTruthy();
  });


  it('calls the evalute action, on keypad "=" click', () => {
    wrapper.find('button[name="="]').simulate('click');

    expect(wrapper.prop('evaluate').calledOnce).toBeTruthy();
    expect(wrapper.prop('clear').notCalled).toBeTruthy();
    expect(wrapper.prop('deleteLastEntry').notCalled).toBeTruthy();
    expect(wrapper.prop('calculate').notCalled).toBeTruthy();
  });


  it('calls clear action on keypad "C" click', () => {
    wrapper.find('button[name="c"]').simulate('click');

    expect(wrapper.prop('clear').calledOnce).toBeTruthy();
    expect(wrapper.prop('calculate').notCalled).toBeTruthy();
    expect(wrapper.prop('evaluate').notCalled).toBeTruthy();
    expect(wrapper.prop('deleteLastEntry').notCalled).toBeTruthy()
  });


  it('calls Del action on keypad "Del" click', () => {
    wrapper.find('button[name="Del"]').simulate('click');

    expect(wrapper.prop('deleteLastEntry').calledOnce).toBeTruthy();
    expect(wrapper.prop('clear').notCalled).toBeTruthy();
    expect(wrapper.prop('calculate').notCalled).toBeTruthy();
    expect(wrapper.prop('evaluate').notCalled).toBeTruthy();
  });

});