import React, { Component } from 'react';
import MainContent from './MainContentComponents/MainContent';
import LeftBar from './LeftBarComponents/LeftBar';
import Header from './HeaderBarComponents/Header';

export default class App extends Component {

    render () {

        return (
            <div>
                <Header/>
                <LeftBar />
                <MainContent />
            </div>
        );
    }
}
          
          
          
          
