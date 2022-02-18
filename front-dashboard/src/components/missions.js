import React from 'react';

class Mission extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://127.0.0.1:5000/missions')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Missions</h5>
                <div className="card-body">
                    {totalReactPackages}
                </div>
            </div>
        );
    }
}

export default Mission; 