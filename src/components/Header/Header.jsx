import React from "react"; 
import Button from "../Button/Button";
import { useTelegram } from "../../Hooks/useTelegram";
import "./Header.css";

const Header = () => {
    
   const {user, onClose} = useTelegram();

    return (
    <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'usernname'}>
            {user?.username}
        </span>
    </div>

    );
};

export default Button;

