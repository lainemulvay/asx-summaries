import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

const getStocks = async () => {
  try {
    const stocksCollection = collection(db, 'ASX');
    const snapshot = await getDocs(stocksCollection);

    const stocksData = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ticker: doc.id,
        companyName: data.Name,
        marketCap: data.marketCap, // Adjust when api with live data is available
        price: data.price, // Adjust when api with live data is available
      };
    });

    return stocksData;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    return [];
  }
};

export default getStocks;
