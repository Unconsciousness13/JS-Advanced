function solve(httpObj) {
    validateMethod(httpObj);
    validateUri(httpObj);
    validateVersion(httpObj);
    validateMessage(httpObj);
    return httpObj;
    function validateMessage(httpObj) {
        let propName = 'message';
        let messageRegex = /^[^<>\\&'"]*$/;

        if (httpObj[propName] === undefined ||
            !messageRegex.test(httpObj[propName])) {
            throw new Error("Invalid request header: Invalid Message");
        }

    }

    function validateVersion(httpObj) {
        let propName = 'version';
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        if (httpObj[propName] === undefined ||
            !validVersions.includes(httpObj[propName])) {
            throw new Error("Invalid request header: Invalid Version");
        }
    }

    function validateUri(httpObj) {
        let propName = 'uri';
        let uriRegex = /^\*$|^[a-zA-Z0-9.]+$/;

        if (httpObj[propName] === undefined || 
            !uriRegex.test(httpObj[propName])) {
            throw new Error("Invalid request header: Invalid URI");
        }

    }

    function validateMethod(httpObj) {
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';

        if (httpObj[propName] === undefined ||
            !validMethods.includes(httpObj[propName])) {
            throw new Error("Invalid request header: Invalid Method")

        }
    }
}
try {
    console.log(solve({
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
      }
      
    ))
} catch (e) {
    console.log(e.message)
}