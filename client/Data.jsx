

function Data({data}) {
 
  return (
    <div>
      <h1>JSON Data Fetch Example</h1>
      {data ? (
        <ul>
          {data.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Data;
