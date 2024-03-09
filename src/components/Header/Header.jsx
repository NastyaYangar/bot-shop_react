import React from "react"; 
import Button from "../Button/Button";
import { useTelegram } from "../../Hooks/useTelegram";

const Header = () => {
    


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