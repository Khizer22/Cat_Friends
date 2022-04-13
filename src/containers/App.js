import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import './App.css';

//Props = properties that can be passed down.
//STATE: a dscription of your app.
    //An object, that describes your application

class App extends Component {

    constructor(){
        super();
        this.state = { //state can change and effect our app.usually live in parent component
            cats: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
     //everytime input changes, we get an event
        this.setState({searchfield:event.target.value});    
    }

    filtercats = () => {
        const {cats,searchfield} = this.state;

        const filteredcats = cats.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return filteredcats;
    }

    render(){
        if (!this.state.cats.length){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Employees at Cat Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList cats={this.filtercats()}/>
                    </Scroll>
                </div>
            );
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) //convert response to json
        .then(users => this.setState({cats: users})) //set state to recieved json items
    }
}

export default App;