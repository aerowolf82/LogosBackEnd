
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pads').del()
    .then(function (padDataArray) {
      // Inserts seed entries
      return knex('pads').insert(
        [
          {
            id: 1,
            pad_name: 'Space Launch Complex 17B',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4458',
            longitude: '-80.5657',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_1_20200803143208.jpg'
          },
          {
            id: 2,
            pad_name: '45/1',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.943492',
            longitude: '63.653014',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_2_20200803143256.jpg'
          },
          {
            id: 3,
            pad_name: '133/3 (133L)',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.886999',
            longitude: '40.846984',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_3_20200803143438.jpg'
          },
          {
            id: 4,
            pad_name: 'Launch Complex 39B',
            pad_location: 'Kennedy Space Center, FL, USA',
            latitude: '28.62711233',
            longitude: '-80.62101503',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_4_20200803143518.jpg'
          },
          {
            id: 5,
            pad_name: '175/59',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.052',
            longitude: '62.986',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_5_20200803143217.jpg'
          },
          {
            id: 6,
            pad_name: 'Launch Area 2A',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '41.306',
            longitude: '100.314',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_6_20200803143329.jpg'
          },
          {
            id: 7,
            pad_name: '81/24 (81P)',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.071001',
            longitude: '62.984999',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_7_20200803143454.jpg'
          },
          {
            id: 8,
            pad_name: 'Space Launch Complex 8',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.57635',
            longitude: '-120.63245',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_8_20200803143300.jpg'
          },
          {
            id: 9,
            pad_name: '35',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.9278',
            longitude: '40.5752',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_9_20200803143341.jpg'
          },
          {
            id: 10,
            pad_name: 'Osaki Y LP2',
            pad_location: 'Tanegashima, Japan',
            latitude: '30.401',
            longitude: '130.975',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_10_20200803143519.jpg'
          },
          {
            id: 11,
            pad_name: 'Space Launch Complex 6',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.5815',
            longitude: '-120.6262',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_11_20200803143550.jpg'
          },
          {
            id: 12,
            pad_name: '109/95',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.95112',
            longitude: '63.497095',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_12_20200803143322.jpg'
          },
          {
            id: 13,
            pad_name: 'Launch Platform Odyssey',
            pad_location: 'Sea Launch',
            latitude: '0.0',
            longitude: '-154',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_13_20200803143257.jpg'
          },
          {
            id: 14,
            pad_name: 'Space Launch Complex 17A',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4472',
            longitude: '-80.565',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_14_20200803143451.jpg'
          },
          {
            id: 15,
            pad_name: '200/39 (200L)',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.039984',
            longitude: '63.032093',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_15_20200803143530.jpg'
          },
          {
            id: 16,
            pad_name: 'Space Launch Complex 4E',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.632',
            longitude: '-120.611',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg'
          },
          {
            id: 17,
            pad_name: 'Space Launch Complex 14',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.49103',
            longitude: '-80.54687',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_17_20200803143405.jpg'
          },
          {
            id: 18,
            pad_name: 'Space Launch Complex 19',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.506898',
            longitude: '-80.554169',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_18_20200803143356.jpg'
          },
          {
            id: 19,
            pad_name: 'Space Launch Complex 34',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.521811',
            longitude: '-80.56113',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_19_20200803143428.jpg'
          },
          {
            id: 20,
            pad_name: '31/6',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.996034',
            longitude: '63.564003',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_20_20200803143516.jpg'
          },
          {
            id: 21,
            pad_name: 'Launch Area 4?',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '28.2495',
            longitude: '102.0232',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_21_20200803143253.jpg'
          },
          {
            id: 22,
            pad_name: 'Launch Area 4 (SLS-2 / 603)',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '40.960556',
            longitude: '100.298333',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_22_20200803143437.jpg'
          },
          {
            id: 23,
            pad_name: 'Space Launch Complex 37A',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.533482',
            longitude: '-80.568101',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_23_20200803143434.jpg'
          },
          {
            id: 24,
            pad_name: 'Space Launch Complex 3E',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.64',
            longitude: '-120.5895',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_24_20200803143552.jpg'
          },
          {
            id: 25,
            pad_name: 'Launch Complex 9',
            pad_location: "Taiyuan, People's Republic of China",
            latitude: '38.849',
            longitude: '111.608',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_25_20200803143501.jpg'
          },
          {
            id: 26,
            pad_name: 'Osaki Y LP1',
            pad_location: 'Tanegashima, Japan',
            latitude: '30.401',
            longitude: '130.977',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_26_20200803143355.jpg'
          },
          {
            id: 27,
            pad_name: 'Space Launch Complex 46',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4584',
            longitude: '-80.5284',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_27_20200803143319.jpg'
          },
          {
            id: 28,
            pad_name: '132/1 (132L)',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.883229',
            longitude: '40.868549',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_28_20200803143254.jpg'
          },
          {
            id: 29,
            pad_name: 'Space Launch Complex 41',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.58341025',
            longitude: '-80.58303644',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_29_20200803143528.jpg'
          },
          {
            id: 30,
            pad_name: 'Yasny Launch Site ICBM silo (R 36M2/Dnepr)',
            pad_location: 'Dombarovskiy, Russian Federation',
            latitude: '51.036',
            longitude: '59.958',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_30_20200803143320.jpg'
          },
          {
            id: 31,
            pad_name: '81/23 (81L)',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.073997',
            longitude: '62.977999',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_31_20200803143402.jpg'
          },
          {
            id: 32,
            pad_name: '1/5',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.92',
            longitude: '63.342',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_32_20200803143513.jpg'
          },
          {
            id: 33,
            pad_name: 'Launch Complex 7',
            pad_location: "Taiyuan, People's Republic of China",
            latitude: '38.863428',
            longitude: '111.589004',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_33_20200803143335.jpg'
          },
          {
            id: 34,
            pad_name: 'Ariane Launch Area 1',
            pad_location: 'Kourou, French Guiana',
            latitude: '5.236',
            longitude: '-52.775',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_34_20200803143527.jpg'
          },
          {
            id: 35,
            pad_name: '16/2',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.960091',
            longitude: '40.682983',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_35_20200803143306.jpg'
          },
          {
            id: 36,
            pad_name: '43/3 (43L)',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.9273',
            longitude: '40.45',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_36_20200803143534.jpg'
          },
          {
            id: 37,
            pad_name: 'Launch Area 4 (SLS-1 / 921)',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '40.958093',
            longitude: '100.291188',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_37_20200803143603.jpg'
          },
          {
            id: 38,
            pad_name: 'Space Launch Complex 37B',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.5317',
            longitude: '-80.56495',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_38_20200803143515.jpg'
          },
          {
            id: 39,
            pad_name: 'Space Launch Complex 2W',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7556',
            longitude: '-120.6224',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_39_20200803143542.jpg'
          },
          {
            id: 40,
            pad_name: 'Plesetsk 133/3',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.887',
            longitude: '40.85',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_40_20200803143325.jpg'
          },
          {
            id: 41,
            pad_name: 'Yoshinobu Launch Complex',
            pad_location: 'Tanegashima, Japan',
            latitude: '30.402222',
            longitude: '130.975',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_41_20200803143551.jpg'
          },
          {
            id: 42,
            pad_name: '35/1',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.927319',
            longitude: '40.574897',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_42_20200803143543.jpg'
          },
          {
            id: 43,
            pad_name: 'KS Center',
            pad_location: 'Uchinoura Space Center, Japan',
            latitude: '31.251871',
            longitude: '131.079089',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_43_20200803143309.jpg'
          },
          {
            id: 44,
            pad_name: 'Unknown Pad',
            pad_location: 'Dombarovskiy, Russian Federation',
            latitude: '51.036',
            longitude: '59.958',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_44_20200803143327.jpg'
          },
          {
            id: 45,
            pad_name: 'Launch Complex 2 (LC-2)',
            pad_location: "Xichang Satellite Launch Center, People's Republic of China",
            latitude: '28.246017',
            longitude: '102.026556',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_45_20200803143520.jpg'
          },
          {
            id: 46,
            pad_name: 'Gran Canaria',
            pad_location: 'Air launch to orbit',
            latitude: '27.966667',
            longitude: '-15.6',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_46_20200803143312.jpg'
          },
          {
            id: 47,
            pad_name: 'Mu Center',
            pad_location: 'Uchinoura Space Center, Japan',
            latitude: '31.251',
            longitude: '131.0813',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_47_20200803143524.jpg'
          },
          {
            id: 48,
            pad_name: 'Unknown Pad',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.925556',
            longitude: '40.577778',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_48_20200803143459.jpg'
          },
          {
            id: 50,
            pad_name: 'Satish Dhawan Space Centre First Launch Pad',
            pad_location: 'Sriharikota, Republic of India',
            latitude: '13.733',
            longitude: '80.235',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_50_20200803143457.jpg'
          },
          {
            id: 51,
            pad_name: 'Unknown Pad',
            pad_location: 'Unknown Location',
            latitude: '35.844694',
            longitude: '103.452083',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_51_20200803143605.jpg'
          },
          {
            id: 52,
            pad_name: 'Wallops Flight Facility',
            pad_location: 'Air launch to orbit',
            latitude: '37.938611',
            longitude: '-75.457222',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_52_20200803143305.jpg'
          },
          {
            id: 53,
            pad_name: 'Mojave Air and Space Port',
            pad_location: 'Air launch to orbit',
            latitude: '35.059444',
            longitude: '-118.151667',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_53_20200803143612.jpg'
          },
          {
            id: 54,
            pad_name: 'Unknown Pad',
            pad_location: 'Unknown Location',
            latitude: '0.0',
            longitude: '0.0',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_54_20200803143536.jpg'
          },
          {
            id: 55,
            pad_name: 'Space Launch Complex 576E',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.739444',
            longitude: '-120.619167',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_55_20200803143429.jpg'
          },
          {
            id: 56,
            pad_name: 'Launch Area 0 B',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.831',
            longitude: '-75.4911',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_56_20200803143541.jpg'
          },
          {
            id: 57,
            pad_name: 'Launch Pad 1',
            pad_location: 'Kodiak Launch Complex, Alaska, USA',
            latitude: '57.435833',
            longitude: '-152.337778',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_57_20200803143509.jpg'
          },
          {
            id: 58,
            pad_name: 'Unknown Pad',
            pad_location: 'Semnan Space Center, Islamic Republic of Iran',
            latitude: '35.258416',
            longitude: '53.953567',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_58_20200803143301.jpg'
          },
          {
            id: 59,
            pad_name: 'Kwajalein Atoll',
            pad_location: 'Air launch to orbit',
            latitude: '8.716667',
            longitude: '167.733333',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_59_20200803143427.jpg'
          },
          {
            id: 60,
            pad_name: 'Unknown Pad',
            pad_location: "Taiyuan, People's Republic of China",
            latitude: '38.849',
            longitude: '111.608',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_60_20200803143606.jpg'
          },
          {
            id: 61,
            pad_name: 'Space Launch Complex 10E',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7626',
            longitude: '-120.6213',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_61_20200803143410.jpg'
          },
          {
            id: 62,
            pad_name: 'Vandenberg Space Force Base',
            pad_location: 'Air launch to orbit',
            latitude: '34.732778',
            longitude: '-120.568056',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_62_20200803143441.jpg'
          },
          {
            id: 63,
            pad_name: 'LP-41',
            pad_location: 'Kauai, USA',
            latitude: '22.022778',
            longitude: '-159.785',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_63_20200803143308.jpg'
          },
          {
            id: 64,
            pad_name: 'LC-1',
            pad_location: 'Naro Space Center, South Korea',
            latitude: '34.431867',
            longitude: '127.535069',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_64_20200803143347.jpg'
          },
          {
            id: 65,
            pad_name: 'Rocket Lab Launch Complex 1A',
            pad_location: 'Onenui Station, Mahia Peninsula, New Zealand',
            latitude: '-39.262833',
            longitude: '177.864469',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_65_20200803143549.jpg'
          },
          {
            id: 66,
            pad_name: 'Launch Complex 3 ( LC-3 ) ( LA-1 )',
            pad_location: "Xichang Satellite Launch Center, People's Republic of China",
            latitude: '28.246017',
            longitude: '102.026556',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_66_20200803143611.jpg'
          },
          {
            id: 67,
            pad_name: 'Ariane Launch Area 4',
            pad_location: 'Kourou, French Guiana',
            latitude: '5.256319',
            longitude: '-52.786838',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_67_20200803143559.jpg'
          },
          {
            id: 68,
            pad_name: 'Unknown Pad',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.92',
            longitude: '63.342',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_68_20200803143521.jpg'
          },
          {
            id: 69,
            pad_name: 'Unknown Pad',
            pad_location: 'Tanegashima, Japan',
            latitude: '30.401',
            longitude: '130.977',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_69_20200803143529.jpg'
          },
          {
            id: 70,
            pad_name: 'Edwards Air Force Base',
            pad_location: 'Air launch to orbit',
            latitude: '34.905556',
            longitude: '-117.883611',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_70_20200803143352.jpg'
          },
          {
            id: 71,
            pad_name: 'Unknown Pad',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '40.958',
            longitude: '100.291',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_71_20200803143610.jpg'
          },
          {
            id: 72,
            pad_name: 'Unknown Pad',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.458',
            longitude: '-80.528',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_72_20200803143403.jpg'
          },
          {
            id: 73,
            pad_name: 'Unknown Pad',
            pad_location: 'Sriharikota, Republic of India',
            latitude: '13.733',
            longitude: '80.235',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_73_20200803143531.jpg'
          },
          {
            id: 74,
            pad_name: 'Unknown pad',
            pad_location: "Sohae Satellite Launching Station,  Cholsan County, North Pyongan Province, Democratic People's Republic of Korea",
            latitude: '39.66',
            longitude: '124.705',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_74_20200803143358.jpg'
          },
          {
            id: 75,
            pad_name: 'Unknown',
            pad_location: 'Palmachim Airbase, State of Israel',
            latitude: '31.897778',
            longitude: '34.690556',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_75_20200803143316.jpg'
          },
          {
            id: 76,
            pad_name: 'Launch Area 0 A',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.8337',
            longitude: '-75.4881',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_76_20200803143538.jpg'
          },
          {
            id: 77,
            pad_name: 'Ariane Launch Area 3',
            pad_location: 'Kourou, French Guiana',
            latitude: '5.239',
            longitude: '-52.768',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_77_20200803143458.jpg'
          },
          {
            id: 78,
            pad_name: 'Wenchang',
            pad_location: "Wenchang Satellite Launch Center, People's Republic of China",
            latitude: '19.614354',
            longitude: '110.951057',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_78_20200803143548.jpg'
          },
          {
            id: 79,
            pad_name: 'Rocket Lab Launch Complex 2',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.834',
            longitude: '-75.488',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_79_20200803143607.jpg'
          },
          {
            id: 80,
            pad_name: 'Space Launch Complex 40',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.56194122',
            longitude: '-80.57735736',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg'
          },
          {
            id: 81,
            pad_name: 'Soyuz Launch Complex',
            pad_location: 'Kourou, French Guiana',
            latitude: '5.3019',
            longitude: '-52.8346',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_81_20200803143601.jpg'
          },
          {
            id: 82,
            pad_name: 'Satish Dhawan Space Centre Second Launch Pad',
            pad_location: 'Sriharikota, Republic of India',
            latitude: '13.7199',
            longitude: '80.2304',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_82_20200803143602.jpg'
          },
          {
            id: 83,
            pad_name: 'Cosmodrome Site 1S',
            pad_location: 'Vostochny Cosmodrome, Siberia, Russian Federation',
            latitude: '51.884395',
            longitude: '128.333932',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_83_20200803143544.jpg'
          },
          {
            id: 84,
            pad_name: 'Cape Canaveral',
            pad_location: 'Air launch to orbit',
            latitude: '28.455556',
            longitude: '-80.527778',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_84_20200803143436.jpg'
          },
          {
            id: 85,
            pad_name: '43/4 (43R)',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.92883',
            longitude: '40.457098',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_85_20200803143554.jpg'
          },
          {
            id: 86,
            pad_name: 'Unknown',
            pad_location: "Xichang Satellite Launch Center, People's Republic of China",
            latitude: '28.246017',
            longitude: '102.026556',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_86_20200803143555.jpg'
          },
          {
            id: 87,
            pad_name: 'Launch Complex 39A',
            pad_location: 'Kennedy Space Center, FL, USA',
            latitude: '28.60822681',
            longitude: '-80.60428186',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg'
          },
          {
            id: 88,
            pad_name: 'Imam Khomeini Spaceport',
            pad_location: 'Semnan Space Center, Islamic Republic of Iran',
            latitude: '35.238',
            longitude: '53.950778',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_88_20200803143310.jpg'
          },
          {
            id: 89,
            pad_name: 'Cape Canaveral Air Force Station Launch Complex 5',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.439444',
            longitude: '-80.573333',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_89_20200803143242.jpg'
          },
          {
            id: 90,
            pad_name: 'West Texas Suborbital Launch Site/ Corn Ranch',
            pad_location: 'Corn Ranch, USA',
            latitude: '31.422878000000000',
            longitude: '-104.757121000000000',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_90_20200803143233.jpg'
          },
          {
            id: 92,
            pad_name: 'Space Launch Complex 16',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.501626',
            longitude: '-80.5518',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_92_20200803143523.jpg'
          },
          {
            id: 93,
            pad_name: 'Space Launch Complex 3W',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.644',
            longitude: '-120.593',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_93_20200803143225.jpg'
          },
          {
            id: 94,
            pad_name: 'Launch Area 3',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.8495',
            longitude: '-75.4725',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_94_20200803143206.jpg'
          },
          {
            id: 95,
            pad_name: 'Space Launch Complex 1W',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7572',
            longitude: '-120.6303',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_95_20200803143209.jpg'
          },
          {
            id: 96,
            pad_name: 'Space Launch Complex 1E',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.756',
            longitude: '-120.6263',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_96_20200803143221.jpg'
          },
          {
            id: 97,
            pad_name: 'Space Launch Complex 26B',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4433',
            longitude: '-80.5712',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_97_20200803143224.jpg'
          },
          {
            id: 98,
            pad_name: 'Space Launch Complex 2E',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7516',
            longitude: '-120.6192',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_98_20200803143228.jpg'
          },
          {
            id: 99,
            pad_name: 'Space Launch Complex 12',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.480607',
            longitude: '-80.541938',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_99_20200803143435.jpg'
          },
          {
            id: 100,
            pad_name: 'Mayak-2',
            pad_location: 'Kapustin Yar, Russian Federation',
            latitude: '48.569551',
            longitude: '46.295814',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_100_20200803143212.jpg'
          },
          {
            id: 101,
            pad_name: 'Unknown Pad',
            pad_location: 'Sea Launch',
            latitude: '0.0',
            longitude: '0.0',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_101_20200803143204.jpg'
          },
          {
            id: 102,
            pad_name: '110/38 (110R)',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.962121',
            longitude: '63.310212',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_102_20200803143218.jpg'
          },
          {
            id: 103,
            pad_name: '110/37 (110L)',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.964747',
            longitude: '63.304744',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_103_20200803143220.jpg'
          },
          {
            id: 104,
            pad_name: 'Guam International Airport',
            pad_location: 'Air launch to orbit',
            latitude: '13.483889',
            longitude: '144.797222',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_104_20200803143546.jpg'
          },
          {
            id: 105,
            pad_name: 'Vertical Launch Area',
            pad_location: 'Spaceport America, NM, USA',
            latitude: '32.9901856',
            longitude: '-106.9750602',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_105_20200803143432.jpg'
          },
          {
            id: 106,
            pad_name: 'Taiki-cho, Hokkaido, Japan',
            pad_location: 'Taiki-cho, Hokkaido, Japan',
            latitude: '42.50000000',
            longitude: '143.28333333',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_106_20200803143453.jpg'
          },
          {
            id: 107,
            pad_name: 'Omelek Island',
            pad_location: 'Ronald Reagan Ballistic Missile Defense Test Site, Kwajalein Atoll, Marshall Islands',
            latitude: '9.047861',
            longitude: '167.743',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_107_20200803143450.jpg'
          },
          {
            id: 108,
            pad_name: 'Cosmodrome Site 1A',
            pad_location: 'Vostochny Cosmodrome, Siberia, Russian Federation',
            latitude: '51.884395',
            longitude: '128.333932',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_108_20200803143525.jpg'
          },
          {
            id: 109,
            pad_name: 'Cecil Air and Space Port',
            pad_location: 'Air launch to orbit',
            latitude: '30.224166',
            longitude: '-81.876236',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_109_20200803143535.jpg'
          },
          {
            id: 110,
            pad_name: 'Andersen Air Force Base',
            pad_location: 'Air launch to orbit',
            latitude: '13.581111',
            longitude: '144.924444',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_110_20200803143558.jpg'
          },
          {
            id: 111,
            pad_name: 'Launch Pad A',
            pad_location: 'SpaceX Space Launch Facility, TX, USA',
            latitude: '25.997116',
            longitude: '-97.15503099856647',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg'
          },
          {
            id: 112,
            pad_name: 'Edwards Air Force Base',
            pad_location: 'Air launch to Suborbital flight',
            latitude: '34.905556',
            longitude: '-117.883611',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_112_20200803143214.jpg'
          },
          {
            id: 113,
            pad_name: 'Launch Complex 16',
            pad_location: "Taiyuan, People's Republic of China",
            latitude: '38.868222',
            longitude: '111.58024',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_113_20200803143556.jpg'
          },
          {
            id: 114,
            pad_name: 'LP-3B',
            pad_location: 'Kodiak Launch Complex, Alaska, USA',
            latitude: '57.4304299',
            longitude: '-152.3586347',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_114_20200803145248.jpg'
          },
          {
            id: 115,
            pad_name: 'Unknown Pad',
            pad_location: 'Shahrud Missile Test Site, Islamic Republic of Iran',
            latitude: '36.200792',
            longitude: '55.333892',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_115_20200803143303.jpg'
          },
          {
            id: 116,
            pad_name: 'Space Launch Complex 11',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4755556',
            longitude: '-80.5427496',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_116_20200803143216.jpg'
          },
          {
            id: 117,
            pad_name: 'Space Launch Complex 13',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4859',
            longitude: '-80.546594',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_117_20200803143223.jpg'
          },
          {
            id: 118,
            pad_name: 'Space Launch Complex 18A',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4493',
            longitude: '-80.564494',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_118_20200803143338.jpg'
          },
          {
            id: 119,
            pad_name: 'Space Launch Complex 18B',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4493',
            longitude: '-80.564494',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_119_20200803143226.jpg'
          },
          {
            id: 120,
            pad_name: 'Space Launch Complex 20',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.5122222',
            longitude: '-80.5588607',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_120_20200803143230.jpg'
          },
          {
            id: 121,
            pad_name: 'Space Launch Complex 36A',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4705556',
            longitude: '-80.542194',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_121_20200803143231.jpg'
          },
          {
            id: 122,
            pad_name: 'Space Launch Complex 36B',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4705556',
            longitude: '-80.542194',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_122_20200803143232.jpg'
          },
          {
            id: 123,
            pad_name: 'Space Launch Complex 5',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4394444',
            longitude: '-80.5755273',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_123_20200803143235.jpg'
          },
          {
            id: 124,
            pad_name: 'Ariane Launch Area 2',
            pad_location: 'Kourou, French Guiana',
            latitude: '5.232',
            longitude: '-52.778194',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_124_20200803143241.jpg'
          },
          {
            id: 125,
            pad_name: 'Diamant Launch Area',
            pad_location: 'Kourou, French Guiana',
            latitude: '5.2222222',
            longitude: '-52.7758051',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_125_20200803143236.jpg'
          },
          {
            id: 126,
            pad_name: '32/1',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.9063889',
            longitude: '40.7844727',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_126_20200803143238.jpg'
          },
          {
            id: 127,
            pad_name: '32/2',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.9063889',
            longitude: '40.7844727',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_127_20200803143245.jpg'
          },
          {
            id: 128,
            pad_name: '5',
            pad_location: 'Svobodny Cosmodrome, Russian Federation',
            latitude: '51.7',
            longitude: '127.997806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_128_20200803143250.jpg'
          },
          {
            id: 129,
            pad_name: '175/58',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.051',
            longitude: '62.984806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_129_20200803143247.jpg'
          },
          {
            id: 130,
            pad_name: '200/40',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.0336111',
            longitude: '63.0266949',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_130_20200803143249.jpg'
          },
          {
            id: 131,
            pad_name: '45/2',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.943',
            longitude: '63.650806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_131_20200803143339.jpg'
          },
          {
            id: 132,
            pad_name: '90',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.081',
            longitude: '62.929806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_132_20200803143344.jpg'
          },
          {
            id: 133,
            pad_name: '90/19',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.081',
            longitude: '62.929806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_133_20200803143315.jpg'
          },
          {
            id: 134,
            pad_name: '90/20',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.081',
            longitude: '62.929806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_134_20200803143259.jpg'
          },
          {
            id: 135,
            pad_name: '158',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.9255556',
            longitude: '40.5755838',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_135_20200803143333.jpg'
          },
          {
            id: 136,
            pad_name: '107',
            pad_location: 'Kapustin Yar, Russian Federation',
            latitude: '48.540716',
            longitude: '46.296826',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_136_20200803143342.jpg'
          },
          {
            id: 137,
            pad_name: '107/1',
            pad_location: 'Kapustin Yar, Russian Federation',
            latitude: '48.540716',
            longitude: '46.296826',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_137_20200803143332.jpg'
          },
          {
            id: 138,
            pad_name: '107/2',
            pad_location: 'Kapustin Yar, Russian Federation',
            latitude: '48.540716',
            longitude: '46.296826',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_138_20200803143400.jpg'
          },
          {
            id: 139,
            pad_name: '86/1',
            pad_location: 'Kapustin Yar, Russian Federation',
            latitude: '48.56935',
            longitude: '46.293219',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_139_20200803143345.jpg'
          },
          {
            id: 140,
            pad_name: '86/4',
            pad_location: 'Kapustin Yar, Russian Federation',
            latitude: '48.56935',
            longitude: '46.293219',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_140_20200803143350.jpg'
          },
          {
            id: 141,
            pad_name: 'Brigitte',
            pad_location: 'Interarmy Special Vehicles Test Centre, French Algeria',
            latitude: '30.7787318',
            longitude: '-3.0669721',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_141_20200803143211.jpg'
          },
          {
            id: 142,
            pad_name: 'Unknown Pad',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '40.9605556',
            longitude: '100.2961393',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_142_20200803143244.jpg'
          },
          {
            id: 143,
            pad_name: 'Launch Area 2B',
            pad_location: "Jiuquan, People's Republic of China",
            latitude: '41.306',
            longitude: '100.314',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_143_20200803143313.jpg'
          },
          {
            id: 144,
            pad_name: 'Tai Rui',
            pad_location: "Tai Rui, People's Republic of China",
            latitude: '34.54',
            longitude: '121.117806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_144_20200803143251.jpg'
          },
          {
            id: 145,
            pad_name: 'Naval Air Weapons Station China Lake',
            pad_location: 'Air launch to Suborbital flight',
            latitude: '35.6855556',
            longitude: '-117.6941384',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_145_20200803143330.jpg'
          },
          {
            id: 146,
            pad_name: 'VLS Pad',
            pad_location: 'Alcântara Launch Center, Federative Republic of Brazil',
            latitude: '-2.3177',
            longitude: '-44.369984',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_146_20200803143337.jpg'
          },
          {
            id: 147,
            pad_name: 'Novomoskovsk (K-407)',
            pad_location: 'Sea Launch',
            latitude: '74.000000',
            longitude: '38.000000',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_147_20200803143422.jpg'
          },
          {
            id: 148,
            pad_name: 'Borisoglebsk (K-496)',
            pad_location: 'Sea Launch',
            latitude: '74.0000',
            longitude: '38.0000',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_148_20200803143426.jpg'
          },
          {
            id: 149,
            pad_name: 'Ekaterinburg (K-84)',
            pad_location: 'Sea Launch',
            latitude: '74.000000',
            longitude: '38.0000',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_149_20200803143409.jpg'
          },
          {
            id: 150,
            pad_name: 'Lambda Pad',
            pad_location: 'Uchinoura Space Center, Japan',
            latitude: '31.2523',
            longitude: '131.076306',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_150_20200803143318.jpg'
          },
          {
            id: 151,
            pad_name: 'M-V Pad',
            pad_location: 'Uchinoura Space Center, Japan',
            latitude: '31.251',
            longitude: '131.079806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_151_20200803143425.jpg'
          },
          {
            id: 154,
            pad_name: 'Space Launch Complex 5',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.6080',
            longitude: '-120.6247',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_154_20200803143408.jpg'
          },
          {
            id: 155,
            pad_name: 'San Marco platform',
            pad_location: 'Broglio Space Center, Kenya',
            latitude: '-2.9383333',
            longitude: '40.210306',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_155_20200803143349.jpg'
          },
          {
            id: 156,
            pad_name: 'Space Launch Complex 4W',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.63312',
            longitude: '-120.61584',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_156_20200803143351.jpg'
          },
          {
            id: 157,
            pad_name: 'Point Arguello Launch Complex 2-3',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.63312',
            longitude: '-120.61584',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_157_20200803143359.jpg'
          },
          {
            id: 158,
            pad_name: 'Point Arguello Launch Complex 2-4',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.632',
            longitude: '-120.611',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_158_20200803143440.jpg'
          },
          {
            id: 159,
            pad_name: '131',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.072',
            longitude: '62.953806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_159_20200803143326.jpg'
          },
          {
            id: 160,
            pad_name: '161/35',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.034',
            longitude: '63.060806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_160_20200803143414.jpg'
          },
          {
            id: 161,
            pad_name: '162/36',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.032',
            longitude: '63.064806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_161_20200803143442.jpg'
          },
          {
            id: 162,
            pad_name: '191/66',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.97',
            longitude: '63.194806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_162_20200803143506.jpg'
          },
          {
            id: 163,
            pad_name: '250',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '46.008',
            longitude: '63.302806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_163_20200803143510.jpg'
          },
          {
            id: 164,
            pad_name: '41/15',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.976',
            longitude: '63.666806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_164_20200803143415.jpg'
          },
          {
            id: 165,
            pad_name: '67/21',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.989',
            longitude: '63.702806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_165_20200803143444.jpg'
          },
          {
            id: 166,
            pad_name: '67/22',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            latitude: '45.99',
            longitude: '63.704806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_166_20200803143503.jpg'
          },
          {
            id: 167,
            pad_name: '132/2',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.883',
            longitude: '40.869806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_167_20200803143417.jpg'
          },
          {
            id: 168,
            pad_name: '41/1',
            pad_location: 'Plesetsk Cosmodrome, Russian Federation',
            latitude: '62.941',
            longitude: '40.526806',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_168_20200803143446.jpg'
          },
          {
            id: 169,
            pad_name: 'Launch Complex A',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.6638889',
            longitude: '-120.6044162',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_169_20200803143430.jpg'
          },
          {
            id: 170,
            pad_name: '576B3',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7897222',
            longitude: '-120.5980273',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_170_20200803143421.jpg'
          },
          {
            id: 171,
            pad_name: 'Space Launch Complex 10W',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7652778',
            longitude: '-120.6244162',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_171_20200803143449.jpg'
          },
          {
            id: 172,
            pad_name: '576A2',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7394444',
            longitude: '-120.6213607',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_172_20200803143419.jpg'
          },
          {
            id: 173,
            pad_name: '576A1',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7394444',
            longitude: '-120.6213607',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_173_20200803143418.jpg'
          },
          {
            id: 174,
            pad_name: 'LE-6',
            pad_location: 'Vandenberg SFB, CA, USA',
            latitude: '34.7327778',
            longitude: '-120.5702496',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_174_20200803143354.jpg'
          },
          {
            id: 175,
            pad_name: '101',
            pad_location: "Wenchang Satellite Launch Center, People's Republic of China",
            latitude: '19.614354',
            longitude: '110.948863',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_175_20200803143424.jpg'
          },
          {
            id: 176,
            pad_name: '201',
            pad_location: "Wenchang Satellite Launch Center, People's Republic of China",
            latitude: '19.614354',
            longitude: '110.948863',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_176_20200803143412.jpg'
          },
          {
            id: 177,
            pad_name: 'Unknown Pad',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.9386111',
            longitude: '-75.4594162',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_177_20200803143406.jpg'
          },
          {
            id: 178,
            pad_name: 'Launch Area 3A',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.8495',
            longitude: '-75.4725',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_178_20200803143407.jpg'
          },
          {
            id: 179,
            pad_name: 'Launch Area 5B',
            pad_location: 'RAAF Woomera Range Complex',
            latitude: '-30.9552778',
            longitude: '136.5300282',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_179_20200803143455.jpg'
          },
          {
            id: 180,
            pad_name: 'Launch Area 6A',
            pad_location: 'RAAF Woomera Range Complex',
            latitude: '-30.9552778',
            longitude: '136.5300282',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_180_20200803143508.jpg'
          },
          {
            id: 181,
            pad_name: 'Launch Area 8',
            pad_location: 'RAAF Woomera Range Complex',
            latitude: '-30.9552778',
            longitude: '136.5300282',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_181_20200803143447.jpg'
          },
          {
            id: 182,
            pad_name: '370/11',
            pad_location: 'Dombarovskiy, Russian Federation',
            latitude: '51.0938889',
            longitude: '59.8400282',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_182_20200803143504.jpg'
          },
          {
            id: 183,
            pad_name: '370/13',
            pad_location: 'Dombarovskiy, Russian Federation',
            latitude: '51.0938889',
            longitude: '59.8400282',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_183_20200803143512.jpg'
          },
          {
            id: 184,
            pad_name: 'Unknown Pad',
            pad_location: 'Tonghae Satellite Launching Ground',
            latitude: '40.8557',
            longitude: '129.663606',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_184_20200803143423.jpg'
          },
          {
            id: 185,
            pad_name: 'Rocket Lab Launch Complex 1B',
            pad_location: 'Onenui Station, Mahia Peninsula, New Zealand',
            latitude: '-39.262833',
            longitude: '177.864469',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_185_20200803143540.jpg'
          },
          {
            id: 186,
            pad_name: 'Mobile launch platform',
            pad_location: 'Sea Launch',
            latitude: '35',
            longitude: '123',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_long_march_11_launch_platform_20200901183938.jpg'
          },
          {
            id: 187,
            pad_name: 'Launch Pad B',
            pad_location: 'SpaceX Space Launch Facility, TX, USA',
            latitude: '25.997116',
            longitude: '-97.15503099856647',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg'
          },
          {
            id: 188,
            pad_name: 'Orbital Launch Mount A',
            pad_location: 'SpaceX Space Launch Facility, TX, USA',
            latitude: '25.997116',
            longitude: '-97.15503099856647',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_orbital_launch_mount_a_20210514061342.jpg'
          },
          {
            id: 189,
            pad_name: 'Spaceport Cornwall',
            pad_location: 'Air launch to orbit',
            latitude: '50.4408333',
            longitude: '-4.9974718',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_spaceport_cornwall_20210514102058.jpg'
          },
          {
            id: 190,
            pad_name: 'Mojave Air and Space Port',
            pad_location: 'Air launch to Suborbital flight',
            latitude: '35.0594444',
            longitude: '-118.1538607',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_190_20210522160913.jpg'
          },
          {
            id: 191,
            pad_name: 'Spaceport America',
            pad_location: 'Air launch to Suborbital flight',
            latitude: '32.9902778',
            longitude: '-106.9719162',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_spaceport_america_20210522162030.jpg'
          },
          {
            id: 192,
            pad_name: 'LC-2',
            pad_location: 'Naro Space Center, South Korea',
            latitude: '34.431867',
            longitude: '127.535069',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_lc-2_20210812070305.jpg'
          },
          {
            id: 193,
            pad_name: 'Space Launch Complex 26A',
            pad_location: 'Cape Canaveral, FL, USA',
            latitude: '28.4433',
            longitude: '-80.5712',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_space_launch_complex_26a_20210830170946.jpg'
          },
          {
            id: 194,
            pad_name: 'Launch Complex 36',
            pad_location: 'White Sands Missile Range',
            latitude: '32.416944',
            longitude: '-106.321944',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_complex_36_20210901072730.jpg'
          },
          {
            id: 195,
            pad_name: 'Launch Area 1',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.938611',
            longitude: '-75.457222',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_area_1_20210901085625.jpg'
          },
          {
            id: 196,
            pad_name: 'Launch Area 4',
            pad_location: 'Wallops Island, Virginia, USA',
            latitude: '37.938611',
            longitude: '-75.457222',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_area_4_20210901092808.jpg'
          },
          {
            id: 197,
            pad_name: 'Pad 1',
            pad_location: 'Whalers Way Orbital Launch Complex, South Australia',
            latitude: '-34.937822',
            longitude: '135.630035',
            map_image: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_whalers_way_orbital_launch_complex_20210910042853.jpg'
          }
        ]
      );
    });
};
