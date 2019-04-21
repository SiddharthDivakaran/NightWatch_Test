module.exports = {
    //path to test cases
    "src_folders": [],
    //information about webdriver like port etc.. this can be provided within test settings
    // "webdriver": {

    // },
    //test setting related to different environments
    "test_settings": {
        //test setting for local environment
        "default": {
            "webdriver": {
                "port": 4444,
                "server_path": "./bin/chromedriver-2.32",
                "cli_args": ["--verbose"]
            },
            "desiredCapabilities": {
                "browserName": "chrome"
            }

        },
        "qa": {
            "webdriver": {
                "port": 9515,
                "server_path": "./bin/chromedriver-2.32",
                "cli_args": ["--verbose"]
            },
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    },
    //contain information about selenium server can be useful if running test on grid--uncomment to use it
    // "selenium":{

    // }
    //location where JUnit xml report will be saved
    "output_folder": "",
    //path where the custom commands are kept
    "custom_commands_path": {

        
    },
    //path from where page objects are loaded
    "page_objects_path": [],
    //path from where globals will be loaded -- uncomment to use it
    // "globals_path":"",
    //if set to true then each test file will be run in parallel
    "test_workers": {
        "enabled": false,
        //how many to run in parallel a number can also be given to specify no. of parallel runs
        "workers": "auto"
    }

}