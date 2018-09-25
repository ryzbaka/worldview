import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalComplete extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalComplete} toggle={this.toggleComplete} wrapClassName='tour tour-complete' className={this.props.className} backdrop={true}>
          <ModalHeader toggle={this.toggle} charCode="">Complete</ModalHeader>
          <ModalBody>
            <div className="tour-intro">
              <p className="intro">
                The NASA Worldview app provides a satellite's perspective of the planet as it
                looks today and as it has in the past. Click an event below to analyze the event in
                great detail within the application. These guides will walk you through new and
                create ways to use Worldview. <a href="#" title="Start using Worldview">Start using Worldview <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
              </p>
            </div>
            <div className="tour-box-container">
              <div className="tour-box-row">
                <a href="#" className="tour-box wildfire" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">
                        Wildfire Event<br />
                        Wildfire Event<br />
                        Wildfire Event
                      </h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="tour-box volcano" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">
                        Volcano Event<br />
                        Volcano Event
                      </h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="tour-box snow" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Snow Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="tour-box-row">
                <a href="#" className="tour-box sea-and-lake-ice" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Sea and Lake Ice Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="tour-box iceberg" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Iceberg Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="tour-box water-color" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Water Color Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="tour-box-row">
                <a href="#" className="tour-box dust-and-haze" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Dust and Haze Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="tour-box severe-storm" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Severe Storm Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="tour-box man-made" onClick={this.toggleInProgress}>
                  <div className="tour-box-content">
                    <div className="tour-box-header">
                      <h3 className="tour-box-title">Man Made Event</h3>
                    </div>
                    <div className="tour-box-description">
                      <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Nam eget quam id turpis sceler isque faucibo. Etiam faucibo nisi dignissim consequat rut. Nullam rhoncus placerat posuere. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalComplete;