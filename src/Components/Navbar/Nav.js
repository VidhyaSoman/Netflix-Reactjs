
import './Nav.css'

function Nav()
{
    return(
        <div className="navbar">
            <ul>
                <li className='net'>NETFLIX</li>
                <li><select name="lang" id="language" class="select1">
                    <option value="eng">English</option>
                    <option value="hin">Hindi</option>
                    <option value="mal">Malayalam</option>
                </select>
                </li>
                <li><button className='login'>Back</button></li>
            </ul>
        </div>
    )
}
export default Nav;