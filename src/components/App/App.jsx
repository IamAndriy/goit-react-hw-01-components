import {Profile} from "../Profile/Profile";
import user from '../../user.json';
import css from "./App.module.css";




export const App = () => {
  return (
    <div className={css.container}>
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar}
        stats = {user.stats}
      />
    </div>
  );
};
