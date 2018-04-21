import React from "react";
import * as Scroll from 'react-scroll';

import { connect } from "react-redux";
import {
  beginScroll,
  scrollingManualDown,
  scrollingManualUp,
  scrollingManual
} from '../../../redux/scroll/scrollActionDispatcher';


import "./intro.css";

/**
 * Component
 */
import Space from "../../objects/space/space";
import Content from "../../objects/content/content";

let scroll = Scroll.animateScroll;

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollDirection: 0
    };
  }

  /**
   * Start setIntervals
   */
  scrolling = () => {
    this.props.startScroll();
  }

  /**
   * Stop all setIntervals
   */
  stopScrolling = () => {
    this.props.stopAuto();
  }

  handleScroll = (event) => {

    this.setState({
      scrollDirection: event.nativeEvent.wheelDelta
    })
    /**
     * Check scroll direction and adjust 'top' value accordingly
     */
    if (this.state.scrollDirection > 0) {
      this.props.userScrollDown();
    } else {
      this.props.userScrollUp();
    }
  }

  componentDidMount = () => {
    scroll.scrollTo(0);
    this.scrolling();
  }
  componentWillUnmount = () => {
    this.props.stopAuto();
  }


  render = () => {
    return (
      <div>
        <Space id="space"/> 
        <div id="crawlWrapper">
          <div id="crawl"
            style={{ top: this.props.scroll.position + "vh" }}
            onMouseEnter={() => this.stopScrolling()}
            onMouseLeave={() => this.scrolling()}
            onWheel={(event) => this.handleScroll(event)}
          >
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

//====================== REDUX CONNECTION =========================
const mapState = (state) => {
  return {
    scroll: state.scroll,
  };
};

const mapDispatch = (dispatch) => ({
  startScroll: () => dispatch(beginScroll()),
  userScrollDown: () => dispatch(scrollingManualDown()),
  userScrollUp: () => dispatch(scrollingManualUp()),
  stopAuto: () => dispatch(scrollingManual()),
});

export default connect(mapState, mapDispatch)(Intro);
