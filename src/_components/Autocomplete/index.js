import React from 'react';
import AsyncSelect from 'react-select/async';

export class Autocomplete extends React.Component {
    constructor(props){
        super(props)
        this.state = { inputValue: '' };
    }
    
    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };
    render() {
        return (
            <AsyncSelect
                isMulti
                cacheOptions
                defaultOptions
                loadOptions={this.props.loadOptions}
                placeholder={this.props.placeholder}
            />
        );
    }
}