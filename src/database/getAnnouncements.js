import { collection, query, where, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

const getAnnouncements = async (ticker, year) => {
  try {
    console.log('Fetching announcements for:', ticker, year);

    // Create a reference to the announcements collection
    const announcementsRef = collection(db, 'ASX', ticker, year); // Use collection
    console.log('Announcements reference:', announcementsRef.path);

    const q = query(announcementsRef); // Create a query
    const querySnapshot = await getDocs(q);
    
    const announcements = querySnapshot.docs.map((doc) => doc.data());
    console.log('Announcements:', announcements);

    return announcements;
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return [];
  }
};

export default getAnnouncements;
