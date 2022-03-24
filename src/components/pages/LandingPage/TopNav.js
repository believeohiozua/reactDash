import React from 'react'

const SectionOne = () => {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-3">
                    <p className="fs-6 fw-bolder">
                        Project <i className="fa fa-angle-right"></i> <span className="text-muted">OSE Banking App</span>
                    </p>
                </div>
                <div className="col-4 ms-auto">
                    <div className="row">
                        <div className="col-3 border-end">
                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                            &ensp;&ensp;&ensp;
                            <i class="fa fa-bell" aria-hidden="true"></i>
                        </div>
                        <div className="col-6">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                alt=""
                                className="rounded-circle"
                                width="30"
                                height="30"
                            /> &ensp;
                            <b>
                                RanasIT &ensp;
                                <i className="fa fa-angle-down text-muted fs-bolder"></i>
                            </b>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
const SectionTwo = () => {
    return (
        <div className="col-12 my-3">
            <div className="row">
                <div className="col-5">
                    <h3 className="">GSE Banking APPO</h3>
                    56% <input type="range" name="" id="" />
                </div>
                <div className="col-4 ms-auto">
                    <div className="row">
                        <div className="col-4">
                            <p className="invite-text">+ Invite</p>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                        alt=""
                                        className="rounded-circle img-add-border"
                                        width="30"
                                        height="30"
                                    />
                                </div>
                                <div className="col-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                        alt=""
                                        className="rounded-circle img-add-border"
                                        width="30"
                                        height="30"
                                    />
                                </div>
                                <div className="col-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                        alt=""
                                        className="rounded-circle img-add-border"
                                        width="30"
                                        height="30"
                                    />
                                </div>
                                <div className="col-1">
                                    <span className="rounded-circle img-add-border last-15">
                                        +15
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


function TopNav() {
    return (
        <div className="container mt-5">
            <div className="row">
                <SectionOne />
                <SectionTwo />
                {/* <SectionThree /> */}
            </div>
        </div>
    )
}

export default TopNav