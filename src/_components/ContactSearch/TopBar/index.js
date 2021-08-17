import { UpgradeButton } from '../../UpgradeButton'
import './style.css'

export const TopBar = () => {
    return (
        <div className="top-bar p-10">
            10 contact forms 2 companies
            <UpgradeButton text="Upgrade now" />
        </div>
    )
}