import React from 'react';
// src="https://avatars.githubusercontent.com/u/98681?v=4"
// https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" height={150} width={100} className="img-responsive d-block w-100
const caruselPrevBtn = (id) => {
    let btn = document.getElementById(id);
    btn.click();
}
const showLine = (lineid) => {
    let getLine = document.getElementById(lineid);
    getLine.className = 'd-block';
}
const removeLine = (lineid) => {
    let getLine = document.getElementById(lineid);
    getLine.className = 'd-none';
}
const SectionThree = ({ month }) => {

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <p className="fs-bolder">
                        <b className="">{month} 2021</b>
                        &ensp;  &ensp;
                        <b className="text-muted fa fa-angle-left carousel-controls" onClick={() => caruselPrevBtn('carosel-prev-btn')}></b>
                        &ensp; &ensp;
                        <b className="text-muted fa fa-angle-right carousel-controls" onClick={() => caruselPrevBtn('carosel-next-btn')}></b>
                    </p>
                </div>
                <div className="col-3 ms-auto">
                    <div className="row">
                        <div className="col-2 mt-2">
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="col-8">
                            <p id="month-drop-down-p">
                                Month &ensp;  &ensp;<i className="fa fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function CaruselSection() {


    return (
        <>



            <div id="carouselExampleDark" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <SectionThree month={"February"} />
                        <div class="row">
                            <div className="col-12" id="set-overlay">
                                <div className="row">
                                    <div className="col-2">
                                        {Array.from({ length: 4 }, (_, i) =>
                                            <div className="card-comp my-3">
                                                <div className="row">
                                                    <div className="col-3 text-end my-auto">
                                                        <img src="https://avatars.githubusercontent.com/u/98681?v=4"
                                                            className="img-fluid rounded-circle" alt="..." />
                                                    </div>
                                                    <div className="col-7 text-start my-auto">
                                                        <p className="p-0 m-0">Finana A.</p>
                                                        <small className="text-muted">UX Designer</small>
                                                    </div>
                                                    <div className="col-2 my-auto">
                                                        <i class="fa fa-ellipsis-v text-muted" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-10">

                                        <div class="progress mt-4" style={{ height: "40px", width: "40%", borderRadius: '50px' }}>
                                            <div class="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: "40%", borderRadius: '50px' }}
                                                aria-valuenow="40" aria-valuemin="0"
                                                aria-valuemax="100">
                                                <div className="my-auto text-start ps-3">
                                                    <i class="fa fa-dot-circle-o fs-4" aria-hidden="true">
                                                        <small className="progress-label"> Flow Swift transfer</small>
                                                    </i>
                                                </div>
                                            </div>
                                            <p className="my-auto text-end col-5 text-danger">40%</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <table class="table table table-borderless">
                                    <thead className='border-0'>
                                        <tr className="text-center">
                                            <td><span className="text-muted">M</span>1</td>
                                            <td><span className="text-muted">T</span>2</td>
                                            <td><span className="text-muted">W</span>3</td>
                                            <td><span className="text-muted">T</span>4</td>
                                            <td><span className="text-muted">F</span>5</td>
                                            <td><span className="text-muted">S</span>T6</td>
                                            <td><span className="text-muted">S</span>7</td>
                                            <td><span className="text-muted">M</span>8</td>
                                            <td><span className="text-muted">T</span>9</td>
                                            <td><span className="text-muted">W</span>10</td>
                                            <td><span className="text-muted">T</span>11</td>
                                            <td><span className="text-muted">F</span>12</td>
                                            <td><span className="text-muted">S</span>13</td>
                                            <td><span className="text-muted">S</span>14</td>
                                            <td><span className="text-muted">M</span>15</td>
                                            <td><span className="text-muted">T</span>16</td>
                                            <td><span className="text-muted">W</span>17</td>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            {Array.from({ length: 17 }, (_, i) =>
                                                <>
                                                    {i > 4 ?
                                                        <>
                                                            <td className="border-start border-end text-center vh-100"
                                                                onMouseEnter={() => showLine(`table-item-${i}`)}
                                                                onMouseLeave={() => removeLine(`table-item-${i}`)}
                                                            >

                                                                <div className="d-none" id={`table-item-${i}`}>
                                                                    <i class="fa fa-circle fs-4 text-primary" aria-hidden="true"></i>
                                                                    <p className="vl"></p>
                                                                </div>
                                                            </td>
                                                        </>
                                                        :
                                                        <td className=" text-center vh-100" id="table-item">
                                                            {i === 7 ?
                                                                <div className="show-item">
                                                                    <i class="fa fa-circle fs-4 text-primary" aria-hidden="true"></i>
                                                                    <p className="vl"></p>
                                                                </div>
                                                                : ""}
                                                        </td>
                                                    }
                                                </>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <button
                    class="carousel-control-prev" type="button" id="carosel-prev-btn"
                    data-bs-target="#carouselExampleDark" data-bs-slide="prev"
                >
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" id="carosel-next-btn">
                </button>
            </div>


        </>
    )
}

export default CaruselSection