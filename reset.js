(function() {
  let devtoolsOpen = false;
  let reloadInterval;

  const detectDevTools = function() {
      const threshold = 160; 
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      return widthThreshold || heightThreshold;
  };

  const checkDevTools = function() {
      if (detectDevTools()) {
          if (!devtoolsOpen) {
              devtoolsOpen = true;
              reloadInterval = setInterval(() => {
                  location.reload();
              }, 10);
          }
      } else {
          if (devtoolsOpen) {
              devtoolsOpen = false;
              clearInterval(reloadInterval);
          }
      }
  };

  setInterval(checkDevTools, 10); 
})();  (function() {
  let devtoolsOpen = false;
  let reloadInterval;

  const detectDevTools = function() {
      const threshold = 160; 
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      return widthThreshold || heightThreshold;
  };

  const checkDevTools = function() {
      if (detectDevTools()) {
          if (!devtoolsOpen) {
              devtoolsOpen = true;
              reloadInterval = setInterval(() => {
                  location.reload();
              }, 10);
          }
      } else {
          if (devtoolsOpen) {
              devtoolsOpen = false;
              clearInterval(reloadInterval);
          }
      }
  };

  setInterval(checkDevTools, 10); // Check every 1 second
})();