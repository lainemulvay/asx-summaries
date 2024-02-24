import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

const getStocks = async () => {
  try {
    console.log('Fetching stocks data...');

    const stocksCollection = collection(db, 'ASX');
    console.log('Stocks collection reference:', stocksCollection.path);

    const snapshot = await getDocs(stocksCollection);
    console.log('Snapshot of stocks collection:', snapshot.docs);

    const stocksData = snapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Processing data for ticker:', doc.id);

      return {
        ticker: doc.id,
        companyName: data.Name,
        marketCap: data.marketCap, // Adjust when api with live data is available
        price: data.price, // Adjust when api with live data is available
      };
    });

    console.log('Stocks data:', stocksData);
    return stocksData;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    return [];
  }
};

export default getStocks;
