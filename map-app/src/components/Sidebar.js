import React, { Component } from 'react';



class Sidebar extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    
    }

    componentDidMount() {
      
    }

   

    render() {
        return (

            <div id="sidebar">
                <input placeholder="Filter content " value={this.props.query}  onChange={(e) => { this.props.filterVenues(e.target.value) }
                } />
                <br />
                <br />
                <br />
                {this.props.filteredvenues && this.props.filteredvenues.length > 0 && this.props.filteredvenues.map(
                    (venue, index) => (
                        <div key={index} className="venue-item" onClick={() => { this.props.listItemClick(venue) }}>
                            {venue.name} </div>
                    )
                )}
            </div>
        );
    }
}

export default Sidebar;
