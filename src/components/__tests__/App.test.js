

import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';



let wrapped;

// runs before each test... obviously
beforeEach( () => {

    // create shallow (no React children) instance of App
    wrapped = shallow( <App /> );

});



it( 'shows the comment box', () => {

    expect( 
        // .find returns an arr so we call .length
        wrapped.find( CommentBox ).length 

    ).toEqual( 1 );

});



it( 'shows the comment list', () => {

    expect( 
        // .find returns an arr so we call .length
        wrapped.find( CommentList ).length 

    ).toEqual( 1 );

});

