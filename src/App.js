import { Component } from "react";
import Table from "./Table";

class App extends Component {
    state = {
        characters: [
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
        ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const { characters } = this.state

        return (
            <div className='container'>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            </div>
        )
    }
  }

  export default App