const METHODS = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT'
}

const PORT = 3000;
const LOCAL_HOST = 'http://localhost';
const CONTENT_TYPE = 'Content-Type';
const APPLICATION_JSON = 'application/json';
const TEXT_PLAIN = 'text/plain';
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const AjaxPozivi = (() => {

    const posaljiStudent = (studentObjekat, callback) => {
        const ajaxCall = new XMLHttpRequest();
        ajaxCall.open(METHODS.POST, `${LOCAL_HOST}:${PORT}/student`, true);
        ajaxCall.setRequestHeader(CONTENT_TYPE, APPLICATION_JSON);
        ajaxCall.send(JSON.stringify(studentObjekat));
        ajaxCall.onreadystatechange = () => {
            if( ajaxCall.readyState === 4 ) {
                const ajaxResponse = ajaxCall.response;
                const ajaxResponseJSON = JSON.parse(ajaxResponse);
                if( ajaxCall.status === 400 ) {
                    callback(ajaxResponseJSON.status, null);
                }
                if(ajaxCall.status === 200) {
                    callback(null, ajaxResponseJSON.status);
                }
            }
        };
    }

    const postaviGrupu = (indexStudenta, grupa, callback) => {
        const ajaxCall = new XMLHttpRequest();
        ajaxCall.open(METHODS.PUT, `${LOCAL_HOST}:${PORT}/student/${indexStudenta}`, true);
        ajaxCall.setRequestHeader(CONTENT_TYPE, APPLICATION_JSON);
        ajaxCall.send(JSON.stringify(grupa));
        ajaxCall.onreadystatechange = () => {
            if( ajaxCall.readyState === 4 ) {
                const ajaxResponse = ajaxCall.response;
                const ajaxResponseJSON = JSON.parse(ajaxResponse);
                if( ajaxCall.status === 400 ) {
                    callback(ajaxResponseJSON.status, null);
                }
                if(ajaxCall.status === 200) {
                    callback(null, ajaxResponseJSON.status);
                }
            }
        };
    }

    const posaljiStudente = (studentiCSVString, callback) => {
        const ajaxCall = new XMLHttpRequest();
        ajaxCall.open(METHODS.POST, `${LOCAL_HOST}:${PORT}/batch/student`, true);
        ajaxCall.setRequestHeader(CONTENT_TYPE, TEXT_PLAIN);
        ajaxCall.send(studentiCSVString);
        ajaxCall.onreadystatechange = () => {
            if( ajaxCall.readyState === 4 ) {
                const ajaxResponse = ajaxCall.response;
                const ajaxResponseJSON = JSON.parse(ajaxResponse);
                if( ajaxCall.status === 400 ) {
                    callback(ajaxResponseJSON.status, null);
                }
                if(ajaxCall.status === 200) {
                    callback(null, ajaxResponseJSON.status);
                }
            }
        };
    };

    const postaviVjezbe = (brojVjezbi,callback) => {
        const ajaxCall = new XMLHttpRequest();
        ajaxCall.open(METHODS.POST, `${LOCAL_HOST}:${PORT}/vjezbe`, true);
        ajaxCall.setRequestHeader(CONTENT_TYPE, APPLICATION_JSON);
        ajaxCall.send(JSON.stringify(brojVjezbi));
        ajaxCall.onreadystatechange = () => {
            if( ajaxCall.readyState === 4 ) {
                const ajaxResponse = ajaxCall.response;
                const ajaxResponseJSON = JSON.parse(ajaxResponse);
                if( ajaxCall.status === 400 ) {
                    callback(ajaxResponseJSON.status, null);
                }
                if(ajaxCall.status === 200) {
                    callback(null, ajaxResponseJSON.status);
                }
            }
        };
    }

    const postaviTestReport = (indexStudenta,nazivVjezbe,testReport,callback) => {
        const ajaxCall = new XMLHttpRequest();
        ajaxCall.open(METHODS.POST, `${LOCAL_HOST}:${PORT}/student/${indexStudenta}/vjezba/${nazivVjezbe}`, true);
        ajaxCall.setRequestHeader(CONTENT_TYPE, APPLICATION_JSON);
        ajaxCall.send(JSON.stringify(testReport));
        ajaxCall.onreadystatechange = () => {
            if( ajaxCall.readyState === 4 ) {
                const ajaxResponse = ajaxCall.response;
                const ajaxResponseJSON = JSON.parse(ajaxResponse);
                if( ajaxCall.status === 400 ) {
                    callback(ajaxResponseJSON.status, null);
                }
                if(ajaxCall.status === 200) {
                    callback(null, ajaxResponseJSON.status);
                }
            }
        };
    }

    return {
        posaljiStudent,
        postaviGrupu,
        posaljiStudente,
        postaviVjezbe,
        postaviTestReport
    }

})();
//exports.posaljiStudent = posaljiStudent;
