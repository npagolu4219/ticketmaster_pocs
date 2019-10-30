import React from 'react';
import { Container, Row, Col,Media } from 'reactstrap';
//import { FaBeer, FaShare, FaShareAlt } from 'react-icons/fa';

const ShareEvent = () => (
    <div>
          <Row className="shareWrapper">
            <Col xs="7">
            <h1><b>Brett Eldredge</b> Tickets </h1>
            <p>Live from Madison Square Garden 7th Ave & 32nd Street, New York, NY 10001</p>
            <div class="fb-share-button" data-href="https://www.ticketmaster.com/Orlando-Magic-tickets/artist/805995?site=10085&pageType=178235&nativePromo=3389&slot=1&campaign=944778&flight=8908940&nativeId=14195170&ac_link=NBA_TM_LCL_ORL_HOME_SPOT" data-layout="button_count">
            </div>
            </Col>
            <Col xs="5">
            <Media src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDH5qrmtQEQARgBMgguPpAJWp_1kw" alt="Generic placeholder image" height="219" width="389"/>
            </Col>
        </Row>
    </div>
      
    )

export default ShareEvent