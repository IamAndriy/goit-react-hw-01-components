import css from "./Transactions.module.css";

export const TransactionsItem = ({type, amount, currency}) => {
    return  <tr className={css["tr-body"]}>
                <td className={css["td-body"]}>{type}</td>
                <td className={css["td-body"]}>{amount}</td>
                <td className={css["td-body"]}>{currency}</td>
            </tr>

}