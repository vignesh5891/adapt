import {BorderedButton} from '../../BorderedButton'
import './style.css'

export const ActionBar = () => {
    return (
        <div>
            <BorderedButton text="Export" />
            <BorderedButton text="Add to list" />
            <BorderedButton text="Bulk Actions" />
        </div>
    )
}