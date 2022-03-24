import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed'
import  LoginForm  from './components/LoginForm'
import ProjectId from './ProjectId';
// import { Routes, Route} from 'react-router-dom';
import './App.css'

const App = () => { 

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height='100vh'
            projectID= {ProjectId}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    )
}



export default App;