import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-modal";
import ReactPlayer from "react-player"
import { touristSites } from "./data";

const TouristSitesModal = ({ country }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Trouver les sites touristiques pour le pays donné
  const sites =
    touristSites.find((item) => item.id === country.id)?.sites || [];

  return (
    <>
      <button onClick={openModal}>Voir les sites touristiques</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <Container fluid>
          <Row>
          <h2>Sites touristiques au {country.label}</h2>
          </Row>
          {sites.map((site, index) => (
            <Row>
              <Col md={6} key={index}>
                <div><h3>{site.label}</h3></div>
                <p>{site.description}</p>
              </Col>
              <Col md={4} key={index}>
                <ReactPlayer
                  url={site.url}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Col>
            </Row>
          ))}
        </Container>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </>
  );
};

export default TouristSitesModal;
