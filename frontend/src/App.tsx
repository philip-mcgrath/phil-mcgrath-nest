import React, { useState } from 'react';
import './App.css';
import { request, gql } from 'graphql-request';

const App = () => {
  const [product, setProduct] = useState({ field1: '', field2: '' });

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
      return response;
    } catch (error) {
      console.error(error);
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
    </div>
  );
};

export default App;
