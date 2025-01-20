import { TransactionsItem } from "./TransactionsItem";
import css from "./Transactions.module.css";
import propTypes from "prop-types";

export const TransactionHistory = ({items=[]}) => {
    
    return  <section className={css.transactions}>
               {
                (items.length > 0) &&
                <table className={css["transaction-history"]}>

                    <thead className={css.thead}>
                        <tr className={css["tr-thead"]}>
                            <th className={css["th-thead"]}>Type</th>
                            <th className={css["th-thead"]}>Amount</th>
                            <th className={css["th-thead"]}>Currency</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map(item => <TransactionsItem key={item.id} type={item.type} amount={item.amount} currency={item.currency}/>)}
                    </tbody>

                </table>
                }
            </section>
}

TransactionHistory.prototype = {
    items: propTypes.array,
}