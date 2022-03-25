import React from 'react'

function Hoc(Component, props) {

    return (function () {
        return (
            <>
                <main id="main-section">
                    <section id="body-section">
                        <div className="container-fluid">
                            <div className="row flex-nowrap">
                                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" id="nav-edge">
                                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                            <div className="row mt-5">
                                                <p className="col-10">
                                                    <i className="fa fa-car rounded-circle bg-primary p-3"></i>
                                                    <span className="text-dark fs-3">&ensp;PJ</span>
                                                </p>
                                                <p className="col-2 text-end">
                                                    <span className="fs-3 text-dark"><i className="fa fa-angle-left">|</i></span>
                                                </p>
                                            </div>
                                        </a>
                                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                            <li className="my-2 fw-bolder">
                                                <a href="." className="nav-link align-middle px-0 nav-text-dark" id="nav-high-lighter-1">
                                                    <i className="fa fa-table"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="my-2 fw-bolder">
                                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle nav-text-dark">
                                                    <i className="fa fa-table"></i> <span className="ms-1 d-none d-sm-inline">Analytics</span> </a>
                                            </li>
                                            <li className="my-2 fw-bolder">
                                                <a href="." className="nav-link px-0 align-middle nav-text-dark">
                                                    <i className="fa fa-table"></i> <span className="ms-1 d-none d-sm-inline">Projects</span></a>
                                            </li>
                                            <li className="my-2 fw-bolder">
                                                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle nav-text-dark">
                                                    <i className="fa fa-table"></i> <span className="ms-1 d-none d-sm-inline">Tracking</span></a>
                                            </li>
                                            <li className="my-2 fw-bolder">
                                                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle nav-text-dark">
                                                    <i className="fa fa-table"></i> <span className="ms-1 d-none d-sm-inline">History</span> </a>
                                            </li>
                                            <li className="my-2 fw-bolder">
                                                <a href="." className="nav-link px-0 align-middle nav-text-dark">
                                                    <i className="fa fa-table"></i> <span className="ms-1 d-none d-sm-inline">Settings</span> </a>
                                            </li>
                                            <li className="row p-2 mt-5" id="sub-nav-sec">
                                                <div className="col-8 nav-text-dark fw-bolder my-auto">
                                                    Create <br className="" /> New Link
                                                </div>
                                                <div className="col-4 my-auto">
                                                    <i className="fa fa-plus-circle text-primary rounded-circle p-3 fs-1"></i>
                                                </div>

                                            </li>
                                        </ul>
                                        <hr />
                                        <div className="dropdown pb-4">
                                            <a href="." className="d-flex align-items-center text-white text-decoration-none nav-text-dark" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                                <span className="d-none d-sm-inline mx-1 text-dark">Admin</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-3" id="content-section">
                                    <Component {...props} />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
    )
}

export default Hoc