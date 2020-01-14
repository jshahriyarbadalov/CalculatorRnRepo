/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Test my function btnPressed ', () => {

  it('snapshot Testing App component', () => {
    const myfunction = renderer.create(<App />).toJSON
    expect(myfunction).toMatchSnapshot();
  })

  it('validate function Testing App Component', () => {
    let resTxt = "5+6";
    function valid() {
      const text = resTxt
      switch (text.slice(-1)) {
        case '+':
        case '-':
        case 'x':
        case '/':
          return false
      }
      return true;
    }
    let rgx = renderer.create(<App />).getInstance()
    let variable = rgx.validate()
    let vall=valid()
    expect(variable).toBe(vall);

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
    let result = '='
    let btn = renderer.create(<App />).getInstance()

    expect(btn.btnPressed(oper)).not.toEqual(result)

  })

  it('calculator function  Testing App Component', () => {
    let oper = '+'
    let result = '+'
    let resultTxt = "9/0"
    let text = ''
    switch (oper) {
      case 'AC':
        text
        break
      case '+':
      case '-':
      case 'x':
      case '/':
        const lastChar = resultTxt.split('').pop()
        if (oper.indexOf(lastChar) > 0) return

        if (resultTxt == "") {
          return
        }
        resultTxt = resultTxt + oper
    }
    let ops = renderer.create(<App />).getInstance()
    let ans = ops.calculator(oper);
    expect(ans).not.toEqual(result);
  })

  it(' render function testing', () => {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    let operations = ['AC', '+', '-', 'x', '/'];
    let comp = renderer.create(<App />).getInstance()
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity key={nums[i][j]} style={{
          flex: 1, alignItems: 'center', alignSelf: 'stretch',
          justifyContent: 'center'
        }} onPress={() => comp.btnPressed(nums[i][j])} >
          <Text style={{ fontSize: 30 }}>{nums[i][j]}</Text>
        </TouchableOpacity>);
      }
      rows.push(<View key={i} style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>{row}</View>);
    }

    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity key={operations[i]} style={{
        flex: 1, alignItems: 'center', alignSelf: 'stretch',
        justifyContent: 'center'
      }} onPress={() => comp.calculator(operations[i])}>
        <Text style={{ fontSize: 30, color: 'white' }}>{operations[i]}</Text>
      </TouchableOpacity>)
    }
    let ren = comp.render();

    expect(ren).toBeDefined()
  });
});

