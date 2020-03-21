import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import UserList from './containers/UserList/UserList';
import Chat from './containers/Chat/Chat';
import Singleton from '../../../socket';
import MessageType from './containers/Chat/SendMessage/MessageType';
import {connect} from 'react-redux';
import {userJoined, userJoinedAck, userLeft, messageReceived} from './actions/index';
import {bindActionCreators} from 'redux';
import './assets/style/style.css'
import AuthService from "../../services/AuthService";

class ChatApp extends Component {
    constructor() {
        super();
        this.state = {
            usernameInput: AuthService.getName()
        }
    }

    render() {
        const chat = <Chat/>
        return (
            <MuiThemeProvider>
                <div id="hero-area text-black" className="hero-area-bg">
                    <UserList users={this.state.users}/>
                    {chat}
                    {this.onChooseName()}
                </div>
            </MuiThemeProvider>
        );
    }

    registerSocket() {
        let self = this;
        this.socket = Singleton.getInstance();

        this.socket.onmessage = (response) => {
            let message = JSON.parse(response.data);
            let users;

            switch (message.type) {
                case MessageType.TEXT_MESSAGE:
                    self.props.messageReceived(message);
                    break;
                case MessageType.USER_JOINED:
                    users = JSON.parse(message.data);
                    self.props.userJoined(users);
                    break;
                case MessageType.USER_LEFT:
                    users = JSON.parse(message.data);
                    self.props.userLeft(users);
                    break;
                case MessageType.USER_JOINED_ACK:
                    let thisUser = message.user;
                    self.props.userJoinedAck(thisUser);
                    break;
                default:
            }
        }

        this.socket.onopen = () => {
            this.sendJoinedMessage();
        }

        window.onbeforeunload = () => {
            let messageDto = JSON.stringify({user: this.props.thisUser, type: MessageType.USER_LEFT});
            this.socket.send(messageDto);
        }
    }

    sendJoinedMessage() {
        let messageDto = JSON.stringify({user: this.state.usernameInput, type: MessageType.USER_JOINED});
        this.socket.send(messageDto);
    }

    onChooseName() {
        this.registerSocket();
    }
}

function mapStateToProps(state) {
    return {
        messages: state.message,
        users: state.users,
        thisUser: state.thisUser
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        userJoined: userJoined,
        userJoinedAck: userJoinedAck,
        userLeft: userLeft,
        messageReceived: messageReceived
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);