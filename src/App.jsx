import ItemList from "./components/ItemList";
import { useEffect, useState } from "react";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        if (!response.ok) {
          console.log("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching items:", error);
      }
    };
    
    fetchItems();
  }, []);
  return <ItemList key={items.id} items={items} />;
}
export default App;
