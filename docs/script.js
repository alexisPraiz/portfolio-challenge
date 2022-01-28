/*---==== Page selector: Start ====---*/
let sum = 1; 
document.querySelectorAll('.arrow').forEach(arrow =>{
    arrow.addEventListener('click',()=>{
        const arrows = document.querySelectorAll('.span_select');
        if(arrow.classList.contains('arrow_right')){
            if(sum >= 1 && sum <= 9) sum++;
            arrows.forEach(span =>{
                if(parseInt(span.textContent) == sum) span.classList.add('span_active');
                else span.classList.remove('span_active');

                if(sum >= 4 && sum <= 9) document.getElementById('span_end').textContent = sum;
            });
        }else{
            if(sum >= 2) sum--;
            arrows.forEach(span =>{
                if(parseInt(span.textContent) == sum) span.classList.add('span_active');
                else span.classList.remove('span_active');

                if(sum >= 3 && sum <= 9) document.getElementById('span_end').textContent = sum;
            });
        }
    });
});
/*---==== Page selector: End ====---*/

/*---==== Lightbox: Start ====---*/
document.querySelector('.profile').addEventListener('click',()=>{
    const Image    = document.querySelector('.profile').getAttribute('src');
    const altImage = document.querySelector('.profile').getAttribute('alt');
    
    document.querySelector('.light_box').style = 'transform: translateX(0);';
    document.querySelector('.profile_photo-light').setAttribute('src',Image);
    document.querySelector('.text_light').textContent = altImage;
    document.querySelector('.profile_photo-light').style = 'transform: scale(1);';
});

document.querySelector('.close_light').addEventListener('click',()=>{
    document.querySelector('.light_box').style = 'transform: translateX(-100%);';
    document.querySelector('.profile_photo-light').style = 'transform: scale(0);';
});
/*---==== Lightbox: End ====---*/