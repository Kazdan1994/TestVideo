import React from 'react';
import './App.css';
const OT = require('@opentok/client');
const apiKey = '46884624';
const sessionId = '2_MX40Njg4NDYyNH5-MTU5NzM1NDA1MTkzMH5hSnp2RHU4U3ZCVGdJTzE3NS94OWdBd3h-fg';
const token = 'T1==cGFydG5lcl9pZD00Njg4NDYyNCZzaWc9NTg1YjJjMzk2M2Y0Y2FlYTNmYThkOWJkNzFmMWU0MjFjMmZmZThiYzpzZXNzaW9uX2lkPTJfTVg0ME5qZzRORFl5Tkg1LU1UVTVOek0xTkRBMU1Ua3pNSDVoU25wMlJIVTRVM1pDVkdkSlR6RTNOUzk0T1dkQmQzaC1mZyZjcmVhdGVfdGltZT0xNTk3MzgxMzE2Jm5vbmNlPTAuMjg0ODEwMDY3NjcwNDAwNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk3OTg2MTE2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

function handleError(error) {
    if (error) {
        alert(error.message);
    }
}

// (optional) add server code here

function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream
    session.on('streamCreated', function (event) {
        session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            width: '100%',
            height: '500px'
        }, handleError);
    });

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '500px'
    }, handleError);

    // Connect to the session
    session.connect(token, function (error) {
        // If the connection is successful, initialize a publisher and publish to the session
        if (error) {
            handleError(error);
        } else {
            session.publish(publisher, handleError);
        }
    });
}

export default function Video() {
    initializeSession();
    return (
        <div id='video'>
            <div id='publisher'></div>
            <div id='subscriber'></div>
        </div >
    );
}