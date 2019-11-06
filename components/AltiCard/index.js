import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import Moment from 'react-moment';
import 'moment-timezone';

import './altiCard.scss';

const dateToFormat = '1976-04-19T12:59-0500';

const AltiCard = (props) => {
    return (
        <div>
            <Card body>
                <CardImg center src={props.detail.url} alt={props.detail.title} style={{ maxWidth: "200px", maxHeight: "200px", margin: "auto" }} />
                <CardBody>
                    <CardTitle><h6>{props.detail.title}</h6></CardTitle>
                    <CardSubtitle>{props.detail.subtitle}</CardSubtitle>
                    <CardText className={'event-details'}>
                        <div>
                            <div className={'title'}>Venue</div>
                            <div>{props.detail.description}</div>
                        </div>
                        <div>
                            <div className={'title'}>Date</div>
                            <div><Moment tz={props.detail.date.timezone} format="YYYY-MM-DD hh:mm A">
                                {props.detail.date.start.dateTime}
                            </Moment></div>
                        </div>
                    </CardText>
                    <Button outline color="primary">Book</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default AltiCard;