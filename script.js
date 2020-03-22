document.addEventListener("DOMContentLoaded", () => {

    var checked = document.querySelectorAll('.to-do__item').forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('checked');
        })
    });


    var close = document.querySelectorAll('.to-do__close');
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var parentLi = this.parentElement;
            console.log(parentLi);
            parentLi.style.display = 'none';
        }
    }


    function newToDoItem() {
        var li = document.createElement('li');
        li.classList.add('to-do__item');
        var input = document.querySelector('.to-do__input').value;
        var text = document.createTextNode(input);
        li.appendChild(text);
        if (input === '') {
            alert('Please, write Your task!')
        } else {
            document.querySelector('.to-do__list').appendChild(li);
        }
        document.querySelector('.to-do__input').value = '';

        var span = document.createElement('span');
        span.classList.add('to-do__close');
        var cross = document.createTextNode('x');
        span.appendChild(cross);
        li.appendChild(span);


        var close = document.querySelectorAll('.to-do__close');
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var parentLi = this.parentElement;
                console.log(parentLi);
                parentLi.style.display = 'none';
            }
        }

    }

    
    document.querySelector('.to-do__btn').addEventListener('click', function() {
        newToDoItem();
    });

    document.querySelector('.to-do__input').addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            console.log(13);
            event.preventDefault();
            document.querySelector('.to-do__btn').click();
        }
    });

  });

