function Validate (options) {
    function Validator(inputElement,rule) {
        var spanElement = inputElement.parentElement.querySelector('#row-span');
        var testSpan = rule.test(inputElement.value);
        // console.log(spanElement.value);
        // console.log(testSpan);
        // console.log(spanElement.value.length);
        if (testSpan) {
            spanElement.innerText = rule.test(spanElement.value);
            inputElement.classList.add('error');
        } else {
            spanElement.innerText = '';
            inputElement.classList.remove('error');
        }
    }
    // console.log(options);
    // console.log(options.form);
    var formElment = document.querySelector(options.form);
    formElment.onsubmit = function (e) {
        e.preventDefault();
        options.rules.forEach(function(rule) {
        var inputElement = document.querySelector(rule.selector);
        Validator(inputElement,rule);
        })

    }
    // console.log(formElment);
    options.rules.forEach(function(rule) {
        var inputElement = document.querySelector(rule.selector);
        // console.log(inputElement);
        // console.log(inputElement.parentElement);
        if (inputElement) {
        inputElement.onblur = function () {
            Validator(inputElement,rule);
        }
        var spanElement = inputElement.parentElement.querySelector('#row-span');
        inputElement.oninput = function () {
            spanElement.innerText = '';
            inputElement.classList.remove('error');
        }
    }
    })
}
Validate.isFullName = function (selector) {
    return {
        selector : selector,
        test : function(value) {
            return value ? undefined  : 'Vui lòng nhập vào trường này';
        }
    }
}
