/*
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";

import modalStyles from "./nav.module.css";
import buttonStyles from './PageComponents/Home/home.module.css'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*import {
  faPhoneAlt,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";* /

import { FaCalendar } from 'react-icons/fa'

class CTAScheduleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
    };
  }

  handleModalOpen = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true });
  };

  handleModalClose = (event) => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false });
  };

  componentWillMount() {
    Modal.setAppElement('body');
}

  render() {
    return (
      <>
      <div className="NoMobile">
        <Button data-appointlet-organization="elite-care-chiropractic"
          className={modalStyles.NavBook}
          type="button"
          onClick={this.handleModalOpen}
          /* onClick={() => navigateTo("/schedule")}* /
        >
          Book Online
        </Button>
        </div>
        <div className="NoDesktop">
          <a 
          data-appointlet-organization="elite-care-chiropractic" 
          className={buttonStyles.CTALink}
          onClick={this.handleModalOpen}
          >
          {/*<FontAwesomeIcon
              icon={faCalendar}
              className={buttonStyles.CTASchedule}
               
          />* /}
          <FaCalendar className={buttonStyles.CTASchedule} />
            Book Online
          </a>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Book Online"
          id="modal"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          className="modalSchedule"
          overlayClassName="modalScheduleOverlay"
        >
          <Container fluid>
            <Row
              style={{
                textAlign: "center",
                display: "block",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Col>
                <iframe
                  src="https://elite-care-chiropractic.appointlet.com"
                  width="100%"
                  height={650}
                  frameBorder={0}
                  style={{ border: "0" }}
                  scrolling=""
                  rel="preload"
                  no-referrer="true"
                  sameSite="Secure"
                />
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

CTAScheduleModal.displayName = "CTAScheduleModal";

export default CTAScheduleModal;
*/