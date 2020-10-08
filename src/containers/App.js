import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
    const [robots, setRobots] = React.useState([]);
    const [searchfield, setSearcField] = React.useState('');

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearcField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return (
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        )
    });

    return !robots.length ?
        <h1 className="tc">Loading</h1> :
        (
            <React.StrictMode>
                <div className='tc'>
                    <h1 className='f1 shadow-2'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </React.StrictMode>
        );
}

export default App;