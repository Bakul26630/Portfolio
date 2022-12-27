
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && this.response.length>2){
        console.log(this.response)
        const data = (this.response.substr(1,this.response.length-2)).split("},");
        var blogTemplate;
        for(let i=0 ; i<data.length ; i++)
        {    
            if(i!=data.length-1)
            {
                data[i] = JSON.parse(data[i].concat("}"));
                blogTemplate = `<div class="blog"><h2>${data[i].Title}</h2><p>${data[i].Content}<p></div>`
            }
            else{
                data[i] = JSON.parse(data[i]);
                blogTemplate = `<div class="blog"><h2>${data[i].Title}</h2><p>${data[i].Content}<p></div>`
            }
            $("#allBlogs").append(blogTemplate); 
        }
        }
};
xhttp.open("GET", "http://localhost:5100/getAllBlog", true);
xhttp.send();

  
   

