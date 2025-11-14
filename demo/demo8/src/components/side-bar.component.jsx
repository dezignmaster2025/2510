
import './navigation.css'
import './side-bar.css';

export const SideBar = ({onChange})=>{
    return <section className="side-bar-container">
        <input type="text" name="search" className="search-bar" placeholder='Search Twitter' onChange={onChange} />
    </section>
}
