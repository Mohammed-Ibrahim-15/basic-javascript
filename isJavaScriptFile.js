// Problem No-2: isJavaScriptFile

function isJavaScriptFile(filename) {
    // Validation
    if (typeof filename !== 'string') {
        return 'Please Enter Valid Value';
    }
    // Check file format name or extension
    if (filename.endsWith('.js')) {

        return true;
    }
    else {

        return false;
    }
}

// Calling Function

// const fileNameIs = 'factorial.js';
// const result = isJavaScriptFile(fileNameIs);
// console.log(result);