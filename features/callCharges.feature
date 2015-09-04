Feature: Call charges
  In order to see all my call charges
  And the talk subscription I have got
  As a customer I should be able to see it under the talk subscription

Background:
  Given I am on the view bill page


Scenario: Viewing call charges
  When I click on '#talk_title'
  Then I should see the following call charges in '#talk table':
    | Calls       | Duration  | Cost |
    | 07989887865 | 10 min    | 20.0 |
