const EventEmitter = require('events');

/*
const emitter = new EventEmitter();

// прослушка событий через экзекмпляр класса EventEmitter
// название события может быть любым (в данном случае - 'anything')
emitter.on('anything', (data) => {
  console.log('ON: anything: ', data);
});

// создание событий через экземпляр класса EventEmitter
emitter.emit('anything', { key1: 'value1' });
emitter.emit('anything', { key2: 'value2' });

setTimeout(() => {
  emitter.emit('anything', { key3: 'value3' });
}, 1500);
*/

// кастомный класс, расширяющий EventEmitter
class Dispatcher extends EventEmitter {
  subscribe(eventName, callbackArg) {
    console.log('Subscribe...');
    this.on(eventName, callbackArg);
  }

  // eventName передается в виде строки, data - объект
  dispatch(eventName, data) {
    console.log('Dispatching...');
    this.emit(eventName, data);
  }
}

const dispatcherInstance = new Dispatcher();

// подписка на событие должна производиться до его генерации (эмита)

dispatcherInstance.subscribe('some event', (data) => {
  console.log('ON: event occured: ', data);
});

dispatcherInstance.dispatch('some event', { dataObjKey: Infinity });
