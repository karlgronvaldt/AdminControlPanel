// Background upload
document.getElementById('canvas_upload').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("canvas_upload").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('canvas').style.backgroundImage = "url(" + reader.result + ")";        
    }
    if (file){
        reader.readAsDataURL(file);
    } else {
        // Do nothing?
    }
}

// Set background
function setBackgroundColor() {
    var color_code = document.getElementById('color_input').value;
    document.getElementById('canvas').style.background = color_code;
    // console.log(color_code);
}

// Reset background color
function resetBackgroundColor() {
    document.getElementById('canvas').style.background = '#2c3e50';
}

var menu = [{
        name: 'Login',
        // img: 'images/login.png',
        title: 'login button',
        subMenu: [{
            name: 'Indefinite',
            // img: 'images/???',
            fun: function () {
                alert('Indefinite time chosen');
            }
        }, {
            name: '1 hour',
            // img: 'images/???',
            fun: function () {
                alert('1 hour chosen');
            }
        }, {
            name: '2 hours',
            // img: 'images/???',
            fun: function () {
                alert('2 hours chosen');
            }
        }, {
            name: '3 hours',
            // img: 'images/???',
            fun: function () {
                alert('3 hours chosen');
            }
        }, {
            name: '4 hours',
            // img: 'images/???',
            fun: function () {
                alert('4 hours chosen');
            }
        }, {
            name: '5 hours',
            // img: 'images/???',
            fun: function () {
                alert('5 hours chosen');
            }
        }, {
            name: '6 hours',
            // img: 'images/???',
            fun: function () {
                alert('6 hours chosen');
            }
        }, {
            name: '7 hours',
            // img: 'images/???',
            fun: function () {
                alert('7 hours chosen');
            }
        }, {
            name: '8 hours',
            // img: 'images/???',
            fun: function () {
                alert('8 hours chosen');
            }
        }, {
            name: '9 hours',
            // img: 'images/???',
            fun: function () {
                alert('9 hours chosen');
            }
        }, {
            name: '10 hours',
            // img: 'images/???',
            fun: function () {
                alert('10 hours chosen');
            }
        }]
    }, {
        name: 'Log out',
        // img: 'images/logout.png',
        title: 'log out button',
        disable: true,
        fun: function () {
            alert('i am log out button')
        }
    }, {
        name: 'Move',
        // img: 'images/move.png',
        title: 'mvoe button',
        disable: true,
        fun: function () {
            alert('i am move button')
        }
    }, {
        name: 'Turn on',
        // img: 'images/turnon.png',
        title: 'move button',
        fun: function () {
            alert('i am turnon button')
        }
    }, {
        name: 'Turn off',
        // img: 'images/turnoff.png',
        title: 'turn off button',
        disable: true,
        fun: function () {
            alert('i am turn off button')
        }
    }, {
        name: 'Restart',
        // img: 'images/restart.png',
        title: 'restart button',
        disable: true,
        fun: function () {
            alert('i am restart button')
        }
    }];
 
//Calling context menu
 $('.device_menu').contextMenu(menu, {triggerOn: 'contextmenu'});