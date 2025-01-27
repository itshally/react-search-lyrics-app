import 'dotenv'
import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TRACKS' :
            return {
                ...state,
                track_list: action.payload,
                heading: 'Search Results'
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = { 
        track_list: [],
        heading: `Canada's Top 10 Tracks`,
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ca&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
             .then( result => {
                    // console.log(result.data)
                    this.setState({
                        track_list: result.data.message.body.track_list
                    })
              })
             .catch(error => console.log(error));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;