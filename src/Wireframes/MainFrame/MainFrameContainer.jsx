import React from 'react';
import { connect } from 'react-redux';
import { requestPokemons } from '../../redux/pokemons-reducer';

import { compose } from 'redux';
import MainFrame from './MainFrame';

class MainFrameContainer extends React.Component {

    componentDidMount() {
        this.props.requestPokemons(); 
    }

    /* onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber);
    } */

    render() {
        return <>
            {this.props.isFetching ? <div> Loading... </div> : null}
            <MainFrame pokemons={this.props.pokemons} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonsPage.pokemons,
        isFetching: state.pokemonsPage.isFetching,
    };
}
export default compose(
    connect(mapStateToProps, { requestPokemons })
)(MainFrameContainer)