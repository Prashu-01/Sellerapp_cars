import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Carcard from './carcard.jsx'
import Cardata from '../../data/cardata.json'

export default function Home(){
    const [search, setSearch] = useState('') // search
    
    // pagination
    const [searchParams] = useSearchParams()
    const page=searchParams.get('page') ?? '1'
    const per_page='6'

    const s=(Number(page)-1)*Number(per_page)
    const e= s + Number(per_page)

    const datapage= Cardata.slice(s,e)

    return (
        <>
            {/* nav */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* search */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" onChange={(e) => { setSearch(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
                        </form>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Relevance</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">All Brands</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {/* main */}
            <div className="Row">
                {
                    datapage
                        .filter((item) => { //search filter
                            return search.toLowerCase() === '' ? item : item.make.toLowerCase().includes(search)
                        })
                        .map(car => {
                            return (
                                <Carcard key={car.id} carN={car} />
                            )
                        })
                }
            </div>
            
        </>
    )
}
