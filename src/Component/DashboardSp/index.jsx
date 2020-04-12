import React, { Component } from "react";
// import './Projects/node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./index.css";
import Sidebar from "./Sidebar";
import Content from "./Body";
import Header from "./Header";
import Chat from "./Chat";
import { connect } from "react-redux";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      scrollTop: 0
    };
    // this.resultsDiv = React.createRef();
    // this.bignav = this.bignav.bind(this)
    // this.mynav = this.mynav.bind(this)
    // this.logout = this.logout.bind(this)
 
    // this.resultsDiv = React.createRef();
  }
  componentDidMount() {
    console.log("DASHHHHHH")
    // window.location.reload()
  }

  render() {
    // if (!cookie.load('Token')) {
    //   // return <LoginPanel onSuccess={this.onLogin} />
    //   this.props.history.push('/Login');
    // }

    return (
      <div className="dashboard-bg">
        <Chat />
        <Header />

        <Sidebar />
        {/* {decode(cookie.load('Token'))} */}
        <Content />

        {/* <div className="footer-copyright text-right mt-4"><span>© 2019</span> 

        </div>          */}
        {/* <Footer/> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.places.userId
  };
};
export default connect(mapStateToProps)(index);
