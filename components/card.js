import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AltiCard = (props) => {
    console.log(props);
    return (
        <div>
            <Card body>
                <CardImg center src={props.detail.url} alt={props.detail.title} style={{ maxWidth: "200px", maxHeight: "200px", margin: "auto" }} />
                <CardBody>
                    <CardTitle><h6>{props.detail.title}</h6></CardTitle>
                    <CardSubtitle>{props.detail.subtitle}</CardSubtitle>
                    <CardText>{props.detail.description}</CardText>
                    <Button outline color="primary">Book</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default AltiCard;