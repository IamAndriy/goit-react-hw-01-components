
import clsx from 'clsx';
import css from "./Statistics.module.css";

export const Statistics = ({title="", stats={}}) => {

    return  <section className={css.section}>
                <h2 className={clsx({[css.title]: title}, {[css.visuallyHidden]: !title})}>{title}</h2>

                <ul className={css.stats}>
                    <li key="folovers">
                        <span className={css.label}>folovers</span>
                        <span className={css.quantity}>{stats.folowers ?? 0}</span>
                    </li>
                    <li key="views">
                        <span className={css.label}>views</span>
                        <span className={css.quantity}>{stats.views ?? 0}</span>
                    </li>
                    <li key="likes">
                        <span className={css.label}>likes</span>
                        <span className={css.quantity}>{stats.likes ?? 0}</span>
                    </li>
                </ul>

            </section>
}