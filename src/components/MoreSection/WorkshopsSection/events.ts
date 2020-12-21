type Event = {
  id: string;
  url: string;
  image: string;
  date: string;
  type: 'online' | 'tour' | 'house' | 'retreat';
  locale?: 'he' | 'en';
};

export const events: Event[] = [
  {
    id: '376031080223235',
    url: 'https://www.facebook.com/events/376031080223235/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/123252261_3828208560524507_1174972862474530763_o.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=SfhJKQjmG5wAX9cBN69&_nc_ht=scontent.fsdv3-1.fna&oh=58d7c258b8fcf7dbe8c1d138f088121c&oe=600673CB',
    date: 'Nov 10 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '346135006581979',
    url: 'https://www.facebook.com/events/346135006581979/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/123114012_3828202970525066_6266686351000491604_o.jpg?_nc_cat=106&ccb=2&_nc_sid=340051&_nc_ohc=83izx5sLFrwAX-4tUR9&_nc_ht=scontent.fsdv3-1.fna&oh=94c27fb15e40bfae8343686ef2282eed&oe=6005D19B',
    date: 'Nov 17 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '383640592802406',
    url: 'https://www.facebook.com/events/383640592802406/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/126155843_3884019148276781_848374716032981929_o.jpg?_nc_cat=106&ccb=2&_nc_sid=340051&_nc_ohc=yT7GcGqHDZwAX_x7wK8&_nc_ht=scontent.fsdv3-1.fna&oh=e2783eeffcb6dd7a3b07c1f9e08a022b&oe=600616D7',
    date: 'Nov 24 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '761561041330970',
    url: 'https://www.facebook.com/events/761561041330970/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/121581639_3791226614222702_5702557368295155291_n.jpg?_nc_cat=100&ccb=2&_nc_sid=340051&_nc_ohc=TX_zQe_vX4MAX86GLuN&_nc_oc=AQk8tu-6-PD5X3_sU9WnYE_Gl0MQ532zhcFqiHJgP1UzvmyPfMZplrjeX5VrCQaUWHw&_nc_ht=scontent.fsdv3-1.fna&oh=fcb621427efb3ef5cacc56b743177469&oe=600704F5',
    date: 'Nov 27 2020 11:00:00 GMT+0200',
    type: 'tour',
  },
  {
    id: '2799376593676978',
    url: 'https://www.facebook.com/events/2799376593676978/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/123133959_3828195233859173_7085079587372594774_o.jpg?_nc_cat=104&ccb=2&_nc_sid=340051&_nc_ohc=0dEzSnMWVhIAX-8KbKf&_nc_ht=scontent.fsdv3-1.fna&oh=8cadb16d0372b15a912c66ef6590d3be&oe=60058751',
    date: 'Dec 01 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '3314838828600942',
    url: 'https://www.facebook.com/events/3314838828600942/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119989152_3705927019419329_3406422545089018723_o.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=U1jvsr1v2VEAX_rZFih&_nc_oc=AQml8hr-QVjif1rOYp8J6yRX5QU9YzLGYk-ogVFC2qO-vCQgH8NsBO1HBEiRPPHiiUI&_nc_ht=scontent.fsdv3-1.fna&oh=88a8e52d1562fc19d37212cb45ecfde1&oe=60060AE9',
    date: 'Dec 08 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '1013474255838254',
    url: 'https://www.facebook.com/events/1013474255838254/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/122715697_3815259168486113_4276592808998850122_o.jpg?_nc_cat=107&ccb=2&_nc_sid=340051&_nc_ohc=rVvyTtd2GZ4AX8pwwDk&_nc_ht=scontent.fsdv3-1.fna&oh=29ad640d693f374e0d83c679db61bb8f&oe=600585F9',
    date: 'Dec 11 2020 12:00:00 GMT+0200',
    type: 'house',
  },
  {
    id: '624089721619740',
    url: 'https://www.facebook.com/events/624089721619740/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119939194_3705938016084896_1496433191447806540_o.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=Ch8nyiHHEPYAX_PpHnP&_nc_ht=scontent.fsdv3-1.fna&oh=370b527cd62048b84161387c4628becd&oe=600616F8',
    date: 'Dec 15 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '624365908469804',
    url: 'https://www.facebook.com/events/624365908469804/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/120448015_3736119636400067_8024365479197160601_n.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=yaAeJ9tZlvcAX-S2fQb&_nc_ht=scontent.fsdv3-1.fna&oh=cf53d0b620353763a7045074d67cef27&oe=6007C0FB',
    date: 'Dec 22 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '335776294432008',
    url: 'https://www.facebook.com/events/335776294432008/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/125956058_3881176181894411_190289610102069296_o.jpg?_nc_cat=106&ccb=2&_nc_sid=340051&_nc_ohc=ZLQ4wC_3uf4AX8WIEYS&_nc_ht=scontent.fsdv3-1.fna&oh=f007853b97979848897f02c0af8bdef7&oe=6005660B',
    date: 'Dec 29 2020 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '995435214299746',
    url: 'https://www.facebook.com/events/995435214299746',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/130927617_3949121425099886_6603428162875570403_n.jpg?_nc_cat=100&ccb=2&_nc_sid=340051&_nc_ohc=gsCO6Pd6jFQAX9fwaDd&_nc_ht=scontent.fsdv3-1.fna&oh=609a00fbbbf27daf1743d387ef433525&oe=600450B0',
    date: 'Jan 1, 2021 10:00:00 GMT+0200',
    type: 'retreat',
  },
  {
    id: '1409480316049596',
    url: 'https://www.facebook.com/events/1409480316049596',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/127774333_3909698499042179_3180656173132429118_n.jpg?_nc_cat=106&ccb=2&_nc_sid=340051&_nc_ohc=5-rO9YE8EmEAX8dL3_Y&_nc_ht=scontent.fsdv3-1.fna&oh=4b35b1b596989065e40f9b3b23ee4194&oe=6005FEA1',
    date: 'Jan 8, 2021 11:00:00 GMT+0200',
    type: 'tour',
  },
  {
    id: '3294869070634304',
    url: 'https://www.facebook.com/events/3294869070634304/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/123140333_3828200613858635_2384705949148024558_o.jpg?_nc_cat=101&ccb=2&_nc_sid=340051&_nc_ohc=5NpexCt9PfAAX_bGSvy&_nc_ht=scontent.fsdv3-1.fna&oh=44f89af88775c4630004577a46fe0ae8&oe=600559D3',
    date: 'Jan 12 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '359931955368230',
    url: 'https://www.facebook.com/events/359931955368230/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/120799340_3749656738379690_2251060002229131670_o.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=EI3kkiaFp-sAX-5y8wb&_nc_ht=scontent.fsdv3-1.fna&oh=5c6034bd012fbdf24b305e477af5c60a&oe=60045244',
    date: 'Jan 20 2021 19:00:00 GMT+0200',
    type: 'online',
    locale: 'en',
  },
  {
    id: '331939588081680',
    url: 'https://www.facebook.com/events/331939588081680/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119955159_3706024019409629_7813916585527000957_o.jpg?_nc_cat=104&ccb=2&_nc_sid=340051&_nc_ohc=4nheJE3mQxcAX_WHcpM&_nc_ht=scontent.fsdv3-1.fna&oh=db899a80cb3c98c85853361bc07b9896&oe=6007D711',
    date: 'Jan 26 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '966818803823564',
    url: 'https://www.facebook.com/events/966818803823564/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119950676_3706053852739979_5641692723979994962_o.jpg?_nc_cat=111&ccb=2&_nc_sid=340051&_nc_ohc=GA5ARp7OGygAX_-zqHZ&_nc_ht=scontent.fsdv3-1.fna&oh=bbb2063679a547e2fdd931981192aa8a&oe=60052E85',
    date: 'Feb 2 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '974527733059741',
    url: 'https://www.facebook.com/events/974527733059741/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119921267_3706064226072275_6168553532277884572_o.jpg?_nc_cat=107&ccb=2&_nc_sid=340051&_nc_ohc=P3tredDQC2gAX-KCYqp&_nc_ht=scontent.fsdv3-1.fna&oh=12be2340bc32c04fc5f385a144b47aad&oe=6004F7EC',
    date: 'Feb 9 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '3553265128051458',
    url: 'https://www.facebook.com/events/3553265128051458/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119942677_3705954029416628_6424748226974964570_o.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=oUsAAOR1618AX9nqJCH&_nc_ht=scontent.fsdv3-1.fna&oh=348f6ff8cf04d298ac66d9db07ed2e3a&oe=6005A006',
    date: 'Feb 16 2021 19:00:00 GMT+0200',
    type: 'online',
  },
  {
    id: '821237308644317',
    url: 'https://www.facebook.com/events/821237308644317/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119945692_3706244082720956_4379104131540101490_o.jpg?_nc_cat=109&ccb=2&_nc_sid=340051&_nc_ohc=3JgobrItFa0AX9D1kQk&_nc_ht=scontent.fsdv3-1.fna&oh=564912573ed2344122433366919c24cd&oe=60051382',
    date: 'Feb 23 2021 19:00:00 GMT+0200',
    type: 'online',
  },

  {
    id: '2792107381034313',
    url: 'https://www.facebook.com/events/2792107381034313/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119936382_3706270856051612_6715558972044257408_o.jpg?_nc_cat=103&ccb=2&_nc_sid=340051&_nc_ohc=wPwkAO5YP20AX88cbNp&_nc_ht=scontent.fsdv3-1.fna&oh=3954ba627c062a40c9cb98f2af5e5c0f&oe=60076364',
    date: 'Mar 9 2021 19:00:00 GMT+0200',
    type: 'online',
  },

  {
    id: '612468359441909',
    url: 'https://www.facebook.com/events/612468359441909/',
    image:
      'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/119962585_3706282996050398_7523637108950549441_n.jpg?_nc_cat=110&ccb=2&_nc_sid=340051&_nc_ohc=1dQag8MyD8EAX8P7mJM&_nc_ht=scontent.fsdv3-1.fna&oh=9661e1977bba8e13b6632fec3300e359&oe=6007B56D',
    date: 'Mar 16 2021 19:00:00 GMT+0200',
    type: 'online',
  },
];
