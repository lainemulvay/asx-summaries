import { collection, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

const getYears = async (ticker) => {
  try {
    console.log('Fetching years for ticker:', ticker);

    // Create a reference to the ASX collection, then the specific document for the ticker
    const stockRef = collection(db, 'ASX').doc(ticker);
    console.log('Stock reference:', stockRef.path);

    const yearCollections = await getDocs(stockRef);
    const years = yearCollections.docs.map((yearCollection) => yearCollection.id);
    console.log('Years:', years);

    return years;
  } catch (error) {
    console.error('Error fetching years:', error);
    return [];
  }
};

export default getYears;
