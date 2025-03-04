import React, { useState } from 'react'
import Question from '../components/Question'
import Header from '../components/Header'
import Timer from '../components/Timer'
import Imagevar from '../components/Imagevar'
import { assets } from '../assets/assets'

const Bvar = () => {
  const [searchTerm, setSearchTerm] = useState('') // Состояние для текста поиска
  const questionsData = [
    {
      id: '1',
      text1:
        ' Бір істікшелі Шығыс схемасы және ішкі жүктемесі бар шығыс портының артықшылықтары: //Достоинства порта вывода с однотактной выходной схемой и внутренней нагрузкой: ',
      options: [
        ' Тек бір регистрді басқару керек; // Необходимо управлять только одним регистром; _',
        'Қарапайым схема; // Простая схема_',
        'Возможность без дополнительных схем организовать подключение на одну внешнюю шину несколько таких выходов; _',
        'Простой интерфейс подключения',
        'Возможность интеграции в разные системы',
      ],
    },
    {
      id: '2',
      text1:
        'Сигнал түрі бойынша порттар ажыратылады: // По типу сигнала различают порты: ',
      options: [
        ' Қайта құрылатын // Перестраиваемые _',
        'Аналогтық // Аналоговые Дискретті //_',
        'Қосымша // Дополнительные',
        'Уақытша // Временные',
        'Стационарлық // Стационарные',
      ],
    },
    {
      id: '3',
      text1:
        'Құрылғы параметрлерін таңдау арқылы, мысалы, ADC разрядының сыйымдылығын арттыру арқылы аналогтық сигналдың кванттау қателігін нөлге дейін төмендетуге болатынын көрсетіңіз? // Укажите, можно ли свести к нулю погрешность квантования аналогового сигнала посредством выбора параметров устройства, например за счёт увеличения разрядности АЦП? ',
      options: [
        'Жоқ // Нет _',
        'Иә // Да',
        'Басқа // Другое Мүмкін // Возможно',
        'Анықталмаған // Неопределено Белгісіз // Неизвестно',
        'Уақытша // Временное Тұрақты // Постоянное',
      ],
    },
    {
      id: '4',
      text1:
        ' Если частота сигнала системного генератора для МК равна 8 МГц, то для получения задержки в 100 мс:',
      options: [
        ' можно использовать 16-ти битный таймер счётчик с предделителем 512; +_',
        'счётный регистр 16-ти битного таймера-счётчика с предделителем 512 должен получить 1563 тактовых импульса; +_',
        'период тактового сигнала 16-ти битного таймера счётчика с предделителем 512 равен 0,064 мс.; +_',
        'точность 16-ти битного таймера-счётчика соответствует заданным требованиям; ',
        'таймер-счётчик может быть использован для синхронизации процессов; ',
      ],
    },
    {
      id: '5',
      text1:
        ')Төрт биттік DAC сигналдары (анықтамалық кернеу 3,3 В. кіріс коды: 0101. Шығу кернеуі? // Сигналы четырехразрядного ЦАП (опорное напряжение 3,3 В. Входной код: 0101. Выходное напряжение?  ',
      options: [
        '1,03125 В._',
        '0,9375 В. Минимальное значение',
        '1,125 В. Максимальное значение',
        '1,015 В. Среднее значение',
        '1,05 В. Тестовое значение',
      ],
    },
    {
      id: '6',
      text1:
        'Аналогты-цифрлық түрлендіру кезінде қандай операцияларды орындау керектігін көрсетіңіз? // Укажите, какие операции необходимо выполнить при аналого-цифровом преобразовании?  ',
      options: [
        'Аналогтық сигналдың уақыттық дискретизациясы, оның үлгілерінің деңгейі бойынша кванттау және квантталған деңгейлерді кодтау // Дискретизацию по времени аналогового сигнала, квантования по уровню его отсчётов и кодирование квантованных уровней _',
        'Сигналдың деңгейлік кванттауының дәлдігі кванттау биттерінің санына байланысты // Точность квантования уровня сигнала зависит от числа битов квантования',
        'Сигналдарды кодтау үшін қолданылатын әдістерге сызықтық және логарифмдік кодтау жатады // Методы кодирования сигналов включают линейное и логарифмическое кодирование',
        'Цифрлық сигналды алу үшін квантталған деңгейлер кодталады және сәйкес сандық форматқа ауыстырылады // Для получения цифрового сигнала квантованные уровни кодируются и переводятся в соответствующий цифровой формат',
        'Кванттау және кодтау нәтижелері сигналдың шуы мен бұрмалануына әсер етеді // Результаты квантования и кодирования влияют на шум и искажения сигнала',
      ],
    },
    {
      id: '7',
      text1:
        ' Ішкі үзіліс көздері. Сұраныс қандай перифериялық құрылғы үшін толып кету арқылы жасалады / Внутренние источники прерываний. Запрос вырабатывается по переполнению для какого периферийного устройства  ',
      options: [
        'Таймерлер/есептегіштер // Таймеры/счетчики_',
        'Таймерлердің дәлдігі оның жиілігінен тәуелді // Точность таймеров зависит от их частоты',
        'Есептегіштер уақытты, оқиғаларды және жиілікті өлшеуге қолданылады // Счетчики используются для измерения времени, событий и частоты',
        'Таймерлер микроконтроллерлердің маңызды бөлігі болып табылады // Таймеры являются важной частью микроконтроллеров',
        'Есептегіштердің жұмысын реттеу үшін алдын ала бөлу коэффициенті қолданылады',
      ],
    },
    {
      id: '8',
      text1:
        'Түсіру модулінің көмегімен сіз: // С помощью модуля захвата можно:  ',
      options: [
        'санақ регистрінің мәнін құлаған сигнал фронты бойынша түсіру регистріне сақтау; // сохранить значение счётного регистра в регистр захвата по спадающему фронту сигнала;_',
        'аналогтық компаратордан тиісті сигнал бойынша түсіру регистрінің мәнін санау регистріне сақтау; // сохранить значение регистра захвата в счётный регистр по соответствующему сигналу от аналогового компаратора;_',
        'түсіру регистрінің мәнін өсіп келе жатқан сигнал фронты бойынша салыстыру регистріне сақтаңыз; // сохранить значение регистра захвата в регистр сравнения по нарастающему фронту сигнала;_',
        'санақ регистрінің мәнін сигналдың өсіп келе жатқан фронты бойынша түсіру регистріне сақтау; // сохранить значение счётного регистра в регистр захвата по нарастающему фронту сигнала;_',
      ],
    },
    {
      id: '9',
      text1:
        ' Салыстыру режимінің ерекшеліктері қандай? // Каковы особенности режима сравнения?',
      options: [
        '1-таймерде жұмыс істейді (16 бит) // Работает на таймере 1 (16 бит)_',
        'Түсіру режимінде таймер 1 мәні кіріс пинінде көрсетілген оқиға орын алған кезде CCP_X регистріне көшіріледі. // В режиме захвата значение таймера 1 копируется в регистр CCP_X при возникновении заданного события на входном контакте._',
        'Салыстыру режимінде шығыс әрекеті Таймер 1 және CCP_X мәндері тең болғанда іске қосылады. // В режиме сравнения выходное действие запускается, когда значения Таймера 1 и CCP_X равны._',
        'Импульстар CCP режимінде салыстырылады және PWM режимінде жасалады // Импульсы сравниваются в режиме CCP и генерируются в режиме ШИМ_',
      ],
    },
    {
      id: '10',
      text1: 'ROM модулі-EPROM // Модуль ПЗУ – EPROM  ',
      options: [
        'Пайдаланушы бағдарламалайтын, ультракүлгін немесе рентген сәулелерімен жуылатын ЖҚҚ. Бірнеше рет (бірнеше ондаған рет) қайта бағдарламалауға жол беріледі. // ПЗУ, программируемое пользователем, со стиранием ультрафиолетовыми или рентгеновскими лучами. Допускается многократное перепрограммирование (несколько десятков раз). _',
        'Есте сақтау құрылғысы оқуға тұрақты, бірақ қайта бағдарламалау шектеулі // Устройство памяти устойчиво к чтению, но имеет ограничение на количество перепрограммирований',
        'Бағдарламаланған деректер ұзағырақ уақыт бойы сақталады, бірақ деректерді өшіру көп уақыт алады // Программируемые данные хранятся длительное время, но стирание данных занимает больше времени',
        'Бұл технология көбінесе микроконтроллерлер мен арнайы құрылғыларда қолданылады // Эта технология часто используется в микроконтроллерах и специализированных устройствах',
      ],
    },
    {
      id: '11',
      text1:
        'TF жалаушасынан таймердің жұмыс режимін орнататын кері байланыс тізбегі бар. Бір шот: // От флага TF идет цепь обратной связи, задающая режим работы таймера. Циклический счет с полным циклом:  ',
      options: [
        'толып кеткеннен кейін 0 мәні есептегішке жүктеледі және санау қайтадан басталады. Толық таймер санау циклі 2^k сағат болады, мұндағы k - бит санауыш + пост бөлгіш; // после переполнения в регистр-счетчик загружается значение 0 и счет начинается снова. Полный цикл счета таймера будет 2^k тактов, где k – разрядность счетчик + постделитель;_',
        'Пост бөлгіш мәні санау жылдамдығын төмендету үшін қолданылады // Значение постделителя используется для уменьшения скорости счета',
        'Толып кету оқиғасы арнайы үзіліс сигналын туындатуы мүмкін // Событие переполнения может генерировать специальный сигнал прерывания',
        'Басқару регистрлері арқылы таймердің жұмыс параметрлерін өзгертуге болады // Рабочие параметры таймера можно изменять через управляющие регистры',
      ],
    },
    {
      id: '12',
      text1:
        ' Intel MCS-51 ядросы бар микроконтроллердегі сериялық интерфейс контроллері. 1-Режим // Контроллер последовательного интерфейса в микроконтроллере с ядром Intel MCS-51. Режим 1 ',
      options: [
        '8 бит деректер, асинхронды, айнымалы жылдамдық. 10 бит беріледі: бастау биті, 8 бит деректер (SBUF) және тоқтату биті // 8 бит данных, асинхронный, переменная скорость. Передаются 10 бит: старт-бит, 8 бит данных (SBUF) и стоп-бит _',
        'Айнымалы жылдамдық микроконтроллер қажеттілігіне сәйкес реттеледі // Переменная скорость регулируется в соответствии с требованиями микроконтроллера',
        'SBUF регистрі арқылы деректерді беру мен қабылдау жүзеге асырылады // Передача и приём данных осуществляется через регистр SBUF',
        'Тоқтату биті қате жіберуді болдырмау үшін қолданылады // Стоп-бит используется для предотвращения ошибок передачи',
      ],
    },
    {
      id: '13',
      text1:
        'Қос полярлы анықтамалық кернеу не үшін таңдалғанын көрсетіңіз? // Укажите, для чего выбирают опорное напряжение двуполярным?  ',
      options: [
        'Шығу кезінде әртүрлі кіріс кодтарында талдың екі полярлы кернеуін алу үшін // Чтобы получать на выходе двуполярное напряжение uвых при различных входных кодах _',
        'Полярлы кернеуді өзгерту үшін кері байланыс қолданылады // Для изменения полярного напряжения используется обратная связь',
        'Кернеу шығару дәлдігін арттыру үшін сандық-аналогтық түрлендіргіш қолданылады // Для повышения точности выходного напряжения используется ЦАП',
        'Двухполярное напряжение чаще всего используется в усилителях звуковых сигналов // Екі полярлы кернеу көбінесе дыбыс сигналдарын күшейткіштерде қолданылады',
        'Түзу және кері сигналдың симметриясын қамтамасыз ету маңызды // Важно обеспечить симметрию прямого и обратного сигналов',
      ],
    },
    {
      id: '14',
      text1:
        ' MCS-51, M16C, i386EX процессорларының отбасылары үшін үзілістерді өңдеудің қандай механизмі іске асырылды // Для семейств процессоров MCS-51, M16C, i386EX реализован какой механизм обработки прерываний ',
      options: [
        'Бағдарламаланатын басымдығы бар векторлық // Векторный с программируемым приоритетом _',
        'Үзілістердің басымдығын оңай өзгертуге мүмкіндік береді // Позволяет легко изменять приоритеты прерываний',
        'Көп деңгейлі басқару жүйелері үшін қолданылады // Используется для многоуровневых систем управления',
        'Құрылғылар арасындағы тиімді байланысты қамтамасыз етеді // Обеспечивает эффективное взаимодействие между устройствами',
        'Үзілістерді басқарудың икемділігін арттырады // Повышает гибкость управления прерываниями',
      ],
    },
    {
      id: '15',
      text1:
        ' Таймер_1 жиілігін 4 кГц жиілігіне, fosc микроконтроллерінің жиілігін = 11,0592 МГц жиілігіне реттеңіз. // Настроить частоту таймера_1 на частоту 4 кГц, Частота микроконтроллера Fosc = 11,0592 МГц. ',
      options: [
        'TH1 = FFh, TL1 = 1Ah_',
        'Мекенжай биттері құрылғының дұрыс жұмыс істеуін анықтайды // Биты адреса определяют корректную работу устройства',
        'P0 мекенжайы қосымша функцияларды басқаруға қолданылады // Адрес P0 используется для управления дополнительными функциями',
        'А2 және А1 биттері жад сегменттерін таңдау үшін маңызды // Биты A2 и A1 важны для выбора сегментов памяти',
        'Мекен-жай биттерінің дұрыс конфигурациясы жүйенің тұрақтылығын арттырады // Правильная конфигурация битов адреса повышает стабильность системы',
      ],
    },
    {
      id: '16',
      text1:
        'EEPROM модульдерін адрестеу. AT24C08 // Адресация модулей EEPROM. AT24C08  ',
      options: [
        'Мекен-жай сөзінің алғашқы төрт биті "1010"міндетті тізбегі болып табылады. Әрі қарай, ол тек А2 және А1 адрестерінің биттерін пайдаланады, ал P0 жад бетінің мекен-жайы болып табылады. Құрылғы мекенжайларының екі биті де ұқсас атаулары бар чиптегі шығыстарға сәйкес келеді. 0 шығысы қосылмаған // Первые четыре бита слова адреса представляют собой обязательную последовательность «1010». Далее использует только биты адресов А2 и А1, а P0 представляет собой адрес страницы памяти. Оба бита адресов устройств соответствуют выходам на микросхеме с аналогичными названиями. Вывод А0 не подключен _',
        'Мекенжай биттері құрылғының дұрыс жұмыс істеуін анықтайды // Биты адреса определяют корректную работу устройства',
        'P0 мекенжайы қосымша функцияларды басқаруға қолданылады // Адрес P0 используется для управления дополнительными функциями',
        'А2 және А1 биттері жад сегменттерін таңдау үшін маңызды // Биты A2 и A1 важны для выбора сегментов памяти',
        'Мекен-жай биттерінің дұрыс конфигурациясы жүйенің тұрақтылығын арттырады // Правильная конфигурация битов адреса повышает стабильность системы',
      ],
    },
    {
      id: '17',
      text1:
        ' Егер микроконтроллер үшін жүйелік осциллятор сигналының жиілігі 1 МГц болса, онда 50 мс кідіріс алу үшін: // Если частота сигнала системного генератора для МК равна 1 МГц, то для получения задержки в 50 мс:  ',
      options: [
        'можно использовать 16-ти битный таймер счётчик с предделителем 256;_',
        'счётный регистр 16-ти битного таймера-счётчика с предделителем 256 должен получить 195 тактовых импульсов; +_',
        'период тактового сигнала 16-ти битного таймера счётчика с предделителем 256 равен 0,256 мс.; +_',
        'можно использовать 8-ми битный таймер-счётчик с предделителем 256; +_',
        'счётный регистр 8-ми битного таймера-счётчика с предделителем 256 должен получить 195 тактовых импульсов; +_',
      ],
    },
    {
      id: '18',
      text1:
        ' Логикалық функцияның қандай түрі микроконтроллердің "квази-екі бағытты" шығыстарын біріктіруге мүмкіндік береді? // Какой тип логической функции позволяет реализовать объединение «квазидвунаправленных» выходов микроконтроллера? ',
      options: [
        'AND _',
        'OR логикалық қосу үшін // для логического сложения',
        'NOT мәнді терістеу үшін // для инверсии значения',
        'XOR екі мәннің айырмашылығын анықтау үшін // для определения разницы между двумя значениями',
        'NAND тексеріс үшін пайдаланылады // используется для проверки',
      ],
    },
    {
      id: '19',
      text1:
        ' Егер ADC кернеуінің жоғарғы мәні 10В болса, төменгісі GND-ге тең, ADC сыйымдылығы 12, онда: /Если верхнее значение напряжения АЦП равно 10В, нижнее равно GND, разрядность АЦП равно 12, то ',
      options: [
        ' бұл ADC кем дегенде 2,44 мВ-пен ерекшеленетін аналогтық сигналдарды ажырата алады; / данное АЦП в состоянии различить аналоговые сигналы, отличающиеся не менее чем на 2,44 мВ;_',
        ' Бұл ADC 4096 кванттау деңгейін қолданады; / данное АЦП использует 4096 уровней квантования;_',
        'ADC ажыратымдылығы 2,44 мВ; / разрешение АЦП равно 2,44 мВ;_',
      ],
    },
  ]

  // Фильтрация вопросов по тексту поиска
  const filteredQuestions = questionsData.filter((question) =>
    question.text1.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header vari={'b'} />
      <Timer />
      <div className="mt-10">
        {/* Поле ввода для поиска */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ margin: '20px 0', padding: '10px', width: '30%' }}
          className="fixed bottom-1 right-6 bg-[#eaeaea]"
        />

        {/* Отображение отфильтрованных вопросов */}
        {filteredQuestions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            text1={question.text1}
            options={question.options}
          />
        ))}
      </div>
      <Imagevar img={assets.b_img1} />
      <Imagevar img={assets.b_img2} />
      <Imagevar img={assets.b_img3} />
      <Imagevar img={assets.b_img4} />
      <Imagevar img={assets.b_img5} />
      <Imagevar img={assets.b_img6} />
    </>
  )
}

export default Bvar
