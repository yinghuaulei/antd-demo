import react, {useRef, useState, useEffect} from "react";
import * as signalR from '@microsoft/signalr';

const ScoreCloud = () => {
    const connectionRef = useRef(null)

    useEffect(() => {
        let cc
        const protocol = new signalR.JsonHubProtocol()
        const transport = signalR.HttpTransportType.WebSockets

        const options = {
            transport, skipNegotiation: true
        }

        cc = new signalR.HubConnectionBuilder().withUrl('https://localhost:7224/api/scoreCloudHub').withHubProtocol(protocol).withAutomaticReconnect().build()
        cc.serverTimeoutInMilliseconds = 60 * 1000 * 60 * 24
        cc.on('connected', onConnected)
        cc.on('ReceiveMessage', onReceiveMessage)
        cc.onreconnected(() => {
            if (cc.connectionState != 'Connected') {

            }
        })

        cc.start().then(() => {
            connectionRef.current = cc
        }).catch(err => {
            console.error('SignalR Connection Error: ', err)
        })

        return () => {
            if (cc) {
                cc.stop()
            }
        }
    })

    const onConnected = (connectionId) => {
        document.getElementById('user').innerHTML = document.getElementById('root').innerHTML + connectionId
    }

    const onReceiveMessage = (message) => {
        document.getElementById("receiveMsg").innerHTML = document.getElementById("receiveMsg").innerHTML + message + "<br>";
    }

    const sendMessage = (method) => {
        connectionRef.current.invoke(method, document.getElementById('sendMsg').value).catch((err) => {
            console.error('send', err)
        })
    }

    return (<div style={{margin: 10}}>
        <div id="user" style={{margin: 10}}>张三(ConnectionId)：</div>
        <input id="sendMsg" style={{margin: 10}}/>
        <button type="primary" onClick={() => sendMessage("SendMessage")}>Send</button>
        <button type="primary" onClick={() => sendMessage("SendAllMessage")}>广播</button>
        <div style={{margin: 10}}>服务器：</div>
        <div id="receiveMsg" style={{margin: 10}}></div>
    </div>)
}

export default ScoreCloud