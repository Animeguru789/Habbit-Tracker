import images from '../assets/images';

export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Youtube',
    image: images.youtube,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Spotify',
    image: images.spotify,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TikTok',
    image: images.tiktok,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Netflix',
    image: images.netflix,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Whatsapp',
    image: images.whatsapp,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Instagram',
    image: images.instagram,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Facebook',
    image: images.facebook,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Discord',
    image: images.discord,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Snapchat',
    image: images.snapchat,
  },
];

export const generateProgressValues = () => {
  const randomValues = DATA.map(() => Math.random());
  const total = randomValues.reduce((sum, value) => sum + value, 0);

  const normalizedValues = randomValues.map((value) => (value / total) * 100);

  return DATA.reduce((acc, item, index) => {
    acc[item.id] = Math.round(normalizedValues[index]);
    return acc;
  }, {});
};

export const sortDataByProgress = (data, progressValues) => {
  return [...data].sort((a, b) => progressValues[b.id] - progressValues[a.id]);
};