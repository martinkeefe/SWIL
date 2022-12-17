import { text } from 'svelte/internal';
import type { Work } from '../types';

const works: Work[] = [
  {
    title: 'Agents of S.H.I.E.L.D.',
    date: '2013-09-24',
    slug: 'agents-of-shield-2013',
    like: '4',
    images: [{ url: '/img/tvdb/263365-3.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-agents-of-s-h-i-e-l-d' },
      { url: 'https://www.disneyplus.com/en-gb/series/agents-of-shield/2UT4VQrwpVgi', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt2364582', score: '7.5 217K' },
      { url: 'https://en.wikipedia.org/wiki/Agents_of_S.H.I.E.L.D.' },
      { url: 'https://www.rottentomatoes.com/tv/marvels_agents_of_shield', score: '95% 91%' },
      { url: 'https://thetvdb.com/series/marvels-agents-of-shield' },
    ],
    // net: 'ABC',
    // fan: 'Agents_of_S.H.I.E.L.D.',
    texts: [
      {
        text: `The worldwide law-enforcement organization known as S.H.I.E.L.D. (Strategic Homeland 
               Intervention Enforcement and Logistics Division) employs an elite team of agents who 
               investigate strange occurrences around the globe and beyond. Its members -- each of 
               whom brings a specialty to the group -- work to protect those who cannot protect 
               themselves from extraordinary and inconceivable threats, including a formidable 
               group known as Hydra. The series is set in the Marvel Cinematic Universe and 
               acknowledges the continuity of the franchise's films and other television series.`,
        src: 'https://www.rottentomatoes.com/tv/marvels_agents_of_shield',
      },
    ],
    seasons: [
      // , runs: ['Jed Whedon', 'Maurissa Tancharoen', 'Jeffrey Bell']
      // { title: 'Season One', eps: 22, fst: '2013-09-24', lst: '2014-05-13', pedia: 'Agents_of_S.H.I.E.L.D._(season_1)' },
      // { title: 'Season Two', eps: 22, fst: '2014-09-23', lst: '2015-05-12', pedia: 'Agents_of_S.H.I.E.L.D._(season_2)' },
      // { title: 'Season Three', eps: 22, fst: '2015-09-29', lst: '2016-05-17', pedia: 'Agents_of_S.H.I.E.L.D._(season_3)' },
      // { title: 'Season Four', eps: 22, fst: '2016-09-20', lst: '2017-05-16', pedia: 'Agents_of_S.H.I.E.L.D._(season_4)' }, // <li>[01..08] - Ghost Rider</li>  <li>[09..15] - LMD</li>  <li>[16..22] - Agents of Hydra</li>
      // { title: 'Season Five', eps: 22, fst: '2017-12-01', lst: '2018-05-18', pedia: 'Agents_of_S.H.I.E.L.D._(season_5)' },
      // { title: 'Season Six', eps: 22, fst: '2019-05-10', lst: '2019-08-02', pedia: 'Agents_of_S.H.I.E.L.D._(season_6)' },
      // { title: 'Season Seven', eps: 22, fst: '2020-05-27', lst: '2020-08-12', pedia: 'Agents_of_S.H.I.E.L.D._(season_7)' },
    ],
  },
  {
    title: 'Agent Carter',
    date: '2015-01-06',
    slug: 'agent-carter-2015',
    like: '4',
    images: [{ url: '/img/tvdb/281485-5.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-agent-carter' },
      { url: 'https://www.disneyplus.com/en-gb/series/agent-carter/3rh3uclvsNsT', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt3475734', score: '7.9 84K' },
      { url: 'https://en.wikipedia.org/wiki/Agent_Carter_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvel_s_agent_carter', score: '86% 77%' },
      { url: 'https://thetvdb.com/series/marvels-agent-carter' },
    ],
    // net: 'ABC',
    // fan: 'Agent_Carter_(TV_series)',
    texts: [
      {
        text: `Peggy Carter (Hayley Atwell, reprising her role from the "Captain America" films) is 
               an unstoppable secret agent for the Strategic Scientific Reserve, dedicated to 
               fighting new atomic threats that have emerged after World War II. After working in 
               New York, Peggy heads across the country to Los Angeles for her most dangerous 
               assignment yet. As Peggy explores the bright lights of Hollywood and discovers new 
               friends -- and perhaps a new romance -- a sinister threat emerges that could impact 
               everyone she is sworn to protect.`,
        src: 'https://www.rottentomatoes.com/tv/marvel_s_agent_carter',
      },
    ],
    seasons: [
      // , runs: ['Tara Butters', 'Michele Fazekas', 'Chris Dingess']
      // { title: 'Season One', eps: 8, fst: '2015-01-06', lst: '2015-02-24', pedia: 'Agent_Carter_(season_1)' },
      // { title: 'Season Two', eps: 10, fst: '2016-01-19', lst: '2016-03-01', pedia: 'Agent_Carter_(season_2)' },
    ],
  },
  {
    title: 'Daredevil',
    date: '2015-04-10',
    slug: 'daredevil-2015',
    like: '3',
    images: [{ url: '/img/tvdb/281662-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-daredevil' },
      { url: 'https://www.disneyplus.com/en-gb/series/daredevil/5jKSWL7ZMg50', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt3322312', score: '8.6 440K' },
      { url: 'https://en.wikipedia.org/wiki/Daredevil_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/daredevil', score: '92% 89%' },
      { url: 'https://thetvdb.com/series/marvels-daredevil' },
    ],
    // net: 'Netflix',
    // fan: 'Daredevil_(TV_series)',
    seasons: [
      // { title: 'Season One', eps: 13, fst: '2015-04-10', pedia: 'Daredevil_(season_1)' },
      // { title: 'Season Two', eps: 13, fst: '2016-03-18', pedia: 'Daredevil_(season_2)' },
      // { title: 'Season Three', eps: 13, fst: '2018-10-19', pedia: 'Daredevil_(season_3)' },
    ],
  },
  {
    title: 'Jessica Jones',
    date: '2015-11-20',
    slug: 'jessica-jones-2015',
    like: '3',
    images: [{ url: '/img/tvdb/284190-3.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-jessica-jones' },
      { url: 'https://www.disneyplus.com/en-gb/series/jessica-jones/4LX4rNmINp5y', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt2357547/?ref_=justwatch', score: '7.9 214K' },
      { url: 'https://en.wikipedia.org/wiki/Jessica_Jones_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/jessica_jones', score: '83% 79%' },
      { url: 'https://thetvdb.com/series/marvels-jessica-jones' },
    ],
    // net: 'Netflix',
    // fan: 'Jessica_Jones_(TV_series)',
    seasons: [
      // { title: 'Season One', eps: 13, fst: '2015-11-20', pedia: 'Jessica_Jones_(season_1)' },
      // { title: 'Season Two', eps: 13, fst: '2018-03-08', pedia: 'Jessica_Jones_(season_2)' },
      // { title: 'Season Three', eps: 13, fst: '2019-06-14', pedia: 'Jessica_Jones_(season_3)' },
    ],
  },
  {
    title: 'Luke Cage',
    date: '2016-09-30',
    slug: 'luke-cage-2016',
    like: '3',
    images: [{ url: '/img/tvdb/304219-2.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-luke-cage' },
      { url: 'https://www.disneyplus.com/en-gb/series/luke-cage/1L458elR85KN', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt3322314', score: '7.3 131K' },
      { url: 'https://en.wikipedia.org/wiki/Luke_Cage_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/luke_cage', score: '87% 71%' },
      { url: 'https://thetvdb.com/series/marvels-luke-cage' },
    ],
    // net: 'Netflix',
    // fan: 'Luke_Cage_(TV_series)',
    seasons: [
      // { title: 'Season One', eps: 13, fst: '2016-09-30', pedia: 'Luke_Cage_(season_1)' },
      // { title: 'Season Two', eps: 13, fst: '2018-06-22', pedia: 'Luke_Cage_(season_2)' },
    ],
  },
  {
    title: 'Iron Fist',
    date: '2017-03-17',
    slug: 'iron-fist-2017',
    like: '2',
    images: [{ url: '/img/tvdb/62042935.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-iron-fist' },
      { url: 'https://www.disneyplus.com/en-gb/series/iron-fist/24YlE6bSZy6E', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt3322310', score: '6.4 131K' },
      { url: 'https://en.wikipedia.org/wiki/Iron_Fist_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvel_s_iron_fist', score: '37% 67%' },
      { url: 'https://thetvdb.com/series/marvels-iron-fist' },
    ],
    // net: 'Netflix',
    // fan: 'Iron_Fist_(TV_series)',
    seasons: [
      // { title: 'Season One', eps: 13, fst: '2017-03-17', pedia: 'Iron_Fist_(season_1)' },
      // { title: 'Season Two', eps: 10, fst: '2018-09-07', pedia: 'Iron_Fist_(season_2)' },
    ],
  },
  {
    title: 'The Defenders',
    date: '2017-08-18',
    slug: 'the-defenders-2017',
    like: '3',
    images: [{ url: '/img/tvdb/326490-4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-the-defenders' },
      { url: 'https://www.disneyplus.com/en-gb/series/the-defenders/1vLuQyD9nTYk', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4230076', score: '7.2 108K' },
      { url: 'https://en.wikipedia.org/wiki/The_Defenders_(miniseries)' },
      { url: 'https://www.rottentomatoes.com/tv/marvel_s_the_defenders', score: '78% 70%' },
      { url: 'https://thetvdb.com/series/marvels-the-defenders' },
    ],
    // net: 'Netflix',
    // fan: 'The_Defenders',
    seasons: [
      // { title: 'Season One', eps: 8, fst: '2017-08-18' },
    ],
  },
  {
    title: 'Inhumans',
    date: '2017-09-29',
    slug: 'inhumans-2017',
    like: '1',
    images: [{ url: '/img/tvdb/320558-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-inhumans' },
      { url: 'https://www.disneyplus.com/en-gb/series/inhumans/6VZXWp9jaYsT', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4154858', score: '4.9 27K' },
      { url: 'https://en.wikipedia.org/wiki/Inhumans_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvel_s_inhumans', score: '11% 43%' },
      { url: 'https://thetvdb.com/series/marvels-inhumans' },
    ],
    // net: 'ABC',
    // fan: 'Inhumans_(TV_series)',
    seasons: [
      // { title: 'Season One', eps: 8, fst: '2017-09-29', lst: '2017-11-10' },
    ],
  },
  {
    title: 'Legion',
    date: '2017-02-08',
    slug: 'legion-2017',
    like: '3',
    images: [{ url: '/img/tvdb/5b26f9ddaba9e.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/legion' },
      { url: 'https://www.disneyplus.com/en-gb/series/legion/hFEVt4yfPHZn', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5114356', score: '8.2 92K' },
      { url: 'https://en.wikipedia.org/wiki/Legion_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/legion', score: '91% 86%' },
      { url: 'https://thetvdb.com/series/legion' },
    ],
    texts: [
      {
        text: `David Haller is a troubled young man who was diagnosed with schizophrenia as a child. 
               Shuffled from one psychiatric institution to the next, in his early 30s, David meets 
               and falls in love with a beautiful and troubled fellow patient named Syd. After a 
               startling encounter with her, he must confront the shocking possibility that the 
               voices he hears and the visions he sees may actually be real. With the help of Syd 
               and a team of specialists who also possess unique and extraordinary gifts -- Ptonomy 
               Wallace, Kerry Loudermilk and Cary Loudermilk -- David unlocks a deeply suppressed 
               truth: he has been haunted his entire life by a malicious parasite of unimaginable 
               power.`,
        src: 'https://www.rottentomatoes.com/tv/legion',
      },
    ],
  },
  {
    title: 'The Punisher',
    date: '2017-11-17',
    slug: 'the-punisher-2017',
    like: '3',
    images: [{ url: '/img/tvdb/331980-3.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-the-punisher' },
      { url: 'https://www.disneyplus.com/en-gb/series/the-punisher/6JOZHgU6cBS3', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5675620', score: '8.5 236K' },
      { url: 'https://en.wikipedia.org/wiki/The_Punisher_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvel_s_the_punisher', score: '64% 78%' },
      { url: 'https://thetvdb.com/series/marvels-the-punisher' },
    ],
    // net: 'Netflix',
    // fan: 'The_Punisher',
    seasons: [
      // { title: 'Season One', eps: 13, fst: '2017-11-17', pedia: 'The_Punisher_(season_1)' },
      // { title: 'Season Two', eps: 13, fst: '2019-01-18', pedia: 'The_Punisher_(season_2)' },
    ],
  },
  {
    title: 'Runaways',
    date: '2017-11-21',
    slug: 'runaways-2017',
    like: '3',
    images: [{ url: '/img/tvdb/332027-10.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-runaways' },
      { url: 'https://www.disneyplus.com/en-gb/series/runaways/FrnyN9YoJj46', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1236246', score: '6.9 26K' },
      { url: 'https://en.wikipedia.org/wiki/Runaways_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvel_s_runaways', score: '85% 68%' },
      { url: 'https://thetvdb.com/series/marvels-runaways' },
    ],
    // net: 'Hulu',
    // pedia: '',
    // fan: 'Runaways_(TV_series)',
    seasons: [
      // { title: 'Season One', eps: 10, fst: '2017-11-21', lst: '2018-01-09' },
      // { title: 'Season Two', eps: 13, fst: '2018-12-21' },
      // { title: 'Season Three', eps: 10, fst: '2019-12-13' },
    ],
  },
  {
    title: 'Cloak & Dagger',
    date: '2018-06-07',
    slug: 'cloak-and-dagger-2018',
    like: '2',
    images: [{ url: '/img/tvdb/61bf602033faf.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/marvels-cloak-and-dagger' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0JCB0QYKUOWCV6Q5HFI683IJTF', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5614844', score: '6.7 19K' },
      { url: 'https://en.wikipedia.org/wiki/Cloak_%26_Dagger_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvels_cloak_and_dagger', score: '87% 66%' },
      { url: 'https://thetvdb.com/series/marvels-cloak-and-dagger' },
    ],
    // net: 'Freeform',
    // pedia: '',
    // fan: 'Cloak_%26_Dagger',
    seasons: [
      // { title: 'Season One', eps: 10, fst: '2018-06-07', lst: '2018-08-02' },
      // { title: 'Season Two', eps: 10, fst: '2019-04-04', lst: '2019-05-30' },
    ],
  },
  {
    title: 'Helstrom',
    date: '2020-10-16',
    slug: 'helstrom-2020',
    images: [{ url: '/img/tvdb/5f6e730bb3524.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/helstrom' },
      { url: 'https://www.disneyplus.com/en-gb/series/helstrom/4FuaAENOKFEU', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10266874', score: '6.7 9K' },
      { url: 'https://en.wikipedia.org/wiki/Helstrom_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/marvels_helstrom', score: '27% 71%' },
      { url: 'https://thetvdb.com/series/helstrom' },
    ],
    // net: 'Hulu',
    // pedia: '',
    seasons: [
      // { title: 'Season One', eps: 10, fst: '2020-10-16' },
    ],
  },
  {
    title: 'WandaVision',
    date: '2021-01-15',
    slug: 'wandavision-2021',
    like: '4',
    images: [{ url: '/img/tvdb/5f6a1111c2752.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/wandavision' },
      { url: 'https://www.disneyplus.com/en-gb/series/wandavision/4SrN28ZjDLwH', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9140560', score: '7.9 322K' },
      { url: 'https://en.wikipedia.org/wiki/WandaVision' },
      { url: 'https://www.rottentomatoes.com/tv/wandavision', score: '91% 88%' },
      { url: 'https://thetvdb.com/series/wandavision' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'WandaVision',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 9, fst: '2021-01-15', lst: '2021-03-05' },
    ],
    texts: [
      {
        text: `Living idealized suburban lives, super-powered beings Wanda and Vision begin to 
              suspect that everything is not as it seems.`,
        src: 'https://www.rottentomatoes.com/tv/wandavision',
      },
    ],
  },
  {
    title: 'The Falcon and the Winter Soldier',
    date: '2021-03-19',
    slug: 'the-falcon-and-the-winter-soldier-2021',
    like: '2',
    images: [{ url: '/img/tvdb/60271980c8a0a.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-falcon-and-the-winter-soldier' },
      { url: 'https://www.disneyplus.com/en-gb/series/the-falcon-and-the-winter-soldier/4gglDBMx8icA', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9208876', score: '7.2 220K' },
      { url: 'https://en.wikipedia.org/wiki/The_Falcon_and_the_Winter_Soldier' },
      { url: 'https://www.rottentomatoes.com/tv/the_falcon_and_the_winter_soldier', score: '84% 83%' },
      { url: 'https://thetvdb.com/series/the-falcon-and-the-winter-soldier' },
    ],
    // net: 'Disney+',
    // pedia: 'The_Falcon_and_the_Winter_Soldier',
    // fan: 'The_Falcon_and_the_Winter_Soldier',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 6, fst: '2021-03-19', lst: '2021-04-23' },
    ],
  },
  {
    title: 'Loki',
    date: '2021-06-09',
    slug: 'loki-2021',
    like: '4',
    images: [{ url: '/img/tvdb/60c0fd48eba70.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/loki' },
      { url: 'https://www.disneyplus.com/series/loki/6pARMvILBGzF', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9140554', score: '8.2 314K' },
      { url: 'https://en.wikipedia.org/wiki/Loki_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/loki', score: '92% 90%' },
      { url: 'https://thetvdb.com/series/loki' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'Loki_(TV_series)',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 6, fst: '2021-06-09', lst: '2021-07-14' },
      // { phase: 5, title: 'Season Two', eps: 6, fst: '2023-Mid' },
    ],
  },
  {
    title: 'What If…?',
    date: '2021-08-11',
    slug: 'what-if-2021',
    like: '3',
    images: [{ url: '/img/tvdb/61bf6fa5e11f5.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/what-if-2021' },
      { url: 'https://www.disneyplus.com/en-gb/series/what-if/7672ZVj1ZxU9', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10168312', score: '7.4 115K' },
      { url: 'https://en.wikipedia.org/wiki/What_If...%3F_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/what_if_', score: '94% 93%' },
      { url: 'https://thetvdb.com/series/marvels-what-if' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'What_If...%3F',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 9, fst: '2021-08-11', lst: '2021-10-06' },
      // { phase: 5, title: 'Season Two', eps: 9, fst: '2023-Early' },
      // { title: 'Season Three' },
    ],
  },
  {
    title: 'Hawkeye',
    date: '2021-11-24',
    slug: 'hawkeye-2021',
    like: '3',
    images: [{ url: '/img/tvdb/6140c0de6a2d2.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/hawkeye' },
      { url: 'https://www.disneyplus.com/en-gb/series/hawkeye/11Zy8m9Dkj5l', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10160804', score: '7.5 180K' },
      { url: 'https://en.wikipedia.org/wiki/Hawkeye_(2021_TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/hawkeye', score: '92% 89%' },
      { url: 'https://thetvdb.com/series/marvels-hawkeye' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'Hawkeye_(TV_series)',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 6, fst: '2021-11-24', lst: '2021-12-22' },
    ],
  },
  {
    title: 'Moon Knight',
    date: '2022-03-30',
    slug: 'moon-knight-2022',
    like: '4',
    images: [{ url: '/img/tvdb/6209c5041016d.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/moon-knight' },
      { url: 'https://www.disneyplus.com/en-gb/series/moon-knight/4S3oOF1knocS', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10234724', score: '7.3 227K' },
      { url: 'https://en.wikipedia.org/wiki/Moon_Knight_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/moon_knight', score: '86% 89%' },
      { url: 'https://thetvdb.com/series/moon-knight' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'Moon_Knight_(TV_series)',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 6, fst: '2022-03-30', lst: '2022-05-04' },
    ],
  },
  {
    title: 'Ms. Marvel',
    date: '2022-06-08',
    slug: 'ms-marvel-2022',
    like: '3',
    images: [{ url: '/img/tvdb/62a0dc0c25658.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/ms-marvel' },
      { url: 'https://www.disneyplus.com/en-gb/series/ms-marvel/45BsikoMcOOo', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10857164', score: '6.2 101K' },
      { url: 'https://en.wikipedia.org/wiki/Ms._Marvel_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/ms_marvel', score: '98% 80%' },
      { url: 'https://thetvdb.com/series/ms-marvel' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'Ms._Marvel_(TV_series)',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 6, fst: '2022-06-08', lst: '2022-07-13' },
    ],
  },
  // {
  // 	title: 'I Am Groot',
  // 	date: '2022-08-10',
  // 	slug: 'i-am-groot-2022',
  // 	like: '3',
  // 	images: [{ url: '' }],
  // 	links: [
  // 		{ url: '' },
  // 		{ url: '', type: 'stream' },
  // 		{ url: '', score: '' },
  // 		{ url: 'https://en.wikipedia.org/wiki/I_Am_Groot' },
  // 		{ url: '', score: '% %' },
  // 		{ url: '' }
  // 	],
  // 	// net: 'Disney+',
  // 	// pedia: '',
  // 	seasons: [
  // 		// { phase: 4, title: 'Season One', eps: 5, fst: '2022-08-10' }
  // 	]
  // },
  {
    title: 'She-Hulk: Attorney at Law',
    date: '2022-08-17',
    slug: 'she-hulk-2022',
    like: '3',
    images: [{ url: '/img/tvdb/62868fa5c45a9.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/she-hulk' },
      { url: 'https://www.disneyplus.com/en-gb/series/she-hulk-attorney-at-law/gPwaYusKqRQh', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10857160', score: '5.2 161K' },
      { url: 'https://en.wikipedia.org/wiki/She-Hulk_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/she_hulk_attorney_at_law', score: '85% 33%' },
      { url: 'https://thetvdb.com/series/marvels-she-hulk' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'She-Hulk_(TV_series)',
    seasons: [
      // { phase: 4, title: 'Season One', eps: 10, fst: '2022-08-17', lst: '2022-10-12' },
    ],
  },
  {
    title: 'Werewolf by Night',
    date: '2022-10-07',
    slug: 'werewolf-by-night-2022',
    like: '3',
    images: [{ url: '/img/tvdb/633f57bfc1f45.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/movie/werewolf-by-night' },
      { url: 'https://www.disneyplus.com/en-gb/movies/werewolf-by-night/J1sCDfT3MaDl', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt17061910', score: '7.8 7K' },
      { url: 'https://en.wikipedia.org/wiki/Werewolf_by_Night_(TV_special)' },
      { url: 'https://www.rottentomatoes.com/m/werewolf_by_night', score: '90% 90%' },
      { url: 'https://thetvdb.com/movies/werewolf-by-night' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: '',
    // phase: 4,
    // fst: ''
  },
  {
    title: 'The Guardians of the Galaxy Holiday Special',
    date: '2022-11-25',
    slug: 'the-guardians-of-the-galaxy-holiday-special-2022',
    like: '2',
    images: [{ url: '/img/tvdb/6380f81a51bf1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/movie/the-guardians-of-the-galaxy-holiday-special' },
      {
        url: 'https://www.disneyplus.com/en-gb/movies/the-guardians-of-the-galaxy-holiday-special/5HUc4iuAVplq',
        type: 'stream',
      },
      { url: 'https://www.imdb.com/title/tt13623136', score: '7.1 22K' },
      { url: 'https://en.wikipedia.org/wiki/The_Guardians_of_the_Galaxy_Holiday_Special' },
      { url: 'https://www.rottentomatoes.com/m/the_guardians_of_the_galaxy_holiday_special', score: '92% 83%' },
      { url: 'https://thetvdb.com/movies/the-guardians-of-the-galaxy-holiday-special' },
    ],
    // net: 'Disney+',
    // pedia: '',
    // fan: 'The_Guardians_of_the_Galaxy_Holiday_Special',
    // phase: 4,
    // fst: ''
  },
];

export default works;

/*
  {
    title: "",
    date: "",
    slug: "",
    like: "1",
    images: [{ url: "" }],
    links: [
      { url: "" }, 
      { url: "", type: "stream" }, 
      { url: "", score: "" },
      { url: "https://en.wikipedia.org/wiki/" },
      { url: "", score: "% %" },
      { url: "" },
    ],
  },
*/
