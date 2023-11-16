import React, { useState } from 'react';
import './App.css';
import { request, gql } from 'graphql-request';

const App = () => {
  const [product, setProduct] = useState({ field1: '', field2: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    const mutation = gql`
      mutation {
        createOrder(name: "${product.field1}", productName: "${product.field2}") {
          id
          name
          email
          age
        }
      }
    `;
    try {
      const response = await request('http://localhost:3003/graphql', mutation);
      const parsedResponse = JSON.parse(JSON.stringify(response));
      const formattedResponse = `Order Created:\n - ID: ${parsedResponse.createOrder.id}\n - Name: ${parsedResponse.createOrder.name}\n - Email: ${parsedResponse.createOrder.email}\n - Age: ${parsedResponse.createOrder.age}`;

      setResponse(formattedResponse);
    } catch (error) {
      console.error(error);
      const errorResponse = (error as Error).message;
      if (errorResponse.includes('Product with name')) {
        const productName = errorResponse
          .split('Product with name ')[1]
          .split(' not found.')[0];
        const humanReadableError = `The product "${productName}" was not found. Please create it first.`;
        setResponse(humanReadableError);
      } else {
        setResponse(errorResponse);
      }
    }
  };

  return (
    <div className="App">
      <form>
        <input name="field1" value={product.field1} onChange={handleChange} />
        <input name="field2" value={product.field2} onChange={handleChange} />
        <button type="button" onClick={addProduct}>
          Add Product
        </button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default App;
