 const Network = async (url, id, method, body) => {
    const response = await fetch(`http://127.0.0.1:300/api/${url}${id ? id : ''}`, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return response.json();
 }

 export {Network};