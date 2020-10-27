import React from 'react';
import { connect } from 'react-redux';
import { requestPokemons, requestOptions } from '../../redux/pokemons-reducer';
import { compose } from 'redux';
import MainFrame from './MainFrame';
import Preloader from '../Preloader/Preloader';

class MainFrameContainer extends React.Component {

    componentDidMount() {
        this.props.requestPokemons(this.props.types,  this.props.subtypes); 
        this.props.requestOptions();
    }


    onTypeChanged = (type) => {
        this.props.requestPokemons(type);
    }

    onSubtypeChanged = (subtype) => {
        let {type} = this.props;
        this.props.requestPokemons(type, subtype);
    }


    render() {
        return <>        
            {this.props.isFetching ? <Preloader/> : null}
            <MainFrame pokemons={this.props.pokemons} types={this.props.types} 
            subtypes={this.props.subtypes} 
            onTypeChanged={this.onTypeChanged}
            onSubtypeChanged={this.onSubtypeChanged} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonsPage.pokemons,
        isFetching: state.pokemonsPage.isFetching,
        types:state.pokemonsPage.types,
        subtypes:state.pokemonsPage.subtypes
    };
}
export default compose(
    connect(mapStateToProps, { requestPokemons, requestOptions })
)(MainFrameContainer)