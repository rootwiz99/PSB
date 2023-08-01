import "./css/App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./menu/Home";
import About from "./menu/About";
import Projects from "./menu/Projects";
import Products from "./menu/Products";
import Contact from "./menu/Contact";
import Footer from "./components/Footer";
import Pavers from "./productsItemsPage/Pavers";
import { FloatButton } from "antd";
import { Modal } from "antd";
import { PhoneTwoTone } from "@ant-design/icons";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const loadingTime = 1300;
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
        <div style={{ backgroundColor: "black" }} className="content">
          <Header className="header" />
          <Router>
            <Home />
            <Contact />
            <Projects />
            <Products />
            <Pavers />
            <About />
          </Router>
          <FloatButton
            shape="circle"
            type="primary"
            style={{
              right: 30,
            }}
            onClick={handleCallButton}
            icon={<PhoneTwoTone />}
          />
          <Modal
            title="Alert"
            open={showModal}
            onOk={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          >
            <p>{modalMessage}</p>
          </Modal>

          <Footer className="footer" />
        </div>
      )}
    </>
  );
}

export default App;
