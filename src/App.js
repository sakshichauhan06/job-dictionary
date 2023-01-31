import { Component } from "react";
import Table from "./Table";

class App extends Component {
    render() {
        
        const characters = [
            {
                name: "Shibon",
                job: 'Cyber Security Engineer',
            },
            {
                name: "Nadine",
                job: 'Project Coordinator',
            },
            {
                name: "Marcia",
                job: 'Program Assistant',
            },
            {
                name: "Kendall",
                job: 'Prgram Manager',
            },
        ]

        return (
            <div className='container'>
                <Table characterData={characters}/>
            </div>
        )
    }
  }

  export default App