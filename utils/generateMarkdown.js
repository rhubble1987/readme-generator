// function to generate markdown for README
function generateMarkdown(data) {
  let licenseExplanation;
  let badge;
  if (data.licenseInfo === 'Public Domain') {
    licenseExplanation = 'App can be shared and modified however you want!';
    badge = 'https://img.shields.io/badge/license-Public%20Domain-brightgreen';
} else if (data.licenseInfo === 'Permissive') {
    licenseExplanation = 'App can be shared and modified however you want but you must provide credit to the original author(s).';
    badge = 'https://img.shields.io/badge/license-Permissive-green';
} else if (data.licenseInfo === 'LGPL') {
    licenseExplanation = 'App can be shared and modified, but if modified for use in your own application, your app must also use the LGPL license.';
    badge = 'https://img.shields.io/badge/license-LGPL-yellow';
} else if (data.licenseInfo === 'Copyleft') {
    licenseExplanation = 'App can be modified only for personal use.';
    badge = 'https://img.shields.io/badge/license-Copyleft-orange';
} else if (data.licenseInfo === 'Proprietary') {
    licenseExplanation = 'App cannot be modified.';
    badge = 'https://img.shields.io/badge/license-Proprietary-red';
} 
  return `# ${data.title}    
  ![badge](${badge})

  ## Table of Contents  
  1. [Description](#description) 
  2. [Installation](#installation) 
  3. [Usage](#usage)
  4. [Licensing](#licensing)
  5. [Contributing](#contributing) 
  6. [Additional Questions](#additional-questions?)

  ---  

  ## Description:  
  ${data.description}  

  ---  

  ## Installation:  
  ${data.installationInfo}  

  ---  

  ## Usage:  
  ${data.usageInfo}  

  --- 

  ## Licensing:  
  ${data.licenseInfo} - ${licenseExplanation}

  ---  

  ## Contributing:  
  ${data.contributionRules}  

  ---  
  ## Additional Questions?  
  If you have any other questions, you can contact the project creator at:  
  GitHub username: ${data.githubUsername}  
  Email address: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
