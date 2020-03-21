import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';
import '../../assets/style/style.css'
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import AuthService from "../../../../services/AuthService";
import ExitIcon from '@material-ui/icons/ExitToAppRounded';
class Chat extends Component {
    handleBack = () => {
        if (AuthService.getUserRole() == 2){
            this.props.history.push('/admin')
        }else{
            this.props.history.push('/user')
        }
    }
    render() {
        const styles = {
            height: 450,
            width: 425,
            textAlign: 'center',
            margin: '20px auto',
            position: 'relative',
            backgroundColor: '#fff',
            opacity: 0.9,
            borderRadius: 10
    };
        return (
            <div style={styles} zDepth={2} className="Chat-bg">
                <div className="chat-header text-right p-2">
                <Link>
                    <a className='text-dark' onClick={this.handleBack}><ExitIcon/></a>
                </Link>
                </div>
                <ChatHistory/>
                <Divider/>
                <SendMessage/>
            </div>
        );
    }

}

export default withRouter(Chat);

