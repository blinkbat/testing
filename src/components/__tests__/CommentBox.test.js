

import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';



let wrapped;

// beforeEach to create new wrapped component for each test
beforeEach( () => wrapped = mount( <CommentBox /> ) );

// afterEach to clean up and unmount wrapped
afterEach( () => wrapped.unmount() );



it( 'has a textarea and a button', () => {

    expect( 
        // .find returns an arr so we call .length
        wrapped.find( 'textarea' ).length 
    ).toEqual( 1 );

    expect( wrapped.find( 'button' ).length ).toEqual( 1 );

});



it( 'has a textarea we can change via typing', () => {

    // simulate an event on an element
    wrapped.find( 'textarea' ).simulate( 
        // event type to simulate
        'change',
        // event body to simulate
        { target: { value: 'new comment' } }
    );

    // force instantaneous component re-render
    wrapped.update();


    expect( 
        // new ref to textarea in component
        wrapped.find( 'textarea' ) 

        // pull off value prop (or any other)
        .prop( 'value' )

    ).toEqual( 'new comment' );

});



it( 'clears the textarea on form submission', () => {

    // simulate an event on an element
    wrapped.find( 'textarea' ).simulate( 'change',
        { target: { value: 'new comment' } }
    );

    wrapped.update();

    // interestingly, we must simulate submit on the form
    // and not a click on the submission button
    wrapped.find( 'form' ).simulate( 'submit' );

    wrapped.update();

    expect( 
        // new ref to textarea in component
        wrapped.find( 'textarea' ) 

        // pull off value prop (or any other)
        .prop( 'value' )

    ).toEqual( '' );

});