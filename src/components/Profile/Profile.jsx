import css from './Profile.module.css';
import defaultAvatar from "../../assets/images/logo192.png";
import propTypes from 'prop-types';

export const Profile = ({username="unknownUser", tag="unknownUser", location="unknown", avatar=defaultAvatar, stats={}}) => {
 
    return  <div className={css.profile}>
                <div className={css.description}>
                    <img className={css.avatar} src={avatar} alt="user avatar" />
                    <p className={css.name}>{username}</p>
                    <p className={css.tag}>{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>
                
                <ul className={css.stats}>
                    <li className={css.item} key="folovers">
                        <span className={css.label}>folovers</span>
                        <span className={css.quantity}>{stats.folowers ?? 0}</span>
                    </li>
                    <li className={css.item} key="views">
                        <span className={css.label}>views</span>
                        <span className={css.quantity}>{stats.views ?? 0}</span>
                    </li>
                    <li className={css.item} key="likes">
                        <span className={css.label}>likes</span>
                        <span className={css.quantity}>{stats.likes ?? 0}</span>
                    </li>
                </ul>
            </div>

}

Profile.propTypes = {
    username: propTypes.string,
    tag: propTypes.string,
    location: propTypes.string,
    avatar: propTypes.string,
}