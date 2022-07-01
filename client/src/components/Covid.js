import React, { useState } from 'react';
import Modal from 'react-modal';
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";
import { mobile } from "../Responsive";
import Slide from "react-reveal/Slide";
import { selectAlert } from "../redux/alertSlice";
import { useSelector } from "react-redux";
import zIndex from '@mui/material/styles/zIndex';
Modal.setAppElement('#root')
function Covid() {
    const[modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div >
            <div  style={{backgroundColor:"#f2dede",color:"#a94442"}}>
                <div className='container'>
                <div className="row">
                    <div className="col">
                        <strong>Travel Alert:</strong> Coronavirus (COVID-19) <strong onClick={()=> setModalIsOpen(true)}> Read More...</strong>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="container" style={{zIndex:"999999"}}>
                        <div className="row">
                    <div className="col">
                        <Modal isOpen={modalIsOpen} shouldCloseOverlayClick={false} onRequestClose={()=> setModalIsOpen(false)} style={{overlay:{backgroundColor:"grey"} }}>
                        <h3>Travel Alert: For customers that have their travel plans disrupted by Covid-19</h3>
                        <p><strong>Important:</strong></p>
                        <p>Due to a high volume of enquiries we encourage customers to contact us via email at cs@axenholidays.com We are aiming to respond all enquiries between 24hrs to 72hrs.</p>
                        <p><strong>Cancellations and Changes:</strong></p>
                        <p>In case your flight has been affected and you would like to request a refund or date change please follow this link HERE. We are processing all requests as quick as we can, we are currently prioritising by traveling date in order to assist urgent requests first.</p>
                        <p><strong>Refunds:</strong></p>
                        <p>We have been receiving a high number of refunds requests which is causing delays, these delays are not only from us but also from airlines and suppliers end. We have advised customers a period of 12 weeks, however, this is taking longer than expected as we have not received many refunds yet. Our whole team is working around the clock to process all refunds as quick as we can despite the challenges.</p>
                        <p>In the meantime you may want to contact your travel insurers in case your policy covers cancellation due to the ongoing situation.</p>
                        <p><span style={{color:"red",fontWeight:"bolder"}}>Travel Advice:</span> We strongly recommend all travelers MUST check travel restrictions for the country they are travelling to in case of any travel bans.</p>
                        <p><span style={{color:"red",fontWeight:"bolder"}}>Before you travel</span></p>
                        <ul>
                            <li>Check the status of your flight on the airline's website to find out if your flight has been delayed or cancelled.</li>
                            <li>Check your airport to find out if they have any specific advice for travelers.</li>
                            <li>Please allow plenty of time to get to the airport before your flight as there may be additional screening.</li>
                            <li>Check your travel insurance policy to see if changes and cancellation due to unforeseen events are covered.</li>
                            <li>Add your contact details at the airline ‘’manage my trip’’ section.</li>
                            <li>If there are no policies that state to waive change or cancel fees, you will be subject to normal airline policy rules and restrictions, including all penalty fees.</li>
                        </ul>
                        <p><a target="__blank" href="https://coronavirus.data.gov.uk/" >Government Guidance</a></p>
                        <p><strong>Airline Policies:</strong></p>
                        <p><a target="__blank" href="https://www.britishairways.com/en-gb/information/incident/coronavirus/latest-information" >British Airways</a></p>
                        <p><a target="__blank" href="https://qatarairways.zendesk.com/hc/en-us/articles/360006229097-COVID-19-Coronavirus-Update" >Qatar Airways</a></p>
                        <p><a target="__blank" href="https://www.emirates.com/uk/english/help/travel-updates/#3515" >Emirates</a></p>
                        <p><a target="__blank" href="https://www.thaiairways.com/en/news/news_announcement/news_detail/coronavirus.page" >Thai Airways</a></p>
                        <p><a target="__blank" href="https://www.cathaypacific.com/cx/en_GB/prepare-trip/travel-advisories/notice-regarding-travel-restrictions.html?cxsource=roller" >Cathay Pacific Airways</a></p>
                        <p><a target="__blank" href="http://www.airchina.com.cn/en/index.shtml" >Air China</a></p>
                        <p><a target="__blank" href="https://www.qantas.com/gb/en/coronavirus.html" >Qantas Airways</a></p>
                        <p><a target="__blank" href="https://www.turkishairlines.com/" >Turkish Airlines</a></p>
                        <p><a target="__blank" href="https://uk.ceair.com/en/" >China Eastern Airlines</a></p>
                        <p><a target="__blank" href="https://www.csair.com/en/about/news/notice/2020/" >China Southern Airlines</a></p>
                        <p><a target="__blank" href="https://www.saudia.com/" >Saudi Arabian Airlines</a></p>
                        <p>The UK Government has introduced <a href='https://www.gov.uk/uk-border-control' target="__blank">New Rules </a>for travelers coming to UK from 8 June.</p>
                        <p>For the latest updates and travel advisories concerning destinations affected by the virus outbreak, please check the Foreign and Commonwealth Office <a href='https://www.gov.uk/foreign-travel-advice' target="__blank">HERE</a>.</p>
                        <p>For the latest updates from the Civil Aviation Authority, UK's specialist aviation regulator please click <a href='' target="__blank">HERE</a>.
                        </p>
                        <p>For Covid-19 Health advice please visit WHO website for further information <a href='https://www.who.int/' target="__blank">HERE</a>.</p>
                        <p>Please click here if you want to raise a refund or date change request.</p>
                        <button className='btn-default btn4' onClick={()=>setModalIsOpen(false)}>Close</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}

export default Covid;