require 'spec_helper'

describe 'index', type: :feature do

  before do
    visit '/'
  end

  it 'Congratulates to Lucia with a h1 tag' do
    expect(page).to have_selector 'h1'
    within 'h1' do
    expect(page).to have_content 'Good Job Lucia'
    end
  end

  it 'Displays Middleman Logo' do
    expect(page).to have_css 'img[src*="middleman-logo.svg"]'
  end

  it 'Displays projects list' do
   expect(page).to have_css '.projects'
   within '.projects' do
     expect(page).to have_content 'My First Website'
     expect(page).to have_content 'FizzBuzz'
   end
 end

end
