import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {robots} from '../robots';
import './App.css';

const state = {
    robots: robots,
    searchField: ''
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            // robots: robots,
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        // console.log('Mounted');
        // this.setState({robots: robots});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => { res.json(); })
            .then(users => { this.setState({robots: robots}); });


        
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ searchField: event.target.value });
        // const filterRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        // })
        // this.state.robots = robots[event.target.value]
        // console.log(filterRobots);
    }

    render() {
        const { robots, searchField } = this.state;
        // const filterRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // if(this.state.robots.length === 0) {
        if(!robots.length) {
            return <h1 className='tc'>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filterRobots} />
                    </Scroll>
                    {/* <Cardlist robots={this.state.robots} /> */}
                </div>
            );
        }
    }
};

export default App;