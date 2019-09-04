

import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';



let wrapped;

// beforeEach to create new wrapped component for each test
// here we wrap our component with Root to create the redux store
// just as we do with our initial render of App
beforeEach( () => {

    const initialState = {
        comments: [
            'comment 1',
            'comment dos',
            'comment III'
        ]
    };

    wrapped = mount( 
        <Root initialState={ initialState }>
            <CommentList /> 
        </Root>
    );

});

it( 'creates one <li> per comment', () => {

    expect( wrapped.find( 'li' ).length ).toEqual( 3 );

});

it( 'shows the text for each comment', () => {

    const wrappedText = wrapped.render().text();

    expect( wrappedText ).toContain( 'comment 1' );
    expect( wrappedText ).toContain( 'comment dos' );
    expect( wrappedText ).toContain( 'comment III' );

});