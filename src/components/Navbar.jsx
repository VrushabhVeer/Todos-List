import React from 'react'

const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <h2>
                        <a class="navbar-brand" >{props.title}</a>
                    </h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" >Home</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
                            <button type="button" class="btn btn-outline-primary">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;