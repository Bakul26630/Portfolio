
document.getElementById('addBlog').addEventListener('click',()=>{
    document.getElementById('form').classList.remove('close');
    document.getElementById('form').classList.add('open');
    document.getElementById('addBlog').disabled = true;
});

document.getElementById('removeBlog').addEventListener('click',()=>{
    document.getElementById('removeForm').classList.remove('close');
    document.getElementById('removeForm').classList.add('open');
    document.getElementById('removeBlog').disabled = true;
});

document.getElementById('content').addEventListener('focus',()=>{
    document.getElementById('content').innerText="";
});

document.getElementById('add').addEventListener('click',()=>{
    document.getElementById('form').classList.remove('open');
    document.getElementById('form').classList.add('close');
    document.getElementById('addBlog').disabled = false;
});

document.getElementById('form').addEventListener('mouseleave',()=>{
        document.getElementById('form').classList.remove('open');
        document.getElementById('form').classList.add('close');
        document.getElementById('addBlog').disabled = false;
});

document.getElementById('removeForm').addEventListener('mouseleave',()=>{
        document.getElementById('removeForm').classList.remove('open');
        document.getElementById('removeForm').classList.add('close');
        document.getElementById('removeBlog').disabled = false;
});
