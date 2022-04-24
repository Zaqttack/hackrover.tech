import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const rovers = [
  'Curiosity',
  'Perseverance',
  'Spirit',
  'Opportunity',
  'Zhurong',
  'Mars 3 PrOP-M',
  'Sojourner',
]

const locations = [
  '4.59 S / 137.44 E',
  '8.25 S / 156.46 E',
  '3.57 S / 138.35 E',
  '5.35 S / 97.23 E',
  '3.57 S / 138.35 E',
  '8.25 S / 156.46 E',
  '3.57 S / 138.35 E',
]

const users = [...Array(7)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: rovers[index],
  location: locations[index],
  isConnected: faker.datatype.boolean(),
  status: sample(['online', 'offline']),
  role: sample([
    'Stuck in Storm',
    'Repairs',
    'Running Tests',
    'Charging',
    'Relocating',
    'Collecting Data Samples',
  ]),
}));

export default users;
