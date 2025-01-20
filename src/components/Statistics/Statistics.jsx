import css from "./Statistics.module.css";
import propTypes from "prop-types";
import getRandomHexColor from "helpers/getRandomHexColor";

export const Statistics = ({title, stats=[]})=> {

    const calcWidth = 'calc(100% / ' + stats.length + ')';
    
    return <section className={css.statistics}>

                {title && (<h2 className={css.title}>{title}</h2>)}

                {(stats.length > 0) && <ul className = {css["stats-list"]}>
                                            {stats.map(item => {
                                                return <li className={css.item} key={item.id} style={{backgroundColor: getRandomHexColor(), flexBasis : calcWidth}}>
                                                        <span className={css.label}>{item.label}</span>
                                                        <span className={css.percentage}>{item.percentage}%</span>
                                                    </li>
                                                })
                                            }
                                       </ul>
                }
           </section>
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.array,
}