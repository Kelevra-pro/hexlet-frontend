import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

const getBadLinks = async (testLink) => {
  const response = await axios.get(testLink);
  const links = extractLinks(response.data);
  const request = (link) => axios.get(link).then(() => null).catch(() => link);
  const promises = links.map(request);
  const results = await Promise.all(promises);

  return results.filter((result) => result !== null);
};
