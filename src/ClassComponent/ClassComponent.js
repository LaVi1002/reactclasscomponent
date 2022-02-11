import React from 'react';
import HeaderComponent from './HeaderComponent';
import './ClassComponent.css';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';

class ClassComponent extends React.Component {
    render(){
    return(
        <div>
        <HeaderComponent />
        <BodyComponent />   
        <FooterComponent />
    </div>

    );
}
}
export default ClassComponent;