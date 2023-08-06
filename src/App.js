import "./css/App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Everything from "./components/Everything";
import Footer from "./components/Footer";
import Pavers from "./productsItemsPage/Pavers";
import { Modal } from "antd";
import Loader from "./components/Loader";
import { Route, Routes } from "react-router-dom";
import whatsappimage from "./images/clipart698324.png";
import callimage from "./images/phone-ringing.png";

function App() {
  const [isLoading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const loadingTime = 1200;
  const timer = setTimeout(() => {
    setLoading(false);
  }, loadingTime);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const handleCallButton = () => {
    const phoneNumber = "8888865737";

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Check if the user is using a mobile device

      // Create an anchor element with the 'tel' protocol and the phone number
      const anchor = document.createElement("a");
      anchor.href = `tel:${phoneNumber}`;

      // Click on the anchor element to initiate the phone call
      anchor.click();
    } else {
      // The user is not using a mobile device, show a pop-up window with the message
      setModalMessage("Cannot initiate a phone call on this device.");
      setShowModal(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ backgroundColor: "BLACK" }} className="content">
          <Header className="header" />

          <Router>
            <Routes>
              <Route path="/" element={<Everything />} />
              <Route path="/pavers" element={<Pavers />} />
            </Routes>
          </Router>
          <Modal
            title="Alert"
            open={showModal}
            onOk={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          >
            <p>{modalMessage}</p>
          </Modal>
          <div className="floatButton">
            <div className="callButton" onClick={handleCallButton}>
              <img
                style={{
                  height: "25px",
                  marginLeft: "5px",
                  marginBottom: "15px",
                }}
                src={callimage}
                alt="call"
              />
            </div>
            <a href="https://wa.me/7875743881?text=Hi! PSB Industries ">
              <img style={{ height: "35px" }} src={whatsappimage} alt="wapp" />
            </a>
          </div>
          <section id="Contact">
            <Footer className="footer" />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
