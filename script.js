const nums  = document.querySelectorAll('button');
nums.forEach(num => num.addEventListener("mouseup", e => console.log(e.currentTarget)));
