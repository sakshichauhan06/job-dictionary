import React, { Component } from "react";



class Form extends Component {

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState
}

export default Form