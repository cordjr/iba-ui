import {
  Card,
  Button,
  Col,
  Container,
  Pagination,
  Row,
  Table,
  InputGroup,
  Form,
} from "react-bootstrap";
import "./styles.css";

export function Memebers() {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Card className="w-100  min-height-400">
              <Card.Header>
                <Row className="d-flex align-items-center">
                  <Col md="3">
                    <Card.Title as="h4"> Cadastro de Membros</Card.Title>
                  </Col>
                  <Col
                    md="9"
                    className="d-flex justify-content-between form-inline"
                  >
                    <div className="d-flex justify-content-start col-md-9 align-items-center">
                      <Form.Control
                        className="col-sm-11"
                        placeholder="Recipient's username"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        <i className="fa fa-search"></i>
                      </Button>
                    </div>
                    <Button className="btn-fill pull-right">
                      <i className="fa fa-plus" /> Novo
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Localidade</th>
                      <th>Açoes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>José de Oliveira</td>
                      <td> Ilhavo</td>
                      <td>
                        <div className="d-flex w-100 justify-content-center">
                          <Button
                            className="btn-fill btn-info "
                            style={{ marginRight: "0.3rem" }}
                          >
                            <i className="fa fa-pencil" />
                          </Button>
                          <Button className="btn-fill btn-danger">
                            <i className="fa fa-trash" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <Pagination></Pagination>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
