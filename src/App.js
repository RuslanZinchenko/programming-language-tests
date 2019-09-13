import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import StartPage from './pages/StartPage/StartPage';
import LanguageDescrPage from './pages/LanguageDescrPage/LanguageDescrPage';
import TestPage from './pages/TestPage/TestPageContainer';
import ResultPage from './pages/ResultPage/ResultPage';
// import css from './App.module.css';

function App() {
  return (
    <ToastProvider placement="bottom-right">
      <>
        <Router>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/language_descr" component={LanguageDescrPage} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path="/result" component={ResultPage} />
        </Router>
      </>
    </ToastProvider>
  );
}

export default App;
