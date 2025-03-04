import React, { useState } from 'react'
import Question from '../components/Question'
import Header from '../components/Header'
import Timer from '../components/Timer'
const Cvar = () => {
  const [searchTerm, setSearchTerm] = useState('') // Состояние для текста поиска
  const questionsData = [
    {
      id: '1',
      text1: ' К входам D3D2D1D0 счетчика приложены сигналы 0111',
      options: [
        '5В_',
        '3,3В минимальное напряжение',
        '5,5В максимальное напряжение',
        '4,8В среднее значение',
        '5,0В стандартное значение',
      ],
    },
    {
      id: '2',
      text1: 'Достоинства порта вывода с двухэтапной схемой  ',
      options: [
        'Простая схема_',
        'Маңызды максималды ағын («0» күйінде) және ағын («1» күйінде) Шығыс тоғы_',
        'Қарапайым схемадағы тұрақты кедергі // Постоянное сопротивление в простой схеме',
        'Шығыс тогын бақылау үшін RL резисторы қолданылады // Резисторы RL используются для контроля выходного тока',
        'Тұрақтылықты арттыру үшін қосымша элементтер қосылады // Для повышения стабильности добавляются дополнительные элементы',
      ],
    },
    {
      id: '3',
      text1:
        'Недостатки порта вывода с однократной выходной схемой и внутренней нагрузкой ',
      options: [
        'Малый вытекающий ток (в состоянии «1»), ограниченный резистором RL – сотни uA._',
        'Простая схема_',
        'Для ограничения тока применяются резисторы',
        'Энергопотребление сведено к минимуму',
      ],
    },
    {
      id: '4',
      text1: ' Каковы ключевые особенности Capture Compare',
      options: [
        '1-таймерде жұмыс істейді (16 бит) // Работает на таймере 1 (16 бит)_',
        'Түсіру режимінде таймер 1 мәні кіріс пинінде көрсетілген оқиға орын алған кезде CCP_X регистріне көшіріледі. // В режиме захвата значение таймера 1 копируется в регистр CCP_X при возникновении заданного события на входном контакте._',
        'Салыстыру режимінде шығыс әрекеті Таймер 1 және CCP_X мәндері тең болғанда іске қосылады. // В режиме сравнения выходное действие запускается, когда значения Таймера 1 и CCP_X равны._',
        'Импульстар CCP режимінде салыстырылады және PWM режимінде жасалады // Импульсы сравниваются в режиме CCP и генерируются в режиме ШИМ_',
      ],
    },
    {
      id: '5',
      text1: ' Классификация ЦАП',
      options: [
        'Дәйекті // Последовательные_',
        'PWM // ШИМ_',
        'Зарядтардың қосындысымен // С суммированием зарядов_',
        'Сигма-дельта // Сигма-дельта_',
        'Токтардың қосындысымен // С суммированием токов_',
        'Параллель // Параллельные_',
        'Ауыстырылатын конденсаторларда // На переключаемых конденсаторах_',
        'Кернеулерді қосумен // С суммированием напряжений_',
      ],
    },
    {
      id: '6',
      text1:
        'Настройка таймера на заданную частоту. Требуется получить частоту 20КГц. Частота микроконтроллера 16МГц',
      options: [
        '1024_',
        '512 минимальная разрядность',
        '128 шагов между уровнями',
        '256 бит для базового уровня',
      ],
    },
    {
      id: '7',
      text1:
        ' Если верхнее значение АЦП равно 4,8В, нижнее равно GND, разрядность АЦП равно 12',
      options: [
        'около 1,172 мВ на уровень (LSB) и 4096 уровней квантования. Если у вас был именно такой ответ, значит вы ответили правильно._',
        'Шаг квантования пропорционален диапазону входного сигнала',
        'Для увеличения разрешения можно использовать больше бит',
        'Низкое энергопотребление обеспечивает стабильность',
        'Максимальная точность при минимальном шуме',
      ],
    },
    {
      id: '8',
      text1:
        ' Какая операция чтения/записи в модулях EPROM изображена на схеме',
      options: [
        'Чтение с текущего адреса_',
        'Устройство поддерживает последовательное чтение',
        'Быстрая обработка больших данных',
        'Поддержка случайного доступа',
      ],
    },
    {
      id: '9',
      text1: ' Каковы ключевые особенности Capture Compare',
      options: [
        '1-таймерде жұмыс істейді (16 бит) // Работает на таймере 1 (16 бит)_',
        'Түсіру режимінде таймер 1 мәні кіріс пинінде көрсетілген оқиға орын алған кезде CCP_X регистріне көшіріледі. // В режиме захвата значение таймера 1 копируется в регистр CCP_X при возникновении заданного события на входном контакте._',
        'Салыстыру режимінде шығыс әрекеті Таймер 1 және CCP_X мәндері тең болғанда іске қосылады. // В режиме сравнения выходное действие запускается, когда значения Таймера 1 и CCP_X равны._',
        'Импульстар CCP режимінде салыстырылады және PWM режимінде жасалады // Импульсы сравниваются в режиме CCP и генерируются в режиме ШИМ_',
      ],
    },
    {
      id: '10',
      text1:
        ' Настройка таймера на заданную частоту. Требуется получить частоту 10КГц. Частота микроконтроллера 16МГц',
      options: [
        ' 512_',
        '1024 расширенная память',
        '128 зарезервировано для системных нужд',
        '2048 максимально поддерживаемый объем',
      ],
    },
    {
      id: '11',
      text1:
        ' Какая операция чтения/записи в модулях EPROM изображена на схеме',
      options: [
        'Чтение в режиме последовательного доступа_',
        'Производительность выше при последовательном доступе',
        'Скорость передачи данных регулируется системой',
        'Эффективное управление ресурсами памяти',
        'Сниженная задержка при большом объеме данных',
      ],
    },
    {
      id: '12',
      text1:
        ' Что из нижеперечисленного является основным фактором, определяющим емкость памяти?',
      options: [
        'Размер транзистора_',
        'Количество конденсаторов_',
        'Параметры активных элементов важны для стабильности',
        'Минимизация размеров позволяет увеличить производительность',
        'Технология влияет на энергоэффективность',
      ],
    },
    {
      id: '13',
      text1: ' ROM модулі-OTPROM // Модуль ПЗУ-OTPROM',
      options: [
        'ПЗУ, однократно программируемые пользователем. Программируемы пользователем. При выпуске на завод все ячейки имеют значения FFH_',
        'Данные остаются неизменными после записи',
        'Память устойчива к воздействию внешних факторов',
        'Используется в устройствах с фиксированной конфигурацией',
      ],
    },
    {
      id: '14',
      text1:
        ' Если частота сигнала системного генератора для микроконтроллера равна 2МГЦ, то для получения задержки в 50 мс:',
      options: [
        'можно использовать 16-ти битный таймер счётчик с предделителем 256; +_',
        'счётный регистр 16-ти битного таймера-счётчика с предделителем 256 должен получить 391 тактовых импульсов; +_',
        'период тактового сигнала 16-ти битного таймера счётчика с предделителем 256 равен 0,128 мс.; _',
        'можно использовать 8-ми битный таймер-счётчик с предделителем 512; +_',
        'счётный регистр 8-ми битного таймера-счётчика с предделителем 512 должен получить 195 тактовых импульсов; +_',
        'период тактового сигнала 8-ми битного таймера счётчика с предделителем 512 равен 0,256 мс.; +_',
      ],
    },
    {
      id: '15',
      text1: ' По алгоритму обмена различают порты (НЕТУ)',
      options: ['Последовательные порты_', 'Параллельные порты_'],
    },
    {
      id: '16',
      text1: 'Адресация модулей EEPROM. AT24C04',
      options: [
        'Первые четыре бита слова адреса представляют собой обязательную последовательность «1010». Следующие 3 бита представляют собой адреса устройств А2, А1 и А0_',
        'Адресное пространство эффективно разделяется на сегменты',
        'Последовательность "1010" используется для идентификации устройства',
        'Биты А2, А1 и А0 задают параметры адресации',
        'Адресная конфигурация позволяет подключать несколько устройств',
      ],
    },
    {
      id: '17',
      text1:
        ' Укажите десятичный эквивалент двоичного кода на выходе 8-разрядного АЦП, если опорные напряжения Vref + = 2 B, Vref + = -2 B, а входное напряжение ubx =0,5 B.',
      options: [
        '48_',
        '96 максимальная поддерживаемая частота',
        '72 частота с использованием делителя',
        '120 частота для специализированных задач',
      ],
    },
    {
      id: '18',
      text1: ' Контроллер UART обычно содержит: (НЕ ТОЧНО)',
      options: [
        'Параллельная шина данных для буфера приёма/передачи_',
        'Регистры управления приёмом/передачей данных; чтением/записью_',
        'Входные и выходные сдвигаемые регистры_',
        'Источник тактирования_',
        'Буферы приёма/передачи_',
        'FIFO буферы памяти (опционально)_',
      ],
    },
    {
      id: '19',
      text1:
        'Программируемые таймеры в микроконтроллере с ядром intel MCS-51. Таймер 0 и Таймер 1 могут работать в следующих режимах работы ',
      options: [
        'режим 0: 13-битный таймер_',
        'режим 1: 16-битный таймер_',
        'режим 2: 8-битный автоперезагружаемый таймер_',
        'режим 3: Таймер 0 как 2 раздельных 8-битных таймера._',
      ],
    },
    {
      id: '20',
      text1:
        ' Внутренние источники прерываний. Запрос вырабатывается по завершению преобразования для какого периферийного устройства?',
      options: [
        'АЦП_',
        'Основной характеристикой является разрядность',
        'АЦП используется для обработки сигналов датчиков',
        'Точность преобразования зависит от тактовой частоты',
        'Поддерживает различные режимы выборки',
      ],
    },
    {
      id: '21',
      text1: ' Какой режим таймер 0?',
      options: [
        'MODE 2_',
        'Режим поддерживает 8-битный автоматический перезапуск',
        'MODE 2 обеспечивает стабильное функционирование',
        'Часто используется для генерации периодических сигналов',
        'Обеспечивает минимизацию задержек',
      ],
    },
    {
      id: '22',
      text1:
        ' Контроллер последовательного интерфейса в микроконтроллере с ядром Intel MCS-51. ',
      options: [
        'Режим 2_',
        'Часто используется в асинхронных системах',
        'Поддерживает гибкую настройку параметров',
        'Обеспечивает совместимость с различными устройствами',
      ],
    },
    {
      id: '23',
      text1:
        'Коммутатор сигнала запуска АЦП позволяет выбрать способ запуска процесса преобразования, а также определяет один из возможных режимов работы АЦП: ',
      options: [
        'Программно управляемого запуска_',
        'Внешнего запуска_',
        'Режим последовательного сканирования каналов_',
        'Периодического _',
      ],
    },
    {
      id: '24',
      text1:
        ' Описание регистра специального назначения SCON. Режим работы UART: биты SM0=1 SM=1',
      options: [
        'режим 1: 8-битный асинхронный режим с настраиваемой скоростью передачи данных._',
        'режим 0: синхронный режим с фиксированной скоростью передачи',
        'режим 2: автоматическая перезагрузка с 9-битным форматом',
        'режим 3: используется для работы с несколькими устройствами',
        'Выбор режима зависит от требований системы',
      ],
    },
    {
      id: '25',
      text1:
        ' Пусть опорное напряжение для АЦП равно 5,3В. Необходимо выполнить аналого-цифровое преобразование для сигнала, верхняя граница которого равна 15,9В. Для решения поставленной задачи необходимо организовать схему, со следующими условиями:',
      options: [
        'в схеме должен присутствовать делитель напряжения_',
        'сопротивления в блоке делителя напряжения должны быть равны соответственно R1=2R2_',
        'Использование делителя минимизирует потери мощности',
        'Точные значения сопротивлений повышают стабильность системы',
      ],
    },
  ]

  // Фильтрация вопросов по тексту поиска
  const filteredQuestions = questionsData.filter((question) =>
    question.text1.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header vari={'c'} />
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
    </>
  )
}

export default Cvar
