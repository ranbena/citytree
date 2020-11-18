type Event = {
  id: string;
  url: string;
  image: string;
  date: string;
  type: 'online' | 'tour' | 'house';
  locale?: 'he' | 'en';
};

export const events: Event[] = [
  {
    id: '376031080223235',
    url: 'https://www.facebook.com/events/376031080223235/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/123252261_3828208560524507_1174972862474530763_o.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=o4hcpyU6MvEAX_NKti0&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=fd43f414b8fee7a3b34f92500c964678&oe=5FD9C9E5',
    date: 'Nov 10 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '346135006581979',
    url: 'https://www.facebook.com/events/346135006581979/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/123114012_3828202970525066_6266686351000491604_o.jpg?_nc_cat=106&ccb=2&_nc_sid=340051&_nc_ohc=ojUkirwpsXUAX98Or-v&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=8bfd7fc01df5541e9b41ffb2cdb7d987&oe=5FDC56B5',
    date: 'Nov 17 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '383640592802406',
    url: 'https://www.facebook.com/events/383640592802406/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119937915_3705977466080951_7712573951628130296_o.jpg?_nc_cat=104&ccb=2&_nc_sid=340051&_nc_ohc=TXNYKBHPfj0AX_4yA7Y&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=090d94f592fab2be043dcd15344797d7&oe=5FDB7021',
    date: 'Nov 24 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '761561041330970',
    url: 'https://www.facebook.com/events/761561041330970/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/p526x296/121581639_3791226614222702_5702557368295155291_n.jpg?_nc_cat=100&ccb=2&_nc_sid=340051&_nc_ohc=g9T0niT59nMAX96Uv9V&_nc_oc=AQlJQ2HFR_QeK0l6gL3GH2o-08q3CrFbFPFx3pukN_Dh3Vp81ul2kfrejYpsVj4O3IY&_nc_ht=scontent.fsdv3-1.fna&tp=6&oh=42143fb05e6be5520f12a44c5e30c5e2&oe=5FDB129C',
    date: 'Nov 27 2020 11:00:00.000+02:00',
    type: 'tour',
  },
  {
    id: '2799376593676978',
    url: 'https://www.facebook.com/events/2799376593676978/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/123133959_3828195233859173_7085079587372594774_o.jpg?_nc_cat=104&ccb=2&_nc_sid=340051&_nc_ohc=qpsTgOCJNLAAX8PlLFN&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=0a22fe7504b977c7eb2533f7cc7adc72&oe=5FDA617F',
    date: 'Dec 01 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '3314838828600942',
    url: 'https://www.facebook.com/events/3314838828600942/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119989152_3705927019419329_3406422545089018723_o.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=5yH4EhGxRKMAX-lthow&_nc_oc=AQk87coXoJn-2DuTXoQFaEWVaoifZ-njJsELilu-4FpX9Molt0WsnlNI5fhnSCUn5u0&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=e89a7575b3f52991996c7a7bc69d6cfa&oe=5FD907C7',
    date: 'Dec 08 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '1013474255838254',
    url: 'https://www.facebook.com/events/1013474255838254/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/122715697_3815259168486113_4276592808998850122_o.jpg?_nc_cat=107&ccb=2&_nc_sid=340051&_nc_ohc=BT0F4cAjzukAX-tZHkd&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=52c58c6a2297a6061a926e83ce959c7d&oe=5FDBA2D7',
    date: 'Dec 11 2020 12:00:00.000+02:00',
    type: 'house',
  },
  {
    id: '624089721619740',
    url: 'https://www.facebook.com/events/624089721619740/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119939194_3705938016084896_1496433191447806540_o.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=psq3A0l7s1AAX9bU91c&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=61e9a8cfbcca71a21c2cb13645e3e6e9&oe=5FD9005A',
    date: 'Dec 15 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '624365908469804',
    url: 'https://www.facebook.com/events/624365908469804/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/120448015_3736119636400067_8024365479197160601_n.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=WAZGThgWF50AX909ouX&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=40bd5387c150bcf668886ab7c83002f9&oe=5FD96255',
    date: 'Dec 22 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '335776294432008',
    url: 'https://www.facebook.com/events/335776294432008/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119953756_3706273346051363_6465286044402436575_o.jpg?_nc_cat=104&ccb=2&_nc_sid=340051&_nc_ohc=8Qpqow5kPggAX8qua1g&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=167b35e3ca17e5479b998622bb654c29&oe=5FDBFED2',
    date: 'Dec 29 2020 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '3294869070634304',
    url: 'https://www.facebook.com/events/3294869070634304/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/123140333_3828200613858635_2384705949148024558_o.jpg?_nc_cat=101&ccb=2&_nc_sid=340051&_nc_ohc=rfbOB6rBvhoAX_SfFl8&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=7578794295649819307e45c54e392285&oe=5FDB42FD',
    date: 'Jan 12 2021 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '359931955368230',
    url: 'https://www.facebook.com/events/359931955368230/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/120799340_3749656738379690_2251060002229131670_o.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=t4enNEkux0oAX9o5UAK&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=3cbecaee498ab7beae8efeab989919a5&oe=5FD977EE',
    date: 'Jan 20 2021 19:00:00.000+02:00',
    type: 'online',
    locale: 'en',
  },
  {
    id: '331939588081680',
    url: 'https://www.facebook.com/events/331939588081680/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119955159_3706024019409629_7813916585527000957_o.jpg?_nc_cat=104&ccb=2&_nc_sid=340051&_nc_ohc=qIS84tHgM_8AX-kCXsf&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=bdc02ab79560a816dceaf138b60548fd&oe=5FD9B53F',
    date: 'Jan 26 2021 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '966818803823564',
    url: 'https://www.facebook.com/events/966818803823564/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119950676_3706053852739979_5641692723979994962_o.jpg?_nc_cat=111&ccb=2&_nc_sid=340051&_nc_ohc=laeuhz3bGVsAX8VK-Aq&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=5c31e774d77dbf2c93de8a8a603326f9&oe=5FD9972B',
    date: 'Feb 2 2021 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '974527733059741',
    url: 'https://www.facebook.com/events/974527733059741/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119921267_3706064226072275_6168553532277884572_o.jpg?_nc_cat=107&ccb=2&_nc_sid=340051&_nc_ohc=aZbgqDlsbjAAX_Ohy8H&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=cc226ca7b19f5a44aac9fe73748f4b09&oe=5FD92A46',
    date: 'Feb 9 2021 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '3553265128051458',
    url: 'https://www.facebook.com/events/3553265128051458/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s480x480/119942677_3705954029416628_6424748226974964570_o.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=_LiXTLBlPnQAX81f8NY&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=fb23fb255ab79781d26758ed437ed410&oe=5FDC06B2',
    date: 'Feb 16 2021 19:00:00.000+02:00',
    type: 'online',
  },
  {
    id: '821237308644317',
    url: 'https://www.facebook.com/events/821237308644317/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119945692_3706244082720956_4379104131540101490_o.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=Haqi_fYVIJgAX_gnquI&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=6f04dfb0cf8bc064185c778f84b62eda&oe=5FDC31B0',
    date: 'Feb 23 2021 19:00:00.000+02:00',
    type: 'online',
  },

  {
    id: '2792107381034313',
    url: 'https://www.facebook.com/events/2792107381034313/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119936382_3706270856051612_6715558972044257408_o.jpg?_nc_cat=103&ccb=2&_nc_sid=340051&_nc_ohc=L_MdCLm813QAX_FnlIn&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=e621a671df9fa185567b84c4c2cdcc3c&oe=5FDB4C4E',
    date: 'Mar 9 2021 19:00:00.000+02:00',
    type: 'online',
  },

  {
    id: '612468359441909',
    url: 'https://www.facebook.com/events/612468359441909/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-0/s526x296/119962585_3706282996050398_7523637108950549441_n.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=TIxTFvrrzvsAX9LA8nw&_nc_ht=scontent.fsdv3-1.fna&tp=7&oh=7483ace7a952f4c15b2d8b1aa08abece&oe=5FD9C7C3',
    date: 'Mar 16 2021 19:00:00.000+02:00',
    type: 'online',
  },
];
