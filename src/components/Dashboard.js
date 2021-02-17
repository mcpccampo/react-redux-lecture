import React, {Component} from 'react';

class Dashboard extends Component {

    render(){
        return (
            <main className='dashboard'>
                <h1>Your Pokemon</h1>
                <section>
                    <h3>No Pokemon To Display</h3>
                    <button>Change Pokemon</button>
                </section>
            </main>
        )
    }
}


export default Dashboard;