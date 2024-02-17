import React from "react"; 
import Button from "../components/button/button";

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    
      }

    return (
    <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'usernname'}>
            {tg.initDataUnsafe?.user?.username}
        </span>
    </div>

    );
};

export default Button;