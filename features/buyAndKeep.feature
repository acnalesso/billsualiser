Feature: Buy and Keep
  In order to see what I have bought
  As a customer I should be able to see it under the Buy & Keep section

Background:
  Given I am on the view bill page

Scenario: Buy & Keep
  When I click on "#buy_and_keep_title"
  Then I should see the following call charges in "#buy_and_keep table":
    | Name                  | Cost    |
    | That's what she said  | 9.99    |
    | Broke back mountain   | 9.99    |
