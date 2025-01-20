import css from "./FriendList.module.css";
import {FriendListItem} from "./FriendListItem";

export const  FriendList = ({friends=[]}) => {
    return <section className={css.section}>
                {
                    (friends.length > 0) && <ul className={css["friend-list"]}>
                                                {friends.map(item => <FriendListItem 
                                                                        key={item.id} 
                                                                        avatar={item.avatar} 
                                                                        name={item.name}
                                                                        isOnline={item.isOnline}
                                                                     />)}
                                            </ul>
                }
           </section>
}