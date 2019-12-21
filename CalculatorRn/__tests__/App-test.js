/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Test my function btnPressed ', () => {

  it('snapshot Testing App component', () => {
    const myfunction = renderer.create(<App />).toJSON
    expect(myfunction).toMatchSnapshot();
  })
  it('valid function Testing App Component', () => {
    let rgx = renderer.create(<App />).getInstance()
    let variable = rgx.validate()
    expect(variable).toBeDefined()

  })
  it('calculateResult function  Testing App Component', () => {
    let clc = renderer.create(<App />).getInstance()
    let variab = clc.calculateResult()
    expect(variab).not.toBeDefined()

  })
  it('constructor function  Testing App Component', () => {
    let ctr = renderer.create(<App />).getInstance()
    let vrb = ctr.constructor()
    expect(vrb).toBeDefined()

  })
  it('btnPressed function  Testing App Component', () => {
    let oper = "="
    let result='='
    let btn = renderer.create(<App />).getInstance()

    expect(btn.btnPressed(oper)).not.toEqual(result)

  })

  it('calculator function  Testing App Component', () => {
    let oper = "+"
    let result="+"
    let ops = renderer.create(<App />).getInstance()

    expect(ops.calculator(oper)).toBeDefined()

  })
});

