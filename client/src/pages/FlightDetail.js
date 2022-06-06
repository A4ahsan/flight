import React, { useState } from 'react'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TopBarOne from '../components/TopBarOne'
import TopBarTwo from '../components/TopBarTwo'
import Footer from '../components/Footer'
import WorkIcon from '@material-ui/icons/Work';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WarningIcon from '@material-ui/icons/Warning';
import { useLocation, useNavigate } from "react-router-dom";
import Data from "../importantData/cityAndAirportInfo.json";
import Loading from '../components/Loading'
import { parse } from 'tinyduration'
import toHoursAndMinutes from '../components/toHoursAndMinutes';
import { toMinutes } from "../components/toMinutes";
import aircraftData from "../importantData/aircraft.json";


function FlightDetail() {
    const { state } = useLocation();
    const DATA = state.flight.data.flightOffers[0];
    // grabbing city name function
    let information = [];
    const DataChild = Data.map((a) => {
        return Object.entries(a)
    });
    DataChild.map((i) => {
        return i.map(i => information.push(i[1]))
    });
    const findCity = (iataCode) => {
        return information.find(i => i.iata === iataCode).city
    }

    // booking flight function
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const book = () => {
        setIsLoading(true);
        try {
            setIsLoading(false);
            navigate("/flight-checkout", { state: state.flight.data.flightOffers });
        } catch (err) {
            setIsLoading(false);
        }
    }
    // static data
    const departureCity = findCity(DATA.itineraries[0].segments[0].departure.iataCode);
    const arrivalCity = findCity(DATA.itineraries[0].segments[DATA.itineraries[0].segments.length - 1].arrival.iataCode);

    // coverting Date Function
    const formatDate = (unformat) => {
        const unformatDate = new Date(unformat);
        return unformatDate.toLocaleString("en-us", { day: "numeric", weekday: "short", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).toString().split(",").join("");
    }
    // coverting unformat time into format and making it readable
    const timeAccess = (timeDuration, check) => {
        if (check === "both") {
            return toHoursAndMinutes(toMinutes(Object.values(parse(timeDuration))), true);
        } else {
            return toHoursAndMinutes(toMinutes(Object.values(parse(timeDuration))), "full");
        }
    }
    // selecting AirCraft 
    const getCraft = (code) => {
        return aircraftData.find((i) => i.iataCode.includes(code) || i.icaoCode.includes(code))?.description
    }

    // total flying time
    //for outbound
    const outboundFlyingTime = DATA?.itineraries[0]?.segments?.reduce((a, b) => {
        return a + toMinutes(Object.values(parse(b.duration)));
    }, 0);
    //for inbound
    const inboundFlyingTime = DATA?.itineraries[1]?.segments?.reduce((total, each) => {
        return total + toMinutes(Object.values(parse(each.duration)));
    }, 0);

    // layover time difference function 
    const layoverTimeDifference = (date)=>{
        const hoursToMin = Number(new Date(date).toLocaleString("en-us", {hour: "numeric"}).split(" ")[0]) * 60;
        const minutes  = new Date(date).toLocaleString("en-us", {minute: "numeric"});
        return Number(hoursToMin) + Number(minutes);
    }
    // bags weight function
    const baggageCheck = (id)=>{
        const bags = DATA.travelerPricings[0]?.fareDetailsBySegment.find(i => i.segmentId.includes(id))?.includedCheckedBags;
        if(bags?.weight){
            return bags.weight + " " + bags.weightUnit.toLowerCase()
        } else {
            return bags?.quantity + " Pcs"
        }
    }
    return (
        <>
            <TopBarOne />
            <TopBarTwo />
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mb-4">
                        <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className='row rounded-md px-2 py-4 bg-white my-4' >
                            <div className='w-full h-auto py-2 px-4' >
                                <div className="flex md:flex-row xs:flex-col md:items-center md:justify-between xs:justify-center xs:items-start border-bottom border-top">
                                    <div className='md:m-0 xs:mb-4' >
                                        <div style={{ fontSize: "16px" }} className='text-gray-500' >{departureCity}<span className='h3 text-warning mx-2' >→</span>{arrivalCity}</div>
                                        <div style={{ fontSize: "10px" }} className="uppercase text-gray-400 font-semibold" >OUTBOUND FLIGHT</div>
                                    </div>
                                    <div className='flex items-center md:w-auto xs:w-full xs:justify-between'>
                                        <div className='mx-1 flex items-center' >
                                            <QueryBuilderIcon className='text-amber-400 scale-100 mr-2' />
                                            <div style={{ fontSize: "10px" }} className="font-semibold">
                                                <div className='text-teal-600 uppercase whitespace-nowrap' >Flying Time</div>
                                                <div className='text-gray-400 uppercase whitespace-nowrap' >{toHoursAndMinutes(outboundFlyingTime, true)}</div>
                                            </div>
                                        </div>
                                        <div className='mx-2 flex items-center'>
                                            <QueryBuilderIcon className='text-amber-400 scale-100 mr-2' />
                                            <div style={{ fontSize: "10px" }} className="font-semibold">
                                                <div className='text-teal-600 uppercase whitespace-nowrap' >Total Journey Time</div>
                                                <div className='text-gray-400 uppercase whitespace-nowrap' >{state.totalDuration[0]}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {DATA.itineraries[0].segments.map((each, index) => (
                                    <div key={each.id} className="row-sm flex-xs flex-col-xs justify-center-xs item-center-xs">
                                        <div className="w-full">
                                            <div>
                                                {index > 0 &&
                                                    <div className='flex w-full justify-center items-center' >
                                                        <div className='flex px-4 py-2 bg-teal-400 items-center my-3' >
                                                            <WarningIcon className='text-white  mr-3' />
                                                            <div style={{ fontSize: "10px" }} className='text-white' >
                                                                LAYOVER: {toHoursAndMinutes(Math.abs(layoverTimeDifference(each.departure.at) - layoverTimeDifference(DATA.itineraries[0].segments[index - 1].arrival.at)), true)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                <div className='px-4 py-3 flex md:flex-row xs:flex-col items-center md:justify-evenly' >
                                                    <div className='flex md:flex-row xs:flex-col sm:w-auto xs:w-full  sm:items-center xs:items-start' >
                                                        <div className='text-gray-400 font-semibold text-center flex sm:flex-col xs:flex-row xs:w-full sm:w-auto xs:justify-between sm:justify-center sm:items-center' >
                                                            <img className='border h-28 w-48 object-contain' src={`https://content.airhex.com/content/logos/airlines_${each.carrierCode}_300_100_r.png?md5apikey=VDjfGgv8mxiTvvLLwGicD6V2eq`} alt="" />
                                                            <div className='flex flex-col justify-center  sm:mt-4 xs:m-0' >
                                                                <div style={{ fontSize: "10px" }} >{each.co2Emissions[0].cabin}</div>
                                                                <div style={{ fontSize: "10px" }} >TYPE {getCraft(each.aircraft.code)?.toUpperCase()}</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex xs:flex-col sm:flex-row  xs:items-start sm:items-center xs:w-full md:w-auto' >
                                                            <div className='sm:pl-6 xs:p-0 flex flex-col xs:items-start sm:items-end'>
                                                                <div className='text-gray-400 font-semibold sm:mt-0 xs:mt-5' >{findCity(each.departure.iataCode)} ({each.departure.iataCode})</div>
                                                                <div style={{ fontSize: "12px" }} className='text-gray-400 whitespace-nowrap'>{formatDate(each.departure.at)}</div>
                                                            </div>
                                                            <div className='sm:mx-4 xs:mx-0 sm:my-0 xs:my-8 flex xs:flex-row sm:flex-col sm:items-center xs:items-center' >
                                                                <QueryBuilderIcon className='text-amber-400 scale-125 xs:mr-4 sm:m-0' />
                                                                <div className='text-amber-400 whitespace-nowrap' >{timeAccess(each.duration)}</div>
                                                            </div>
                                                            <div className='pr-6 flex xs:flex-col' >
                                                                <div className='text-gray-400 font-semibold'>{findCity(each.arrival.iataCode)} ({each.arrival.iataCode})</div>
                                                                <div style={{ fontSize: "12px" }} className='text-gray-400 whitespace-nowrap'>{formatDate(each.arrival.at)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col md:w-auto xs:w-full xs:justify-start md:my-0 xs:my-5' >
                                                        <div className='flex mb-4' >
                                                            <WorkIcon className='text-teal-600 mx-2' />
                                                            <div style={{ fontSize: "12px" }} className='mx-2 text-gray-400' >{baggageCheck(each.id)} Checked baggage allowance</div>
                                                        </div>
                                                        <div className='flex' >
                                                            <AirlineSeatReclineExtraIcon className='text-teal-600 mx-2 mr-6 scale-125' />
                                                            <AirplanemodeActiveIcon className='text-teal-600 mx-2 scale-125' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className='w-full h-auto py-2 px-4' >
                                <div className="flex md:flex-row xs:flex-col md:items-center md:justify-between xs:justify-center xs:items-start border-bottom border-top">
                                    <div className='md:m-0 xs:mb-4' >
                                        <div style={{ fontSize: "16px" }} className='text-gray-500' >{arrivalCity}<span className='h3 text-warning mx-2' >→</span>{departureCity}</div>
                                        <div style={{ fontSize: "10px" }} className="uppercase text-gray-400 font-semibold" >INBOUND FLIGHT</div>
                                    </div>
                                    <div className='flex items-center md:w-auto xs:w-full xs:justify-between'>
                                        <div className='mx-1 flex items-center' >
                                            <QueryBuilderIcon className='text-amber-400 scale-100 mr-2' />
                                            <div style={{ fontSize: "10px" }} className="font-semibold">
                                                <div className='text-teal-600 uppercase whitespace-nowrap' >Flying Time</div>
                                                <div className='text-gray-400 uppercase whitespace-nowrap' >{toHoursAndMinutes(inboundFlyingTime, true)}</div>
                                            </div>
                                        </div>
                                        <div className='mx-2 flex items-center'>
                                            <QueryBuilderIcon className='text-amber-400 scale-100 mr-2' />
                                            <div style={{ fontSize: "10px" }} className="font-semibold">
                                                <div className='text-teal-600 uppercase whitespace-nowrap' >Total Journey Time</div>
                                                <div className='text-gray-400 uppercase whitespace-nowrap' >{state.totalDuration[1]}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {DATA.itineraries[1].segments.map((each, index) => (
                                    <div key={each.id} className="row-sm flex-xs flex-col-xs justify-center-xs item-center-xs">
                                        <div className="w-full">
                                            <div>
                                                {index > 0 &&
                                                    <div className='flex w-full justify-center items-center' >
                                                        <div className='flex px-4 py-2 bg-teal-400 items-center my-3' >
                                                            <WarningIcon className='text-white  mr-3' />
                                                            <div style={{ fontSize: "10px" }} className='text-white' >
                                                                LAYOVER: {toHoursAndMinutes(Math.abs(layoverTimeDifference(each.departure.at) - layoverTimeDifference(DATA.itineraries[1].segments[index - 1].arrival.at)), true)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                <div className='px-4 py-3 flex md:flex-row xs:flex-col items-center md:justify-evenly' >
                                                    <div className='flex md:flex-row xs:flex-col sm:w-auto xs:w-full  sm:items-center xs:items-start' >
                                                        <div className='text-gray-400 font-semibold text-center flex sm:flex-col xs:flex-row xs:w-full sm:w-auto xs:justify-between sm:justify-center sm:items-center' >
                                                            <img className='border h-28 w-48 object-contain' src={`https://content.airhex.com/content/logos/airlines_${each.carrierCode}_300_100_r.png?md5apikey=VDjfGgv8mxiTvvLLwGicD6V2eq`} alt="" />
                                                            <div className='flex flex-col justify-center  sm:mt-4 xs:m-0' >
                                                                <div style={{ fontSize: "10px" }} >{each.co2Emissions[0].cabin}</div>
                                                                <div style={{ fontSize: "10px" }} >TYPE {getCraft(each.aircraft.code)?.toUpperCase()}</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex xs:flex-col sm:flex-row  xs:items-start sm:items-center xs:w-full md:w-auto' >
                                                            <div className='sm:pl-6 xs:p-0 flex flex-col xs:items-start sm:items-end'>
                                                                <div className='text-gray-400 font-semibold sm:mt-0 xs:mt-5' >{findCity(each.departure.iataCode)} ({each.departure.iataCode})</div>
                                                                <div style={{ fontSize: "12px" }} className='text-gray-400 whitespace-nowrap'>{formatDate(each.departure.at)}</div>
                                                            </div>
                                                            <div className='sm:mx-4 xs:mx-0 sm:my-0 xs:my-8 flex xs:flex-row sm:flex-col sm:items-center xs:items-center' >
                                                                <QueryBuilderIcon className='text-amber-400 scale-125 xs:mr-4 sm:m-0' />
                                                                <div className='text-amber-400 whitespace-nowrap' >{timeAccess(each.duration)}</div>
                                                            </div>
                                                            <div className='pr-6 flex xs:flex-col' >
                                                                <div className='text-gray-400 font-semibold'>{findCity(each.arrival.iataCode)} ({each.arrival.iataCode})</div>
                                                                <div style={{ fontSize: "12px" }} className='text-gray-400 whitespace-nowrap'>{formatDate(each.arrival.at)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col md:w-auto xs:w-full xs:justify-start md:my-0 xs:my-5' >
                                                        <div className='flex mb-4' >
                                                            <WorkIcon className='text-teal-600 mx-2' />
                                                            <div style={{ fontSize: "12px" }} className='mx-2 text-gray-400' >{baggageCheck(each.id)} Checked baggage allowance</div>
                                                        </div>
                                                        <div className='flex' >
                                                            <AirlineSeatReclineExtraIcon className='text-teal-600 mx-2 mr-6 scale-125' />
                                                            <AirplanemodeActiveIcon className='text-teal-600 mx-2 scale-125' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 p-0 mb-12">
                        <div className='xs:p-0 md:px-5 md:py-5 w-full h-auto' >
                            <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="w-full h-auto rounded-lg p-3">
                                <div className='my-3 mb-4' >
                                    <div style={{ fontSize: "18px" }} className='text-gray-600' >Karachi - Lahore</div>
                                    <div className='text-gray-400 font-semibold' >Return Flight</div>
                                </div>
                                <div className='w-full flex justify-between items-end my-3 mt-4'>
                                    <div className='flex items-center justify-end flex-col px-1' >
                                        <div className='whitespace-nowrap text-gray-400' >
                                            Total Price
                                        </div>
                                        <div style={{ fontSize: "17px" }} className="text-teal-600 font-bold whitespace-nowrap">{`€${DATA.price.grandTotal}`}</div>
                                    </div>
                                    <div className='w-full pl-2' >
                                        <button onClick={book} className="bg-teal-600 hover:bg-teal-500 text-white outline-none border-none w-full py-2 px-2 transition-all whitespace-nowrap">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {isLoading &&
                <Loading />
            }
        </>
    )
}

export default FlightDetail