Feature: Rentals
  In order to see all my rentals
  As a customer I should be able to see it under the rental section

Background:
  Given I am on the view bill page

Scenario: My Rentals
  When I click on "#rentals_title"
  Then I should see the following call charges in "#rentals table":
    | Name                | Cost    |
    | 50 Shades of Grey   | 4.99    |
