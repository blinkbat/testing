

import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';



let wrapped;

// beforeEach to create new wrapped component for each test
// here we wrap our component with Root to create the redux store
// just as we do with our initial render of App
beforeEach( () => {

    wrapped = mount( 
        <Root>
            <CommentBox /> 
        </Root>
    );

});

// afterEach to clean up and unmount wrapped
afterEach( () => wrapped.unmount() );



it( 'has a textarea and two buttons', () => {

    expect( 
        // .find returns an arr so we call .length
        wrapped.find( 'textarea' ).length 
    ).toEqual( 1 );

    expect( wrapped.find( 'button' ).length ).toEqual( 2 );

});



// group the next tests together
// we can then use a beforeEach without
// unintended side effects on other tests
describe( 'the textarea', () => {

    beforeEach( () => {
        // simulate an event on an element
        wrapped.find( 'textarea' ).simulate( 
            // event type to simulate (HTML syntax, not React)
            'change',
            // event body to simulate
            { target: { value: 'new comment' } }
        );
    
        // force instantaneous component re-render
        wrapped.update();

    });



    it( 'can be changed via typing', () => {
    
        expect( 
            // new ref to textarea in component
            wrapped.find( 'textarea' ) 
    
            // pull off value prop (or any other)
            .prop( 'value' )
    
        ).toEqual( 'new comment' );
    
    });



    it( 'clears itself on form submission', () => {

        // interestingly, we must simulate submit on the form
        // and not a click on the submission button
        wrapped.find( 'form' ).simulate( 'submit' );
    
        wrapped.update();
    
        expect( 
            wrapped.find( 'textarea' ).prop( 'value' )
        ).toEqual( '' );
    
    });

});

