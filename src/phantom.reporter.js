function callPhantom(event) {
    if (window && window.top && window.top.callPhantom) {
        window.top.callPhantom(event)
    }
}

var PhantomReporter = {
    jasmineStarted: function (data) {
        callPhantom({event: 'jasmineStarted', obj: data});
    },
    jasmineDone: function (data) {
        callPhantom({event: 'jasmineDone', obj: data});
    },
    suiteStarted: function (data) {
        callPhantom({event: 'suiteStarted', obj: data});
    },
    suiteDone: function (data) {
        callPhantom({event: 'suiteDone', obj: data});
    },
    specDone: function (data) {
        callPhantom({event: 'specDone', obj: data});
    }
};
