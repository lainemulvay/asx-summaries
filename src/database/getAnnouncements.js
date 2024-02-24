import { collection, query, getDocs } from 'firebase/firestore';
import db from './firebaseConfig';

const getAnnouncements = async (ticker, year) => {
  try {
    console.log('Fetching announcements for:', ticker, year);

    const announcementsRef = collection(db, 'ASX', ticker, year);
    console.log('Announcements reference:', announcementsRef.path);

    const q = query(announcementsRef);
    const querySnapshot = await getDocs(q);
    
    const announcements = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        ID: doc.id, // Include the ID field
      };
    });
    console.log('Announcements:', announcements);

    return announcements;
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return [];
  }
};

export default getAnnouncements;
