import React from "react"
import Select from 'react-select'

import { Autocomplete } from "../../Autocomplete";
import { locationFilter, industryFilter } from '../../../_services/api.services'
import { departmentOptions, levelOptions } from '../../../_helpers/FilterOptions'

import './style.css'

const FieldContainer = (props) => {
    return (
        <div className="filter-container">{props.children}</div>
    )
}

export const FilterForm = () => {
    return (
        <div className="filter-form">
            <h3 className="form-title">Contacts Search</h3>
            <div className="p-5">
                <FieldContainer>
                    <Autocomplete loadOptions={locationFilter} placeholder='Location' />
                </FieldContainer>
                <FieldContainer>
                    <Autocomplete loadOptions={industryFilter} placeholder='Industry' />
                </FieldContainer>
                <FieldContainer>
                    <Select options={departmentOptions} placeholder='Department' isMulti />
                </FieldContainer>
                <FieldContainer>
                    <Select options={levelOptions} placeholder='Level' isMulti />
                </FieldContainer>
            </div>
        </div>
    )
}
