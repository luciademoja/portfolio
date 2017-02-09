var token = '4578935817.1677ed0.f2778c7eda3040e6b2d0b934763c7dbe',
    userid = 4578935817;
    hashtag = "piccioni";
    num_photos = 10;

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + "/media/recent",
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){
            $('#rudr_instafeed').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        }
    },
    error: function(data){
        console.log(data);
    }
});
