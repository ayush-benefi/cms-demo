const express = require('express');
const axios = require('axios');
const discoveryRouter = require('./discovery/controller');
const app = express();
const port = 3000;

app.use('/subjectlevel', discoveryRouter);

app.get('/loadpage', async (req, res) => {
  try {
    const apiResponse = await axios.get('http://localhost:1337/api/app-pages/m63s34hpozve4lyrcse6xalo?populate=containers.sets.itemsource');
    
    const data = apiResponse.data;

    for (const container of data.data.containers) {
      for (const set of container.sets) {
        if (set.itemsource && set.itemsource.length > 0) {
          const itemSource = set.itemsource[0];
          if (itemSource.type === 'api' && itemSource.endpoint) {
            try {
              const itemSourceResponse = await axios.get(`http://localhost:3000${itemSource.endpoint}`, {
                params: itemSource.params
              });
              
              set.items = itemSourceResponse.data;
            } catch (error) {
              console.error(`Error fetching data from ${itemSource.endpoint}:`, error);
              set.itemsource = { error: 'Failed to fetch data' };
            }
          }
        }
      }
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});