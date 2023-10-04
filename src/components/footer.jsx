import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    let page=1;
    return (
        <nav className="navbar footer">
            <div className='foo' style={{margin:'auto'}}>
                <Link to={`?page=${page===1 ? 1 : page-=1}`}><button type="button" className="btn btn-outline-primary">Prev</button></Link>
                <Link to={`?page=${page=1}`}> <button type="button" className="btn btn-outline-primary">1</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">2</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">3</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">4</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">5</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">6</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">7</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">8</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">9</button></Link>
                <Link to={`?page=${page+=1}`}> <button type="button" className="btn btn-outline-primary">10</button></Link>
                <Link to={`?page=${page!==10 ? page+=1 : 10}`}> <button type="button" className="btn btn-outline-primary">Next</button></Link>
            </div>
        </nav>
    )
}
