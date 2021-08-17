import {FaLock} from 'react-icons/fa'
import { FilterForm, TopBar, ActionBar } from '../../_components/ContactSearch'
import { BorderedButton } from '../../_components'
import './style.css'

export const Contacts = () => {
    return (
        <div className="contact-wrapper">
            <FilterForm />
            <div className="content">
                <TopBar />

                <div className="shadow-box p-10 m-10">
                    <ActionBar />
                    <table className="bordered-table full-width">
                        <thead>
                            <tr className=" primary-bg">
                                <th><input type="checkbox" /></th>
                                <th>Name</th>
                                <th>Company</th>
                                <th className="text-center">Email & Phone</th>
                                <th>Deliverablity</th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <span className="primary-text d-block">Pradeep Muruganandham</span>
                                    Founder and chief officer<br />
                                    Coimbatore Tamilnadu india.
                                </td>
                                <td>
                                    <b>Adapt</b> 
                                </td>
                                <td className="primary-text text-center"><FaLock /></td>
                                <td>95%</td>
                                <td><BorderedButton text="View Contact" /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <span className="primary-text d-block">Pradeep Muruganandham</span>
                                    Founder and chief officer<br />
                                    Coimbatore Tamilnadu india.
                                </td>
                                <td>
                                    <b>Adapt</b> 
                                </td>
                                <td className="primary-text text-center"><FaLock /></td>
                                <td>95%</td>
                                <td><BorderedButton text="View Contact" /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <span className="primary-text d-block">Pradeep Muruganandham</span>
                                    Founder and chief officer<br />
                                    Coimbatore Tamilnadu india.
                                </td>
                                <td>
                                    <b>Adapt</b> 
                                </td>
                                <td className="primary-text text-center"><FaLock /></td>
                                <td>95%</td>
                                <td><BorderedButton text="View Contact" /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <span className="primary-text d-block">Pradeep Muruganandham</span>
                                    Founder and chief officer<br />
                                    Coimbatore Tamilnadu india.
                                </td>
                                <td>
                                    <b>Adapt</b> 
                                </td>
                                <td className="primary-text text-center"><FaLock /></td>
                                <td>95%</td>
                                <td><BorderedButton text="View Contact" /></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <span className="primary-text d-block">Pradeep Muruganandham</span>
                                    Founder and chief officer<br />
                                    Coimbatore Tamilnadu india.
                                </td>
                                <td>
                                    <b>Adapt</b> 
                                </td>
                                <td className="primary-text text-center"><FaLock /></td>
                                <td>95%</td>
                                <td><BorderedButton text="View Contact" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}