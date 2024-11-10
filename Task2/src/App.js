// src/App.js
import React from "react";
import { useQuery } from "@apollo/client";
import client from "./ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { GET_TRANSFERS } from "./queries";

function Transfers() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>USDC Transfers to Specified Address</h1>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.from}</td>
              <td>{transfer.to}</td>
              <td>{transfer.value}</td>
              <td>{new Date(transfer.timestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Transfers />
    </ApolloProvider>
  );
}

export default App;