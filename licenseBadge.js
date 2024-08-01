function renderLicenseBadge(license){
    let licenseImg;
        if (license === 'MIT'){
            licenseImg = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            
        } else if (license === 'Apache 2.0'){ 
            licenseImg = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

        } else if (license === 'GNU General Public License v3.0'){
            licenseImg =  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

        } else if (license === 'BSD 2-Clause Simplified License'){ 
            licenseImg = `[![License: BSD 2](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`

        } else if (license === 'BSD 3-Clause New or Revised License'){ 
            licenseImg = `[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

        } else if (license === 'Boost Software License 1.0'){ 
            licenseImg = `[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

        } else if (license === 'Creative Commons Zero v1.0 Universal'){ 
            licenseImg = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`

        } else {licenseImg = ""};
        return licenseImg;

};

module.exports = {renderLicenseBadge};