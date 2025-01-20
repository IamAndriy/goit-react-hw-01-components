import css from './Profile.module.css';
import defaultAvatar from "../../assets/images/logo192.png";
import { Statistics } from "components/Statistics/Statistics";

export const Profile = ({username="unknownUser", tag="unknownUser", location="unknown", avatar=defaultAvatar, stats={}}) => {

        
    return  <div className={css.profile}>
                <div className={css.description}>
                    <img className={css.avatar} src={avatar} alt="user avatar" />
                    <p className={css.name}>{username}</p>
                    <p className={css.tag}>{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>
                <Statistics stats={stats}/>
            </div>

}