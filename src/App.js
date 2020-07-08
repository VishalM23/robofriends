import React from 'react';
import CardList from './CardList';
import {Robots} from './Robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component{

    constructor(){
        super()
        this.state={
            Robots: Robots,
            searchfield: '',
        }
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({Robots: users}))
    }

    render(){
        const filteredRobots= this.state.Robots.filter(Robots=>{
            return Robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1>RoBoFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList Robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                
            </div>
        )

    }
}

export default App;