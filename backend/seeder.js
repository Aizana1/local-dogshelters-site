import mongoose from 'mongoose'
import {Pet} from './server.js'
mongoose.pluralize(null)

async function main() {
  await mongoose.connect('mongodb://localhost:27017/pets-base', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  const pets = [
    {
      name: "Бумер",
      type: "Собака",
      image: "https://sun9-10.userapi.com/impg/pY-4skltI7-YJrL3LwtrJWj_P2QntWMOq0O3-w/dclw6rPVhc4.jpg?size=960x1280&quality=96&sign=fd9caa9a36b74eab1171d46b39e6a88a&type=album",
      alt: "Бумер",
      gender: "Мальчик",
      breed: "Метис терьера",
      age: 1,
      description: "Бумер - один из немногих щеночков в приюте. Ему нет ещё и года. Собакену нужно особое внимание хозяина, чуткая забота, чтоб не было страшно в этом большом-большом мире… Некрупный мальчишка, чудесный чёрныш с тонной обаяния и хорошей перспективой к обучению и развитию. Очень милый. Обнимательный."
    },
    {
      name: "Школьник",
      type: "Собака",
      image: "https://sun9-62.userapi.com/impg/0RJ9M1CJlOhFiYlMrRsNIZFPBE4wYyh0m3vA3Q/jGZIo7lf504.jpg?size=800x1200&quality=96&sign=0b6b2ff3546646f105da18c5a1e95f61&type=album",
      alt: "Школьник",
      gender: "Мальчик",
      breed: "Дворняга",
      age: 6,
      description: "Возраст: преклонный (точно неизвестен) 📍Привит, стерилизован. Размером небольшой, легкая хромота на переднюю лапку (последствия скитаний), в целом здоров✅ Был найден на остановке Школьная, Уфа."
    },
    {
      name: "Тимон",
      type: "Собака",
      image: "https://sun9-74.userapi.com/impg/BeHgHB8eoE_Op3syjpJJ719sA23Yzf7sVrRlZQ/vuI1szZkhAk.jpg?size=1440x2160&quality=96&sign=94bc89349f6aa43e5b4926e22210348b&type=album",
      alt: "Тимон",
      gender: "Мальчик",
      breed: "Неизвестно",
      age: 1,
      description: "Щенок дружелюбный и жадный до жизни и внимания!Ему сейчас 8 месяцев. Привит. Есть ветпаспорт. Будет среднего роста, коренастый."
    },
    {
      name: "Харитон",
      type: "Собака",
      image: "https://sun9-33.userapi.com/impg/k6FtA7dVW0SuubgG62ppvimdQc-jZCdREvAvRA/n3NcPdvSeLk.jpg?size=1728x2160&quality=96&sign=05c3f0463f41580811c3386241e76c32&type=album",
      alt: "Харитон",
      gender: "Мальчик",
      breed: "Смесь терьера",
      age: 1,
      description: "Харитоше чуть меньше года. Выхожен волонтёрном. Навеки отдал своё сердце людям - контрактный, веселый, счастливый от любого внимания! Обработан от паразитов, привит. Вырос некрупный. Подойдёт для квартиры/дома, но главное для хорошего человека."
    },
    {
      name: "Глафира",
      type: "Собака",
      image: "https://sun9-41.userapi.com/impg/c1KQCzK1bMLIbNEIan_yXipnr_qa7e9vVQ_CYA/o3g6HhPYHyo.jpg?size=1620x2160&quality=96&sign=f0653aa35cde4bcd1cea84f1be97de4d&type=album",
      alt: "Харитон",
      gender: "Девочка",
      breed: "Дворняга",
      age: 1,
      description: "Глафира из неказистого щенка превратилась в миниатюрную, но благородную дамочку 😍 Ушки встали - для дворняжки это очень классный бонус, характер Глаша показывает послушный и при желании может овладеть навыками собаки-компаньона."
    },
    {
      name: "Чип",
      type: "Собака",
      image: "https://sun9-72.userapi.com/impf/c855428/v855428211/bfff0/TsK-ia1N55g.jpg?size=1620x2160&quality=96&sign=759b3a3b7f733b2d011539948a7f2cc7&type=album",
      alt: "Чип",
      gender: "Мальчик",
      breed: "Дворняга",
      age: 1,
      description: "Чип - обаятельный кобелёк. Он молод, но точный возраст его неизвестен по причине того, что его нашли на улице без документов, а хозяин (бывший) так и не нашелся. Чипуля здоров. Он обладает спокойным устойчивым нравом. В меру активный. Из всех собак приюта, где содержится Чип сейчас, выделяется уравновешенностью. В обиду не даст ни себя, ни своего хозяина, хоть и росточком чуть больше таксы:) При этом сам совершенно не агрессивен. Просто четко разделяет окружающих на своих и чужих. С чужими ведет себя ровно, спокойно, немного настороженно. А вот со своими - просто обаятельный и дружелюбный, любит, когда ему гладят пузо. Очень радуется при встрече с волонтёрами и грустно лает при расставании… "
    },
    {
      name: "Ириска",
      type: "Собака",
      image: "https://sun9-58.userapi.com/impg/tQctCqnFqejig1LwQ_5jAIWMDmUuG3q9SE13lQ/unEGiip97r8.jpg?size=784x1080&quality=96&sign=2522728f1b4f79b356f84a4be08ebc04&type=album",
      alt: "Ириска",
      gender: "Девочка",
      breed: "Дворняга",
      age: 1,
      description: "Ириска молода, активна, весела, привита, имеет ветпаспорт и стерилизована. Не крупная. Может стать лучшим другом 💗скорее открывайте своё сердце чему-то новому в жизни. Собака - это, конечно и ответственность, но и новый, незабываемый этап жизни. А для неё вы будете целой жизнью."
    },
    {
      name: "Добрый Волк",
      type: "Собака",
      image: "https://sun9-18.userapi.com/impg/4Zfog0gCCjicHHVYRxlxwuVTu6ekIMugoQBlCQ/KqLVMWA9IZ4.jpg?size=1080x911&quality=96&sign=ee2ab0f89c4165a23a41d03ac1bd5ce8&type=album",
      alt: "Добрый Волк",
      gender: "Мальчик",
      breed: "маламут метис",
      age: 5,
      description: "Пристраивается красавец маламут метис, довольно крупный, но добрый. Кличка Добрый Волк, возраст думаю не меньше 4-5 лет, охранять не умеет, хочет чтобы наоборот охраняли и играли с ним. Требует очень много внимания, кушает с большим аппетитом, отдается с отслеживанием судьбы ответственным людям. Обязательное условие просторный вольер и реальная оценка своих возможностей содержания"
    },
    {
      name: "Баффи",
      type: "Собака",
      image: "https://sun9-13.userapi.com/impg/NzFZdUCxLlzkxxd6hSznUAnGnG0ArUIBPwJDlQ/PukoIYKiFzI.jpg?size=800x1200&quality=96&sign=4a08a50184027854db4b0bf23337b59c&type=album",
      alt: "Баффи",
      gender: "Девочка",
      breed: "метис породы маламут",
      age: 1,
      description: "Это молодая собака по кличке Баффи (метис породы маламут). Без документов. Баффи нашли в пригороде, напуганную.Сейчас девочка помещена в приют, где очень стрессует, единственные условия, которые мы можем ей предоставить - это будка и цепь, но такой породе нужен вольер с возможностью свободного перемещения. Собачку мы кастрировали. Отдаётся в квартиру или в частный дом, строго не на цепь!"
    },
    {
      name: "Петя",
      type: "Собака",
      image: "https://sun9-56.userapi.com/impg/iTI3IXtKSCZDBX8zZCl4oB-HBEKU5kMjqxSFPA/7XgITPdUXJs.jpg?size=1600x1200&quality=96&sign=8d86649c2d1a401ef5b54bad6d74a5b7&type=album",
      alt: "Петя",
      gender: "Мальчик",
      breed: "Дворняга",
      age: 3,
      description: "Характер: настоящий охранник, но верный друг для \"своих\". Благодарный, сообразительный. Среднего размера, кастрированный, привит от бешенства. Особенности: нужно будет уделить время дрессировке — собака жила на привязи, её нужно будет обучить прогулкам. В остальном, с ним легко подружиться."
    },
    {
      name: "Леся",
      type: "Собака",
      image: "https://sun9-84.userapi.com/impg/3l74yrX8TDVqpo5pKhk8cdOwoJy67krwW8JbAA/g1-whlwA5og.jpg?size=1600x1200&quality=96&sign=57312dfd4327451aeb4d0abb7eb0e77e&type=album",
      alt: "Леся",
      gender: "Девочка",
      breed: "овчарка",
      age: 1,
      description: "Она девочка некрупная, вполне может жить даже в квартире;  🌸 Леся - очень ласковая и безумно любит находиться рядом с человеком, прижимается к знакомым волонтерам, пытается обратить на себя внимание, чтобы от неё не уходили к другим собакам во время посещения приюта;  🌸 внешне Леся действительно напоминает овчарку, но все черты у неё очень мягкие;"
    },
    {
      name: "Аврора",
      type: "Собака",
      image: "https://sun9-11.userapi.com/impg/BlIpBC8XJVlFtBOkGl9E5vCNJyham4qyLwU_hw/twX4YnVL8Xg.jpg?size=1080x982&quality=96&sign=4a39288313009e709eb389af5d1cced7&type=album",
      alt: "Аврора ",
      gender: "Девочка",
      breed: "овчарка",
      age: 1,
      description: "Самое первое, что нужно сказать об Авроре - она совсем не крупная, одна из самых мелких собак в приюте, а ещё она очень добрая, контактная. У Авроры курносый носик и красивого цвета карие яркие глаза. Шерсть серенькая. Стерилизована, привита, обработана от паразитов. Есть ветпаспорт. "
    },
    {
      name: "Паркер",
      type: "Собака",
      image: "https://sun9-4.userapi.com/impg/Z1wAOa9rHidTIzIS-1H9Yu4ApoiMq0z8A40QnQ/M17QtGYIGis.jpg?size=1620x2160&quality=96&sign=400320a030d958152d88419a84c9b55e&type=album",
      alt: "Паркер",
      gender: "Мальчик",
      breed: "Дворняга",
      age: 2,
      description: "Паркер - он и его брат Петя - наши самые лучшие охранники в приюте. Но Паркер будет не только отличным охранником, но и другом и компаньоном на прогулках, обожает набегаться от души и нарезвиться. При этом очень уважает доброту и общение с человеком, с удовольствием посидит рядом, выслушает-повздыхает."
    }

  ];
  
  await Pet.insertMany(pets);
  await mongoose.connection.close();
}

main();
