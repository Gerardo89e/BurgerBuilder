import React,{Component} from 'react';
//import layout from './components/Layouts/Layout';
//import logo from './logo.svg';
//import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layouts/Layout';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
