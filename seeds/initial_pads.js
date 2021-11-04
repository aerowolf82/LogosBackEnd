
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pads').del()
    .then(function (padDataArray) {
      // Inserts seed entries
      return knex('pads').insert(
      //   [
      //   { id: 1, pad_name: 'Space Launch Complex 3W', pad_location: 'Vandenberg SFB, CA, USA', latitude: 34.644, longitude: -120.593 },
      //   { id: 2, pad_name: 'Cape Canaveral Air Force Station Launch Complex 5', pad_location: 'Cape Canaveral, FL USA', latitude: 28.439444, longitude: -80.573333 },
      //   { id: 3, pad_name: 'Baikonur Cosmodrome, Republic of Kazakhstan', pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan', latitude: 45.92, longitude: 63.342 },
      //   { id: 4, pad_name: 'Space Launch Complex 19', pad_location: 'Cape Canaveral, FL, USA', latitude: 228.506898, longitude: -80.554169 }
      // ]
      [
        {
          id: 1,
          pad_name: 'Space Launch Complex 17B',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4458',
          longitude: '-80.5657'
        },
        {
          id: 2,
          pad_name: '45/1',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.943492',
          longitude: '63.653014'
        },
        {
          id: 3,
          pad_name: '133/3 (133L)',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.886999',
          longitude: '40.846984'
        },
        {
          id: 4,
          pad_name: 'Launch Complex 39B',
          pad_location: 'Kennedy Space Center, FL, USA',
          latitude: '28.62711233',
          longitude: '-80.62101503'
        },
        {
          id: 5,
          pad_name: '175/59',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.052',
          longitude: '62.986'
        },
        {
          id: 6,
          pad_name: 'Launch Area 2A',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '41.306',
          longitude: '100.314'
        },
        {
          id: 7,
          pad_name: '81/24 (81P)',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.071001',
          longitude: '62.984999'
        },
        {
          id: 8,
          pad_name: 'Space Launch Complex 8',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.57635',
          longitude: '-120.63245'
        },
        {
          id: 9,
          pad_name: '35',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.9278',
          longitude: '40.5752'
        },
        {
          id: 10,
          pad_name: 'Osaki Y LP2',
          pad_location: 'Tanegashima, Japan',
          latitude: '30.401',
          longitude: '130.975'
        },
        {
          id: 11,
          pad_name: 'Space Launch Complex 6',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.5815',
          longitude: '-120.6262'
        },
        {
          id: 12,
          pad_name: '109/95',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.95112',
          longitude: '63.497095'
        },
        {
          id: 13,
          pad_name: 'Launch Platform Odyssey',
          pad_location: 'Sea Launch',
          latitude: '0.0',
          longitude: '-154'
        },
        {
          id: 14,
          pad_name: 'Space Launch Complex 17A',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4472',
          longitude: '-80.565'
        },
        {
          id: 15,
          pad_name: '200/39 (200L)',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.039984',
          longitude: '63.032093'
        },
        {
          id: 16,
          pad_name: 'Space Launch Complex 4E',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.632',
          longitude: '-120.611'
        },
        {
          id: 17,
          pad_name: 'Space Launch Complex 14',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.49103',
          longitude: '-80.54687'
        },
        {
          id: 18,
          pad_name: 'Space Launch Complex 19',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.506898',
          longitude: '-80.554169'
        },
        {
          id: 19,
          pad_name: 'Space Launch Complex 34',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.521811',
          longitude: '-80.56113'
        },
        {
          id: 20,
          pad_name: '31/6',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.996034',
          longitude: '63.564003'
        },
        {
          id: 21,
          pad_name: 'Launch Area 4?',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '28.2495',
          longitude: '102.0232'
        },
        {
          id: 22,
          pad_name: 'Launch Area 4 (SLS-2 / 603)',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '40.960556',
          longitude: '100.298333'
        },
        {
          id: 23,
          pad_name: 'Space Launch Complex 37A',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.533482',
          longitude: '-80.568101'
        },
        {
          id: 24,
          pad_name: 'Space Launch Complex 3E',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.64',
          longitude: '-120.5895'
        },
        {
          id: 25,
          pad_name: 'Launch Complex 9',
          pad_location: "Taiyuan, People's Republic of China",
          latitude: '38.849',
          longitude: '111.608'
        },
        {
          id: 26,
          pad_name: 'Osaki Y LP1',
          pad_location: 'Tanegashima, Japan',
          latitude: '30.401',
          longitude: '130.977'
        },
        {
          id: 27,
          pad_name: 'Space Launch Complex 46',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4584',
          longitude: '-80.5284'
        },
        {
          id: 28,
          pad_name: '132/1 (132L)',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.883229',
          longitude: '40.868549'
        },
        {
          id: 29,
          pad_name: 'Space Launch Complex 41',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.58341025',
          longitude: '-80.58303644'
        },
        {
          id: 30,
          pad_name: 'Yasny Launch Site ICBM silo (R 36M2/Dnepr)',
          pad_location: 'Dombarovskiy, Russian Federation',
          latitude: '51.036',
          longitude: '59.958'
        },
        {
          id: 31,
          pad_name: '81/23 (81L)',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.073997',
          longitude: '62.977999'
        },
        {
          id: 32,
          pad_name: '1/5',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.92',
          longitude: '63.342'
        },
        {
          id: 33,
          pad_name: 'Launch Complex 7',
          pad_location: "Taiyuan, People's Republic of China",
          latitude: '38.863428',
          longitude: '111.589004'
        },
        {
          id: 34,
          pad_name: 'Ariane Launch Area 1',
          pad_location: 'Kourou, French Guiana',
          latitude: '5.236',
          longitude: '-52.775'
        },
        {
          id: 35,
          pad_name: '16/2',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.960091',
          longitude: '40.682983'
        },
        {
          id: 36,
          pad_name: '43/3 (43L)',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.9273',
          longitude: '40.45'
        },
        {
          id: 37,
          pad_name: 'Launch Area 4 (SLS-1 / 921)',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '40.958093',
          longitude: '100.291188'
        },
        {
          id: 38,
          pad_name: 'Space Launch Complex 37B',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.5317',
          longitude: '-80.56495'
        },
        {
          id: 39,
          pad_name: 'Space Launch Complex 2W',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7556',
          longitude: '-120.6224'
        },
        {
          id: 40,
          pad_name: 'Plesetsk 133/3',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.887',
          longitude: '40.85'
        },
        {
          id: 41,
          pad_name: 'Yoshinobu Launch Complex',
          pad_location: 'Tanegashima, Japan',
          latitude: '30.402222',
          longitude: '130.975'
        },
        {
          id: 42,
          pad_name: '35/1',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.927319',
          longitude: '40.574897'
        },
        {
          id: 43,
          pad_name: 'KS Center',
          pad_location: 'Uchinoura Space Center, Japan',
          latitude: '31.251871',
          longitude: '131.079089'
        },
        {
          id: 44,
          pad_name: 'Unknown Pad',
          pad_location: 'Dombarovskiy, Russian Federation',
          latitude: '51.036',
          longitude: '59.958'
        },
        {
          id: 45,
          pad_name: 'Launch Complex 2 (LC-2)',
          pad_location: "Xichang Satellite Launch Center, People's Republic of China",
          latitude: '28.246017',
          longitude: '102.026556'
        },
        {
          id: 46,
          pad_name: 'Gran Canaria',
          pad_location: 'Air launch to orbit',
          latitude: '27.966667',
          longitude: '-15.6'
        },
        {
          id: 47,
          pad_name: 'Mu Center',
          pad_location: 'Uchinoura Space Center, Japan',
          latitude: '31.251',
          longitude: '131.0813'
        },
        {
          id: 48,
          pad_name: 'Unknown Pad',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.925556',
          longitude: '40.577778'
        },
      
        {
          id: 50,
          pad_name: 'Satish Dhawan Space Centre First Launch Pad',
          pad_location: 'Sriharikota, Republic of India',
          latitude: '13.733',
          longitude: '80.235'
        },
        {
          id: 51,
          pad_name: 'Unknown Pad',
          pad_location: 'Unknown Location',
          latitude: '35.844694',
          longitude: '103.452083'
        },
        {
          id: 52,
          pad_name: 'Wallops Flight Facility',
          pad_location: 'Air launch to orbit',
          latitude: '37.938611',
          longitude: '-75.457222'
        },
        {
          id: 53,
          pad_name: 'Mojave Air and Space Port',
          pad_location: 'Air launch to orbit',
          latitude: '35.059444',
          longitude: '-118.151667'
        },
        {
          id: 54,
          pad_name: 'Unknown Pad',
          pad_location: 'Unknown Location',
          latitude: '0.0',
          longitude: '0.0'
        },
        {
          id: 55,
          pad_name: 'Space Launch Complex 576E',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.739444',
          longitude: '-120.619167'
        },
        {
          id: 56,
          pad_name: 'Launch Area 0 B',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.831',
          longitude: '-75.4911'
        },
        {
          id: 57,
          pad_name: 'Launch Pad 1',
          pad_location: 'Kodiak Launch Complex, Alaska, USA',
          latitude: '57.435833',
          longitude: '-152.337778'
        },
        {
          id: 58,
          pad_name: 'Unknown Pad',
          pad_location: 'Semnan Space Center, Islamic Republic of Iran',
          latitude: '35.258416',
          longitude: '53.953567'
        },
        {
          id: 59,
          pad_name: 'Kwajalein Atoll',
          pad_location: 'Air launch to orbit',
          latitude: '8.716667',
          longitude: '167.733333'
        },
        {
          id: 60,
          pad_name: 'Unknown Pad',
          pad_location: "Taiyuan, People's Republic of China",
          latitude: '38.849',
          longitude: '111.608'
        },
        {
          id: 61,
          pad_name: 'Space Launch Complex 10E',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7626',
          longitude: '-120.6213'
        },
        {
          id: 62,
          pad_name: 'Vandenberg Space Force Base',
          pad_location: 'Air launch to orbit',
          latitude: '34.732778',
          longitude: '-120.568056'
        },
        {
          id: 63,
          pad_name: 'LP-41',
          pad_location: 'Kauai, USA',
          latitude: '22.022778',
          longitude: '-159.785'
        },
        {
          id: 64,
          pad_name: 'LC-1',
          pad_location: 'Naro Space Center, South Korea',
          latitude: '34.431867',
          longitude: '127.535069'
        },
        {
          id: 65,
          pad_name: 'Rocket Lab Launch Complex 1A',
          pad_location: 'Onenui Station, Mahia Peninsula, New Zealand',
          latitude: '-39.262833',
          longitude: '177.864469'
        },
        {
          id: 66,
          pad_name: 'Launch Complex 3 ( LC-3 ) ( LA-1 )',
          pad_location: "Xichang Satellite Launch Center, People's Republic of China",
          latitude: '28.246017',
          longitude: '102.026556'
        },
        {
          id: 67,
          pad_name: 'Ariane Launch Area 4',
          pad_location: 'Kourou, French Guiana',
          latitude: '5.256319',
          longitude: '-52.786838'
        },
        {
          id: 68,
          pad_name: 'Unknown Pad',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.92',
          longitude: '63.342'
        },
        {
          id: 69,
          pad_name: 'Unknown Pad',
          pad_location: 'Tanegashima, Japan',
          latitude: '30.401',
          longitude: '130.977'
        },
        {
          id: 70,
          pad_name: 'Edwards Air Force Base',
          pad_location: 'Air launch to orbit',
          latitude: '34.905556',
          longitude: '-117.883611'
        },
        {
          id: 71,
          pad_name: 'Unknown Pad',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '40.958',
          longitude: '100.291'
        },
        {
          id: 72,
          pad_name: 'Unknown Pad',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.458',
          longitude: '-80.528'
        },
        {
          id: 73,
          pad_name: 'Unknown Pad',
          pad_location: 'Sriharikota, Republic of India',
          latitude: '13.733',
          longitude: '80.235'
        },
        {
          id: 74,
          pad_name: 'Unknown pad',
          pad_location: "Sohae Satellite Launching Station,  Cholsan County, North Pyongan Province, Democratic People's Republic of Korea",
          latitude: '39.66',
          longitude: '124.705'
        },
        {
          id: 75,
          pad_name: 'Unknown',
          pad_location: 'Palmachim Airbase, State of Israel',
          latitude: '31.897778',
          longitude: '34.690556'
        },
        {
          id: 76,
          pad_name: 'Launch Area 0 A',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.8337',
          longitude: '-75.4881'
        },
        {
          id: 77,
          pad_name: 'Ariane Launch Area 3',
          pad_location: 'Kourou, French Guiana',
          latitude: '5.239',
          longitude: '-52.768'
        },
        {
          id: 78,
          pad_name: 'Wenchang',
          pad_location: "Wenchang Satellite Launch Center, People's Republic of China",
          latitude: '19.614354',
          longitude: '110.951057'
        },
        {
          id: 79,
          pad_name: 'Rocket Lab Launch Complex 2',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.834',
          longitude: '-75.488'
        },
        {
          id: 80,
          pad_name: 'Space Launch Complex 40',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.56194122',
          longitude: '-80.57735736'
        },
        {
          id: 81,
          pad_name: 'Soyuz Launch Complex',
          pad_location: 'Kourou, French Guiana',
          latitude: '5.3019',
          longitude: '-52.8346'
        },
        {
          id: 82,
          pad_name: 'Satish Dhawan Space Centre Second Launch Pad',
          pad_location: 'Sriharikota, Republic of India',
          latitude: '13.7199',
          longitude: '80.2304'
        },
        {
          id: 83,
          pad_name: 'Cosmodrome Site 1S',
          pad_location: 'Vostochny Cosmodrome, Siberia, Russian Federation',
          latitude: '51.884395',
          longitude: '128.333932'
        },
        {
          id: 84,
          pad_name: 'Cape Canaveral',
          pad_location: 'Air launch to orbit',
          latitude: '28.455556',
          longitude: '-80.527778'
        },
        {
          id: 85,
          pad_name: '43/4 (43R)',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.92883',
          longitude: '40.457098'
        },
        {
          id: 86,
          pad_name: 'Unknown',
          pad_location: "Xichang Satellite Launch Center, People's Republic of China",
          latitude: '28.246017',
          longitude: '102.026556'
        },
        {
          id: 87,
          pad_name: 'Launch Complex 39A',
          pad_location: 'Kennedy Space Center, FL, USA',
          latitude: '28.60822681',
          longitude: '-80.60428186'
        },
        {
          id: 88,
          pad_name: 'Imam Khomeini Spaceport',
          pad_location: 'Semnan Space Center, Islamic Republic of Iran',
          latitude: '35.238',
          longitude: '53.950778'
        },
        {
          id: 89,
          pad_name: 'Cape Canaveral Air Force Station Launch Complex 5',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.439444',
          longitude: '-80.573333'
        },
        {
          id: 90,
          pad_name: 'West Texas Suborbital Launch Site/ Corn Ranch',
          pad_location: 'Corn Ranch, USA',
          latitude: '31.422878000000000',
          longitude: '-104.757121000000000'
        },
      
        {
          id: 92,
          pad_name: 'Space Launch Complex 16',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.501626',
          longitude: '-80.5518'
        },
        {
          id: 93,
          pad_name: 'Space Launch Complex 3W',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.644',
          longitude: '-120.593'
        },
        {
          id: 94,
          pad_name: 'Launch Area 3',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.8495',
          longitude: '-75.4725'
        },
        {
          id: 95,
          pad_name: 'Space Launch Complex 1W',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7572',
          longitude: '-120.6303'
        },
        {
          id: 96,
          pad_name: 'Space Launch Complex 1E',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.756',
          longitude: '-120.6263'
        },
        {
          id: 97,
          pad_name: 'Space Launch Complex 26B',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4433',
          longitude: '-80.5712'
        },
        {
          id: 98,
          pad_name: 'Space Launch Complex 2E',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7516',
          longitude: '-120.6192'
        },
        {
          id: 99,
          pad_name: 'Space Launch Complex 12',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.480607',
          longitude: '-80.541938'
        },
        {
          id: 100,
          pad_name: 'Mayak-2',
          pad_location: 'Kapustin Yar, Russian Federation',
          latitude: '48.569551',
          longitude: '46.295814'
        },
        {
          id: 101,
          pad_name: 'Unknown Pad',
          pad_location: 'Sea Launch',
          latitude: '0.0',
          longitude: '0.0'
        },
        {
          id: 102,
          pad_name: '110/38 (110R)',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.962121',
          longitude: '63.310212'
        },
        {
          id: 103,
          pad_name: '110/37 (110L)',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.964747',
          longitude: '63.304744'
        },
        {
          id: 104,
          pad_name: 'Guam International Airport',
          pad_location: 'Air launch to orbit',
          latitude: '13.483889',
          longitude: '144.797222'
        },
        {
          id: 105,
          pad_name: 'Vertical Launch Area',
          pad_location: 'Spaceport America, NM, USA',
          latitude: '32.9901856',
          longitude: '-106.9750602'
        },
        {
          id: 106,
          pad_name: 'Taiki-cho, Hokkaido, Japan',
          pad_location: 'Taiki-cho, Hokkaido, Japan',
          latitude: '42.50000000',
          longitude: '143.28333333'
        },
        {
          id: 107,
          pad_name: 'Omelek Island',
          pad_location: 'Ronald Reagan Ballistic Missile Defense Test Site, Kwajalein Atoll, Marshall Islands',
          latitude: '9.047861',
          longitude: '167.743'
        },
        {
          id: 108,
          pad_name: 'Cosmodrome Site 1A',
          pad_location: 'Vostochny Cosmodrome, Siberia, Russian Federation',
          latitude: '51.884395',
          longitude: '128.333932'
        },
        {
          id: 109,
          pad_name: 'Cecil Air and Space Port',
          pad_location: 'Air launch to orbit',
          latitude: '30.224166',
          longitude: '-81.876236'
        },
        {
          id: 110,
          pad_name: 'Andersen Air Force Base',
          pad_location: 'Air launch to orbit',
          latitude: '13.581111',
          longitude: '144.924444'
        },
        {
          id: 111,
          pad_name: 'Launch Pad A',
          pad_location: 'SpaceX Space Launch Facility, TX, USA',
          latitude: '25.997116',
          longitude: '-97.15503099856647'
        },
        {
          id: 112,
          pad_name: 'Edwards Air Force Base',
          pad_location: 'Air launch to Suborbital flight',
          latitude: '34.905556',
          longitude: '-117.883611'
        },
        {
          id: 113,
          pad_name: 'Launch Complex 16',
          pad_location: "Taiyuan, People's Republic of China",
          latitude: '38.868222',
          longitude: '111.58024'
        },
        {
          id: 114,
          pad_name: 'LP-3B',
          pad_location: 'Kodiak Launch Complex, Alaska, USA',
          latitude: '57.4304299',
          longitude: '-152.3586347'
        },
        {
          id: 115,
          pad_name: 'Unknown Pad',
          pad_location: 'Shahrud Missile Test Site, Islamic Republic of Iran',
          latitude: '36.200792',
          longitude: '55.333892'
        },
        {
          id: 116,
          pad_name: 'Space Launch Complex 11',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4755556',
          longitude: '-80.5427496'
        },
        {
          id: 117,
          pad_name: 'Space Launch Complex 13',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4859',
          longitude: '-80.546594'
        },
        {
          id: 118,
          pad_name: 'Space Launch Complex 18A',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4493',
          longitude: '-80.564494'
        },
        {
          id: 119,
          pad_name: 'Space Launch Complex 18B',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4493',
          longitude: '-80.564494'
        },
        {
          id: 120,
          pad_name: 'Space Launch Complex 20',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.5122222',
          longitude: '-80.5588607'
        },
        {
          id: 121,
          pad_name: 'Space Launch Complex 36A',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4705556',
          longitude: '-80.542194'
        },
        {
          id: 122,
          pad_name: 'Space Launch Complex 36B',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4705556',
          longitude: '-80.542194'
        },
        {
          id: 123,
          pad_name: 'Space Launch Complex 5',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4394444',
          longitude: '-80.5755273'
        },
        {
          id: 124,
          pad_name: 'Ariane Launch Area 2',
          pad_location: 'Kourou, French Guiana',
          latitude: '5.232',
          longitude: '-52.778194'
        },
        {
          id: 125,
          pad_name: 'Diamant Launch Area',
          pad_location: 'Kourou, French Guiana',
          latitude: '5.2222222',
          longitude: '-52.7758051'
        },
        {
          id: 126,
          pad_name: '32/1',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.9063889',
          longitude: '40.7844727'
        },
        {
          id: 127,
          pad_name: '32/2',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.9063889',
          longitude: '40.7844727'
        },
        {
          id: 128,
          pad_name: '5',
          pad_location: 'Svobodny Cosmodrome, Russian Federation',
          latitude: '51.7',
          longitude: '127.997806'
        },
        {
          id: 129,
          pad_name: '175/58',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.051',
          longitude: '62.984806'
        },
        {
          id: 130,
          pad_name: '200/40',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.0336111',
          longitude: '63.0266949'
        },
        {
          id: 131,
          pad_name: '45/2',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.943',
          longitude: '63.650806'
        },
        {
          id: 132,
          pad_name: '90',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.081',
          longitude: '62.929806'
        },
        {
          id: 133,
          pad_name: '90/19',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.081',
          longitude: '62.929806'
        },
        {
          id: 134,
          pad_name: '90/20',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.081',
          longitude: '62.929806'
        },
        {
          id: 135,
          pad_name: '158',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.9255556',
          longitude: '40.5755838'
        },
        {
          id: 136,
          pad_name: '107',
          pad_location: 'Kapustin Yar, Russian Federation',
          latitude: '48.540716',
          longitude: '46.296826'
        },
        {
          id: 137,
          pad_name: '107/1',
          pad_location: 'Kapustin Yar, Russian Federation',
          latitude: '48.540716',
          longitude: '46.296826'
        },
        {
          id: 138,
          pad_name: '107/2',
          pad_location: 'Kapustin Yar, Russian Federation',
          latitude: '48.540716',
          longitude: '46.296826'
        },
        {
          id: 139,
          pad_name: '86/1',
          pad_location: 'Kapustin Yar, Russian Federation',
          latitude: '48.56935',
          longitude: '46.293219'
        },
        {
          id: 140,
          pad_name: '86/4',
          pad_location: 'Kapustin Yar, Russian Federation',
          latitude: '48.56935',
          longitude: '46.293219'
        },
        {
          id: 141,
          pad_name: 'Brigitte',
          pad_location: 'Interarmy Special Vehicles Test Centre, French Algeria',
          latitude: '30.7787318',
          longitude: '-3.0669721'
        },
        {
          id: 142,
          pad_name: 'Unknown Pad',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '40.9605556',
          longitude: '100.2961393'
        },
        {
          id: 143,
          pad_name: 'Launch Area 2B',
          pad_location: "Jiuquan, People's Republic of China",
          latitude: '41.306',
          longitude: '100.314'
        },
        {
          id: 144,
          pad_name: 'Tai Rui',
          pad_location: "Tai Rui, People's Republic of China",
          latitude: '34.54',
          longitude: '121.117806'
        },
        {
          id: 145,
          pad_name: 'Naval Air Weapons Station China Lake',
          pad_location: 'Air launch to Suborbital flight',
          latitude: '35.6855556',
          longitude: '-117.6941384'
        },
        {
          id: 146,
          pad_name: 'VLS Pad',
          pad_location: 'Alcântara Launch Center, Federative Republic of Brazil',
          latitude: '-2.3177',
          longitude: '-44.369984'
        },
        {
          id: 147,
          pad_name: 'Novomoskovsk (K-407)',
          pad_location: 'Sea Launch',
          latitude: '74.000000',
          longitude: '38.000000'
        },
        {
          id: 148,
          pad_name: 'Borisoglebsk (K-496)',
          pad_location: 'Sea Launch',
          latitude: '74.0000',
          longitude: '38.0000'
        },
        {
          id: 149,
          pad_name: 'Ekaterinburg (K-84)',
          pad_location: 'Sea Launch',
          latitude: '74.000000',
          longitude: '38.0000'
        },
        {
          id: 150,
          pad_name: 'Lambda Pad',
          pad_location: 'Uchinoura Space Center, Japan',
          latitude: '31.2523',
          longitude: '131.076306'
        },
        {
          id: 151,
          pad_name: 'M-V Pad',
          pad_location: 'Uchinoura Space Center, Japan',
          latitude: '31.251',
          longitude: '131.079806'
        },
      
        {
          id: 154,
          pad_name: 'Space Launch Complex 5',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.6080',
          longitude: '-120.6247'
        },
        {
          id: 155,
          pad_name: 'San Marco platform',
          pad_location: 'Broglio Space Center, Kenya',
          latitude: '-2.9383333',
          longitude: '40.210306'
        },
        {
          id: 156,
          pad_name: 'Space Launch Complex 4W',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.63312',
          longitude: '-120.61584'
        },
        {
          id: 157,
          pad_name: 'Point Arguello Launch Complex 2-3',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.63312',
          longitude: '-120.61584'
        },
        {
          id: 158,
          pad_name: 'Point Arguello Launch Complex 2-4',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.632',
          longitude: '-120.611'
        },
        {
          id: 159,
          pad_name: '131',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.072',
          longitude: '62.953806'
        },
        {
          id: 160,
          pad_name: '161/35',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.034',
          longitude: '63.060806'
        },
        {
          id: 161,
          pad_name: '162/36',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.032',
          longitude: '63.064806'
        },
        {
          id: 162,
          pad_name: '191/66',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.97',
          longitude: '63.194806'
        },
        {
          id: 163,
          pad_name: '250',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '46.008',
          longitude: '63.302806'
        },
        {
          id: 164,
          pad_name: '41/15',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.976',
          longitude: '63.666806'
        },
        {
          id: 165,
          pad_name: '67/21',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.989',
          longitude: '63.702806'
        },
        {
          id: 166,
          pad_name: '67/22',
          pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
          latitude: '45.99',
          longitude: '63.704806'
        },
        {
          id: 167,
          pad_name: '132/2',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.883',
          longitude: '40.869806'
        },
        {
          id: 168,
          pad_name: '41/1',
          pad_location: 'Plesetsk Cosmodrome, Russian Federation',
          latitude: '62.941',
          longitude: '40.526806'
        },
        {
          id: 169,
          pad_name: 'Launch Complex A',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.6638889',
          longitude: '-120.6044162'
        },
        {
          id: 170,
          pad_name: '576B3',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7897222',
          longitude: '-120.5980273'
        },
        {
          id: 171,
          pad_name: 'Space Launch Complex 10W',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7652778',
          longitude: '-120.6244162'
        },
        {
          id: 172,
          pad_name: '576A2',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7394444',
          longitude: '-120.6213607'
        },
        {
          id: 173,
          pad_name: '576A1',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7394444',
          longitude: '-120.6213607'
        },
        {
          id: 174,
          pad_name: 'LE-6',
          pad_location: 'Vandenberg SFB, CA, USA',
          latitude: '34.7327778',
          longitude: '-120.5702496'
        },
        {
          id: 175,
          pad_name: '101',
          pad_location: "Wenchang Satellite Launch Center, People's Republic of China",
          latitude: '19.614354',
          longitude: '110.948863'
        },
        {
          id: 176,
          pad_name: '201',
          pad_location: "Wenchang Satellite Launch Center, People's Republic of China",
          latitude: '19.614354',
          longitude: '110.948863'
        },
        {
          id: 177,
          pad_name: 'Unknown Pad',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.9386111',
          longitude: '-75.4594162'
        },
        {
          id: 178,
          pad_name: 'Launch Area 3A',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.8495',
          longitude: '-75.4725'
        },
        {
          id: 179,
          pad_name: 'Launch Area 5B',
          pad_location: 'RAAF Woomera Range Complex',
          latitude: '-30.9552778',
          longitude: '136.5300282'
        },
        {
          id: 180,
          pad_name: 'Launch Area 6A',
          pad_location: 'RAAF Woomera Range Complex',
          latitude: '-30.9552778',
          longitude: '136.5300282'
        },
        {
          id: 181,
          pad_name: 'Launch Area 8',
          pad_location: 'RAAF Woomera Range Complex',
          latitude: '-30.9552778',
          longitude: '136.5300282'
        },
        {
          id: 182,
          pad_name: '370/11',
          pad_location: 'Dombarovskiy, Russian Federation',
          latitude: '51.0938889',
          longitude: '59.8400282'
        },
        {
          id: 183,
          pad_name: '370/13',
          pad_location: 'Dombarovskiy, Russian Federation',
          latitude: '51.0938889',
          longitude: '59.8400282'
        },
        {
          id: 184,
          pad_name: 'Unknown Pad',
          pad_location: 'Tonghae Satellite Launching Ground',
          latitude: '40.8557',
          longitude: '129.663606'
        },
        {
          id: 185,
          pad_name: 'Rocket Lab Launch Complex 1B',
          pad_location: 'Onenui Station, Mahia Peninsula, New Zealand',
          latitude: '-39.262833',
          longitude: '177.864469'
        },
        {
          id: 186,
          pad_name: 'Mobile launch platform',
          pad_location: 'Sea Launch',
          latitude: '35',
          longitude: '123'
        },
        {
          id: 187,
          pad_name: 'Launch Pad B',
          pad_location: 'SpaceX Space Launch Facility, TX, USA',
          latitude: '25.997116',
          longitude: '-97.15503099856647'
        },
        {
          id: 188,
          pad_name: 'Orbital Launch Mount A',
          pad_location: 'SpaceX Space Launch Facility, TX, USA',
          latitude: '25.997116',
          longitude: '-97.15503099856647'
        },
        {
          id: 189,
          pad_name: 'Spaceport Cornwall',
          pad_location: 'Air launch to orbit',
          latitude: '50.4408333',
          longitude: '-4.9974718'
        },
        {
          id: 190,
          pad_name: 'Mojave Air and Space Port',
          pad_location: 'Air launch to Suborbital flight',
          latitude: '35.0594444',
          longitude: '-118.1538607'
        },
        {
          id: 191,
          pad_name: 'Spaceport America',
          pad_location: 'Air launch to Suborbital flight',
          latitude: '32.9902778',
          longitude: '-106.9719162'
        },
        {
          id: 192,
          pad_name: 'LC-2',
          pad_location: 'Naro Space Center, South Korea',
          latitude: '34.431867',
          longitude: '127.535069'
        },
        {
          id: 193,
          pad_name: 'Space Launch Complex 26A',
          pad_location: 'Cape Canaveral, FL, USA',
          latitude: '28.4433',
          longitude: '-80.5712'
        },
        {
          id: 194,
          pad_name: 'Launch Complex 36',
          pad_location: 'White Sands Missile Range',
          latitude: '32.416944',
          longitude: '-106.321944'
        },
        {
          id: 195,
          pad_name: 'Launch Area 1',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.938611',
          longitude: '-75.457222'
        },
        {
          id: 196,
          pad_name: 'Launch Area 4',
          pad_location: 'Wallops Island, Virginia, USA',
          latitude: '37.938611',
          longitude: '-75.457222'
        },
        {
          id: 197,
          pad_name: 'Pad 1',
          pad_location: 'Whalers Way Orbital Launch Complex, South Australia',
          latitude: '-34.937822',
          longitude: '135.630035'
        }
      ]
      );
    });
};
