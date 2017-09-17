//Animation placement. Pretty easy stuff. GG WP
var left, right, messageCompose, resizeTimer = false,
  messageSendProgress, statusList, recipientsArea, statusArea, correspondenceSearch;

var gui = {
  initializeGlobalVariables: function() {
    left = document.getElementById('left');
    right = document.getElementById('right');
    messageCompose = document.getElementById('messageCompose');
    messageArea = document.getElementById('messageArea');
    messageSendProgress = document.getElementById('messageSendProgress');
    statusList = document.getElementById('status');
    recipientsArea = document.getElementById('recipientsArea');
    statusArea = document.getElementById('statusArea');
    correspondenceSearch = document.getElementById('correspondenceSearch');
  },
  resizeAll: function() {
    right.style.width = window.innerWidth - left.offsetWidth + 'px';
    var composeBoxHeight = messageCompose.offsetHeight;
    right.style.paddingBottom = composeBoxHeight + 4 + 'px';
    messageCompose.style.width = right.offsetWidth + 'px';
    messageSendProgress.style.height = messageCompose.offsetHeight + 4 + 'px';
    openCorrespondences.style.height = window.innerHeight - statusArea.offsetHeight - recipientsArea.offsetHeight + 'px';
  },
  messageHandler: {
    initializeComposeBoxMonitor: function() {
      messageCompose.addEventListener('input', function() {
        gui.resizeAll();
      });
    }
  }
};

var network = {
  sendProgress: function() {
    messageSendProgress.style.width = right.offsetWidth + 'px';
    setTimeout(function() {
      messageSendProgress.style.width = '0%';
    }, 1600);
  },
  updateStatus:function(status){
    alert('update status (in network object instance): '+status)
  }
};

var statusController = {
  initialize:function(){
    statusList.addEventListener('change',function(){
      network.updateStatus(this.value);
    });
  }
};

window.addEventListener('load', function() {
  gui.initializeGlobalVariables();
  gui.messageHandler.initializeComposeBoxMonitor();
  gui.resizeAll();
  statusController.initialize();
  initializeCorrespondenceSearch();
});

window.addEventListener('resize', function() {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(function() {
    gui.resizeAll();
  }, 10);
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 13 && messageCompose.focus) {
    e.preventDefault();
    network.sendProgress();
  }
});


function initializeCorrespondenceSearch(){
  correspondenceSearch.addEventListener('input',function(){
    var searchString = this.value;
    var searchObjects = document.getElementsByClassName('correspondence');
    resetVisibility();
    for(var i = 0; i < searchObjects.length; i++){
      var objectSearchString = searchObjects[i].children[1].innerHTML.toLowerCase();
      if(objectSearchString.indexOf(searchString) == -1){
        searchObjects[i].style.display = 'none';
      }
    }
  });
  function resetVisibility(){
    var searchObjects = document.getElementsByClassName('correspondence');
    for(var i = 0; i < searchObjects.length; i++){
      searchObjects[i].style.display = 'block';
    }
  }
}