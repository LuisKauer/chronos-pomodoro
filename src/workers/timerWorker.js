let isRunning = false;

self.onmessage = function (e) {
  if (isRunning) return;

  isRunning = true;

  const state = e.data;
  const {activeTask, secondsRemaining} = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;

  console.log(state);

  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds)
    
    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);
    
       console.log(countDownSeconds);

    setTimeout(tick, 1000);
  }

  tick();

  switch (state) {
    case 'Start':
      
      break;

    case 'Stop':
      
      break;  
    
    case 'Reset':
      
      break;  
      
    default:
      
      break;
  }
}