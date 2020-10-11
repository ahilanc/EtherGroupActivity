$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields with \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields with rowQuery2 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:78"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:85"
});
formatter.embedding("image/png", "images/586456fac80749a2b7c434ff0acc952f9.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields with \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields with rowQuery3 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:78"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:85"
});
formatter.embedding("image/png", "images/5a7f4268c9c14de0b14ab2f001d9a0bf9.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields with \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields with rowQuery1 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:78"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:85"
});
formatter.embedding("image/png", "images/e6c764da7a2b47718b610a2c53b0c5bb9.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields with \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields with rowQuery4 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab6.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:78"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab8.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:85"
});
formatter.embedding("image/png", "images/0d11d5c80b5141dd90445b61695a0cab9.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the fields with \u003crowQuery\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rowQuery",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "rowQuery1",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery2",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery3",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery4",
        "123456"
      ]
    },
    {
      "cells": [
        "rowQuery5",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786120.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the valid accountNumber and Password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786121.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:53"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786122.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:74"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786123.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786124.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:26"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786125.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the fields with rowQuery5 to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:49"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786126.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:31"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786127.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:78"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786128.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:85"
});
formatter.embedding("image/png", "images/11e81e1548ad47aaa649bd977d0786129.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
