



const PageTugas4 = () =>{
    // Sample array of items
    const items = ['Tugas2', 'Tugas3', 'Tugas4'];
  
    return (
      <div>
        <h2>Tugas 04</h2>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );



}

export default PageTugas4