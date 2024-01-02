module.exports = function (client) {
    client.get("/room/*", function(request, response) {
        response.render("room");
    });

    router('', 'homepage');
    router('room', 'homepage');
    router('login');
    router('logout');
    router('register');
    router('account');
    router('offline');
    router('404');
    router('manage');

    function router(route, display = 'false') {
        if (display === 'false') {
            display = route;
        }

        client.get('/'+route, function(request, response) {
            response.render(display);
        });

        console.log('[STARTUP][2/3] Router bound "/'+route+'" to "'+display+'.ejs"');
    }
}