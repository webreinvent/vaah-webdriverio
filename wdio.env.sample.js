import os from 'os';
import chromedriver from 'chromedriver';

class Env {
    constructor() {
        this.params = {
            debug: false,
            is_human: false,
            is_human_pause: 1000,
            small_pause: 2000,
            medium_pause: 5000,
            long_pause: 30000,
            env: null,
            current_os: null,
            log_level: 'error',
            base_url: '',
            version: null,
            chrome_driver_path: chromedriver.path,
            capabilities: [
                {
                    platformName: 'Android',
                    browserName: 'chrome',
                    acceptInsecureCerts: true,
                    'goog:chromeOptions': {
                        args: [
                            '--disable-notifications',
                            '--disable-geolocation',
                            '--disable-save-password-bubble',
                            '--disable-features=TranslateUI',
                            '--disable-infobars',
                            '--lang=nl'
                        ]
                    },
                    "appium:deviceName": "Pixel_7",
                    'appium:autoGrantPermissions': true, 
                    'appium:noReset': true,
                    'appium:automationName': 'UIAutomator2',
                    'appium:udid': 'emulator-5554',
                },
            ],

            services: []
        };

          this.detectOS();

        if (process.env.NODE_WDIO_IS_HUMAN) {
            this.params.is_human = true;
        }
        if (process.env.NODE_WDIO_DEBUG) {
            this.params.debug = true;
        }

        this.setCapabilities()
        this.setServices();

        if (this.params.debug === true) {
            this.params.log_level = 'debug'
        }
    }
    //-------------------------------------------------
    setCapabilities() {

        const osToUse = process.env.NODE_WDIO_OS || this.params.current_os;



        switch (osToUse) {
            case 'mac':
                this.params.capabilities = [
                    {
                        platformName: "mac",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                        'goog:chromeOptions': {
                            args: [
                                '--disable-notifications',
                                '--disable-geolocation',
                                '--disable-save-password-bubble',
                            ]
                        }
                    },
                    // {
                    //     platformName: "mac",
                    //     "appium:automationName": "Safari",
                    //     browserName: 'Safari'
                    // }
                ]
                break;
            case 'ios':
                this.params.capabilities = [
                    {
                        platformName: 'iOS',
                        browserName: 'Safari',
                        'appium:platformVersion': '17.0',
                        'appium:automationName': 'XCUITest'
                    }
                ]
                break;
            case 'android':
                this.params.capabilities = [
                    {
                        platformName: 'Android',
                    browserName: 'chrome',
                    acceptInsecureCerts: true,
                    'goog:chromeOptions': {
                        args: [
                            '--disable-notifications',
                            '--disable-geolocation',
                            '--disable-save-password-bubble',
                            '--disable-features=TranslateUI',
                            '--disable-infobars',
                            '--lang=nl'
                        ]
                    },
                    "appium:deviceName": "Pixel_7",
                    'appium:autoGrantPermissions': true, 
                    'appium:noReset': true,
                    'appium:automationName': 'UIAutomator2',
                    'appium:udid': 'emulator-5554',
                    }
                ]
                break;
            case 'windows':
                this.params.capabilities = [
                    {
                        platformName: "windows",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }
                ]
                break;
            case 'linux':
                this.params.capabilities = [
                    /*{
                        platformName: "Linux",
                        "appium:automationName": "Chromium",
                        browserName: 'chrome',
                        acceptInsecureCerts: true,
                    }*/
                    {
                        browserName: 'chrome',   // or 'chromium'
                        'goog:chromeOptions': {
                            args: [
                                'no-sandbox',
                                'disable-dev-shm-usage',
                                'disable-infobars',
                                'headless',
                                'disable-gpu',
                                'window-size=1440,735',
                                'disable-extensions'
                            ]
                        }
                    }
                ]
                break;
        }
    }
   //----------------------------------------------------
    setServices() {
        if (this.params.current_os === 'android') {
            this.params.services = [[
                'appium',
                {
                    args: {
                        relaxedSecurity: true,
                        sessionOverride: true,
                        debugLogSpacing: true,
                        allowInsecure: ['chromedriver_autodownload', 'adb_shell'],
                    },
                    command: 'appium',
                }
            ]];
        } else {
            this.params.services = [['chromedriver', {
                chromedriverCustomPath: chromedriver.path
            }]];
        }
    }

    //-------------------------------------------------
    getCapabilities() {
        let capabilities = this.params.capabilities;
        if (this.params.is_human === false) {

            for (let i in capabilities) {
                switch (capabilities[i].browserName) {
                    case 'chrome':
                        capabilities[i]['goog:chromeOptions'] = {
                            args: [
                                '--no-sandbox',
                                '--disable-dev-shm-usage',
                                '--disable-infobars',
                                '--headless',
                                '--disable-gpu',
                                '--window-size=1440,735',
                                '--disable-extensions'
                            ]
                        }
                        break;
                }
            }
        }
        return capabilities;
    }
    //-------------------------------------------------
    getParams() {
        this.params = this.setEnvironmentParams();
        this.params.capabilities = this.getCapabilities();

        console.log('params-->', this.params);

        return this.params;
    }
    //-------------------------------------------------
    detectOS() {
        const platform = os.platform();
        const release = os.release();

        if (process.env.NODE_WDIO_EMULATOR) {
            this.params.current_os = 'android';
            console.log(`Detected OS: ${this.params.current_os} (Emulator)`);
            return;
        }

        switch (platform) {
            case 'darwin':
                this.params.current_os = 'mac';
                break;
            case 'win32':
                this.params.current_os = 'windows';
                break;
            case 'linux':
                if (release.toLowerCase().includes('android')) {
                    this.params.current_os = 'android';
                } else {
                    this.params.current_os = 'linux';
                }
                break;
            case 'ios':
            case 'iPadOS':
                this.params.current_os = 'ios';
                break;
            default:
                this.params.current_os = 'unknown';
        }
        console.log(`Detected OS: ${this.params.current_os}`);
    }
    //-------------------------------------------------
}
export default Env;
