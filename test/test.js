/* global describe */
/* global it */

const should = require('should')
const sw = require('../lib/stopword.js')

describe('general stopwordiness:', function () {
  it('should remove stopwords, should default to english, should preserve case', function () {
    const oldString = 'a really Interesting string with some words'.split(' ')
    const newString = sw.removeStopwords(oldString)
    should.exist(sw.removeStopwords(oldString))
    newString.should.eql([ 'really', 'Interesting', 'string', 'words' ])
  })

  it('should remove custom stopwords', function () {
    const oldString = 'a really interesting string with some words'.split(' ')
    const newString = sw.removeStopwords(oldString, ['interesting'])
    newString.should.eql([ 'a', 'really', 'string', 'with', 'some', 'words' ])
  })

  it('should not remove any stopwords', function () {
    const oldString = 'a really interesting string with some words'.split(' ')
    const newString = sw.removeStopwords(oldString, [])
    newString.should.eql([ 'a', 'really', 'interesting', 'string', 'with', 'some', 'words' ])
  })

  it('should remove stopwords that have a non standard separator', function () {
    const oldString = 'a.really,interesting string.with,some.words'.split(/[\\., ]+/)
    const newString = sw.removeStopwords(oldString)
    newString.should.eql([ 'really', 'interesting', 'string', 'words' ])
  })

  it('should specify a custom input separator', function () {
    const oldString = 'a-really-interesting-string-with-some words'.split('-')
    const newString = sw.removeStopwords(oldString)
    newString.should.eql([ 'really', 'interesting', 'string', 'some words' ])
  })

  it('should remove norwegian stopwords', function () {
    const oldString = 'dette er en tekst som har norske tegn øæåø øæåø æææ'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.no)
    newString.should.eql([ 'tekst', 'norske', 'tegn', 'øæåø', 'øæåø', 'æææ' ])
  })

  it('should remove swedish stopwords and preserve case', function () {
    const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.sv)
    newString.should.eql([ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ])
  })

  it('should remove danish stopwords', function () {
    const oldString = 'gæsterne i musikhuset i aarhus bør fremover sende en venlig tanke til den afdøde købmand herman salling når de skal til koncert eller se teater i det aarhusianske kulturhus æøå'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.da)
    newString.should.eql([ 'gæsterne', 'musikhuset', 'aarhus', 'bør', 'fremover', 'sende', 'venlig', 'tanke', 'afdøde', 'købmand', 'herman', 'salling', 'koncert', 'teater', 'aarhusianske', 'kulturhus', 'æøå' ])
  })

  it('should remove hindu stopwords', function () {
    const oldString = 'केंद्र सरकार पर्यावरण के माकूल घरों ग्रीन होम्स को बढ़ावा देने की दिशा में गंभीरता से सोच रही है। ग्रीन हाउसिंग सोसायटी डिवेलप करने के लिए सरकार सस्ते लोन'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.hi)
    newString.should.eql([ 'केंद्र', 'सरकार', 'पर्यावरण', 'माकूल', 'घरों', 'ग्रीन', 'होम्स', 'बढ़ावा', 'देने', 'दिशा', 'गंभीरता', 'सोच', 'रही', 'है।', 'ग्रीन', 'हाउसिंग', 'सोसायटी', 'डिवेलप', 'सरकार', 'सस्ते', 'लोन' ])
  })

  it('should remove spanish stopwords', function () {
    const oldString = 'los investigadores han analizado el adn de los restos de unos 200 gatos tomados de momias egipcias yacimientos vikingos y cuevas de la edad de piedra entre otros lugares variopintos'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.es)
    newString.should.eql([ 'investigadores', 'han', 'analizado', 'adn', 'restos', 'unos', '200', 'gatos', 'tomados', 'momias', 'egipcias', 'yacimientos', 'vikingos', 'cuevas', 'edad', 'piedra', 'entre', 'otros', 'lugares', 'variopintos' ])
  })

  // Text is first tokenized/split into words with: http://chasen.org/%7Etaku/software/TinySegmenter/
  it('should remove japanese stopwords after being tokenised', function () {
    const oldString = '今 回作っ た リスト で は 校正 待ち と なっ て いる 作品 を 抽出 し 作者 や 作品 名 で の 検索 の ほか 作品 の 長さ さまざまな 理由 で 機械 的 に 処理 でき なかっ た もの は に なっ て しまっ て い ます が やいつ から 校正 待ち に なっ て いる か で 並べ替え が できる よう に し まし た'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.ja)
    newString.should.eql([ '今', '回作っ', 'リスト', '校正', '待ち', '作品', '抽出', '作者', '作品', '名', '検索', '作品', '長さ', 'さまざまな', '理由', '機械', '的', '処理', 'しまっ', 'やいつ', '校正', '待ち', '並べ替え', 'まし' ])
  })

  it('should remove french stopwords', function () {
    const oldString = 'personne à commencer par theresa may n’aurait jamais imaginé une atmosphère aussi plombée un accablement collectif aussi manifeste pour ce qui devait être un jour de gloire'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.fr)
    newString.should.eql([ 'personne', 'commencer', 'theresa', 'may', 'n’aurait', 'jamais', 'imaginé', 'atmosphère', 'aussi', 'plombée', 'accablement', 'collectif', 'aussi', 'manifeste', 'devait', 'jour', 'gloire' ])
  })

  it('should remove italian stopwords', function () {
    const oldString = 'la distruzione del califfato è ancora in corso ma già si è aperta la nuova fase nel duello fra stati uniti e russia in medio oriente'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.it)
    newString.should.eql([ 'distruzione', 'califfato', 'ancora', 'corso', 'già', 'aperta', 'nuova', 'fase', 'duello', 'fra', 'stati', 'uniti', 'russia', 'medio', 'oriente' ])
  })

  it('should remove dutch stopwords', function () {
    const oldString = 'ludovici denkt dat het best kan werken als de gemeente werkloze jongeren aan hen koppelt natuurlijk kunnen ze ook rechtstreeks bij ons aankloppen aldus ludovici'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.nl)
    newString.should.eql([ 'ludovici', 'denkt', 'best', 'werken', 'gemeente', 'werkloze', 'jongeren', 'hen', 'koppelt', 'natuurlijk', 'rechtstreeks', 'aankloppen', 'aldus', 'ludovici' ])
  })

  it('should remove polish stopwords', function () {
    const oldString = 'obecnie zatrzymali już sprzedawcę dopalaczy niespełna letniego chłopaka który usłyszy zarzuty sprzedaży nielegalnych substancji a tym samym narażania życia i zdrowia pokrzywdzonych w tej sprawie jest osób'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.pl)
    newString.should.eql([ 'obecnie', 'zatrzymali', 'sprzedawcę', 'dopalaczy', 'niespełna', 'letniego', 'chłopaka', 'usłyszy', 'zarzuty', 'sprzedaży', 'nielegalnych', 'substancji', 'samym', 'narażania', 'życia', 'zdrowia', 'pokrzywdzonych', 'sprawie', 'osób' ])
  })

  it('should remove portuguese stopwords', function () {
    const oldString = 'já são conhecidas as identidades de algumas das vítimas do incêndio de pedrógão grande em leiria que matou pessoas esta segunda-feira a embaixada de frança divulgou um comunicado onde confirma que um cidadão francês morreu no fogo de pedrógão'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.pt)
    newString.should.eql([ 'são', 'conhecidas', 'identidades', 'algumas', 'vítimas', 'incêndio', 'pedrógão', 'grande', 'leiria', 'matou', 'pessoas', 'segunda-feira', 'embaixada', 'frança', 'divulgou', 'comunicado', 'onde', 'confirma', 'cidadão', 'francês', 'morreu', 'fogo', 'pedrógão' ])
  })

  it('should remove russian stopwords', function () {
    const oldString = 'вопрос троллейбуса не имеет отношения ни к политике ни к чьим-то вкусам уверен директор института экономики транспорта и транспортной политики михаил блинкин есть две большие линии по которым развивается общественный наземный транспорт городов мира рельсы и колеса по первой линии мы преуспели здесь идет мощное развитие достаточно вспомнить трамвай если говорить о второй группе то у нас самый молодой парк автобусов в европе но троллейбусы уходящий вид'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.ru)
    newString.should.eql([ 'вопрос', 'троллейбуса', 'не', 'отношения', 'ни', 'политике', 'ни', 'чьим-то', 'вкусам', 'уверен', 'директор', 'института', 'экономики', 'транспорта', 'транспортной', 'политики', 'михаил', 'блинкин', 'есть', 'две', 'большие', 'линии', 'по', 'которым', 'развивается', 'общественный', 'наземный', 'транспорт', 'городов', 'мира', 'рельсы', 'колеса', 'по', 'первой', 'линии', 'преуспели', 'идет', 'мощное', 'развитие', 'достаточно', 'вспомнить', 'трамвай', 'говорить', 'второй', 'группе', 'то', 'нас', 'молодой', 'парк', 'автобусов', 'европе', 'троллейбусы', 'уходящий', 'вид' ])
  })

  // Text is first tokenized/split into words with: https://github.com/yishn/chinese-tokenizer
  it('should remove chinese simplified stopwords', function () {
    const oldString = '起火 森林 位于 葡萄牙 中部 大 佩 德 罗 冈 市 火灾 发生 在 当地时间 日 时 左右 火势 迅速 向 四周 蔓延 酿成 重大 火灾 夜 之间 在 全国 范围 内 发生 了 大约 起 森林 大火 据 葡萄牙 新闻 报 报道 火灾 已 蔓延 至 莱 里 亚 大 区 的 多个 城镇 围绕 火 源 四 个 方向 的 火势 均 未 得到 控制 其中 有 两面 的 火 情 十分 严峻 伤亡 人数 很 可能 继续 增加'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.zh)
    newString.should.eql([ '起火', '森林', '位于', '葡萄牙', '中部', '大', '佩', '德', '罗', '冈', '市', '火灾', '发生', '当地时间', '左右', '火势', '迅速', '四周', '蔓延', '酿成', '重大', '火灾', '夜', '之间', '全国', '范围', '内', '发生', '大约', '起', '森林', '大火', '据', '葡萄牙', '新闻', '报', '报道', '火灾', '蔓延', '至', '莱', '里', '亚', '大', '区', '多个', '城镇', '围绕', '火', '源', '四', '方向', '火势', '均', '未', '得到', '控制', '其中', '两面', '火', '情', '十分', '严峻', '伤亡', '人数', '可能', '继续', '增加' ])
  })

  it('should remove bengali stopwords', function () {
    const oldString = 'দক্ষিণ এশিয়ার দেশগুলোতে বিদ্যুৎ সরবরাহ বাড়াতে একযোগে কাজ করবে বাংলাদেশ ভারত ও ভুটান জনগণের বিদ্যুৎ চাহিদা মেটাতে ত্রিদেশীয় উদ্যোগের অংশ হিসেবেই এ পদক্ষেপ নেওয়া হচ্ছে এর ফলে বিদ্যুৎ খাতে দক্ষিণ এশিয়ার দেশগুলোতে বিদ্যমান সহযোগিতা একটি নতুন স্তরে উন্নীত হবে এক্ষেত্রে চতুর্থ দেশ হিসেবে এ অঞ্চলের আরেক দেশ নেপালকেও প্রকল্পের অংশীদার করার চেষ্টা চালিয়ে যাবে ঢাকা ও দিল্লি'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.bn)
    newString.should.eql([ 'দক্ষিণ', 'এশিয়ার', 'দেশগুলোতে', 'বিদ্যুৎ', 'সরবরাহ', 'বাড়াতে', 'একযোগে', 'বাংলাদেশ', 'ভারত', 'ভুটান', 'জনগণের', 'বিদ্যুৎ', 'চাহিদা', 'মেটাতে', 'ত্রিদেশীয়', 'উদ্যোগের', 'অংশ', 'হিসেবেই', 'পদক্ষেপ', 'বিদ্যুৎ', 'খাতে', 'দক্ষিণ', 'এশিয়ার', 'দেশগুলোতে', 'বিদ্যমান', 'সহযোগিতা', 'স্তরে', 'উন্নীত', 'এক্ষেত্রে', 'চতুর্থ', 'দেশ', 'হিসেবে', 'অঞ্চলের', 'আরেক', 'দেশ', 'নেপালকেও', 'প্রকল্পের', 'অংশীদার', 'চালিয়ে', 'ঢাকা', 'দিল্লি' ])
  })

  it('should remove german stopwords', function () {
    const oldString = 'In diesem Sommer wird die asymmetrische Demobilisierung nicht mehr gelingen prophezeit Heil Die Menschen wollten Orientierung Angela Merkel hat ihre Partei zu einer One-Woman-Show gemacht die ist unter ihr konzept- und ideenlos geworden Das gelte für die großen Fragen Europas ebenso wie für die Rentenpolitik Zu keiner der großen Fragen hat Angela Merkel eine Antwort nicht zur Flüchtlingskrise nicht zur Bedrohung die Donald Trump darstellt klagte der SPD-Politiker'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.de)
    newString.should.eql([ 'Sommer', 'asymmetrische', 'Demobilisierung', 'gelingen', 'prophezeit', 'Heil', 'Orientierung', 'Angela', 'Merkel', 'Partei', 'One-Woman-Show', 'konzept-', 'ideenlos', 'gelte', 'Fragen', 'Europas', 'Rentenpolitik', 'Fragen', 'Angela', 'Merkel', 'Antwort', 'Flüchtlingskrise', 'Bedrohung', 'Donald', 'Trump', 'darstellt', 'klagte', 'SPD-Politiker' ])
  })

  it('should remove brazilian portuguese stopwords', function () {
    const oldString = 'agora já são conhecidas as identidades de algumas das vítimas do incêndio de pedrógão grande em leiria que matou pessoas esta segunda-feira a embaixada de frança divulgou um comunicado onde confirma que um cidadão francês morreu no fogo de pedrógão'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.br)
    newString.should.eql(['conhecidas','identidades','vítimas','incêndio','pedrógão','leiria','matou','pessoas','segunda-feira','embaixada','frança','divulgou','comunicado','confirma','cidadão','francês','morreu','fogo','pedrógão'])
  })
  
  it('should remove punjabi gurmukhi stopwords', function () {
    const oldString = 'ਅਫਗਾਨੀਸਤਾਨ ਦੇ ਲਈ ਇੰਟਰਨੈੱਟ ਦਾ ਟਾੱਪ-ਲੈੱਵਲ ਡੋਮੇਨ ਦੇਸ਼ ਕੋਡ ਹੈ ਇਹ ਡੋਮੇਨ ਏ ਐਫ ਜੀ ਐਨ ਆਈ ਸੀ ਦੇ ਦੁਆਰਾ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ, ਜੋ ਅਫਗਾਨੀ ਸਰਕਾਰ ਅਤੇ ਯੂਨਾਈਟਡ ਨੇਸ਼ਨਜ਼ ਦੇ ਥੱਲੇ ਆਂਦਾ ਹੈ'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.pa_in)
    newString.should.eql(['ਅਫਗਾਨੀਸਤਾਨ', 'ਇੰਟਰਨੈੱਟ', 'ਟਾੱਪ-ਲੈੱਵਲ', 'ਡੋਮੇਨ', 'ਕੋਡ', 'ਡੋਮੇਨ', 'ਐਫ', 'ਐਨ', 'ਚਲਾਇਆ', 'ਹੈ,', 'ਅਫਗਾਨੀ', 'ਯੂਨਾਈਟਡ', 'ਨੇਸ਼ਨਜ਼', 'ਥੱਲੇ', 'ਆਂਦਾ'])
  })

  it('should remove myanmar stopwords', function () {
    const oldString = ''.split(' ')
    const newString = sw.removeStopwords(oldString, sw.my)
    newString.should.eql([''])
  })

  it('should remove swahili stopwords', function () {
    const oldString = 'kila mtu anaweza kuhariri makala yoyote kutoa makosa ya lugha kutohoa maneno na kuendeleza na kukuza makala kwa kuandika kwa ufupi au kwa urefu'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.sw)
    newString.should.eql(['mtu','anaweza','kuhariri','makala','yoyote','makosa','lugha','kutohoa','maneno','kuendeleza','kukuza','makala','kuandika','ufupi','urefu'])
  })

  
  
  // Right to Left languages
  it('should remove arabic stopwords', function () {
    const oldString = 'ورغم أن الحملة توقفت بقينا نتسلق سلّم الأمل نظن أن الحكومة تسبقنا نحو القمة لكننا صعقنا بتوقف الحملة عند أسماء بعينها وكأن الفساد اقتصر على شفيق جراية ومن معه من مهربين؛ لكن الأفظع هو أن ملف شفيق جراية ليس ملف فساد بل ملف تآمر وهو ما يعني أنّ الحكومة غالطت الجميع وجندت التونسيين لحرب واهية تجاهلت فيها الفساد الحقيقي الذي ظهر على شخصيات كثيرة في مقدمتها الأمين العام لحركة مشروع تونس محسن مرزوق'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.ar)
    newString.should.eql([ 'ورغم' ,'الحملة' ,'توقفت' ,'بقينا' ,'نتسلق' ,'سلّم' ,'الأمل' ,'نظن' ,'الحكومة' ,'تسبقنا' ,'القمة' ,'لكننا' ,'صعقنا' ,'بتوقف' ,'الحملة' ,'أسماء' ,'بعينها' ,'وكأن' ,'الفساد' ,'اقتصر' ,'شفيق' ,'جراية' ,'معه' ,'مهربين؛' ,'الأفظع' ,'ملف' ,'شفيق' ,'جراية' ,'ليس' ,'ملف' ,'فساد' ,'ملف' ,'تآمر' ,'يعني' ,'أنّ' ,'الحكومة' ,'غالطت' ,'الجميع' ,'وجندت' ,'التونسيين' ,'لحرب' ,'واهية' ,'تجاهلت' ,'الفساد' ,'الحقيقي' ,'ظهر' ,'شخصيات' ,'كثيرة' ,'مقدمتها' ,'الأمين' ,'العام' ,'لحركة' ,'مشروع' ,'تونس' ,'محسن' ,'مرزوق' ])
  })

  it('should remove farsi stopwords and preserve case', function () {
    const oldString = 'در این بیانیه آمده است که اتو قادر به صحبت کردن، قادر به دیدن و قادر به عکس العمل نشان دادن به درخواست های شفاهی نبود'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.fa)
    newString.should.eql([ 'در' ,'این' ,'بیانیه' ,'آمده' ,'است' ,'که' ,'اتو' ,'قادر' ,'به' ,'صحبت' ,'کردن،' ,'قادر' ,'به' ,'دیدن' ,'قادر' ,'به', 'عکس' ,'العمل' ,'نشان' ,'دادن' ,'به' ,'درخواست' ,'های' ,'شفاهی' ,'نبود' ])
  })

  it('should remove hebrew stopwords and preserve case', function () {
    const oldString = 'אז מה קורה חברים אני מחר הולך לטייל בבוקר'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.he)
    newString.should.eql([ 'קורה', 'חברים', 'מחר', 'הולך', 'לטייל', 'בבוקר' ])
  })

})

describe('error handling', function () {
  it('should return throw an error if specified language is not supported', function () {
    (function () {
      sw.getStopwords('xx')
    }).should.throw()
  })
})
