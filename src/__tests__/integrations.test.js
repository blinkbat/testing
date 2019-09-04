

import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';



beforeEach( () => {

    // setup moxios
    moxios.install();

    // stub requests to our placeholder api
    // placeholders for a placeholder, lol
    moxios.stubRequest( 

        // first arg is request to stub
        'http://jsonplaceholder.typicode.com/comments', 

        // second arg is dummy response
        {
            status: 200,
            response: [
                { name: 'fakey comment uno' },
                { name: 'los dos commentos' },
                { name: 'some shit' }
            ]
        }
    );

});

afterEach( () => {

    // unmount moxios after each test
    moxios.uninstall();

});

// done argument is used to circumvent jest skipping setTimeout
// allows us to specify when jest considers a test 'done'
it( 'can fetch a list of comments and display them', done => {

    // render the entire app
    const wrapped = mount( 
        <Root>
            <App />
        </Root>
    );

    // find the fetchComments button and click it
    wrapped.find( '.fetch-comments' ).simulate( 'click' );

    // pause briefly for moxios intercept
    moxios.wait( () => {

        // re-render wrapped with comments
        wrapped.update();

        // expect to find a list of comments
        expect( wrapped.find( 'li' ).length ).toEqual( 3 );

        // we are now ready to end test
        done();

        // clean up mounted component
        wrapped.unmount();

    });

});



