import {Button, Card, Col, Container, Form, Pagination, Row} from "react-bootstrap";

export function Register() {
    return <>
        <Container  >
            <Row className="d-flex justify-content-center">
                <Col md="9">
                    <Card className="w-100  min-height-400">
                        <Card.Header>
                            <Card.Title as="h4"> Cadastro de Membros</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col className="pr-1" md="12">
                                        <Form.Group>
                                            <label>Nome completo</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Nome"}
                                            type="text">
                                        </Form.Control>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <Form.Group>
                                            <label>Email</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Nome"}
                                            type="email">
                                        </Form.Control>
                                    </Col>
                                    <Col className="pr-1" md="6">
                                        <Form.Group>
                                            <label>Contacto</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Nome"}
                                            type="email">
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="12">
                                        <Form.Group>
                                            <label>Morada/Endereço</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Morada"}
                                            type="email">
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="7">
                                        <Form.Group>
                                            <label>Localidade</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Localidate"}
                                            type="text">
                                        </Form.Control>
                                    </Col>
                                    <Col className="pr-1" md="5">
                                        <Form.Group>
                                            <label>Distrito</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Distrito"}
                                            type="text">
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="3">
                                        <Form.Group>
                                            <label>Código Postal</label>
                                        </Form.Group>
                                        <Form.Control
                                            defaultValue={""}
                                            placeholder={"Distrito"}
                                            type="text">
                                        </Form.Control>
                                    </Col>
                                </Row>


                            </Form>

                        </Card.Body>
                        <Card.Footer className={"d-flex justify-content-end"}>
                            <Button className="btn btn-primary btn-fill btn-icon btn-lg">
                                <i className="fa fa-floppy-disk"></i>
                                {" "} Gravar

                            </Button>

                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}