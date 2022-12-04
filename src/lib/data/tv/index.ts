import type { Work } from '../types';

const works: Work[] = [
  {
    title: '1899',
    date: '2022-11-17',
    slug: '1899-2022',
    images: [{ url: '/tvdb/632080a001296.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/1899' },
      { url: 'https://www.netflix.com/gb/title/80214497', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9319668', score: '7.7 43K' },
      { url: 'https://en.wikipedia.org/wiki/1899_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/1899', score: '77% 76%' },
      { url: 'https://thetvdb.com/series/1899-show' },
    ],
  },
  {
    title: 'Altered Carbon',
    date: '2018-02-02',
    slug: 'altered-carbon-2018',
    like: '2',
    images: [{ url: '/tvdb/332331-12.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/altered-carbon' },
      { url: 'https://www.netflix.com/gb/title/80097140', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt2261227', score: '7.9 170K' },
      { url: 'https://en.wikipedia.org/wiki/Altered_Carbon_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/altered_carbon', score: '75% 64%' },
      { url: 'https://thetvdb.com/series/altered-carbon' },
    ],
    texts: [
      {
        text: `More than 300 years in the future, society has been transformed by new technology, 
               leading to human bodies being interchangeable and death no longer being permanent. 
               Takeshi Kovacs is the only surviving soldier of a group of elite interstellar 
               warriors who were defeated in an uprising against the new world order. His mind 
               was imprisoned for centuries until impossibly wealthy businessman Laurens Bancroft 
               offers him the chance to live again. Kovacs will have to do something for Bancroft, 
               though, if he wants to be resurrected. Bancroft's request of Kovacs is to solve a 
               murder -- Bancroft's. "Altered Carbon" is based on Richard K. Morgan's cyberpunk 
               noir novel of the same name.`,
        src: 'https://www.rottentomatoes.com/tv/altered_carbon',
      },
    ],
  },
  {
    title: 'Arcane',
    date: '2021-11-06',
    slug: 'arcane-2021',
    like: '1',
    images: [{ url: '/tvdb/617f6a8c59e8f.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/arcane' },
      { url: 'https://www.netflix.com/gb/title/81435684', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt11126994', score: '9.0 205K' },
      { url: 'https://en.wikipedia.org/wiki/Arcane_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/arcane_league_of_legends', score: '100% 96%' },
      { url: 'https://thetvdb.com/series/arcane' },
    ],
  },
  {
    title: 'The Bridge',
    date: '2011-09-21',
    slug: 'the-bridge-2011',
    like: '3',
    images: [{ url: '/tvdb/252019-3.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-bridge' },
      // { url: 'https://www.amazon.co.uk/gp/video/detail/0KIU93B2ZA01RZ47VCBW9HQ3QC', type: 'buy' },
      { url: 'https://www.imdb.com/title/tt1733785', score: '8.6 70K' },
      { url: 'https://en.wikipedia.org/wiki/The_Bridge_(2011_TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_bridge_2011', score: '- 94%' },
      { url: 'https://thetvdb.com/series/the-bridge-2011' },
    ],
  },
  {
    title: 'Chernobyl',
    date: '2019-05-06',
    slug: 'chernobyl-2019',
    images: [{ url: '/tvdb/621a6f2ded253.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/chernobyl' },
      { url: 'https://www.nowtv.com/watch/chernobyl/iYEQZ2rcf32XNZDFHaYhzo', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7366338', score: '9.4 747K' },
      { url: 'https://en.wikipedia.org/wiki/Chernobyl_(miniseries)' },
      { url: 'https://www.rottentomatoes.com/tv/chernobyl', score: '95% 97%' },
      { url: 'https://thetvdb.com/series/chernobyl' },
    ],
  },
  {
    title: 'Chilling Adventures of Sabrina',
    date: '2018-10-26',
    slug: 'chilling-adventures-of-sabrina-2018',
    like: '2',
    images: [{ url: '/tvdb/60060ddfc086f.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/chilling-adventures-of-sabrina' },
      { url: 'https://www.netflix.com/gb/title/80223989', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7569592', score: '7.4 96K' },
      { url: 'https://en.wikipedia.org/wiki/Chilling_Adventures_of_Sabrina_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/chilling_adventures_of_sabrina', score: '82% 70%' },
      { url: 'https://thetvdb.com/series/chilling-adventures-of-sabrina' },
    ],
    texts: [
      {
        text: `This adaptation of the "Sabrina the Teenage Witch" tale is a dark coming-of-age 
               story that traffics in horror and the occult. In the reimagined origin story, 
               Sabrina Spellman wrestles to reconcile her dual nature -- half-witch, half-mortal 
               -- while standing against the evil forces that threaten her, her family -- including 
               aunts Hilda and Zelda -- and the daylight world humans inhabit. Kiernan Shipka ("Mad 
               Men") leads the cast in the titular role of the show that is based on a comic series 
               of the same name.`,
        src: 'https://www.rottentomatoes.com/tv/chilling_adventures_of_sabrina',
      },
    ],
  },
  {
    title: 'Counterpart',
    date: '2017-12-10',
    slug: 'counterpart-2017',
    like: '3',
    images: [{ url: '/tvdb/337302-4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/counterpart' },
      // { url: '' },
      { url: 'https://www.imdb.com/title/tt4643084', score: '8.0 28K' },
      { url: 'https://en.wikipedia.org/wiki/Counterpart_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/counterpart', score: '100% 90%' },
      { url: 'https://thetvdb.com/series/counterpart' },
    ],
    texts: [
      {
        text: `What might be different if a person could co-exist in an alternate world? Howard 
               Silk, a low-level agent whose career is winding down at a Berlin-based United 
               Nations spy agency, unwittingly learns the answer. Upon discovering his organization 
               is harboring a secret, that of a gateway to a parallel dimension, Howard becomes 
               immersed in a mysterious world of espionage, intrigue, and government conspiracies. 
               There, the only man Howard can trust is Prime, his almost identical counterpart from 
               a divergent reality.`,
        src: 'https://www.rottentomatoes.com/tv/counterpart',
      },
    ],
  },
  {
    title: 'Dark',
    date: '2017-12-01',
    slug: 'dark-2017',
    images: [{ url: '/tvdb/334824-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/dark' },
      { url: 'https://www.netflix.com/gb/title/80100172', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5753856', score: '8.7 383K' },
      { url: 'https://en.wikipedia.org/wiki/Dark_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/dark', score: '95% 94%' },
      { url: 'https://thetvdb.com/series/dark' },
    ],
    texts: [
      {
        text: `When two children go missing in a small German town, its sinful past is exposed 
               along with the double lives and fractured relationships that exist among four 
               families as they search for the kids. The mystery-drama series introduces an 
               intricate puzzle filled with twists that includes a web of curious characters, 
               all of whom have a connection to the town's troubled history -- whether they know 
               it or not. The story includes supernatural elements that tie back to the same town 
               in 1986. "Dark" represents the first German original series produced for Netflix.`,
        src: 'https://www.rottentomatoes.com/tv/dark',
      },
    ],
  },
  {
    title: 'Devs',
    date: '2020-03-05',
    slug: 'devs-2020',
    like: '3',
    images: [{ url: '/tvdb/62101453.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/devs' },
      { url: 'https://www.disneyplus.com/en-gb/series/devs/6yHO6txGKqMC', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt8134186/?ref_=justwatch', score: '7.7 40K' },
      { url: 'https://en.wikipedia.org/wiki/Devs' },
      { url: 'https://www.rottentomatoes.com/tv/devs', score: '82% 78%' },
      { url: 'https://thetvdb.com/series/devs' },
    ],
    texts: [
      {
        text: `"Devs" is an FX limited series that focuses on a young software engineer named Lily 
               Chan who works for Amaya, a cutting-edge tech company based in Silicon Valley. After 
               her boyfriend Sergei's apparent suicide, Lily suspects foul play and begins to 
               investigate. She quickly realizes that all roads lead to Forest, Amaya's enigmatic 
               CEO, and Devs, the company's secret development division. In Lily's quest to 
               discover the truth, she uncovers a technology-based conspiracy that could change the 
               world.`,
        src: 'https://www.rottentomatoes.com/tv/devs',
      },
    ],
  },
  {
    title: "Dirk Gently's Holistic Detective Agency",
    date: '2016-10-22',
    slug: 'dirk-gentlys-holistic-detective-agency-2016',
    like: '3',
    images: [{ url: '/tvdb/312505-8.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/dirk-gentlys-holistic-detective-agency' },
      { url: 'https://www.netflix.com/gb/title/80119426', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4047038', score: '8.2 52K' },
      { url: 'https://en.wikipedia.org/wiki/Dirk_Gently%27s_Holistic_Detective_Agency_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/dirk_gently_s_holistic_detective_agency', score: '85% 95%' },
      { url: 'https://thetvdb.com/series/dirk-gentlys-holistic-detective-agency' },
    ],
    texts: [
      {
        text: `Although bellhop Todd Brotzman doesn't have a lot going on in his life, the worst 
               awaits him. It begins when he arrives at work one day and is sent up to the hotel's 
               penthouse, where he discovers millionaire Patrick Spring has been murdered. An odd 
               chain of events that unfolds leads to Todd becoming a person of interest in the 
               crime and losing his job. That is when he meets Dirk Gently, a fast-talking, 
               eccentric detective who has been hired to investigate the murder. He believes that 
               he and Todd are destined to solve the mystery together. Once Dirk is able to 
               convince Todd to work with him, the latter is visited by wild, dangerous characters 
               -- all associated with Dirk -- who complicate his life further. Dirk, meanwhile, is 
               being hunted by seemingly deranged assassin Bart, who almost kills a man she 
               mistakenly believes to be the detective.`,
        src: 'https://www.rottentomatoes.com/tv/dirk_gently_s_holistic_detective_agency',
      },
    ],
  },
  {
    title: 'The End of the F***ing World',
    date: '2017-10-24',
    slug: 'the-end-of-the-f-ing-world-2017',
    like: '2',
    images: [{ url: '/tvdb/336522-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-end-of-the-ing-world' },
      { url: 'https://www.netflix.com/gb/title/80175722', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt6257970', score: '8.1 190K' },
      { url: 'https://en.wikipedia.org/wiki/The_End_of_the_F***ing_World' },
      { url: 'https://www.rottentomatoes.com/tv/the_end_of_the_f_ing_world', score: '94% 92%' },
      { url: 'https://thetvdb.com/series/the-end-of-the-f-ing-world' },
    ],
    texts: [
      {
        text: `Based on the comic book series by Charles Forsman, "The End of the F...ing World" 
               sees two 17-year-old outsiders, James and Alyssa, embark on a road trip to find her 
               estranged father, who left home when she was just a child. James, who is convinced 
               he's a psychopath, has decided it's time to graduate from killing animals to 
               something bigger -- and he already has a target in mind. Alyssa, the embodiment of 
               existential angst, feels like she doesn't fit in at her new school despite being 
               quite popular. Together, they get caught up on a trail of violent events that grow 
               increasingly more ominous as their quest progresses.`,
        src: 'https://www.rottentomatoes.com/tv/the_end_of_the_f_ing_world',
      },
    ],
  },
  {
    title: 'Euphoria',
    date: '2019-06-16',
    slug: 'euphoria-2019',
    like: '2',
    images: [{ url: '/tvdb/61ca158605238.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/euphoria' },
      // { url: 'https://www.amazon.co.uk/gp/video/detail/0MF5ATLQPFXCT888M6V35F3ZWJ', type: 'buy' },
      { url: 'https://www.imdb.com/title/tt8772296', score: '8.4 184K' },
      { url: 'https://en.wikipedia.org/wiki/Euphoria_(American_TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/euphoria', score: '88% 84%' },
      { url: 'https://thetvdb.com/series/euphoria-us' },
    ],
    texts: [
      {
        text: `An American adaptation of the Israeli show of the same name, "Euphoria" follows the 
               troubled life of 17-year-old Rue, a drug addict fresh from rehab with no plans to 
               stay clean. Circling in Rue's orbit are Jules, a transgender girl searching for 
               where she belongs; Nate, a jock whose anger issues mask sexual insecurities; Chris, 
               a football star who finds the adjustment from high school to college harder than 
               expected; Cassie, whose sexual history continues to dog her; and Kat, a 
               body-conscious teen exploring her sexuality. As the classmates struggle to make 
               sense of their futures, the series tackles the teenage landscape of 
               substance-enhanced parties and anxiety-ridden day-to-day life with empathy and 
               candor.`,
        src: 'https://www.rottentomatoes.com/tv/euphoria',
      },
    ],
  },
  {
    title: 'The Expanse',
    date: '2015-12-14',
    slug: 'the-expanse-2015',
    like: '4',
    images: [{ url: '/tvdb/280619-4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-expanse' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0FJWCUYGRNRKQWK1B1E18NPPCJ', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt3230854', score: '8.5 154K' },
      { url: 'https://en.wikipedia.org/wiki/The_Expanse_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_expanse', score: '94% 92%' },
      { url: 'https://thetvdb.com/series/the-expanse' },
    ],
    texts: [
      {
        text: `Hundreds of years in the future, things are different than what humanity is used to 
               after humans have colonized the solar system and Mars has become an independent 
               military power. Rising tensions between Earth and Mars have put them on the brink of 
               war. Against this backdrop, a hardened detective and a rogue ship's captain come 
               together to investigate the case of a missing young woman. The investigation leads 
               them on a race across the solar system that could expose the greatest conspiracy in 
               human history.`,
        src: 'https://www.rottentomatoes.com/tv/the_expanse',
      },
    ],
  },
  {
    title: 'Foundation',
    date: '2021-09-24',
    slug: 'foundation-2021',
    like: '1',
    images: [{ url: '/tvdb/60da318bace4a.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/foundation' },
      { url: 'https://tv.apple.com/gb/episode/preparing-to-live/umc.cmc.12ibmbmz39qv1p882hca0qdah', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt0804484', score: '7.4 59K' },
      { url: 'https://en.wikipedia.org/wiki/Foundation_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/foundation', score: '71% 59%' },
      { url: 'https://thetvdb.com/series/foundation-2021' },
    ],
    texts: [
      {
        text: `Based on the award-winning novels by Isaac Asimov, this story chronicles a band of 
               exiles on their monumental journey to save humanity and rebuild civilization amid the 
               fall of the Galactic Empire.`,
        src: 'https://www.rottentomatoes.com/tv/foundation',
      },
    ],
  },
  {
    title: 'Gentleman Jack',
    date: '2019-04-22',
    slug: 'gentleman-jack-2019',
    like: '3',
    images: [{ url: '/tvdb/5cbf25e80c9bd.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/gentleman-jack' },
      { url: 'https://www.bbc.co.uk/iplayer/episode/m00059m7/gentleman-jack', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7211618', score: '8.2 14K' },
      { url: 'https://en.wikipedia.org/wiki/Gentleman_Jack_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/gentleman_jack', score: '92% 94%' },
      { url: 'https://thetvdb.com/series/gentleman-jack' },
    ],
    texts: [
      {
        text: `It's 1832 in West Yorkshire, England -- the cradle of the evolving Industrial 
               Revolution -- where landowner Anne Lister is determined to save her faded ancestral 
               home, Shibden Hall, even if it means bucking society's expectations. In addition to 
               reopening the coal mines, a part of Lister's plan to help her family is to marry 
               well. But the charismatic, single-minded Lister -- who dresses head-to-toe in black 
               and charms her way into high society -- has no intention of marrying a man. 
               "Gentleman Jack" examines Lister's relationships with her family, servants, tenants 
               and industrial rivals, and would-be wife. The real-life Anne Lister's story was 
               recorded in her diaries, and the most intimate details of her life are revealed for 
               the series.`,
        src: 'https://www.rottentomatoes.com/tv/gentleman_jack',
      },
    ],
  },
  {
    title: 'Good Omens',
    date: '2019-05-31',
    slug: 'good-omens-2019',
    like: '3',
    images: [{ url: '/tvdb/5c65fa5e7fa62.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/good-omens' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0HX5QEE7UHHGOXQA4U9SF3JJ5H', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1869454', score: '8.0 78K' },
      { url: 'https://en.wikipedia.org/wiki/Good_Omens_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/good_omens', score: '84% 90%' },
      { url: 'https://thetvdb.com/series/good-omens' },
    ],
  },
  {
    title: 'The Good Place',
    date: '2016-09-19',
    slug: 'the-good-place-2016',
    like: '4',
    images: [{ url: '/tvdb/311711-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-good-place' },
      { url: 'https://www.netflix.com/gb/title/80113701', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4955642', score: '8.2 160K' },
      { url: 'https://en.wikipedia.org/wiki/The_Good_Place' },
      { url: 'https://www.rottentomatoes.com/tv/good_place', score: '97% 89%' },
      { url: 'https://thetvdb.com/series/the-good-place' },
    ],
  },
  {
    title: 'Gravity Falls',
    date: '2012-06-15',
    slug: 'gravity-falls-2012',
    images: [{ url: '/tvdb/259972-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/gravity-falls' },
      { url: 'https://tv.apple.com/gb/show/gravity-falls/umc.cmc.5v88dhyt9l9tinygyheo3vbco', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1865718', score: '8.9 108K' },
      { url: 'https://en.wikipedia.org/wiki/Gravity_Falls' },
      { url: 'https://www.rottentomatoes.com/tv/gravity_falls', score: '100% 96%' },
      { url: 'https://thetvdb.com/series/gravity-falls' },
    ],
  },
  {
    title: 'His Dark Materials',
    date: '2019-11-03',
    slug: 'his-dark-materials-2019',
    like: '2',
    images: [{ url: '/tvdb/634169b6d58fd.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/his-dark-materials' },
      { url: 'https://www.bbc.co.uk/iplayer/episode/m000b1v0/his-dark-materials', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5607976', score: '7.8 64K' },
      { url: 'https://en.wikipedia.org/wiki/His_Dark_Materials_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/his_dark_materials', score: '81% 85%' },
      { url: 'https://thetvdb.com/series/his-dark-materials' },
    ],
  },
  {
    title: 'Inside Job',
    date: '2021-10-22',
    slug: 'inside-job-2021',
    like: '2',
    images: [{ url: '/tvdb/6178af6835bb5.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/inside-job' },
      { url: 'https://www.netflix.com/gb/title/80995819', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10231312', score: '7.6 20K' },
      { url: 'https://en.wikipedia.org/wiki/Inside_Job_(2021_TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/inside_job_2021', score: '79% 88%' },
      { url: 'https://thetvdb.com/series/inside-job-2021' },
    ],
  },
  {
    title: 'The Ipcress File',
    date: '2022-03-06',
    slug: 'the-ipcress-file-2022',
    like: '2',
    images: [{ url: '/tvdb/628ffd509ebdd.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-ipcress-file' },
      { url: 'https://www.britbox.co.uk/series/S1_61911', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt13636038', score: '7.3 4K' },
      { url: 'https://en.wikipedia.org/wiki/The_Ipcress_File_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_ipcress_file', score: '94% 60%' },
      { url: 'https://thetvdb.com/series/the-ipcress-file' },
    ],
  },
  {
    title: 'Killing Eve',
    date: '2018-04-08',
    slug: 'killing-eve-2018',
    like: '3',
    images: [{ url: '/tvdb/340959-1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/killing-eve' },
      { url: 'https://www.bbc.co.uk/iplayer/episodes/p06jy6bc/killing-eve', type: 'stream' },
      { url: 'https://www.disneyplus.com/en-gb/series/killing-eve/2BR1HllMxZbm', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7016936', score: '8.1 119K' },
      { url: 'https://en.wikipedia.org/wiki/Killing_Eve' },
      { url: 'https://www.rottentomatoes.com/tv/killing_eve', score: '80% 73%' },
      { url: 'https://thetvdb.com/series/killing-eve' },
    ],
  },
  {
    title: 'The Little Drummer Girl',
    date: '2018-10-28',
    slug: 'the-little-drummer-girl-2018',
    like: '2',
    images: [{ url: '/tvdb/5bbed1c746b2c.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-little-drummer-girl' },
      { url: 'https://www.lionsgateplus.com/gb/en/series/the-little-drummer-girl/season-1/52488', type: 'stream' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0KIYRGLQC6MLYF054RVK3ZGQD7', which: 'Lionsgate+', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7598448', score: '7.4 12K' },
      { url: 'https://en.wikipedia.org/wiki/The_Little_Drummer_Girl_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_little_drummer_girl', score: '95% 79%' },
      { url: 'https://thetvdb.com/series/344141-show' },
    ],
  },
  {
    title: 'Love, Death & Robots',
    date: '2019-03-15',
    slug: 'love-death-and-robots-2019',
    like: '2',
    images: [{ url: '/tvdb/607da9fc6a6a1.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/love-death-and-robots' },
      { url: 'https://www.netflix.com/gb/title/80174608', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt9561862', score: '8.4 169K' },
      { url: 'https://en.wikipedia.org/wiki/Love,_Death_%26_Robots' },
      { url: 'https://www.rottentomatoes.com/tv/love_death_robots', score: '85% 80%' },
      { url: 'https://thetvdb.com/series/love-death-and-robots' },
    ],
  },
  {
    title: 'Mindhunter',
    date: '2017-10-13',
    slug: 'mindhunter-2017',
    like: '2',
    images: [{ url: '/tvdb/328708-11.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/mindhunter' },
      { url: 'https://www.netflix.com/gb/title/80114855', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5290382', score: '8.6 288K' },
      { url: 'https://en.wikipedia.org/wiki/Mindhunter_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/mindhunter', score: '97% 95%' },
      { url: 'https://thetvdb.com/series/mindhunter' },
    ],
  },
  {
    title: 'Minx',
    date: '2022-03-17',
    slug: 'minx-2022',
    like: '2',
    images: [{ url: '/tvdb/6233995b2f928.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/minx' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0LQR85QXMH9D4SW1PRLTAE4QZP', which: 'Paramount+', type: 'stream' }, // Paramount+
      { url: 'https://www.imdb.com/title/tt11947418', score: '7.7 8K' },
      { url: 'https://en.wikipedia.org/wiki/Minx_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/minx', score: '97% 37%' },
      { url: 'https://thetvdb.com/series/minx' },
    ],
    texts: [
      {
        text: `In 1970s Los Angeles, an earnest young feminist joins forces with a low-rent 
         publisher to create the first erotic magazine for women.`,
        src: 'https://www.rottentomatoes.com/tv/minx',
      },
    ],
  },
  {
    title: 'Mr. Robot',
    date: '2015-06-24',
    slug: 'mr-robot-2015',
    images: [{ url: '/tvdb/289590-12.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/mr-robot' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0MW3B0D3QOSP91XT2TWREELH3Z', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4158110', score: '8.6 387K' },
      { url: 'https://en.wikipedia.org/wiki/Mr._Robot' },
      { url: 'https://www.rottentomatoes.com/tv/mr_robot', score: '94% 93%' },
      { url: 'https://thetvdb.com/series/mr-robot' },
    ],
  },
  {
    title: 'Mrs Wilson',
    date: '2018-11-27',
    slug: 'mrs-wilson-2018',
    like: '2',
    images: [{ url: '/tvdb/5caf10c94e41d.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/mrs-wilson' },
      { url: 'https://www.netflix.com/gb/title/81464582', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt6859806', score: '7.4 7.9K' },
      { url: 'https://en.wikipedia.org/wiki/Mrs_Wilson_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/mrs_wilson', score: '91% -' },
      { url: 'https://thetvdb.com/series/mrs-wilson' },
    ],
  },
  {
    title: 'The Night Manager',
    date: '2016-02-21',
    slug: 'the-night-manager-2016',
    like: '2',
    images: [{ url: '/tvdb/290508-6.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-night-manager' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0KRD5OJZJQQNBCQBA2AM14OXHV', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1399664', score: '8.0 91K' },
      { url: 'https://en.wikipedia.org/wiki/The_Night_Manager_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_night_manager', score: '91% 89%' },
      { url: 'https://thetvdb.com/series/the-night-manager' },
    ],
  },
  {
    title: 'The OA',
    date: '2016-12-16',
    slug: 'the-oa-2016',
    like: '2',
    images: [{ url: '/tvdb/321060-2.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-oa' },
      { url: 'https://www.netflix.com/gb/title/80044950', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4635282', score: '7.8 105K' },
      { url: 'https://en.wikipedia.org/wiki/The_OA' },
      { url: 'https://www.rottentomatoes.com/tv/the_oa', score: '84% 84%' },
      { url: 'https://thetvdb.com/series/the-oa' },
    ],
  },
  {
    title: 'Only Murders in the Building',
    date: '2021-08-31',
    slug: 'only-murders-in-the-building-2021',
    like: '3',
    images: [{ url: '/tvdb/60d5e4a9214e7.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/only-murders-in-the-building' },
      { url: 'https://www.disneyplus.com/en-gb/series/only-murders-in-the-building/2EfP45PYWY5s', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt12851524', score: '8.1 101K' },
      { url: 'https://en.wikipedia.org/wiki/Only_Murders_in_the_Building' },
      { url: 'https://www.rottentomatoes.com/tv/only_murders_in_the_building', score: '99% 91%' },
      { url: 'https://thetvdb.com/series/only-murders-in-the-building' },
    ],
    texts: [
      {
        text: `Three strangers share an obsession with true crime and suddenly find themselves 
               wrapped up in one. When a grisly death occurs inside their exclusive Upper West Side 
               apartment building, the trio suspects murder and employs their precise knowledge of 
               true crime to investigate the truth. Perhaps even more explosive are the lies they 
               tell one another. Soon, the endangered trio comes to realize a killer might be living 
               among them as they race to decipher the mounting clues before it's too late.`,
        src: 'https://www.rottentomatoes.com/tv/only_murders_in_the_building',
      },
    ],
  },
  {
    title: 'Our Flag Means Death',
    date: '2022-03-03',
    slug: 'our-flag-means-death-2022',
    like: '2',
    images: [{ url: '/tvdb/621c5845419fd.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/our-flag-means-death' },
      // { url: '' },
      { url: 'https://www.imdb.com/title/tt11000902', score: '7.8 26K' },
      { url: 'https://en.wikipedia.org/wiki/Our_Flag_Means_Death' },
      { url: 'https://www.rottentomatoes.com/tv/our_flag_means_death', score: '92% 94%' },
      { url: 'https://thetvdb.com/series/our-flag-means-death' },
    ],
  },
  {
    title: 'Outer Range',
    date: '2022-04-15',
    slug: 'outer-range-2022',
    like: '1',
    images: [{ url: '/tvdb/624ef4d1a40ad.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/outer-range' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0TZ50QF46R338DET8MRNI19EDT', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt11685912', score: '7.1 27K' },
      { url: 'https://en.wikipedia.org/wiki/Outer_Range' },
      { url: 'https://www.rottentomatoes.com/tv/outer_range', score: '81% 59%' },
      { url: 'https://thetvdb.com/series/outer-range' },
    ],
  },
  {
    title: 'The Peripheral',
    date: '2022-10-21',
    slug: 'the-peripheral-2022',
    like: '2',
    images: [{ url: '/tvdb/634616dca72ee.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-peripheral' },
      { url: 'https://www.amazon.co.uk/gp/video/detail/0LEXRDC9N1PVDIE0NXVH4118IB', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt8291284', score: '8.1 29K' },
      { url: 'https://en.wikipedia.org/wiki/The_Peripheral_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_peripheral', score: '76% 88%' },
      { url: 'https://thetvdb.com/series/the-peripheral' },
    ],
  },
  {
    title: "The Queen's Gambit",
    date: '2020-10-23',
    slug: 'the-queens-gambit-2020',
    images: [{ url: '/tvdb/5f6dbc7a694a9.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-queens-gambit' },
      { url: 'https://www.netflix.com/gb/title/80234304', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10048342', score: '8.6 446K' },
      { url: 'https://en.wikipedia.org/wiki/The_Queen%27s_Gambit_(miniseries)' },
      { url: 'https://www.rottentomatoes.com/tv/the_queens_gambit', score: '96% 94%' },
      { url: 'https://thetvdb.com/series/the-queens-gambit' },
    ],
  },
  {
    title: 'Rick and Morty',
    date: '2013-12-02',
    slug: 'rick-and-morty-2013',
    like: '3',
    images: [{ url: '/tvdb/275274-4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/rick-and-morty' },
      { url: 'https://www.netflix.com/gb/title/80014749', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt2861424', score: '9.1 518K' },
      { url: 'https://en.wikipedia.org/wiki/Rick_and_Morty' },
      { url: 'https://www.rottentomatoes.com/tv/rick_and_morty', score: '93% 87%' },
      { url: 'https://thetvdb.com/series/rick-and-morty' },
    ],
  },
  {
    title: 'Roadkill',
    date: '2020-10-18',
    slug: 'roadkill-2020',
    like: '2',
    images: [{ url: '/tvdb/5f86df37a9a6c.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/roadkill-2020' },
      { url: 'https://www.netflix.com/gb/title/81464587', type: 'stream' },
      { url: 'https://www.disneyplus.com/en-gb/series/roadkill/MfkhvewEO47G', type: 'stream' },
      { url: 'https://www.bbc.co.uk/iplayer/episode/p08tfrq3/roadkill', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt10846250', score: '6.8 5K' },
      { url: 'https://en.wikipedia.org/wiki/Roadkill_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/roadkill', score: '68% 71%' },
      { url: 'https://thetvdb.com/series/roadkill-2020' },
    ],
  },
  {
    title: 'Russian Doll',
    date: '2019-02-01',
    slug: 'russian-doll-2019',
    like: '2',
    images: [{ url: '/tvdb/5c36e4d48092b.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/russian-doll' },
      { url: 'https://www.netflix.com/gb/title/80211627', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7520794', score: '7.8 96K' },
      { url: 'https://en.wikipedia.org/wiki/Russian_Doll_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/russian_doll', score: '97% 78%' },
      { url: 'https://thetvdb.com/series/russian-doll' },
    ],
  },
  {
    title: 'Severance',
    date: '2022-02-18',
    slug: 'severance-2022',
    like: '3',
    images: [{ url: '/tvdb/621096b26f0e2.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/severance' },
      { url: 'https://tv.apple.com/gb/episode/half-loop/umc.cmc.23qox5n6larygqgg6u74fvyj', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt11280740', score: '8.7 115K' },
      { url: 'https://en.wikipedia.org/wiki/Severance_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/severance', score: '97% 83%' },
      { url: 'https://thetvdb.com/series/severance' },
    ],
  },
  {
    title: 'Solar Opposites',
    date: '2020-05-08',
    slug: 'solar-opposites-2020',
    images: [{ url: '/tvdb/603b6a37d9223.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/solar-opposites' },
      { url: 'https://www.disneyplus.com/en-gb/series/solar-opposites/3ZEf8rZecJf8', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt8910922', score: '8.0 24K' },
      { url: 'https://en.wikipedia.org/wiki/Solar_Opposites' },
      { url: 'https://www.rottentomatoes.com/tv/solar_opposites', score: '97% 86%' },
      { url: 'https://thetvdb.com/series/solar-opposites' },
    ],
  },
  {
    title: 'Steins;Gate',
    date: '2011-10-14',
    slug: 'steins-gate-2011',
    like: '3',
    images: [{ url: '/tvdb/5f44d6fbaad70.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/steins-gate' },
      { url: 'https://www.funimation.com/shows/steinsgate/', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt1910272', score: '8.8 63K' },
      { url: 'https://en.wikipedia.org/wiki/Steins;Gate_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/steins_gate', score: '100% 96%' },
      { url: 'https://thetvdb.com/series/steins-gate' },
    ],
  },
  {
    title: 'Stranger Things',
    date: '2016-07-15',
    slug: 'stranger-things-2016',
    images: [{ url: '/tvdb/305288-4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/stranger-things' },
      { url: 'https://www.netflix.com/gb/title/80057281', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4574334', score: '8.7 1.2M' },
      { url: 'https://en.wikipedia.org/wiki/Stranger_Things' },
      { url: 'https://www.rottentomatoes.com/tv/stranger_things', score: '92% 90%' },
      { url: 'https://thetvdb.com/series/stranger-things' },
    ],
  },
  {
    title: 'Strike',
    date: '2017-08-27',
    slug: 'strike-2017',
    like: '2',
    images: [{ url: '/tvdb/319742-4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/c-b-strike' },
      { url: 'https://www.bbc.co.uk/iplayer/episodes/b093ypxy/strike', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt4276618', score: '7.9 15K' },
      { url: 'https://en.wikipedia.org/wiki/Strike_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/c_b_strike_2017', score: '82% 94%' },
      { url: 'https://thetvdb.com/series/strike' },
    ],
  },
  {
    title: 'Travellers',
    date: '2016-10-17',
    slug: 'travelers-2016',
    like: '2',
    images: [{ url: '/tvdb/314544-6.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/travelers' },
      { url: 'https://www.netflix.com/gb/title/80105699', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt5651844', score: '8.0 57K' },
      { url: 'https://en.wikipedia.org/wiki/Travelers_(TV_series)' },
      //   { url: "", score: "% %" },
      { url: 'https://thetvdb.com/series/travelers-2016' },
    ],
  },
  {
    title: 'The Watch',
    date: '2021-01-03',
    slug: 'the-watch-2021',
    like: '2',
    images: [{ url: '/tvdb/5ffdd12fb130e.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/the-watch' },
      // { url: 'https://www.amazon.co.uk/gp/video/detail/0T78MIO1TP3XKE6CS3B74NCH89', type: 'buy' },
      { url: 'https://www.imdb.com/title/tt8080292', score: '5.5 6K' },
      { url: 'https://en.wikipedia.org/wiki/The_Watch_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/the_watch', score: '53% 40%' },
      { url: 'https://thetvdb.com/series/the-watch-2021' },
    ],
  },
  {
    title: 'Wednesday',
    date: '2022-11-23',
    slug: 'wednesday-2022',
    like: '3',
    images: [{ url: '/tvdb/632dbd876738d.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/wednesday' },
      { url: 'https://www.netflix.com/gb/title/81231974', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt13443470', score: '8.5 52K' },
      { url: 'https://en.wikipedia.org/wiki/Wednesday_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/wednesday', score: '69% 88%' },
      { url: 'https://thetvdb.com/series/wednesday' },
    ],
  },
  {
    title: 'Westworld',
    date: '2016-10-02',
    slug: 'westworld-2016',
    like: '3',
    images: [{ url: '/tvdb/296762-3.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/westworld' },
      // { url: 'https://tv.apple.com/gb/show/westworld/umc.cmc.305ub24u3ci7x1lu4xyoynbar', type: 'buy' },
      { url: 'https://www.imdb.com/title/tt0475784', score: '8.5 504K' },
      { url: 'https://en.wikipedia.org/wiki/Westworld_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/westworld', score: '80% 71%' },
      { url: 'https://thetvdb.com/series/westworld' },
    ],
  },
  {
    title: 'What We Do in the Shadows',
    date: '2019-03-27',
    slug: 'what-we-do-in-the-shadows-2019',
    like: '2',
    images: [{ url: '/tvdb/5c6810de877c4.jpg' }],
    links: [
      { url: 'https://www.justwatch.com/uk/tv-series/what-we-do-in-the-shadows' },
      { url: 'https://www.disneyplus.com/en-gb/series/what-we-do-in-the-shadows/40SsBvhCRbp1', type: 'stream' },
      { url: 'https://www.imdb.com/title/tt7908628', score: '8.6 78K' },
      { url: 'https://en.wikipedia.org/wiki/What_We_Do_in_the_Shadows_(TV_series)' },
      { url: 'https://www.rottentomatoes.com/tv/what_we_do_in_the_shadows', score: '98% 92%' },
      { url: 'https://thetvdb.com/series/what-we-do-in-the-shadows' },
    ],
  },
];

export default works;

/*
  {
  title: "",
  year: "",
  slug: "",
  like: "1",
  images: [{ url: "" }],
  links: [
    { url: "" }, 
    { url: "", type: "stream" }, 
    { url: "", score: "" },
    { url: "" },
    { url: "", score: "% %" },
    { url: "" },
  ],
  },
*/
