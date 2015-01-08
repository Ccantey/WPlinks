jQuery(document).ready(function() {

//verbose! condense to for loop rather than writing 3 if/elses

$.get( "https://public-api.wordpress.com/rest/v1.1/sites/<YOUR BLOG>.wordpress.com/posts/?number=3&pretty=0", function( data ) {
            //First title, first image, first link
            $( "#wp1" ).html( data.posts[0].title ).attr('href',data.posts[0].URL).attr('target', '_blank');
            
            //if there is a featured image grab it
            if (data.posts[0].featured_image !=""){
                $( "#wp1image" ).attr('src',data.posts[0].featured_image);
                $( "#wp1imageLink" ).attr('href',data.posts[0].URL).attr('target', '_blank');
            //else grab the first image of the blog    
            } else{
                $.each(data.posts[0].attachments, function(){
                    console.log(this.URL);
                    $( "#wp1image" ).attr('src',this.URL);
                    $( "#wp1imageLink" ).attr('href',data.posts[0].URL).attr('target', '_blank');
                })
            }
            //Second title, second image, second link
            $( "#wp2" ).html( data.posts[1].title ).attr('href',data.posts[1].URL).attr('target', '_blank');
            //if there is a featured image grab it
            if (data.posts[1].featured_image !=""){
                $( "#wp2image" ).attr('src',data.posts[1].featured_image);
                $( "#wp2imageLink" ).attr('href',data.posts[1].URL).attr('target', '_blank');
                //else grab the first image of the blog 
            } else{
                $.each(data.posts[1].attachments, function(){
                    console.log(this.URL);
                    $( "#wp2image" ).attr('src',this.URL);
                    $( "#wp2imageLink" ).attr('href',data.posts[1].URL).attr('target', '_blank');
                })
            }
            //Third title, third image, third link
            $( "#wp3" ).html( data.posts[2].title ).attr('href',data.posts[2].URL).attr('target', '_blank');
            //if there is a featured image grab it
            if (data.posts[2].featured_image !=""){
                $( "#wp3image" ).attr('src',data.posts[2].featured_image);
                $( "#wp3imageLink" ).attr('href',data.posts[2].URL).attr('target', '_blank');
            //else grab the first image of the blog     
            } else{
                $.each(data.posts[2].attachments, function(){
                    console.log(this.URL);
                    $( "#wp3image" ).attr('src',this.URL);
                    $( "#wp3imageLink" ).attr('href',data.posts[2].URL).attr('target', '_blank');
                })
            }

            // console.log(data.posts[1]);
            // console.log(data.posts[1].title);
            // console.log(data.posts[2].title);
        });        
    });
