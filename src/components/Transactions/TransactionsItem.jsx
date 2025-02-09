import css from "./Transactions.module.css";
import PropTypes from "prop-types";

export const TransactionsItem = ({type, amount, currency}) => {
    return  <tr className={css["tr-body"]}>
                <td className={css["td-body"]}>{type}</td>
                <td className={css["td-body"]}>{amount}</td>
                <td className={css["td-body"]}>{currency}</td>
            </tr>

}

TransactionsItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}