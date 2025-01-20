import css from "./Statistics.module.css";

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const Statistics = ({title, stats=[]})=> {

    const calcWidth = 'calc(100% / ' + stats.length + ')';
    
    return <section className={css.statistics}>

                {title && (<h2 className={css.title}>{title}</h2>)}

                {(stats.length > 0) && <ul className = {css["stats-list"]}>
                                            {stats.map(item => {
                                                return <li className={css.item} key={item.id} style={{backgroundColor: getRandomHexColor(), flexBasis : calcWidth}}>
                                                        <span className={css.label}>{item.label}</span>
                                                        <span className={css.percentage}>{item.percentage}</span>
                                                    </li>
                                                })
                                            }
                                       </ul>
                }
           </section>
}