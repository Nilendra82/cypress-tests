# cypress-tests

> Example running Cypress tests against Apache server via docker-compose

## Use

1. build the containers with `npm run build`
2. start the web application and run Cypress tests with `npm run up`

# Scenarios

Feature: Login tests

  # @Login
  # Scenario: Login with valid credentials
      # Given navigate to login page
      # When login with a valid username and password
      # Then user should be able to redirect to the dashboard

  # Scenario: Login and press back arrow
      # Given navigate to login page
      # When login with a valid username and password
      # And click on back arrow icon
      # Then user should get session timeout

  # Scenario: Login with valid credentials and logout
      # Given navigate to login page
      # When login with a valid username and password
      # And click on the profile dropdown menu
      # And click on logout button
      # Then user should be redirected to the login page

  # Scenario: Login with invalid credentials
     # Given navigate to login page
     # When login with an invalid username and password
     # Then user should see a message "incorrect username or password" has been displayed

  # Scenario: Login after logout with forward arrow button
     # Given navigate to login page
     # When login with a valid username and password
     # And click on the profile dropdown menu
     # And click on logout button
     # And click on forward arrow icon
     # Then user should not be able to login

  # Scenario: Login after logout with reload the browser
     # Given navigate to login page
     # When login with a valid username and password
     # And click on the profile dropdown menu
     # And click on logout button
     # And reload the browser
     # Then user should not be able to login