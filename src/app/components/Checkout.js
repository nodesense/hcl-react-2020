import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            controls: []
        }

        // a wrapper object for ref 
        // current - actual dom, available in componentDidMount
        this.firstNameRef = React.createRef();
    }

    onChangeHandler = (event) => {
        // target is real dom / <input
        console.log("control name", event.target.name);
        console.log("value ", event.target.value);

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        console.log("ref tag ", this.firstNameRef.current.tagName)
        this.firstNameRef.current.focus(); // set the cursor
    }

    dyamicRef = (elem) => {
        console.log("Dynaimc REf ", elem.tagName);
    }

    incr = () => {
        this.setState({
            controls : [...this.state.controls, "n" + Math.ceil(Math.random() * 10000)]
        })
    }

    render() {
        return (
            <div>
                Name
                <input name="firstName" 
                        value={this.state.firstName}
                        onChange={this.onChangeHandler}
                        ref={this.firstNameRef}
                        />

                Last Name
                <input name="lastName" 
                        value={this.state.lastName}
                        onChange={this.onChangeHandler}

                        ref = { this.dyamicRef }
                        />

                City 
                <select name="city"
                        value={this.state.city}
                        onChange={this.onChangeHandler}>
                    <option value='Chennai'>Chennai</option>            
                    <option value='Bangalore'>Bangalore</option>            
                    <option value='Pune'>Pune</option>   
                </select>

                <button onClick={this.incr}>Add</button>
                {
                    this.state.controls.map(name => (
                        <input key={name} 
                            name={name}
                                onChange={this.onChangeHandler}
                                ref = { this.dyamicRef }
                                />
                    ))
                }
            </div>
        )
    }
}

export  default Checkout;