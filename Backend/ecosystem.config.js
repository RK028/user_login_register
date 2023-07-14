module.exports = {
    apps :[{
        name: "test",
        script: './app.js',
        instance : 1,
        watch:true,
        log_file: "logs/combined.outerr.log",
        ignore_watch:["logs/*","public/Highchart/*",".pm2/*","kraken/*"],
        env:{
            NODE_ENV : 'development',
            PORT : 8000
        },
        env_production : {
            NODE_ENV : "production",
            PORT:9893
        }
    }]
}