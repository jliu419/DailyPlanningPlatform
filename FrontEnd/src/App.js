import React, { Component } from 'react';
import MainContent from './MainContentComponents/MainContent';
import LeftBar from './LeftBarComponents/LeftBar';
import Header from './HeaderBarComponents/Header';
import Style from './Index.css'

export default class App extends Component {

    render () {

        return (
            <div className='Application'>
                <div className="TheHeader">
                    <Header/> 
                </div>
                <div className='Non-Header_Components'>
                    <LeftBar />
                    <MainContent />
                </div>
            </div>
        );
         
    }
}
          
          
          
          
