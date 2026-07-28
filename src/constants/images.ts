export const IMG = (id: number, w = 1200, q = 75) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&q=${q}`;

export const IMAGES = {
  hero: {
    giraffe: IMG(26729469, 1920),
    cheetah: IMG(28830490, 1920),
    skyline: IMG(1662159, 1920),
    gorge: IMG(29608813, 1920),
  },
  story: {
    meeting: IMG(3184416, 1400),
    entrepreneur: IMG(785667, 1000),
  },
  ecosystem: {
    productionsA: IMG(2228831, 900),
    productionsB: IMG(2918590, 900),
    mediaA: IMG(6954162, 900),
    mediaB: IMG(668296, 900),
    farmsA: IMG(27928182, 900),
    farmsB: IMG(29602668, 900),
    horizonA: IMG(247376, 900),
    horizonB: IMG(1703312, 900),
    eventsA: IMG(1709003, 900),
    eventsB: IMG(2608517, 900),
  },
  impact: {
    engineer: IMG(1108101, 1100),
    cranes: IMG(2036686, 1100),
    youth: IMG(3401403, 1100),
    construction: IMG(439416, 1100),
  },
  projects: {
    harbor: IMG(259447, 1400),
    elephants: IMG(29636299, 1400),
    childrenField: IMG(28101470, 1400),
    communityGarden: IMG(29602668, 1400),
  },
  future: {
    tech: IMG(546819, 1100),
    logisticsA: IMG(1427541, 1100),
    logisticsB: IMG(262353, 1100),
    foundationA: IMG(6646917, 1100),
    foundationB: IMG(6994855, 1100),
    energyA: IMG(371900, 1100),
    energyB: IMG(2800845, 1100),
    properties: IMG(1451416, 1100),
  },
  southSudan: {
    women: IMG(2170387, 1100),
    maasai: IMG(667200, 1100),
    portrait: IMG(2810197, 900),
    mountain: IMG(29596134, 1100),
    tree: IMG(27731531, 1100),
  },
  insights: {
    team: IMG(1181406, 900),
    charts: IMG(265087, 900),
    graphs: IMG(590041, 900),
  },
};
