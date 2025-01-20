import defaultAvatar from "../../assets/images/logo192.png";
import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendListItem = ({avatar=defaultAvatar, name="Unknown", isOnline="false"}) => {
    return  <li className={css.friend}>
                <span className={ clsx(css.status, {[css["is-online"]]: isOnline}) }>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48"/>
                <p className={css.name}>{name}</p>
            </li>
}