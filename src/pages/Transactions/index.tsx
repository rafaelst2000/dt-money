import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <PriceHightlight variant="income">R$ 12.000,00</PriceHightlight>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <PriceHightlight variant="outcome">R$ -12.000,00</PriceHightlight>
              <td>Compra</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}