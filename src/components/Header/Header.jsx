import React from "react";
import { Button, Modal } from "@mui/material";
import { meltemLogo } from "../../image/image";
import ContactModal from "../ContactModal/ContactModal";
import './Header.scss'

const Header = () => {

  // const handleOpen = () => {
  //   <ContactModal/>
  // } 

  const titles = [
    { name: "Компанія" },
    { name: "Продукція" },
    { name: "Статті" },
    { name: "Рішення" },
    { name: "Контакти" },
  ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo__img" src={meltemLogo} alt="meltemLogo" />
      </div>
      <div className="title">
        {titles.map((title, index) => (
          <div key={index}>
            <button>
              {title.name}
            </button>
          </div> 
        ))}
      </div>
      <div className="contact">
        <div className="contact__number">
          0 (800) 00-00-00
        </div>
        <div className="contact__contactUs">
          <Button className="contact__contactUs__btn" onClick={handleOpen}>
            Зв’язатись
          </Button>
        </div>
        <div className="contact__languageSwitcher">
          <button className="contact__languageSwitcher__active">UA</button>
          <button>RU</button>
        </div>
      </div>
    </div>
    )
}

export default Header;