import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup (saving){
  let props = {
    course:{},
    saving:saving,
    errors:{},
    onSave: ()=>{},
    onChange: ()=>{}
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils',()=>{
  it('renders form and h1',()=>{
    const {output} = setup();
    expect(output.type).toBe('form');
    let [ TextInput ] = output.props.children;
    expect(typeof TextInput.type).toBe('function');
    //expect(TextInput.type).toBe('TextInput');
  });

  it('save btn is Labled SAVE',()=>{
    const {output} = setup(false);
    const submitBtn = output.props.children[4];
    expect(submitBtn.props.value).toBe('Save');
  });

  it('save btn is Labled SAVING',()=>{
    const {output} = setup(true);
    const submitBtn = output.props.children[4];
    expect(submitBtn.props.value).toBe('Saving...');
  });
});
