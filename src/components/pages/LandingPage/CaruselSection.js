import React from 'react';
import moment from 'moment';

const caruselPrevBtn = (id) => {
    let btn = document.getElementById(id);
    btn.click();
}


const SectionThree = ({ month }) => {

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <p className="fs-bolder">
                        <b className="">{month.wd} {month.d} {month.m} {month.y}</b>
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
    const [dDate, setDdate] = React.useState([]);
    const [dMonth, setDmonth] = React.useState({
        d: moment(moment().add(0, 'd').toDate(), 'YYYY/MM/DD').format('ddd'),
        m: moment(moment().add(0, 'd').toDate(), 'YYYY/MM/DD').format('MMMM'),
        y: moment(moment().add(0, 'd').toDate(), 'YYYY/MM/DD').format('YYYY')
    });

    const showLine = (lineid, i, item) => {
        setDmonth({
            d: item.d,
            wd: item.wd,
            m: item.m,
            y: item.y
        })
        let getLine = document.getElementById(lineid);
        getLine.className = 'd-block';
        let getDay = document.getElementById(`day-${i + 1}`);
        getDay.className = 'bg-primary text-white rounded';
    }
    const removeLine = (lineid, i, item) => {
        let getLine = document.getElementById(lineid);
        getLine.className = 'd-none';
        let getDay = document.getElementById(`day-${i + 1}`);
        getDay.className = '';
    }

    React.useEffect(() => {
        for (let i = 0; i < 17; i++) {
            setDdate(prev => [...prev,
            {
                day: moment(moment().add(-10 + i, 'd').toDate(), 'YYYY/MM/DD').date(),
                weekday: moment(moment().add(-10 + i, 'd').toDate(), 'YYYY/MM/DD').format('ddd'),
                month: moment(moment().add(-10 + i, 'd').toDate(), 'YYYY/MM/DD').format('MMMM'),
                year: moment(moment().add(-10 + i, 'd').toDate(), 'YYYY/MM/DD').format('YYYY'),
                counter: -10 + i
            }
            ]);
        }
    }, [])
    console.log(dDate);
    return (
        <>



            <div id="carouselExampleDark" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <SectionThree month={dMonth} />
                        <div class="row">
                            <div className="col-12" id="set-overlay">
                                <div className="row">
                                    <section id="staff-section" className="col-2">
                                        {Array.from({ length: 10 }, (_, i) =>
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
                                    </section>

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
                                            {dDate.map((item, i) => (
                                                <td
                                                    id={`day-${i + 1}`}
                                                    className={item.counter === 0 ? 'bg-primary text-white rounded' : ''}
                                                    onMouseEnter={() => showLine(`table-item-${i}`, i, { d: item.day, wd: item.weekday, m: item.month, y: item.year })}
                                                    onMouseLeave={() => removeLine(`table-item-${i}`, i, { d: item.day, wd: item.weekday, m: item.month, y: item.year })}

                                                >
                                                    <span className="text-muted">
                                                        {item.weekday.charAt(0)}
                                                    </span>
                                                    {item.day}
                                                </td>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            {dDate.map((item, i) => (
                                                <>
                                                    {i > 4 ?
                                                        <>
                                                            <td className="border-start border-end text-center vh-100"
                                                                onMouseEnter={() => showLine(`table-item-${i}`, i, { d: item.day, wd: item.weekday, m: item.month, y: item.year })}
                                                                onMouseLeave={() => removeLine(`table-item-${i}`, i, { d: item.day, wd: item.weekday, m: item.month, y: item.year })}
                                                            >

                                                                <div className={item.counter === 0 ? "d-block" : "d-none"} id={`table-item-${i}`}>
                                                                    <i class="fa fa-circle fs-4 text-primary" aria-hidden="true"></i>
                                                                    <p className="vl"></p>
                                                                </div>
                                                            </td>
                                                        </>
                                                        :
                                                        <td className=" text-center vh-100" id="table-item"
                                                            onMouseEnter={() => showLine(`table-item-${i}`, i, { d: item.day, wd: item.weekday, m: item.month, y: item.year })}
                                                            onMouseLeave={() => removeLine(`table-item-${i}`, i, { d: item.day, wd: item.weekday, m: item.month, y: item.year })}>
                                                            {i === 7 ?
                                                                <div className="show-item">
                                                                    <i class="fa fa-circle fs-4 text-primary" aria-hidden="true"></i>
                                                                    <p className="vl"></p>
                                                                </div>
                                                                : ""}
                                                        </td>
                                                    }
                                                </>
                                            ))}
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