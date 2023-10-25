import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from "react-router-dom";

import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
