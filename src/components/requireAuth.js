


import React, { Component } from 'react';
import { connect } from 'react-redux';



// HIGHER-ORDER COMPONENT SCAFFOLDING
export default ChildComponent => {

    class ComposedComponent extends Component {

        // push unauthed users outta here
        loginShield() {
            if( !this.props.auth ) {
                //console.log( "I need to go..." );
                this.props.history.push( "/" );
            }
        }
    
        // component is mounted when user isn't authed...
        componentDidMount() {
            this.loginShield();
        }
    
        // user logs out with component onscreen...
        componentDidUpdate() {
            this.loginShield();
        }

        render() {
            // ensure we pass our props thru the chain...
            return <ChildComponent { ...this.props } />;
        }

    }



    // ComposedComponent must know auth state...
    function mapStateToProps( state ) {
        return { auth: state.auth };
    }

    return connect( mapStateToProps )( ComposedComponent );

}


