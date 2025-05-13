import images from '../assets/images';

export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Youtube',
    image: images.youtube,
    link: 'https://www.youtube.com/',
    appLink: 'vnd.youtube:', // YouTube app link
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Spotify',
    image: images.spotify,
    link: 'https://www.spotify.com/',
    appLink: 'spotify://', // Spotify app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TikTok',
    image: images.tiktok,
    link: 'https://www.tiktok.com/',
    appLink: 'snssdk1128://', // TikTok app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Netflix',
    image: images.netflix,
    link: 'https://www.netflix.com/',
    appLink: 'netflix://', // Netflix app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Whatsapp',
    image: images.whatsapp,
    link: 'https://www.whatsapp.com/',
    appLink: 'whatsapp://', // WhatsApp app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Instagram',
    image: images.instagram,
    link: 'https://www.instagram.com/',
    appLink: 'instagram://', // Instagram app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Facebook',
    image: images.facebook,
    link: 'https://www.facebook.com/',
    appLink: 'fb://', // Facebook app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Discord',
    image: images.discord,
    link: 'https://www.discord.com/',
    appLink: 'discord://', // Discord app link
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Snapchat',
    image: images.snapchat,
    link: 'https://www.snapchat.com/',
    appLink: 'snapchat://', // Snapchat app link
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