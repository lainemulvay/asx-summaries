const axios = require('axios');
const cheerio = require('cheerio');
const db = require('./firebaseConfig');

const ASX_URL = 'https://www.asx.com.au/markets/trade-our-cash-market/announcements.bhp';
const MAX_ANNOUNCEMENTS = 1;

async function scrapeAnnouncements() {
  try {
    const response = await axios.get(ASX_URL);
    const $ = cheerio.load(response.data);

    const announcements = [];

    $('.content-table tbody tr').each((index, element) => {
      if (index < MAX_ANNOUNCEMENTS) {
        const $row = $(element);
        const dateParts = $row.find('.colDateTime').text().trim().split(' ');
        const day = dateParts[0];
        const month = dateParts[1];
        const year = dateParts[2];
        const time = $row.find('.colDateTime .hidden-xs').text().trim();
        const dateTime = new Date(`${month} ${day} ${year} ${time}`);
        const timestamp = dateTime.getTime(); // Convert to timestamp

        const name = $row.find('td:nth-child(3)').text().trim();

        // Check if price sensitive
        const priceSensitiveSvg = $row.find('td.price-sensitive svg').attr('data-v-7c421dba');
        const priceSensitive = priceSensitiveSvg === 'yes';

        const url = $row.find('td:nth-child(5) a').attr('href');
        const id = url.substring(url.lastIndexOf('/') + 1);

        const types = [];
        $row.find('td.hidden-xs ul.list li').each((i, el) => {
          const type = $(el).text().trim();
          types.push(type);
        });

        announcements.push({
          Name: name,
          PriceSensitive: priceSensitive,
          Timestamp: timestamp,
          URL: url,
          Types: types,
          Year: year, // Remember the year
          ID: id, // Use ID as document ID
        });
      }
    });

    return announcements;
  } catch (error) {
    console.error('Error scraping announcements:', error);
    return [];
  }
}

async function addAnnouncementToFirestore(announcement) {
  try {
    const { ID, ...announcementData } = announcement;
    const docRef = db.collection(`ASX/${announcementData.Year}`).doc(ID);
    await docRef.set(announcementData);
    console.log('Announcement added to Firestore:', ID);
  } catch (error) {
    console.error('Error adding announcement to Firestore:', error);
  }
}

scrapeAnnouncements()
  .then((announcements) => {
    if (announcements.length > 0) {
      const firstAnnouncement = announcements[0];
      addAnnouncementToFirestore(firstAnnouncement);
    } else {
      console.log('No announcements found.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
