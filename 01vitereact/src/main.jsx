import React  from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>custom app !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:"_blank",  
//     },
//     Children: 'clcik me to visist google'
// }

 
const anotherElement = (
    <a href="https://google.com" target='_blank'>visist google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'  },
            'clcik me to visis google',
            anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
reactElement
  
)
